<?php
$dbname = 'ngdb';
$dbuser = 'root';
$dbpass = 'root';

if(!isset($_GET['userid'])) {
	die("Invalid user id or user id does not exist");
}

$conn = new mysqli("localhost", $dbuser, $dbpass, $dbname);
if($conn->connect_error) {
	die("Connection failed: " . $conn->connect_error);
}


$result = $conn->query("SELECT * FROM users WHERE userid = " . $_GET['userid']);
$output = '';

while($rs = $result->fetch_array(MYSQLI_ASSOC)) {
	if($output != '') { $output .= ',';}

	$output .= '{"userid":"' . $rs["userid"] . '",';
	$output .= '"username":"' . $rs["username"] . '",';
	$output .= '"email":"' . $rs["email"] . '"}';
}

$output = '{"records":[' . $output . ']}';
$conn->close();
echo ($output);
?>