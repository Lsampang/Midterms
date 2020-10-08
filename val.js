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