const userName = prompt("What is your name?", "John Doe")
window.onload = function () {
    document.getElementById("myName").innerHTML=userName
}

let i=0
function getDate(){
    
    document.getElementById("myClock").innerHTML=new Date()

}
getDate()
setInterval(getDate,1000)
