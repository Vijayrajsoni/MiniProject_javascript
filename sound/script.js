const sd1=document.getElementById("btn1")
const sd2=document.getElementById("btn2")
const sd3=document.getElementById("btn3")

sd1.addEventListener("click", function(){
    const audio=new Audio("audio/waka.mp3");
    audio.play()

})
sd2.addEventListener("click", function(){
    const audio=new Audio("audio/dai.mp3");
    audio.play()

})
sd3.addEventListener("click", function(){
    const audio=new Audio("audio/teriba.mp3");
    audio.play()

})