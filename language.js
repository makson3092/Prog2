const langArr = {
  text1: {
    en: "Choose rock or scissors or paper. Opponent will do it himself",
    uk: "Виберіть камінь, ножиці або папір. Суперник зробить це сам",
    pl: "Wybierz kamień, nożyczki lub papier. Przeciwnik zrobi to sam",
  },

  text2: {
    en: "The stone breaks the scissors and wins, but it can be wrapped in paper",
    uk: "Камінь ламає ножиці та перемагає, але його можна обернути папером",
    pl: "Kamień łamie nożyce i wygrywa, ale można go zawinąć w papier",
  },
  text3: {
    en: "Scissors cut paper and win, but they break on stone",
    uk: "Ножиці ріжуть папір і перемагають, але вони ламаються об камінь",
    pl: "Nożyczki tną papier i wygrywają, ale łamią się na kamieniu",
  },
  text4: {
    en: "Paper wraps stone and wins but scissors cut it",
    uk: "Папір обертає камінь і виграє, але його ріжуть ножиці",
    pl: "Papier owija kamień i wygrywa, ale nożyczki go tną",
  },
  text5: {
    en: "score",
    uk: "рахунок",
    pl: "wynik",
  },
  restart: {
    en: "RESTART",
    uk: "ПЕРЕЗАПУСК",
    pl: "PONOWNIE",
  },
  win: {
    en: "WINNER",
    uk: "ПЕРЕМОГА",
    pl: "ZWYCIĘZCA",
  },
  los: {
    en: "Friendship won",
    uk: "Перемогла дружба",
    pl: "Wygrała przyjaźń",
  },
  mis: {
    en: "DEFEAT",
    uk: "ПОРАЗКА",
    pl: "POKONAĆ",
  },
};

document
  .querySelectorAll(".btn")
  .forEach((b) => b.addEventListener("click", setLang));

function setLang() {
  for (let key in langArr) {
    let elem = document.querySelector(".lng-" + key);
    if (elem) {
      elem.innerHTML = langArr[key][this.value];
    }
  }
}
