const btn = document.getElementById("b1")
btn.addEventListener("click", ()=>{
    let n=document.getElementById("t1").value
   
      document.getElementById("Demo").innerHTML="Time left : "+n+ "second !!"
    for(let i=n;i>=0;i--){
        (function(Count){
            setTimeout(()=>{
                if(Count>0){
                     document.getElementById("Demo").innerHTML="Time left : "+Count + "second !!"    
                }
                else
                     document.getElementById("Demo").innerHTML="Time up !!"
            },(n-Count)*1000)

        })(i)
    }

})