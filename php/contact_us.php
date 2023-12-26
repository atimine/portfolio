<?php 
$host = "localhost";
$username = "root";
$password = "";
$dbname = "my_data";

$conn = new PDO("mysql:host=$host;dbname=$dbname",$username,$password);

if ($conn){
    echo "Connected";
}
$fname = $_POST["fname"];
$lname = $_POST["lname"];
$email = $_POST["email"];
$phone = $_POST["phone"];
$comment = $_POST["comment"];

$conn->exec("INSERT INTO contact_us(first_name,last_name,email,phone_number,coment) VALUES('$fname','$lname','$email','$phone','$comment')");
?>
<a href="../html/contact_us.htm"><br>Back to Home Page</a>