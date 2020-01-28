var Buttons = new function() {
  basicStyle = "color:red;background:black;font-size:4.5vw;font-family:verdana;"
  buttonStyle = basicStyle + "border-style:solid;border-width:1px;verticalAlign:top;padding:5px;display:inlineBlock"
  listStyle = buttonStyle + "text-align:left;"
  imageStyle = basicStyle + "overflowX:hidden;marginLeft:auto;" +
    "marginRight:auto;verticalAlign:middle;"

  Element.prototype.hide = function() {
    this.style.display = "none"
  }
  Element.prototype.show = function() {
    this.style.display = "inline"
  }

  Element.prototype.groupName = function() {
    return this.id.match(/[A-Za-z]+/)[0]
  }

  Element.prototype.index = function() {
    return this.id.match(/[0-9]+/)[0]
  }

  this.hideElementsWithGroupName = function(idString) {
    document.querySelectorAll("button").forEach(e => {
        console.log(e.id.match(/[A-Za-z]+/)[0])
      if (e.id.match(/[A-Za-z]+/)[0] == idString) e.hide()
    })
  }

  this.showElementsWithGroupName = function(idString) {
    document.querySelectorAll("button").forEach(e => {
      if (e.id.match(/[A-Za-z]+/)[0] == idString) e.show()
    })
  }

  makeElement = function(id, type, width, style, text, event, action) {
    element = document.createElement(type)
    element.style.cssText = style
    element.style.width = width + "%"
    element.id = id
    element.innerHTML = text
    document.body.appendChild(element)
    element.addEventListener(event, action)
    return element
  }
  this.makeButton = function(id, width, text, action) {
    makeElement(id, "button", width, buttonStyle, text, "click", action)
  }
  makeKeyButton = function(id, width, style, text, action) {
    makeElement(id, "button", width, style, text, "click", action)
  }
  makeTextButton = function(id) {
    makeElement(id, "button", 100, buttonStyle, "", "change", () => alert(6))
  }
  this.makeCanvasButton = function(id) {
    this.makeButton(id, 100, "<canvas id='canvasFinder'></canvas>", () => alert(7))
  }


  this.makeInputButton = function() {
    this.makeButton("kbInputButton", 100, " ", () => alert(7))
    makeKeyboard()
  }
  makeKeyboard = () => {
    textToShow = ""
    const textChanged = new Event('textChanged');
    keyboardCase = "lowercase"
    changeCase = () => {
      keyboardCase = keyboardCase == "lowercase" ? "uppercase" : "lowercase"
      characters[keyboardCase].line1.split("").
      forEach((v, i) => text("kb1" + i).innerHTML = v)
      characters[keyboardCase].line2.split("").
      forEach((v, i) => text("kb2" + i).innerHTML = v)
      characters[keyboardCase].line3.split("").
      forEach((v, i) => text("kb3" + i).innerHTML = v)
      characters[keyboardCase].line4.split("").
      forEach((v, i) => text("kb4" + i).innerHTML = v)
    }
    characters = []
    characters["lowercase"] = {
      line1: "1234567890",
      line2: "qwertyuiop",
      line3: "asdfghjkl",
      line4: "zxcvbnm"
    }
    characters["uppercase"] = {
      line1: "$£€%&@?!#*",
      line2: "QWERTYUIOP",
      line3: "ASDFGHJKL",
      line4: "ZXCVBNM"
    }
    addCharacter = (letter) => {
      textToShow = textToShow + letter
      kbInputButton.innerHTML = textToShow
      if (keyboardCase == "uppercase") changeCase()
    }
    text = (id) => document.getElementById(id)
    del = () => {
      textToShow = textToShow.slice(0, textToShow.length - 1)
      kbInputButton.innerHTML = textToShow
    }

    console.log("make keyboard")
    line1 = characters[keyboardCase].line1.split("")
    line1.forEach((v, i) =>
      makeKeyButton("kb1" + i, 10, buttonStyle, v,
        () => addCharacter(text("kb1" + i).innerHTML)))
    line2 = characters[keyboardCase].line2.split("")
    line2.forEach((v, i) =>
      makeKeyButton("kb2" + i, 10, buttonStyle, v,
        () => addCharacter(text("kb2" + i).innerHTML)))
    makeKeyButton("kbfiller", 5, buttonStyle, "&#8202;")
    line3 = characters[keyboardCase].line3.split("")
    line3.forEach((v, i) => makeKeyButton("kb3" + i, 10, buttonStyle, v, () => addCharacter(text("kb3" + i).innerHTML)))
    makeKeyButton("kbfiller", 5, buttonStyle, "&#8194;")
    makeKeyButton("kbcase", 15, buttonStyle, "\u21E7", () => changeCase())
    line4 = characters[keyboardCase].line4.split("")
    line4.forEach((v, i) => makeKeyButton("kb4" + i, 10, buttonStyle, v, () => addCharacter(text("kb4" + i).innerHTML)))
    makeKeyButton("kbdelete", 15, buttonStyle, "\u232B", () => del())
    makeKeyButton("kbspace", 50, buttonStyle, "space", () => addCharacter(" "))
    //hideElementsWithIdStartingWith("kb")
  }
}
