function toggleMenu(){
 const menu=document.getElementById("menu");
 menu.style.display=menu.style.display==="flex"?"none":"flex";
}

// canlı sayaç
let live=1000;
setInterval(()=>{
 live+=Math.floor(Math.random()*5-2);
 document.getElementById("liveCount").innerText=live;
},2000);

// fake sipariş
const orders=[
"Ahmet • Instagram aldı",
"Mehmet • TikTok aldı",
"Elif • YouTube aldı",
"Can • Telegram aldı"
];

setInterval(()=>{
 const o=document.createElement("div");
 o.className="order-item";
 o.innerText=orders[Math.floor(Math.random()*orders.length)];
 document.getElementById("orderFeed").appendChild(o);
 setTimeout(()=>o.remove(),6000);
},2500);

// fake yorum
const reviews=[
"Çok hızlı",
"En ucuz panel",
"Mükemmel destek",
"Harika servis"
];

setInterval(()=>{
 const r=document.createElement("div");
 r.className="review";
 r.innerText="💬 "+reviews[Math.floor(Math.random()*reviews.length)];
 document.getElementById("reviews").appendChild(r);
 setTimeout(()=>r.remove(),7000);
},3000);
