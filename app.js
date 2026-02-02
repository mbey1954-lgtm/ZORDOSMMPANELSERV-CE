function toggleMenu(){
document.getElementById("menu").classList.toggle("active");
}

function order(service){
document.getElementById("notifySound")?.play();
window.open(
"https://t.me/zordodestek?text="+encodeURIComponent(
"🛒 Yeni Sipariş\n📦 "+service
),
"_blank"
);
}

/* AUTH */
function openAuth(){
document.getElementById("authModal").style.display="flex";
}

function register(){
localStorage.setItem("user","ok");
showToast("Kayıt oldun ✅");
closeAuth();
}

function login(){
showToast("Giriş yapıldı ✅");
closeAuth();
}

function closeAuth(){
document.getElementById("authModal").style.display="none";
}

function showToast(text){
const t=document.getElementById("toast");
t.innerText=text;
t.style.display="block";
setTimeout(()=>t.style.display="none",5000);
}

/* FAKE USER COUNT */
let u=1000000;
setInterval(()=>{
u+=Math.floor(Math.random()*5);
const el=document.getElementById("userCount");
if(el) el.innerText=u.toLocaleString()+"+";
},3000);
