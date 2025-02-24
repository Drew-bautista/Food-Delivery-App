<?php
if(isset($_REQUEST['submit'])){

	if(isset($_GET['id'])) {



		$name = basename(time() . "-"  . $_GET['id'] .".".pathinfo($_FILES['files']['name'], PATHINFO_EXTENSION));

		$target="uploads/". $name;

		if(move_uploaded_file($_FILES['files']['tmp_name'],$target)){

			$servername = "184.168.113.18";
			$username = "diether";
			$password = "password";
			$dbname = "diether";

			// Create connection
			$conn = new mysqli($servername, $username, $password, $dbname);

			// Check connection
			if (!$conn) {
			  die("Connection failed: " . mysqli_connect_error());
			}

			$sql = "UPDATE `users` SET `resume_status`=1 WHERE `id`=" . $_GET['id'];

			$conn->query($sql);

			$sql = "UPDATE `users` SET `resume_link`='" . $name . "' WHERE `id`=" . $_GET['id'];

			$conn->query($sql);

			$conn->close();

			echo "uploaded";
		}
		else{
			echo "failed";
		}


	} else {

		$name = basename(time() . ".".pathinfo($_FILES['files']['name'], PATHINFO_EXTENSION));

		$target="uploads/". $name;

		if(move_uploaded_file($_FILES['files']['tmp_name'],$target)){
			echo "uploaded";
		}
		else{
			echo "failed";
		}
	}


}
