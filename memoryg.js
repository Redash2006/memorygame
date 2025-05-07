const gameBoard = document.getElementById('gameBoard');
const cards = ['😉', '😋', '😒', '😤', '🤓', '🤫', '🤩', '😁'];
let cardValues = [...cards, ...cards]; // create pairs
let firstCard = null;
let secondCard = null;
let lockBoard = false;

