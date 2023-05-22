<?php
	$name = $_POST['name'];
	$address = $_POST['address'];
	$email = $_POST['email'];
	$degree = $_POST['degree'];
	$number = $_POST['number'];
	$institution = $_POST['institution'];
    $year = $_POST['year'];
	$syear = $_POST['syear'];
    $percentage = $_POST['percentage'];
    $mark_ten = $_POST['mark_ten'];



    

	// Database connection
	$conn = new mysqli('localhost','root','','test');
	if($conn->connect_error){
		echo "$conn->connect_error";
		die("Connection Failed : ". $conn->connect_error);
	} else {
		$stmt = $conn->prepare("insert into registration(name, address, email, degree, number,institution, year, syear, percentage, mark_ten) values(?, ?, ?, ?, ?, ?, ?, ?, ?, ?)");
		$stmt->bind_param("ssssisssss", $name, $address, $email, $degree, $number, $institution, $year, $syear, $percentage, $mark_ten);
		$execval = $stmt->execute();
		echo $execval;
		echo "YOUR APPLICATION FORM HAVE BEEN SUBMITTED SUCCESSFULLY...";
		$stmt->close();
		$conn->close();
	}
?>