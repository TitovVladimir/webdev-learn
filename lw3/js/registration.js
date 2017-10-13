function Reg(){
  var elem = document.getElementById('registration');
  init = function() {
    this.email = document.getElementById('email');
	console.log(this.email);
    this.pass = document.getElementById('password');
	console.log(this.pass);
    this.passRepeat = document.getElementById('password_repeat');
	console.log(this.passRepeat);
    this.agreement = document.getElementById('check_agreement');
	console.log(this.agreement);
  }

  success = function() {
	  
  }
  error = function() {
	  
  }
  elem.onsubmit = function() {
	if ((this.email.value != "") || (this.pass.value != "") || (this.passRepeat.value != "")) {
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
  }
  init();
}


