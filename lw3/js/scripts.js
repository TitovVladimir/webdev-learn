function validate(form){
  var userEmail = $("#email").val();
  var userPass = $("#password").val();
  var userPassCheck = $("#passwordcheck").val();
  var userAgreement = $("#checkagreement").prop("checked");
  var CheckMail = (/[^\s@]+@[^\s@]+\.[^\s@]+/.test(userEmail));

  if ((userEmail.length < 5) || (!CheckMail)) {
    alert("Не правильно введён Email.");
    windows.stop();
  }

  if (userPass.length < 6) {
    alert("Пароль не соответствует требованиям!");
    windows.stop();
  }

  if (userPass != userPassCheck) {
    alert("Пароли не совпадают!");
    windows.stop();
  }

  if (!userAgreement){
    alert("Соглашение не подтвержденно!");
    windows.stop();
  }
};