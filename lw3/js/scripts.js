function validate(form){
  var userEmail = document.getElementById('email');
  var userPass = document.getElementById('password');
  var userPassCheck = document.getElementById('passwordcheck');
  var userAgreement = document.getElementById('checkagreement');    
  var CheckMail = (/[^\s@]+@[^\s@]+\.[^\s@]+/.test(userEmail.value));
    

  if ((userEmail.value.length < 5) || (!CheckMail)) {
    alert("�� ��������� ����� Email.");
  }

  if ((userPass.value.length < 6) || (userPass = "") || (userPassCheck = "")) {
    alert("������ �� ������������� �����������!");
  }

  if (userPass.value != userPassCheck.value) {
    alert("������ ������ ���������");
  }

  if (!userAgreement.checked){
    alert("���������������� ���������� �� �������!");
  }
};