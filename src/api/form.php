<?php

$fields = [
  'sender_name' => filter_var($_POST['sender_name'], FILTER_SANITIZE_STRING),
  'sender_email' => filter_var($_POST['sender_email'], FILTER_SANITIZE_EMAIL),
  'sender_message' => filter_var($_POST['sender_message'], FILTER_SANITIZE_STRING),
];

    $mail_to = "info@laraschoen.com";
    $name = $fields['sender_name'];
    $mail_from = $fields['sender_email'];
    $message = $fields['sender_message'];

    $subject =  $name . " " . 'form submission';

    $body_message = 'From: ' . $name . "\r\n";
    $body_message .= 'E-mail: ' . $mail_from . "\r\n";
    $body_message .= 'Message: ' . $message;

    $headers = 'From: ' . $mail_from . "\r\n";
    $headers .= 'Reply-To: ' . $mail_from . "\r\n";

mail($mail_to, $subject, $body_message, $headers);

?>