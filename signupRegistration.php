<?php

$lastName = $_POST['lastName'];
$Username = $_POST['Username'];
$firstName = $_POST['firstName'];
$Middle = $_POST['Middle'];
$Password = $_POST['Password'];
$StudentNumber = $_POST['StudentNumber'];
$ConfirmPass = $_POST['ConfirmPass'];
$Year = $_POST['Year'];
$Birthday = $_POST['Birthday'];
$cpNumber = $_POST['cpNumber'];
$Email = $_POST['Email'];


if ($Password == $ConfirmPass) {
		insertRecord($lastName,$Username,$firstName,$Middle,$Password,$StudentNumber,$ConfirmPass,$Year,$Birthday,$cpNumber,$Email);
       
	}
	else {
		echo '<script>
  				alert("Invalid Password!");
					</script>';

		echo '<script>
				window.history.go(-1);
					</script>';
		}






function insertRecord($lastName,$Username,$firstName,$Middle,$Password,$StudentNumber,$ConfirmPass,$Year,$Birthday,$cpNumber,$Email) {
 try {
 require 'openDataB.php';
     
  $sql = "INSERT INTO registration (lastName,Username,firstName,Middle,Password,StudentNumber,ConfirmPass,Year,Birthday,cpNumber,Email) VALUES (?,?,?,?,?,?,?,?,?,?,?)";
     
     
  // use exec() because no results are returned 
     $conn->prepare($sql)->execute([$lastName,$Username,$firstName,$Middle,$Password,$StudentNumber,$ConfirmPass,$Year,$Birthday,$cpNumber,$Email]);


  echo '<script>
  				alert("Congratulations, you are now registered!");
					</script>';
} catch(PDOException $e) {
  echo $sql . "<br>" . $e->getMessage();
}

$conn = null;
}

?>