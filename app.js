function toggleMenu(){
  const menu = document.getElementById("menu");
  menu.style.display = menu.style.display === "flex" ? "none" : "flex";
}

// canlı satın alan
let live = 1000;
setInterval(()=>{
  live += Math.floor(Math.random()*3);
  document.getElementById("liveCount").innerText = live;
},2000);

// fake sipariş akışı
const orders = [
"Ahmet Instagram Takipçi aldı",
"Mehmet TikTok İzlenme aldı",
"Elif YouTube Abone aldı",
"Can Telegram Üye aldı"
];

setInterval(()=>{
  const div = document.createElement("div");
  div.className="order-item";
  div.innerText = orders[Math.floor(Math.random()*orders.length)];
  document.getElementById("orderFeed").appendChild(div);

  new Audio("notify.mp3").play();

  setTimeout(()=>div.remove(),6000);
},2500);

// fake yorumlar
const reviews = [
"Çok hızlı panel",
"Gerçekten ucuz",
"Mükemmel destek",
"Türkiye'nin en iyisi"
];

setInterval(()=>{
  const r = document.createElement("div");
  r.className="review";
  r.innerText="💬 "+reviews[Math.floor(Math.random()*reviews.length)];
  document.getElementById("reviews").appendChild(r);
  setTimeout(()=>r.remove(),7000);
},3500);
