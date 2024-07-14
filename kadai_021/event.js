const txt = document.getElementById("text");

const change= document.getElementById("btn");

change.addEventListener("click",() =>{
   setTimeout(() =>{
        txt.innerHTML="ボタンをクリックしました。";
   },2000); 
});