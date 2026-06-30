const btn=document.getElementById("b1")
btn.addEventListener("click",function(){
    const r=document.getElementById("res")
    const age=document.getElementById("text1").value
    if(age>18){
        r.innerHTML="you are eligible"

    }
    else if(age==0)[
        r.innerHTML="Enter age "
    ]
    else {
        r.innerHTML="you are not eligible"
    }
})

