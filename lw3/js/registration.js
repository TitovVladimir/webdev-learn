function registration(form){
  var userEmail = $("#email").val();
  var userPass = $("#password").val();
  var userPassCheck = $("#password_repeat").val();
  var userAgreement = $("#check_agreement").prop("checked");
  var CheckMail = (/[^\s@]+@[^\s@]+\.[^\s@]+/.test(userEmail));

  if ((userEmail.length < 5) || (!CheckMail)) {
    alert("Не правильно введён Email.");
  }

  if (userPass.length < 6) {
    alert("Пароль не соответствует требованиям!");
  }

  if (userPass != userPassCheck) {
    alert("Пароли не совпадают!");
  }

  if (!userAgreement){
    alert("Соглашение не подтвержденно!");
  }
};