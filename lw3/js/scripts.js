function validate(form){
  var userEmail = document.getElementById('email');
  var userPass = document.getElementById('password');
  var userPassCheck = document.getElementById('passwordcheck');
  var userAgreement = document.getElementById('checkagreement');    
  var CheckMail = (/[^\s@]+@[^\s@]+\.[^\s@]+/.test(userEmail.value));
    

  if ((userEmail.value.length < 5) || (!CheckMail)) {
    alert("Не правильно введён Email.");
  }

  if ((userPass.value.length < 6) || (userPass = "") || (userPassCheck = "")) {
    alert("Пароль не соответствует требованиям!");
  }

  if (userPass.value != userPassCheck.value) {
    alert("Пароли должны совпадать");
  }

  if (!userAgreement.checked){
    alert("Пользовательское соглашение не принято!");
  }
};