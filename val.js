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

    if (cpNumberValue == "+63 ") {
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
  let alp = /[A-Za-z]/;
  if (alp.test(lastNameValue) == true) {
    return true;
  }
  else{
    alert("Alphabet lang hoy!!!");
    return false;
  }
}

function First() {
  var firstNameValue = document.getElementById("firstName").value;
  let alp1 = /[A-Za-z]/;
  if (alp1.test(firstNameValue) == true) {
    return true;
  }
  else{
    alert("Alphabet lang hoy!!!");
    return false;
  }
}

function MI() {
  var MiddleValue = document.getElementById("Middle").value;
  let alp2 = /[A-Za-z]/;
  if (alp2.test(MiddleValue) == true) {
    return true;
  }
  else{
    alert("Alphabet lang hoy!!!");
    return false;
  }
}
function StudentNo() {
  var StudentNumberValue = document.getElementById("StudentNumber").value;
  let number = /[0-9]/;
  if (number.test(StudentNumberValue) == true) {
    return true;
  }
  else{
    alert("Numbers lang Hoy!!!");
    return false;
  }
}
function Pass() {
  var PasswordValue = document.getElementById("Password").value;
  let pass = /[a-zA-Z0-9]/;
  if (pass.test(PasswordValue) == true) {
    return true;
  }
  else{
    alert("Alphanumeric lang pwede!!!");
    return false;
  }
}

function User() {
  var UsernameValue = document.getElementById("Username").value;
  let user = /[A-Za-z\-\_]/;
  if (user.test(UsernameValue) == true) {
    return true;
  }
  else{
    alert("Dash and Underscore lang pwede Hoy!!!")
    return false;
  }
}

function Phone(){
  var cpNumberValue = document.getElementById("cpNumber").value;
  let no = /[0-9\+]/;
  if (no.test(cpNumberValue) == true) {
    return true;
  }
  else{
    alert("Mali yan kapatid!!!");
    return false;
  }
}
function Bday(){
  var BirthdayValue = document.getElementById("Birthday").value;
  let day =/^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/;
  if (day.test(BirthdayValue) <= 2003) {
    alert("You must be 18 years old and above");
    return true;
  }
  else{
    return false;
  }
}

/*
function phonenumber(str){
        var phoneno = /^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/;
        if(cpNumber.value.match(phoneno)){
            return true;
        }

        else{
            alert("Invalid format for mobile number")
            return false;
        }
}
*/
/*

function Phone(){
  var cpNumberValue = document.getElementById("cpNumber").value;
  let no = /[0-9\+]/;
  if (no.test(cpNumberValue) == true) {
    return true;
  }
  else{
    alert("Mali yan kapatid!!!");
    return false;
  }
}
*/