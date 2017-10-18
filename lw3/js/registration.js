function Reg(options){
  var elem = options.elem;
  this.init = function() {
	 // this.email = $(elem).find('.email').val();
    this.email = document.getElementById('email');
	console.log(this.email);
    this.pass = document.getElementById('password');
	console.log(this.pass);
    this.passRepeat = document.getElementById('password_repeat');
	console.log(this.passRepeat);
    this.agreement = document.getElementById('check_agreement');
	console.log(this.agreement);
  }

  validate = function() {
	var CheckMail = (/[^\s@]+@[^\s@]+\.[^\s@]+/.test(this.email.value));
      if ((this.email.value.length < 5) || (!CheckMail)) {
        alert("Не правильно введён Email.");
      } 
      if (this.pass.value.length < 6) {
        alert("Пароль не соответствует требованиям!");
      }
      if (this.pass.value != this.passRepeat.value) {
        alert("Пароли не совпадают!");
      } 
      if (!this.agreement.checked){
        alert("Соглашение не подтвержденно!");
      }    
  }
  
  success = function() {
	  
  }
  error = function() {
	  
  }
  elem.onsubmit = function() {
	validate();
  }
}

window.onload = function() {
  	  var reg = new Reg({
        elem: document.getElementById('registration')
      });
	  reg.init();
}	
