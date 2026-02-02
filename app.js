let LANG="tr", ACTIVE="INSTAGRAM";

const TEXT={
tr:{buy:"Satın Al",search:"Servis ara...",best:"En Çok Satan"},
en:{buy:"Buy",search:"Search service...",best:"Best Seller"}
};

const DATA={
INSTAGRAM:[
["Instagram Takipçi","₺120 – ₺250",1],
["Instagram Türk Takipçi","₺150 – ₺300"],
["Instagram Beğeni","₺25 – ₺60",1],
["Instagram Türk Beğeni","₺70 – ₺120"],
["Instagram Reel Views","₺40 – ₺90"],
["Instagram Story Views","₺35 – ₺80"],
["Instagram Yorum","₺400 – ₺900"]
],
TIKTOK:[
["TikTok Takipçi","₺100 – ₺220",1],
["TikTok Türk Takipçi","₺180 – ₺350"],
["TikTok Likes","₺80 – ₺180"],
["TikTok Views","₺50 – ₺140"]
],
YOUTUBE:[
["YouTube Abone","₺180 – ₺450",1],
["YouTube Views","₺60 – ₺150"],
["YouTube Watch Time","₺800 – ₺2,000"]
],
TELEGRAM:[
["Telegram Kanal Üye","₺150 – ₺350",1],
["Telegram Post Views","₺40 – ₺100"]
],
SPOTIFY:[
["Spotify Plays","₺60 – ₺150"],
["Spotify Monthly Listener","₺200 – ₺500",1]
],
OTHER:[
["Web Trafik Hedefli","₺70 – ₺180"],
["SEO Backlinks","₺300 – ₺800",1],
["Android App Install","₺170 – ₺380"],
["Google Ads Click","₺400 – ₺900"]
]
};

const tabs=document.getElementById("tabs");
Object.keys(DATA).forEach(k=>{
tabs.innerHTML+=`<button class="tab ${k==ACTIVE?"active":""}" data-cat="${k}">${k}</button>`;
});

const list=document.getElementById("catalogList");
const search=document.getElementById("searchInput");

function render(){
list.innerHTML="";
(DATA[ACTIVE]||[])
.filter(s=>s[0].toLowerCase().includes(search.value.toLowerCase()))
.forEach(s=>{
list.innerHTML+=`
<div class="item">
<div>${s[0]} ${s[2]?`<span class="badge">${TEXT[LANG].best}</span>`:""}</div>
<div class="price">${s[1]}</div>
<a class="buy" target="_blank"
href="https://t.me/zordodestek?text=${encodeURIComponent(s[0])}">
${TEXT[LANG].buy}
</a>
</div>`;
});
}

render();

tabs.onclick=e=>{
if(!e.target.dataset.cat)return;
document.querySelectorAll(".tab").forEach(t=>t.classList.remove("active"));
e.target.classList.add("active");
ACTIVE=e.target.dataset.cat;
render();
};

search.oninput=render;

document.querySelectorAll(".lang-btn").forEach(b=>{
b.onclick=()=>{
document.querySelectorAll(".lang-btn").forEach(x=>x.classList.remove("active"));
b.classList.add("active");
LANG=b.dataset.lang;
search.placeholder=TEXT[LANG].search;
render();
};
});
