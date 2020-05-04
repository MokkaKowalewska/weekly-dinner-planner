<?php


ini_set("SMTP", "smtp_server_here");
ini_set("sendmail_from", "mail_here");
ini_set("smtp_port", "465");


if(isset($_POST["email"]) && isset($_POST["message"])) {
    $email = $_POST["email"];
    $message = nl2br($_POST["message"]);
    $to = $email;
    $from = "mail_here";
    $subject = "Weekly Dinner Planner - Your dinner plan for this week";
    $content = "<html>
    <head></head>
    <body style='font-family:sans-serif; text-align:center' align='center'>
      <h1>weekly dinner planner</h1>
    <h2>Hi! Here is Your dinner plan for this week:</h2>" . $message . "<br><br><img src='https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=750&amp;q=80' alt='Food photo' style='width:200px' width='200'>
    <br>
    <p style='color:grey'>Thanks for using Weekly Dinner Planner. Have a wonderful dinner!</p>
    <p style='color:salmon; font-size:12px'>If You need anything, just hit reply or email me at <a href='mailto:hello@monikakowalewska.pl'>hello@monikakowalewska.pl</a>. Hope to see You soon!</p>
    <p style='color:lightgrey; font-size:11px'>xoxo<br>Monika Kowalewska from Weekly Dinner Planner</p>
    </body>
    </html>";
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
