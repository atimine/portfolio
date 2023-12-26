<?php
$host = "localhost";
$username = "root";
$password = "";
$dbname = "my_data";

$conn = new PDO("mysql:host=$host;dbname=$dbname",$username, $password);

if($conn){
    echo "Connected";
}
$name = $_POST["name"];
$password = $_POST["password"];

$conn->exec("INSERT INTO admin_panel(username,pasword) VALUES('$name','$password')");

?>