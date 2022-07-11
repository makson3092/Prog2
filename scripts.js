/*<div id = 'player_div' class = 'info'></div>
<div id = 'result_div' class = 'info'></div>
<div id = 'opponent_div' class = 'info'></div>
<div id = 'buttons' class = 'buttons'>
    <button id = 'stone' class = 'button'>Камень</button>
    <button id = 'clipper' class = 'button'>Ножницы</button>
    <button id = 'paper' class = 'button'>Бумага</button>
</div>
*/

let playerDiv = document.querySelector("#player_div");
let resultDiv = document.querySelector(".result_div");
let opponentDiv = document.querySelector("#opponent_div");
let resultText = document.querySelector(".result_text");
let smileDiv = document.querySelector(".smile");
let computer;
let countU = 0;
let countPlayer = document.querySelector(".count_player");
let countO = 0;
let countOpponent = document.querySelector(".count_opponent");

let showBtn = document.querySelector("#buttons");

///////  Камень //////////
document.querySelector("#stone").addEventListener("click", function () {
  showBtn.classList.toggle("show");
  stoneFunc();
  opponentFunc();
  playerHandAnimStone();
  OpponentHand();
  showResult();
  setTimeout(() => {
    showBtn.classList.toggle("show");
  }, 1100);
});

///////  Ножницы //////////
document.querySelector("#clipper").addEventListener("click", function () {
  showBtn.classList.toggle("show");
  clipperFunc();
  opponentFunc();
  showResult();
  playerHandAnimClipper();
  OpponentHand();
  setTimeout(() => {
    showBtn.classList.toggle("show");
  }, 1100);
});

///////  Бумага //////////
document.querySelector("#paper").addEventListener("click", function () {
  showBtn.classList.toggle("show");
  paperFunc();
  opponentFunc();
  showResult();
  playerHandAnimPaper();
  OpponentHand();
  setTimeout(() => {
    showBtn.classList.toggle("show");
  }, 1100);
});

function stoneFunc() {
  setTimeout(function () {
    playerDiv.innerHTML = " ";
  }, 0);
  setTimeout(function () {
    playerDiv.innerHTML = "Камень";
  }, 700);
}

function clipperFunc() {
  setTimeout(function () {
    playerDiv.innerHTML = " ";
  }, 0);
  setTimeout(function () {
    playerDiv.innerHTML = "Ножницы";
  }, 700);
}

function paperFunc() {
  setTimeout(function () {
    playerDiv.innerHTML = " ";
  }, 0);
  setTimeout(function () {
    playerDiv.innerHTML = "Бумага";
  }, 700);
}

function opponentFunc(e) {
  let variants = ["Камень", "Ножницы", "Бумага"];
  let randomIndex = Math.floor(Math.random() * variants.length);
  opponentDiv.innerHTML = variants[randomIndex];
}

function OpponentHand() {
  if (opponentDiv.innerHTML == "Камень") {
    playerHandAnimStoneM();
  } else if (opponentDiv.innerHTML == "Ножницы") {
    playerHandAnimClipperM();
  } else if (opponentDiv.innerHTML == "Бумага") {
    playerHandAnimPaperM();
  }
}

function showResult() {
  setTimeout(function () {
    resultText.innerHTML = " ";
    smileDiv.style.backgroundImage = "none";
  }, 0);
  setTimeout(function () {
    resultText.classList.remove("lng-win", "lng-los", "lgn-mis");
    resultText.classList.remove("lng-mis", "lng-win", "lgn-los");
    resultText.classList.remove("lng-los", "lng-mis", "lgn-win");
    if (playerDiv.innerHTML == opponentDiv.innerHTML) {
      resultText.classList.toggle("lng-los");
      resultText.innerHTML = "Перемогла дружба";
      smileDiv.style.backgroundImage = "url('images/ok_smile.png')";
    } else if (
      playerDiv.innerHTML == "Камень" &&
      opponentDiv.innerHTML == "Бумага"
    ) {
      resultText.classList.toggle("lng-mis");
      resultText.innerHTML = "ПОРАЗКА";
      smileDiv.style.backgroundImage = "url('images/lose_smile.png')";
      countO++;
      countOpponent.innerHTML = countO;
    } else if (
      playerDiv.innerHTML == "Ножницы" &&
      opponentDiv.innerHTML == "Камень"
    ) {
      resultText.classList.toggle("lng-mis");
      resultText.innerHTML = "ПОРАЗКА";
      smileDiv.style.backgroundImage = "url('images/lose_smile.png')";
      countO++;
      countOpponent.innerHTML = countO;
    } else if (
      playerDiv.innerHTML == "Бумага" &&
      opponentDiv.innerHTML == "Ножницы"
    ) {
      resultText.classList.toggle("lng-mis");
      resultText.innerHTML = "ПОРАЗКА";
      smileDiv.style.backgroundImage = "url('images/lose_smile.png')";
      countO++;
      countOpponent.innerHTML = countO;
    } else if (
      playerDiv.innerHTML == "Камень" &&
      opponentDiv.innerHTML == "Ножницы"
    ) {
      resultText.classList.toggle("lng-win");
      resultText.innerHTML = "ПЕРЕМОГА!";
      smileDiv.style.backgroundImage = "url('images/win_smile.png')";
      countU++;
      countPlayer.innerHTML = countU;
    } else if (
      playerDiv.innerHTML == "Ножницы" &&
      opponentDiv.innerHTML == "Бумага"
    ) {
      resultText.classList.toggle("lng-win");
      resultText.innerHTML = "ПЕРЕМОГА!";
      smileDiv.style.backgroundImage = "url('images/win_smile.png')";
      countU++;
      countPlayer.innerHTML = countU;
    } else if (
      playerDiv.innerHTML == "Бумага" &&
      opponentDiv.innerHTML == "Камень"
    ) {
      resultText.classList.toggle("lng-win");
      resultText.innerHTML = "ПЕРЕМОГА!";
      smileDiv.style.backgroundImage = "url('images/win_smile.png')";
      countU++;
      countPlayer.innerHTML = countU;
    }
  }, 1100);
}

