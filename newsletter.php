<?php
if(isset($_POST['email']))
$email = $_POST['email'];

$message = "Here are the instructions on how to add someone to the newsletter label. \n
            1) Copy the email that was sent with this email. $email \n
            2) On the top right of the screen there is a icon of nine cubes. Click on that and click on Contacts. \n
            3) Near the top left of the Screen click on Create Contact. A window will pop up. \n
            4) Type in or paste in the email you saved from this message. Here it is again. $email \n
            5) The contact should pop up in your list of contact. Click on the new contact and drag it over the label called --> Emilio's Newsletter <-- and that should add the contact to the newsletter. \n
            \n \n \n \n
            
            If you want to Send an Email to your subscribers \n
            1) If you want to send to an email to all subscribers. Go to your G-mail page. Click on the plus sign or the compose button. A new email box should pop up. \n
            2) In the To section type the name of the label. --> Emilio's Newsletter <-- and autofill should kick in. Click on the option and you're good to go. Fill out what you want to send and send it."; 


$recipient = "EmiliosNewsletter@gmail.com";
$mailheader = "From: $email \r\n";
mail($recipient, "New Newsletter Subscriber", $message, $mailheader) or die("Error!");
echo "Email sent!";

?>