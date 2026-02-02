const TEXT={
tr:{hero:"Türkiye’de En Çok Kullanılan Sosyal Medya Servisleri",search:"Servis ara...",users:"Aktif Kullanıcı",docs:"SMM Panel Belgeleri & Güven",buy:"Satın Al"},
en:{hero:"Most Used Social Media Services in Turkey",search:"Search service...",users:"Active Users",docs:"SMM Panel Documents & Trust",buy:"Buy"},
ar:{hero:"خدمات وسائل التواصل الاجتماعي الأكثر استخدامًا",search:"ابحث عن خدمة...",users:"مستخدم نشط",docs:"وثائق لوحة SMM",buy:"شراء"},
ru:{hero:"Самые используемые SMM сервисы",search:"Поиск услуги...",users:"Активные пользователи",docs:"Документы SMM панели",buy:"Купить"},
de:{hero:"Meistgenutzte Social Media Dienste",search:"Dienst suchen...",users:"Aktive Nutzer",docs:"SMM Panel Dokumente",buy:"Kaufen"},
fr:{hero:"Services de médias sociaux les plus utilisés",search:"Rechercher un service...",users:"Utilisateurs actifs",docs:"Documents du panneau SMM",buy:"Acheter"}
};

let LANG="tr";

const services=[
{name:"Instagram Takipçi",price:"₺120 – ₺250",img:"https://cdn-icons-png.flaticon.com/512/2111/2111463.png"},
{name:"Instagram Beğeni",price:"₺25 – ₺60",img:"https://cdn-icons-png.flaticon.com/512/2111/2111463.png"},
{name:"TikTok Takipçi",price:"₺100 – ₺220",img:"https://cdn-icons-png.flaticon.com/512/3046/3046121.png"},
{name:"YouTube Abone",price:"₺180 – ₺450",img:"https://cdn-icons-png.flaticon.com/512/1384/1384060.png"},
{name:"Telegram Kanal Üye",price:"₺150 – ₺350",img:"https://cdn-icons-png.flaticon.com/512/2111/2111646.png"},
{name:"Twitter (X) Takipçi",price:"₺130 – ₺300",img:"https://cdn-icons-png.flaticon.com/512/5968/5968830.png"},
{name:"Spotify Plays",price:"₺60 – ₺150",img:"https://cdn-icons-png.flaticon.com/512/2111/2111624.png"},
{name:"Discord Üye",price:"₺150 – ₺350",img:"https://cdn-icons-png.flaticon.com/512/5968/5968756.png"},
{name:"Twitch Takipçi",price:"₺220 – ₺500",img:"https://cdn-icons-png.flaticon.com/512/733/733577.png"},
{name:"Kick Followers",price:"₺180 – ₺400",img:"https://seeklogo.com/images/K/kick-logo-889A0A9E36-seeklogo.com.png"}
];

const list=document.getElementById("serviceList");
const search=document.getElementById("searchInput");

function render(){
list.innerHTML="";
services.filter(s=>s.name.toLowerCase().includes(search.value.toLowerCase()))
.forEach(s=>{
list.innerHTML+=`
<div class="service">
<img src="${s.img}">
<h3>${s.name}</h3>
<div class="price">${s.price}</div>
<div class="buy" onclick="order('${s.name}')">${TEXT[LANG].buy}</div>
</div>`;
});
}
render();

search.oninput=render;

function order(service){
document.getElementById("notifySound")?.play();
window.open(
"https://t.me/zordodestek?text="+encodeURIComponent("🛒 Yeni Sipariş\n📦 "+service),
"_blank"
);
}

document.querySelectorAll(".lang-btn").forEach(b=>{
b.onclick=()=>{
document.querySelectorAll(".lang-btn").forEach(x=>x.classList.remove("active"));
b.classList.add("active");
LANG=b.dataset.lang;
document.getElementById("heroText").innerText=TEXT[LANG].hero;
document.getElementById("userLabel").innerText=TEXT[LANG].users;
document.getElementById("docsTitle").innerText=TEXT[LANG].docs;
search.placeholder=TEXT[LANG].search;
render();
};
});

let users=1000000;
setInterval(()=>{
users+=Math.floor(Math.random()*5);
document.getElementById("userCount").innerText=users.toLocaleString()+"+";
},3000);
