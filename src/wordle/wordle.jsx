import * as React from "react";

export function Wordle(){
  return(

    <div className="wordle">
    <header className="wordle-header">    
    
    <title>Wordle</title>
    <link rel="stylesheet" href="style.css" />

    <div class="game-container">
      
      <div class="title-container">
        <h1>Wordle</h1>
      </div>

      <div class="message-container"></div>

      <div class="tile-container"></div>

      <div class="key-container"></div>

      
    </div>
    </header>
</div>
  )
}

const tileDisplay = document.querySelector(".tile-container");
const keyboard = document.querySelector(".key-container");
const messageDisplay = document.querySelector(".message-container");
let wordle;

const generateWordle = {
  method: "GET",
  headers: {
    "X-RapidAPI-Host": "random-words5.p.rapidapi.com",
    "X-RapidAPI-Key": "7d676f781cmsh8806bd263a88d7cp1ee533jsnad42e6e10466",
  },
};

// fetch("http://localhost:8000/word")
//     .then((response) => response.json())

const getWordle = () => {
  fetch(
    "https://random-words5.p.rapidapi.com/getMultipleRandom?count=5&wordLength=5",
    generateWordle
  )
  
    .then((response) => response.json())
    //.then(response => console.log(response))

    .then((json) => {
      console.log(json);
      wordle = json.toString().toUpperCase();
    })
    .catch((err) => console.log(err));
};
getWordle();
// const word = req.query.word
// const checkDictionary = {
  
//   method: 'GET',
//   url: 'https://twinword-word-graph-dictionary.p.rapidapi.com/association/',
//   params: {entry: word},
//   headers: {
//     'X-RapidAPI-Host': 'twinword-word-graph-dictionary.p.rapidapi.com',
//     'X-RapidAPI-Key': '7d676f781cmsh8806bd263a88d7cp1ee533jsnad42e6e10466'
//   }
// };
const checkDictionary = {
  method: "GET",
  headers: {
    "X-RapidAPI-Host": "twinword-word-graph-dictionary.p.rapidapi.com",
    "X-RapidAPI-Key": "7d676f781cmsh8806bd263a88d7cp1ee533jsnad42e6e10466",
  },
};

const keys = [
  "Q",
  "W",
  "E",
  "R",
  "T",
  "Y",
  "U",
  "I",
  "O",
  "P",
  "A",
  "S",
  "D",
  "F",
  "G",
  "H",
  "J",
  "K",
  "L",
  "ENTER",
  "Z",
  "X",
  "C",
  "V",
  "B",
  "N",
  "M",
  "<<",
];
const guessRows = [
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
];
const handleClick = (letter) => {
  if (!isGameOver) {
    console.log("clicked", letter);
    if (letter === "<<") {
      deleteLetter();
      console.log("guessRows", guessRows);
      return;
    }
    if (letter === "ENTER") {
      checkRow();
      console.log("guessRows", guessRows);
      return;
    }
    addLetter(letter);
    console.log("guessRows", guessRows);
  }
};
const addLetter = (letter) => {
  if (currentTile < 5 && currentRow < 6) {
    const tile = document.getElementById(
      "guessRow-" + currentRow + "-tile-" + currentTile
    );
    tile.textContent = letter;
    guessRows[currentRow][currentTile] = letter;
    tile.setAttribute("data", letter);
    currentTile++;
  }
};
const deleteLetter = () => {
  if (currentTile > 0) {
    currentTile--;
    const tile = document.getElementById(
      "guessRow-" + currentRow + "-tile-" + currentTile
    );
    tile.textContent = "";
    guessRows[currentRow][currentTile] = "";
    tile.setAttribute("data", "");
  }
};
const checkRow = () => {
  const guess = guessRows[currentRow].join("");
  console.log("guess", guess);

  // fetch("http://localhost:8000/check/?word=${guess}")
  //   .then((response) => response.json())

  if (currentTile > 4) {
    fetch(
      "https://twinword-word-graph-dictionary.p.rapidapi.com/association/?entry=${guess}",checkDictionary)
      .then((response) => response.json())
      //.then(response => console.log(response))

      .then((json) => {
        console.log(json);
        if (json === "Entry word not found") {
          showMessage("Word not in dictionary.");
          return;
        } else {
          console.log("guess is" + guess, "wordle is" + wordle);
          flipTile();
          if (wordle === guess) {
            showMessage("GREAT JOB!");
            isGameOver = true;
            return;
          } else {
            if (currentRow >= 5) {
              isGameOver = true;
              showMessage("GAME OVER!");
              return;
            }
            if (currentRow < 5) {
              currentRow++;
              currentTile = 0;
            }
          }
        }
      })
      .catch((err) => console.log(err));
  }
};
const showMessage = (message) => {
  const messageElement = document.createElement("p");
  messageElement.textContent = message;
  messageDisplay.append(messageElement);
  setTimeout(() => messageDisplay.removeChild(messageElement), 2000);
};
const addColorToKey = (keyLetter, color) => {
  const key = document.getElementById(keyLetter);
  key.classList.add(color);
};
const flipTile = () => {
  const rowTiles = document.querySelector("#guessRow-" + currentRow).childNodes;
  let checkWordle = wordle;
  const guess = [];

  rowTiles.forEach((tile) => {
    guess.push({ letter: tile.getAttribute("data"), color: "grey-overlay" });
  });
  guess.forEach((guess, index) => {
    if (guess.letter === wordle[index]) {
      guess.color = "green-overlay";
      checkWordle = checkWordle.replace(guess.letter, "");
    }
  });

  guess.forEach((guess) => {
    if (checkRow.includes(guess.letter)) {
      guess.color = "yellow-overlay";
      checkWordle = checkWordle.replace(guess.letter, "");
    }
  });

  console.log("guess", guess);

  rowTiles.forEach((tile, index) => {
    setTimeout(() => {
      tile.classList.add("flip");
      tile.classList.add(guess[index].color);
      addColorToKey(guess[index].letter, guess[index].color);
    }, 500 * index);
  });
};

let currentRow = 0;
let currentTile = 0;
let isGameOver = false;

document.addEventListener('readystatechange', function() { if (document.readyState === "complete") { 
guessRows.forEach((guessRow, guessRowIndex) => {
  const rowElement = document.createElement("div")
  rowElement.setAttribute("id", "guessRow-" + guessRowIndex)
  guessRow.forEach((_guess, guessIndex) => {
    const tileElement = document.createElement("div")
    tileElement.setAttribute(
      "id",
      "guessRow-" + guessRowIndex + "-tile-" + guessIndex
    );
    tileElement.classList.add("tile")
    rowElement.append(tileElement)
  })
  tileDisplay.append(rowElement)
});

keys.forEach((key) => {
  const buttonElement = document.createElement("button")
  buttonElement.textContent = key;
  buttonElement.setAttribute("id", key);
  buttonElement.addEventListener("click", handleClick)
  keyboard.append(buttonElement)
});
}})










