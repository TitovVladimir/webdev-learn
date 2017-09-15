"use strict"
var k;
var N;
var i;
var z=1;
var a = [];
var output = "";

  N=10;

  
  var k = prompt("Число для поиска: ");
  
  for(i = 1; i <= N; i++){
	  a[i] = Math.floor(Math.random() * (16 - 1)) + 1;
	  output = output + "Сгенерированное число[" + i + "из" + N + "]=" + a[i] + "\n";
	  if (a[i] == k){
		  z = 2;
	  }	
  }
  if (z == 2)  {
	 output = output + "Число " + k + " найдено!";
  } else {
	 output = output + "Число " + k + " не найдено!";
	}
  	  alert(output);
	  
  
  
  
