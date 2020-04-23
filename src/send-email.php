<?php


ini_set("SMTP", "serwer1940016.home.pl");
ini_set("sendmail_from", "hello@monikakowalewska.pl");
ini_set("smtp_port", "465");


if(isset($_POST["email"]) && isset($_POST["message"])) {
    $email = $_POST["email"];
    $message = nl2br($_POST["message"]);
    $to = $email;
    $from = "hello@monikakowalewska.pl";
    $subject = "Weekly Dinner Planner - Your dinner plan for this week";
    $content = "<h1>weekly dinner planner</h1><h2>Hi! Here is Your dinner plan for this week:</h2><br><br>" . $message;
    $content .= "obrazek<br>Thanks for using Weekly Dinner Planner. Have a wonderful dinner! Hope to see You soon!";
    $headers = "From: $from\r\n";
    $headers .= "MIME-Version: 1.0\r\n";
    $headers .= "Content-type: text/html; charset=iso-8859-1\r\n";


        if(mail($to, $subject, $content, $headers))  {
            echo "success";
        } else {
            echo "Oopsie! The server failed to send the message. I'm sorry, could You try again later?";
        }


}


?>