let handDiv = document.querySelector(".hand_div");

function playerHandAnimStone() {
  setTimeout(function () {
    handDiv.style.backgroundImage = "url('images/stone.png')";
  }, 0);
  setTimeout(function () {
    handDiv.style.left = "50px";
  }, 100);
  setTimeout(function () {
    handDiv.style.left = "-10px";
  }, 200);
  setTimeout(function () {
    handDiv.style.left = "50px";
  }, 300);
  setTimeout(function () {
    handDiv.style.left = "-10px";
  }, 400);
  setTimeout(function () {
    handDiv.style.left = "50px";
  }, 500);
  setTimeout(function () {
    handDiv.style.left = "0px";
  }, 600);
  setTimeout(function () {
    handDiv.style.backgroundImage = "url('images/stone.png')";
  }, 700);
}

function playerHandAnimClipper() {
  setTimeout(function () {
    handDiv.style.backgroundImage = "url('images/stone.png')";
  }, 0);
  setTimeout(function () {
    handDiv.style.left = "50px";
  }, 100);
  setTimeout(function () {
    handDiv.style.left = "-10px";
  }, 200);
  setTimeout(function () {
    handDiv.style.left = "50px";
  }, 300);
  setTimeout(function () {
    handDiv.style.left = "-10px";
  }, 400);
  setTimeout(function () {
    handDiv.style.left = "50px";
  }, 500);
  setTimeout(function () {
    handDiv.style.left = "0px";
  }, 600);
  setTimeout(function () {
    handDiv.style.backgroundImage = "url('images/clipper.png')";
  }, 700);
}

function playerHandAnimPaper() {
  setTimeout(function () {
    handDiv.style.backgroundImage = "url('images/stone.png')";
  }, 0);
  setTimeout(function () {
    handDiv.style.left = "50px";
  }, 100);
  setTimeout(function () {
    handDiv.style.left = "-10px";
  }, 200);
  setTimeout(function () {
    handDiv.style.left = "50px";
  }, 300);
  setTimeout(function () {
    handDiv.style.left = "-10px";
  }, 400);
  setTimeout(function () {
    handDiv.style.left = "50px";
  }, 500);
  setTimeout(function () {
    handDiv.style.left = "0px";
  }, 600);
  setTimeout(function () {
    handDiv.style.backgroundImage = "url('images/paper.png')";
  }, 700);
}

//////////////////

let handDivM = document.querySelector("#m");

function playerHandAnimStoneM() {
  setTimeout(function () {
    handDivM.style.backgroundImage = "url('images/stoneM.png')";
  }, 0);
  setTimeout(function () {
    handDivM.style.left = "595px";
  }, 100);
  setTimeout(function () {
    handDivM.style.left = "655px";
  }, 200);
  setTimeout(function () {
    handDivM.style.left = "595px";
  }, 300);
  setTimeout(function () {
    handDivM.style.left = "655px";
  }, 400);
  setTimeout(function () {
    handDivM.style.left = "595px";
  }, 500);
  setTimeout(function () {
    handDivM.style.left = "645px";
  }, 600);
  setTimeout(function () {
    handDivM.style.backgroundImage = "url('images/stoneM.png')";
  }, 700);
}

function playerHandAnimClipperM() {
  setTimeout(function () {
    handDivM.style.backgroundImage = "url('images/stoneM.png')";
  }, 0);
  setTimeout(function () {
    handDivM.style.left = "595px";
  }, 100);
  setTimeout(function () {
    handDivM.style.left = "655px";
  }, 200);
  setTimeout(function () {
    handDivM.style.left = "595px";
  }, 300);
  setTimeout(function () {
    handDivM.style.left = "655px";
  }, 400);
  setTimeout(function () {
    handDivM.style.left = "595px";
  }, 500);
  setTimeout(function () {
    handDivM.style.left = "645px";
  }, 600);
  setTimeout(function () {
    handDivM.style.backgroundImage = "url('images/clipperM.png')";
  }, 700);
}

function playerHandAnimPaperM() {
  setTimeout(function () {
    handDivM.style.backgroundImage = "url('images/stoneM.png')";
  }, 0);
  setTimeout(function () {
    handDivM.style.left = "595px";
  }, 100);
  setTimeout(function () {
    handDivM.style.left = "655px";
  }, 200);
  setTimeout(function () {
    handDivM.style.left = "595px";
  }, 300);
  setTimeout(function () {
    handDivM.style.left = "655px";
  }, 400);
  setTimeout(function () {
    handDivM.style.left = "595px";
  }, 500);
  setTimeout(function () {
    handDivM.style.left = "645px";
  }, 600);
  setTimeout(function () {
    handDivM.style.backgroundImage = "url('images/paperM.png')";
  }, 700);
}
