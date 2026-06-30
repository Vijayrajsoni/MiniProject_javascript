const btn =document.getElementById("b1")

btn.addEventListener("click",()=>{
    const random=Math.floor(Math.random()*(10-0)+0)
    const a=document.getElementById("t1").value
    if(random==a)
        document.getElementById("demo").innerHTML="Guess IS Correct !!"
    else
        document.getElementById("demo").innerHTML="Guess is Inncorect TRY Again!!"

})