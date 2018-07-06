<?php
$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];

$subject = "Message";
$body = "From $name, $email,  \n\n$message";

$to = "hilavin@gmail.com";

mail($to, $subject, $body);
?>d