function validate(form){
  var userEmail = $("#email").val();
  var userPass = $("#password").val();
  var userPassCheck = $("#passwordcheck").val();
  var userAgreement = $("#checkagreement").prop("checked");
  var CheckMail = (/[^\s@]+@[^\s@]+\.[^\s@]+/.test(userEmail));

  if ((userEmail.length < 5) || (!CheckMail)) {
    alert("�� ��������� ����� Email.");
    windows.stop();
  }

  if ((userPass.length < 6) || (userPass == "") || (userPassCheck == "")) {
    alert("������ �� ������������� �����������!");
    windows.stop();
  }

  if (userPass != userPassCheck) {
    alert("������ �� ���������!");
    windows.stop();
  }

  if (!userAgreement){
    alert("���������� �� �������������!");
    windows.stop();
  }
};