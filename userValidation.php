<?php

$username = $_POST['username'];
$passwordOrig = $_POST['password'];


		insertRecord($username,$passwordOrig);
       
	


function insertRecord($username,$password) {
 try {
 require 'opendb.php';
     
  $sql = "INSERT INTO logintable1 (username,  password) VALUES (?,?)";

     
  // use exec() because no results are returned 
     $conn->prepare($sql)->execute([$username,$password]);


  echo '<script>
  				alert("Congratulations, you are now registered!");
					</script>';
} catch(PDOException $e) {
  echo $sql . "<br>" . $e->getMessage();
}

$conn = null;
}

?>