<?php
$firstname = $_POST['firstname'];
$lastname = $_POST['lastname'];
$email = $_POST['email'];
$subject = $_POST['subject'];

//Database connectivity
$conn = new mysqli('localhost','root','','dairy');
if($conn->connect_error){
    echo "$conn->connect_error";
    die("Connection Failed : ". $conn->connect_error);
} else {
    $stmt = $conn->prepare("insert into query(firstName, lastName, email, subject) values(?, ?, ?, ?)");
    $stmt->bind_param("ssss", $firstName, $lastName, $email, $subject);
    $execval = $stmt->execute();
    echo $execval;
    echo "Query sent successfully....";
    $stmt->close();
    $conn->close();
}
?>