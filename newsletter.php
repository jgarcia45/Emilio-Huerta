<?php
if(isset($_POST['news']))
$news = $_POST['news'];

$recipient = "harman2to1@gmail.com";
mail($recipient, "New Newsletter Subscriber", "Test Test") or die("Error!");
echo "Email sent!";

?>