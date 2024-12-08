<?php
ini_set('display_errors', 1);
error_reporting(E_ALL);

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'vendor/autoload.php';  

header('Content-Type: application/json');


$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];


$smtpHost = 'smtp.hostinger.com';  
$smtpPort = 465;  
$smtpUser = 'support@raghad10.com'; 
$smtpPassword = 'Rr170404#';
$senderEmail = 'support@raghad10.com';  
$senderName = 'Contact Portfolio';  
$recipientEmail = 'kemoamego@gmail.com'; 

$mail = new PHPMailer(true);

try {
    $mail->SMTPDebug = 2;  
    $mail->isSMTP();  
    $mail->Host = $smtpHost;  
    $mail->SMTPAuth = true; 
    $mail->Username = $smtpUser; 
    $mail->Password = $smtpPassword;  
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;  
    $mail->Port = $smtpPort; 

    
    $mail->setFrom($senderEmail, $senderName); 
    $mail->addAddress($recipientEmail, 'Website Contact');  

    
    $mail->isHTML(true); 
    $mail->Subject = 'Website Contact Form Submission'; 
    $mail->Body = "Name: $name<br>Email: $email<br>Message: $message"; 
    $mail->AltBody = "Name: $name\nEmail: $email\nMessage: $message"; 

    
    if ($mail->send()) {
        echo json_encode(['success' => true]);  
    } else {
        echo json_encode(['success' => false, 'error' => 'Failed to send email']); 
    }
} catch (Exception $e) {
    echo json_encode(['success' => false, 'error' => $e->getMessage()]);
    error_log("Error sending email: " . $e->getMessage());
}
?>
