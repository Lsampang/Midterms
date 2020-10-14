function validateAll(){
    
    if (myFunction()){
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
    var Emailreg = /[@]ue.edu.ph/gi;


      if (lastNameValue == "") {
        setErrorFor(lastName, 'Please input your last name');
      return false;
      }  else {
        if (isLetter()) {
          setSuccessFor(lastName);
        }else{
          setErrorFor(lastName,"Last name must contains only alphabets");
          return false;
        }      
      }

    
    if (UsernameValue == "") {
        setErrorFor(Username, 'Please input your username');
      return false;
      }  else {
        if (User()) {
          setSuccessFor(Username);
        }else{
          setErrorFor(Username,"Username must contain alphabets, dash, and underscore only");
          return false;
        }      
      }
    
    
    if (PasswordValue == "") {
        setErrorFor(Password, 'Please input your password');
      return false;
      }  else {
        if (Pass()) {
          setSuccessFor(Password);
        }else{
          setErrorFor(Password,"Password must contain alphanumeric values only");
          return false;
        }      
      }

    
    if (firstNameValue == "") {
        setErrorFor(firstName, 'Please input your first name');
      return false;
      }  else {
        if (First()) {
          setSuccessFor(firstName);
        }else{
          setErrorFor(firstName,"First name contains only alphabets");
          return false;
        }      
      }

    if (StudentNumberValue == "") {
      setErrorFor(StudentNumber, 'Please input your student number');
      return false;
    } else {
        if (StudentNo()) {
          setSuccessFor(StudentNumber);
        }else{
          setErrorFor(StudentNumber,"Student number must contain numerical value only");
          return false;
        }      
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
      var newbdayValue = BirthdayValue.replace(/-/,"");
    }
    if (newbdayValue > "20021010"){
      setErrorFor(Birthday, "You must be 18 and above");
    }else{
      setSuccessFor(Birthday);
    }

    if (cpNumberValue == "") {
      setErrorFor(cpNumber, 'Please input your mobile number');
      return false;
    } else {
        if (Phone()) {
          setSuccessFor(cpNumber);
        }else{
          setErrorFor(cpNumber,"Mobile number number must contain numerical value only");
          return false;
        }      
      }
    
    if (EmailValue == "") {
      setErrorFor(Email, 'Please input your Email');
      return false;
    }if (Emailreg.test(EmailValue)) {
      if(EmailValue.length < 15){
        setErrorFor(Email, "Please complete your ue email");
        return false;
      }else{
        setSuccessFor(Email);
      }
      
    } 
    else{
      setErrorFor(Email, "Please input valid ue email");
      return false;
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
      alert("Alphabet lang hoy!!!");
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
      alert("Alphabet lang hoy!!!");
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
      alert("Alphabet lang hoy!!!");
      return false;
    }   
  }
  else{
    return true;
  }
}

function StudentNo() {
  var StudentNumberValue = document.getElementById("StudentNumber").value;
  if (/[\d\W]/.test(StudentNumberValue) == true){
    if (/[A-Za-z\$&+,:;=?@#|'<>.^*()%!]+$/.test(StudentNumberValue) == true) {
      alert("mali");
      return false;
    }else{
      StudentNumberValue = StudentNumberValue.slice(0,-1);
      return true;
    }
  }
  else{
    alert("mali");
    return true;
  }
  }

function Pass() {
  var PasswordValue = document.getElementById("Password").value;
  let pass = /[^a-zA-Z0-9]/;
  if (pass.test(PasswordValue) == true){
    if (/[\w\W]/.test(PasswordValue) == true){
      alert("Alphanumeric lang pwede!!!");
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
  if (/[A-Za-z\_\-]/.test(UsernameValue) == true) {
    if (/[\d\$&+,:;=?@#|'<>.^*()%!]+$]/.test(UsernameValue) == true){
      alert("mali");
      return false;
    }else{
      UsernameValue = UsernameValue.slice(0,-1);
      return true;
    }
  }
  else{
    alert("mali");
    return true;
  }
}


function Phone(){
  var cpNumberValue = document.getElementById("cpNumber").value;
  if (/[\d\W]/.test(cpNumberValue) == true){
    if (/[A-Za-z\$&+,:;=?@#|'<>.^*()%!]+$/.test(cpNumberValue) == true) {
      alert("mali");
      return false;
    }else{
      cpNumberValue = cpNumberValue.slice(0,-1);
      return true;
    }
  }
  else{
    alert("mali");
    return true;
  }
}