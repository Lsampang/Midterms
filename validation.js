function validateAll(){
    
    if (myFunction){
        document.form.submit();
    }
	
	if (CheckPassword){
		  document.form.submit();
	}
	
	if (CheckUsername){
		  document.form.submit();
	}
	
}

function myFunction() {
    
    var usernameValue = document.getElementById("username").value;
    var passwordValue  = document.getElementById("password").value;
	var letters = /^[A-Za-z\-\_]+$/;
	var alphanumeric = /^[0-9a-zA-Z]+$/;

    
      if (usernameValue == "") {
        setErrorFor(username, 'Username cannot be blank');
      return false;
      }  else {
        setSuccessFor(username);
      
      }

    
   
    
    
    if (passwordValue == "") {
        setErrorFor(password, 'Password cannot be blank');
 return false;
      }  else {
		 
        setSuccessFor(password);

      }
/*
	if (usernameValue == letters){
		allLetter();
		CheckPassword();
	setSuccessFor(username);
		return true;
}
else {
	setErrorFor(username, "User name must inlcude only with alphabet");
	return false;
}


if (passwordValue == alphanumeric){
	setSuccessFor(password);
	return true;
}
else{
	setErrorFor(password, "Password must be alphanumeric");
	return false;
}

   

   */
   
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


function Password() {
  var PasswordValue = document.getElementById("password").value;
  let pass = /[^a-zA-Z0-9]/;
  if (pass.test(PasswordValue) == true){
    if (/[\w\W]/.test(PasswordValue) == true){
      alert("Alphanumeric only");

      return true;
    }else{
      return false;
    }
  }
  else{
    return true;
  }
}

function Username() {
  var UsernameValue = document.getElementById("username").value;
  let user = /[\d]/;
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

 function ShowPassword() {
    var x = document.getElementById("password").value;
    if (x.type === "password") {
    x.type = "text";
return false;
    } else {
    x.type = "password";
return true;
      }
    }
