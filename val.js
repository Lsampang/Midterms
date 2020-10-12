function validateAll(){
    
    if (myFunction){
        document.form.submit();
    }
}

function myFunction() {
    
    var lastNameValue = document.getElementById("lastName").value;
    var UsernameValue  = document.getElementById("Username").value;
    var firstNameValue  = document.getElementById("firstName").value;
    var PasswordValue  = document.getElementById("Password").value;
    var StudentNumberValue = document.getElementById("StudentNumber").value;
    var YearValue  = document.getElementById("Year").value;
    var BirthdayValue = document.getElementById("Birthday").value;
    var cpNumberValue = document.getElementById("cpNumber").value;
    var EmailValue = document.getElementById("Email").value;
    var ConfirmPassValue = document.getElementById("ConfirmPass").value;


      if (lastNameValue == "") {
        setErrorFor(lastName, 'Please input your last name');
      return false;
      }  else {
        setSuccessFor(lastName);
      
      }

    
    if (UsernameValue == "") {
        setErrorFor(Username, 'Please input your username');
      return false;
      }  else {
        setSuccessFor(Username);

      }
    
    
    if (PasswordValue == "") {
        setErrorFor(Password, 'Please input your password');
      return false;
      }  else {
        setSuccessFor(Password);

      }

    
    if (firstNameValue == "") {
        setErrorFor(firstName, 'Please input your first name');
      return false;
      }  else {
        setSuccessFor(firstName);
      
      }

    if (StudentNumberValue == "") {
      setErrorFor(StudentNumber, 'Please input your student number');
      return false;
    } else{
      setSuccessFor(StudentNumber);
    }
    
    if (YearValue == "") {
        setErrorFor(Year, 'Please input your student year');
      return false;
      }  else {
        setSuccessFor(Year);
      
      }

    if (BirthdayValue == "") {
      setErrorFor(Birthday, 'Please input your birthday');
      return false;
    } else{
      setSuccessFor(Birthday);
    }

    if (cpNumberValue == "") {
      setErrorFor(cpNumber, 'Please input your mobile number');
      return false;
    } else{
      setSuccessFor(cpNumber);
    }

    if (EmailValue == "") {
      setErrorFor(Email, 'Please input your Email');
      return false;
    } else{
      setSuccessFor(Email);
    }

    if (ConfirmPassValue == "") {
      setErrorFor(ConfirmPass, 'Please confirm your password');
      return false;
    } else{
      setSuccessFor(ConfirmPass);
    }
    
    return true;    
}

function setErrorFor(input, message) {
  var formControl = input.parentElement;
  var small = formControl.querySelector('small');
  formControl.className = 'form-control error';
  small.innerText = message;
}

function setSuccessFor(input) {
  var formControl = input.parentElement;
  formControl.className = 'form-control success';
}

function isLetter() {
  var lastNameValue = document.getElementById("lastName").value;
  let alp2 =/[\d\W]/;
  if (alp2.test(lastNameValue) == true) {
    if (/(\s)+/.test(lastNameValue)== true) {
      return true;
    } else{
      alert("Alphabet only");
      return false;
    }   
  }
  else{
    return true;
  }
}

function First() {
  var firstNameValue = document.getElementById("firstName").value;
  let alp2 =/[\d\W]/;
  if (alp2.test(firstNameValue) == true) {
    if (/(\s)+/.test(firstNameValue)== true) {
      return true;
    } else{
      alert("Alphabet only");
      return false;
    }   
  }
  else{
    return true;
  }
}

function MI() {
  var MiddleValue = document.getElementById("Middle").value;
  let alp2 =/[\d\W]/;
  if (alp2.test(MiddleValue) == true) {
    if (/(\s)+/.test(MiddleValue)== true) {
      return true;
    } else{
      alert("Alphabet only");
      return false;
    }   
  }
  else{
    return true;
  }
}

function StudentNo() {
  var StudentNumberValue = document.getElementById("StudentNumber").value;
  let number = /[A-Za-z]/;
  if (number.test(StudentNumberValue) == true){
    if (/[\d\W]/.test(StudentNumber) == true) {
      alert("Please input number only!!!");
      return true;
    }else{
      return false;
    }
  
  }
  else{
    return true;
  }
}

function Pass() {
  var PasswordValue = document.getElementById("Password").value;
  let pass = /[^a-zA-Z0-9]/;
  if (pass.test(PasswordValue) == true){
    if (/[\w\W]/.test(PasswordValue) == true){
      alert("Alphanumeric only!!!");
      return true;
    }else{
      return false;
    }
  }
  else{
    return true;
  }
}

function User() {
  var UsernameValue = document.getElementById("Username").value;
  let user = /[\d\$&+,:;=?@#|'<>.^*()%!]/;
  if (user.test(UsernameValue) == true) {
    if (/[\w\W\-\_]/.test(UsernameValue) == true) {
      alert("Please input alphabets and dash/underscore only")
      return true;
    }else{
      return false;
    }
  }
  else{
    return true;
  }
}

function Phone(){
  var cpNumberValue = document.getElementById("cpNumber").value;
  let num = /[A-Za-z]/;
  if (num.test(cpNumberValue) == true){
    if (/[\d\W]/.test(cpNumberValue) == true){
      alert("Please input numbers only");
      return true;
    }else{
      return false;
    }
  
  }
  else{
    return true;
  }
}
/* Not Functiong Well  */
function Bday(){
  var BirthdayValue = document.getElementById("Birthday").value;
  let day =/^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/;
  if (day.test(BirthdayValue) >= 2003) {
    alert("You must be 18 years old and above");
    return true;
  }
  else{
    return false;
  }
}
