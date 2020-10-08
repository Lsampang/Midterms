function validateAll(){
    
    if (myFunction){
        document.form.submit();
    }
}

function myFunction() {
    
    var usernameValue = document.getElementById("username").value;
    var passwordValue  = document.getElementById("password").value;
	var letters = /^[A-Za-z]+$/;
    
      if (usernameValue == "") {
        setErrorFor(username, 'Username cannot be blank');
      return false;
      }  else {
        setSuccessFor(username);
      
      }

    
   
    
    
    if (passwordValue == "") {
        setErrorFor(password, 'Username cannot be blank');
 return false;
      }  else {
        setSuccessFor(password);

      }

   if(usernameValue.value.match(letters))
      {
     setSuccessFor(username);
      return true;
      }
      else
      {
      alert('Please input alphabet characters only');
      return false;
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