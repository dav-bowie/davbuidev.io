<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'vendor/autoload.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $message = htmlspecialchars($_POST['message']);

    if (!empty($name) && !empty($email) && !empty($message) && filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $mail = new PHPMailer(true);
        try {
            // Server settings
            $mail->isSMTP();                                      // Set mailer to use SMTP
            $mail->Host = 'smtp.gmail.com';                       // Specify main SMTP server (Gmail)
            $mail->SMTPAuth = true;                               // Enable SMTP authentication
            $mail->Username = 'your_gmail@gmail.com';             // Your Gmail address
            $mail->Password = 'your_gmail_password';              // Your Gmail password or app password
            $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;   // Enable TLS encryption
            $mail->Port = 587;                                    // TCP port to connect to

            // Recipients
            $mail->setFrom($email, $name);
            $mail->addAddress('dbui0321@berkeley.edu');           // Your email address

            // Content
            $mail->isHTML(true);                                  // Set email format to HTML
            $mail->Subject = "New message from $name";
            $mail->Body    = nl2br("Name: $name\nEmail: $email\n\nMessage:\n$message");
            $mail->AltBody = "Name: $name\nEmail: $email\n\nMessage:\n$message";

            $mail->send();
            echo 'Message has been sent';
        } catch (Exception $e) {
            echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
        }
    } else {
        echo "Invalid input. Please check your details and try again.";
    }
} else {
    echo "Invalid request method.";
}
?>
