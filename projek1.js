const testimonials = [
  {
    name: "Ghulam Zaky Nurrahman",
    photoUrl:
      "photo/ghulam.png",
    text1: "ホテル・カリフォルニアの夜風が、僕たちの永遠の愛についてささやいている",
    text2: "Angin malam di Hotel California berbisik tentang cinta kita yang abadi.",
  },
  {
    name: "El Yashira Rizkita Ilmi",
    photoUrl:
      "photo/El.jpeg",
    text1: "人生で最大の過ちの一つは、まるでたくさんの時間があるかのように行動することだ。",
    text2: " Salah satu kesalahan terbesar dalam hidup adalah bertindak seolah-olah kita punya banyak waktu.",
  },
  {
    name: "El Yashira Rizkita Ilmi",
    photoUrl:
      "photo/El.jpeg",
    text1: "運命に屈する者は、最初から敗北している。",
    text2: "Mereka yang menyerah pada takdir adalah mereka yang telah kalah sejak awal.",  
  },
  {
      name: "Ridho Febri",
      photoUrl:
        "photo/febri.jpeg",
      text1: " 希望は崩壊の始まりとなる最良の方法だ。",
      text2: "Berharap adalah cara terbaik untuk memulai kehancuran.",  
  },
  {
      name: "Ridho Febri",
      photoUrl:
        "photo/febri.jpeg",
      text1: "人生はどれだけ速く目的地に着くかではなく、その旅をどう耐え抜くかが大切だ。",
      text2: "Hidup tidak selalu tentang seberapa cepat kamu sampai, tapi tentang bagaimana kamu bertahan di perjalanan.",  
  },
  {
      name: "Ridho Febri",
      photoUrl:
        "photo/febri.jpeg",
      text1: "失敗は終わりではなく、より深い理解への過程の一部だ。",
      text2: "Kesalahan bukan akhir, tapi bagian dari proses menuju pemahaman yang lebih dalam.",  
  },
  {
      name: "Ridho Febri",
      photoUrl:
        "photo/febri.jpeg",
      text1: " 無駄な努力などない。ただ、時間がまだ答えを示していないだけだ。",
      text2: "Tidak ada usaha yang sia-sia, hanya waktu yang belum memberi jawabannya.",  
  },
  {
      name: "Ridho Febri",
      photoUrl:
        "photo/febri.jpeg",
      text1: "困難は障害ではなく、君の決意の強さを試す試練だ。",
      text2: "Kesulitan bukan penghalang, melainkan ujian untuk melihat seberapa kuat tekadmu.",  
  },
  {
      name: "Zuki",
      photoUrl:
        "photo/febri.jpeg",
      text1: "",
      text2: "Masa lalu tak bisa kau ulangi, berapa pun kali kau mengharapkannya. Tak apa sesekali melihat ke belakang, asalkan kaki kita terus melangkah maju sedikit demi sedikit. Karena hidup akan terus berlanjut, tak akan berhenti hanya karena kau diam",  
  },
];

const imgEl = document.querySelector("img");
const text1El = document.querySelector(".text1");
const text2El = document.querySelector(".text2");
const usernameEl = document.querySelector(".username");

let idx = 0;

function updateTestimonial() {
  const { name, photoUrl, text1, text2 } = testimonials[idx];
  imgEl.src = photoUrl;
  text1El.innerText = text1;
  text2El.innerText = text2;
  usernameEl.innerText = name;
}

// Tombol prev
document.getElementById("prevBtn").addEventListener("click", function () {
  idx = (idx === 0) ? testimonials.length - 1 : idx - 1;
  updateTestimonial();
});

// Tombol next
document.getElementById("nextBtn").addEventListener("click", function () {
  idx = (idx === testimonials.length - 1) ? 0 : idx + 1;
  updateTestimonial();
});

// Menampilkan testimonial pertama saat halaman dimuat
updateTestimonial();
