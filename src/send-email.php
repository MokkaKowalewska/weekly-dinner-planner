<?php


ini_set("SMTP", "serwer1940016.home.pl ");
ini_set("sendmail_from", "hello@monikakowalewska.pl");
ini_set("smtp_port", "465");


if(isset($_POST["name"]) && isset($_POST["email"]) && isset($_POST["message"])) {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = nl2br($_POST["message"]);
    $to = $email;
    $from = "hello@monikakowalewska.pl";
    $subject = "Weekly Dinner Planner - Your dinner plan for this week;
    $content = "<h1>weekly dinner planner</h1>" . "<h2>Hi! Here is Your dinner plan for this week:</h2><br><br>" . $message . "<img src="https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80" alt="food photo">" . "<br>Thanks for using Weekly Dinner Planner. Have a wonderful dinner! Hope to see You soon!";
    $headers = "From: $from\n";
    $headers .= "MIME-Version: 1.0\n";
    $headers .= "Content-type: text/html; charset=iso-8859-1\n";

        if(mail($to, $subject, $content, $headers))  {
            echo "success";
        } else {
            echo "Oopsie! The server failed to send the message. I'm sorry, could You try again later?";
        }


}


?>
