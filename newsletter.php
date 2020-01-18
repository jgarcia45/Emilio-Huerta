<?php
if(isset($_POST['news']))
$news = $_POST['news'];

$recipient = "EmiliosNewsletter@gmail.com";
mail($recipient, "News Letter Subscriber", "Test Test") or die("Error!");
echo "Email sent!";

?>