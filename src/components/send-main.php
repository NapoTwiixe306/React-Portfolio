<?php

if (isset($_POST['submit'])) {
  $fname = $_POST['firstname'];
  $lname = $_POST['lastname'];
  $email = $_POST['email'];
  $subject = $_POST['subject'];

  // Validation des données
  if (!empty($fname) && !empty($lname) && !empty($email) && !empty($subject)) {
    // Envoi de l'email
    $to = "julien.milants@gmail.com"; // remplacez par l'email de destination
    $headers = "From: " . $email . "\r\n";
    $headers .= "Reply-To: " . $email . "\r\n";
    $headers .= "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: text/html; charset=UTF-8\r\n";
    $message = "First Name: " . $fname . "<br>";
    $message .= "Last Name: " . $lname . "<br>";
    $message .= "Email: " . $email . "<br>";
    $message .= "Subject: " . $subject;
    mail($to, $subject, $message, $headers);

    // Confirmation de l'envoi
    echo "Your message has been sent successfully.";
  } else {
    // Message d'erreur
    echo "All fields are required.";
  }
}

?>
