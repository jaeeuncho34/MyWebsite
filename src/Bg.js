const images = [
  "Img/Img01.jpeg",
  "Img/Img02.jpeg",
  "Img/Img03.jpeg",
  "Img/Img04.jpeg"
];

const chosenImage = images[Math.floor(Math.random() * images.length)];

document.body.style.backgroundImage = `url(${chosenImage})`;
