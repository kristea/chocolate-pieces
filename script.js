var chocoPieces = Number(
  prompt("How many pieces of chocolate would you like? Enter between 0 to 10.")
);
var chocoLeft = 10 - chocoPieces;

if (chocoLeft === 10) {
  alert(`You didn't want any chocolate?`);
} else if (chocoLeft >= 6) {
  alert(`There are still plenty of chocolates left`);
} else if (chocoLeft >= 1) {
  alert(`We only have ${chocoLeft} pieces left`);
} else {
  alert(`You are all the chocolate. Yum!`);
}
