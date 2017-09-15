"use strict"
var searchNumber;
var i;
var isFound = false;
var randomNumber = [];
var output = "";

for(i = 1; i <= 10; i++) {
  randomNumber[i] = Math.floor(Math.random() * (16 - 1)) + 1;
  output = output + "Сгенерированное число[" + i + "из" + 10 + "]=" + randomNumber[i] + "\n";
}

var searchNumber = prompt("Число для поиска: ");
if ((searchNumber == "") || (isNaN(searchNumber))) {
  alert("Ошибка ввода!");
  windows.stop;
}  

for(i = 1; i <= 10; i++) {
  if (randomNumber[i] == searchNumber) {
    isFound = true;
  }	
}

if (isFound == true) {
  output = output + "Число " + searchNumber + " найдено!";
} else {
  output = output + "Число " + searchNumber + " не найдено!";
}
alert(output);