const btn=document.getElementById("b1")
btn.addEventListener("click",()=>{
    let  a=document.getElementById("txt1").value
    let  symbol=a;
    switch(a){
        case "saumya":
            document.getElementById("demo").innerHTML="Meow meow!!"
            break;
        case "dog":
            document.getElementById("demo").innerHTML=" bark bark!!"
            break;
        case "owl" :
            document.getElementById("demo").innerHTML="HOOT !!"
            break;
        default:
            document.getElementById("demo").innerHTML="please enter valid animal name "
    }
})