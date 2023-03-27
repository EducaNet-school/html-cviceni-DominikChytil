const img = document.getElementById('person-img');
const author = document.getElementById('author');
const job = document.getElementById('job');
const info = document.getElementById('info');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const randomBtn = document.querySelector('.random-btn');
const reviews = [
  
  {
    id: 1,
    name: 'Svíčková na smetaně',
    job: 's houskovým knedlíkem',
    img: 'https://www.toprecepty.cz/fotky/recepty/0002/701d992736e12157d83ac62fcdb73ea4-facebook.jpg',
    text: "165 ,-",
  },
  {
    id: 2,
    name: 'Kuřecí řízek',
    job: 's hranolkami',
    img: 'https://slevomat.sgcdn.cz/images/t/728x364c/75/57/7557572-5e2f19.jpg',
    text: '149 ,-',
  },
  {
    id: 3,
    name: 'Boloňské špagety',
    job: 'se sypaným sýrem',
    img: 'https://www.toprecepty.cz/fotky/recepty/0050/e7a8b6eb6b20cf3b954d63443fd05160-facebook.jpg',
    text: '149 ,-',
  },
  {
    id: 4,
    name: 'Salát Caesar',
    job: 'se sypaným sýrem a dipem',
    img: 'https://itesco.cz/imgglobal/content_platform/recipes/main/e1/sized/756x426-100-fff-0-0/e12961d76b44521009f8de6bdf2c674a.jpg',
    text: ' 129 ,-',
  },
  {
    id: 5,
    name: 'Grilované kuřecí maso',
    job: 'se zeleninou',
    img: 'https://media.igurmet.cz/yummy/83/65/8365b0545dcd61b924a8bf66cf3de1e4.png',
    text: ' 149 ,-',
  }
];

let currentItem = 0;

window.addEventListener('DOMContentLoaded', function () {
  const item = reviews[currentItem];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
});

function showPerson(person) {
  const item = reviews[person];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
}

nextBtn.addEventListener('click', function () {
  currentItem++;
  if (currentItem > reviews.length - 1) {
    currentItem = 0;
  }
  showPerson(currentItem);
});

prevBtn.addEventListener('click', function () {
  currentItem--;
  if (currentItem < 0) {
    currentItem = reviews.length - 1;
  }
  showPerson(currentItem);
});

randomBtn.addEventListener('click', function () {
  console.log('hello');

  currentItem = Math.floor(Math.random() * reviews.length);
  showPerson(currentItem);
});