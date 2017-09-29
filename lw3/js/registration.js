function registration(form){
  var userEmail = document.getElementById('email');
  var userPass = document.getElementById('password');
  var userPassRepeat = document.getElementById('password_repeat');
  var userAgreement = document.getElementById('check_agreement');    
  var CheckMail = (/[^\s@]+@[^\s@]+\.[^\s@]+/.test(userEmail.value));
    
  if ((userEmail.value != "") || (userPass.value != "") || (userPassRepeat.value != "")) {
    if ((userEmail.value.length < 5) || (!CheckMail)) {
      alert("Не правильно введён Email.");
    } else {
      if (userPass.value.length < 6) {
        alert("Пароль не соответствует требованиям!");
      } else {
        if (userPass.value != userPassRepeat.value) {
          alert("Пароли не совпадают!");
        } else {
          if (!userAgreement.checked){
            alert("Соглашение не подтвержденно!");
          } else {
		        alert("Регистрация завершенна!");
		      }
    		}
	    }
  	}
  } else {
	  alert("Не все поля заполнены!");
  }
};
