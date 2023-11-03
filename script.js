let quotes = [
  `I live my life a quarter mile at a time`,
  `I said a ten-second car, not a ten-minute car`,
  `You can have any brew you want... as long as it's a Corona.`,
  `You almost had me? You never had me - you never had your car!`,
  `I don't have friends. I have family.`,
  `It don't matter if you win by an inch or a mile. Winning's winning.`
];

document.addEventListener("DOMContentLoaded", function(event) {
  // Random quote of the day generator
  const randomQuote = function() {
    document.querySelector('#quote-of-the-day').textContent = `"${quotes[Math.floor(Math.random() * quotes.length)]}"`;
  };
  randomQuote();
  
  // Do all of your work inside the document.addEventListener  

  // Part 1
  const mainTitle = document.querySelector('#main-title');
  mainTitle.textContent = "DOM's Fanpage";

  // Part 2
  const body = document.body;
  body.style.backgroundColor = "#B9D9EB";

  // Part 3
  const favoriteThingsList = document.getElementById('favorite-things');
  const lastListItem = favoriteThingsList.lastElementChild;
  favoriteThingsList.removeChild(lastListItem);

  // Part 4
  const specialTitles = document.querySelectorAll('.special-title');
  specialTitles.forEach(title => {
  title.style.fontSize = '2rem';
  });

  // Part 5
const pastRaces = document.getElementById('past-races');

for (let i = 0; i < pastRaces.children.length; i++) {
  const listItem = pastRaces.children[i];

if (listItem.textContent === 'Bella Vista') {
    pastRaces.removeChild(listItem);
    break;
  }
}

  // Part 6
const pastRacesList = document.getElementById('past-races');
const newListItem = document.createElement('li');

newListItem.textContent = ('Bella Vista');
pastRacesList.appendChild(newListItem);

  // Part 7


  // Part 8


  // Part 9




});
