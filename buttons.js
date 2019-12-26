style="color:white;background:black;font-size:4vw;font-family:verdana;"

buttonStyle = style+"border-style:solid;border-width:1px;"
listStyle=buttonStyle+"text-align:left;"


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

addButton=(id,width,style,text,action)=>{
  addElement(id,"button",width,style,text)
   .addEventListener("click",action)
}

hideButton=(id)=>{
  document.getElementById(id).style.display="none"
}
showButton=(id)=>{
  document.getElementById(id).style.display="block"
}

disableButton=(id)=>{
  document.getElementById(id).style.color="black"
}
restoreButton=(id)=>{
  document.getElementById(id).style.color="white"
}

colorButton=(id,color)=>{
  document.getElementById(id).style.color=color
}
