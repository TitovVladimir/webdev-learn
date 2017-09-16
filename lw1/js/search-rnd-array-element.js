"use strict"
var searchNumber;
var i;
var isFound = false;
var randomNumbers = [];
var output = "";

for(i = 1; i <= 10; i++) {
  randomNumbers[i] = Math.floor(Math.random() * (16 - 1)) + 1;
  output = output + "Сгенерированное число[" + i + "из" + 10 + "]=" + randomNumbers[i] + "\n";
}

var searchNumber = prompt("Число для поиска: ");
if ((searchNumber == "") || (isNaN(searchNumber))) {
  alert("Ошибка ввода!");
  windows.stop;
}  

for(i = 1; i <= 10; i++) {
  if (randomNumbers[i] == searchNumber) {
    isFound = true;
  }	
}

if (!isFound) {
  output = output + "Число " + searchNumber + " не найдено!";
} else {
  output = output + "Число " + searchNumber + " найдено!";
}
alert(output);
