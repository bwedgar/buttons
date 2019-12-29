Element.prototype.grayout=function(){this.style.color="gray"}
Element.prototype.restore=function(){this.style.color="white"
this.style.display="inline-block"
}
Element.prototype.hide=function(){this.style.display="none"}
Element.prototype.show=function(){this.style.display="block"}
Element.prototype.disable=function(){this.style.color="black"}
Element.prototype.changeSrc=function(imageSrc){
  
    opacity=1
    fade=true
    changeOpacity=()=>{
      fade?opacity-=0.1:opacity+=0.1
      this.style.opacity=opacity
      if(opacity<0 && fade){
        this.src=imageSrc
        fade=false
      }
      if (opacity>1) {clearTimeout(timer)
        //alert("finished")
        return null
      }
      timer=setTimeout(changeOpacity,100)
    }
  changeOpacity()
}
 
style="color:white;background:black;font-size:4vw;font-family:verdana;"
buttonStyle = style+"border-style:solid;border-width:1px;"
 
listStyle=buttonStyle+"text-align:left;"
 
imageStyle=style+"overflowX:hidden;marginLeft:auto;marginRight:auto;verticalAlign:middle;"
 
document.body.style=style
 
addElement=(id,type,width,style,text)=>{
  element=document.createElement(type)
  element.style.cssText=style
  element.style.width=width+"%"
  element.id=id
  element.innerHTML=text
  document.body.appendChild(element)
  return element
}
 
addButton=(id,width=100,style=buttonStyle,text,action)=>{
  e=addElement(id,"button",width,style,text)
   .addEventListener("click",action)
  return e
}
 
addImageButton=(id,action)=>{
  e=addElement(id,"img",100,imageStyle,"image")
    .addEventListener("click",action)
  return e
}
 
addPhotoSelectorButton=(id,width,style,text,action)=>{
  e=addElement(id,"input",width,style,text)
  e.accept="image/*"
  e.type="file"
  e.defaultValue="select photos"
  e.multiple=true
  e.addEventListener("change",
   (e)=>{urls=Array.from(e.target.files)
   action(urls)
  })
}
 
colorButton=(id,color)=>{
  document.getElementById(id).style.color=color
}