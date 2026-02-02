function toggleMenu(){
document.getElementById("menu").classList.toggle("active");
}

function buy(){
try{
 new Audio("assets/sounds/click.mp3").play();
}catch(e){}
window.location.href="https://t.me/zordodestek";
}

function goService(name){
window.location.href="services/"+name+".html";
}

function register(){
showToast("✅ Kayıt oldun!");
setTimeout(()=>location.href="index.html",1500);
}

function login(){
showToast("👋 Hoş geldin!");
setTimeout(()=>location.href="index.html",1500);
}

function showToast(msg){
const t=document.createElement("div");
t.className="toast";
t.innerText=msg;
document.body.appendChild(t);
setTimeout(()=>t.remove(),5000);
}
