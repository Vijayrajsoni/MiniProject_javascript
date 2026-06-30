const a=document.getElementById("test")
const b=document.getElementById("btn1")
const c=document.getElementById("btn2")
const d=document.getElementById("btn3")
const e=document.querySelector("body")

// b.addEventListener("click",function(){
//     e.style.backgroundColor="yellow"

// })

c.addEventListener("click", function(){
    a.style.fontSize="90px"
})

d.addEventListener("click",function(){
    e.style.backgroundColor=""
    a.style.fontSize="30px"
})

function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  
  return color;
}

b.addEventListener("click", () => {
  const newColor = getRandomColor();
  
 
  document.body.style.backgroundColor = newColor;
});
