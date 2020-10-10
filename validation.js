function validateAll(){
    
    if (myFunction){
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

