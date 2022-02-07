let outputScreen=document.getElementById('output-sceen')
outputScreen.addEventListener("click",function(){
  alert(7)
})


function clr(){
  outputScreen.value=''
}

function display(num){
  outputScreen.value+=num
}

function calculate(){
  if(outputScreen.value!=0){
    try {
      outputScreen.value = eval(outputScreen.value)
    } catch (err) {
      alert("invalid")
    }
  
  
  }
    
  


}

function del(){
  outputScreen.value=outputScreen.value.slice(0,-1)
}

