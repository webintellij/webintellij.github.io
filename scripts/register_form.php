<?php
// Check for empty fields
if(empty($_POST['firstName'])  		||
   empty($_POST['eventId']) 		||
   empty($_POST['lastName']) 		||
   empty($_POST['payDate']) 		||   
   empty($_POST['category'])	    ||
   empty($_POST['docNumber'])	    ||
   empty($_POST['phone'])	        ||
   empty($_POST['email'])	        ||
   !filter_var($_POST['email'],FILTER_VALIDATE_EMAIL))
   {
    echo "No arguments Provided! \n";
    throw new Exception("No arguments Provided!");
    return false;	
   }

   $formData = $_POST;   

if(!empty($_FILES['document']['name'])) {
    $name_of_uploaded_file =basename($_FILES['document']['name']);        
    getFile( $name_of_uploaded_file, $formData );
} else {
    sendMail($formData);
}

function getFile( $filename , $formData ) {
    
    $allowedExts = array("csv","pdf", "jpg", "png", "jpeg");
    $temp = explode(".", $_FILES["document"]["name"]);
    $extension = end($temp);
    $mimes = array('image/png', 'image/jpeg', 'application/pdf', 'application/vnd.ms-excel','text/plain','text/csv','text/tsv');    
    if (in_array($_FILES['document']['type'],$mimes )
    && ($_FILES["document"]["size"] < 2000000)
    && in_array($extension, $allowedExts)) {
      if ($_FILES["document"]["error"] > 0) {
            echo "Return Code: " . $_FILES["document"]["error"] . "<br>";
            throw new Exception("Return Code: " . $_FILES["document"]["error"]);
            return false;
        } else {      
            sendMailAsAttachment($_FILES["document"]["tmp_name"],$_FILES["document"]["name"],$formData);         
        }
      } else {
        echo "Invalid file";
        throw new Exception("Invalid file");
        return false;
      }  
}

function prepareEmail( $formData, $isAttach, $filename, $fileorgname ) {

    $firstName = $formData['firstName'];
    $lastName = $formData['lastName'];
    $payDate = $formData['payDate'];
    $amount = $formData['amount'];
    $billNumber = $formData['billNumber'];
    $category = $formData['category'];
    $docNumber = $formData['docNumber'];
    $phone = $formData['phone'];
    $email_address = $formData['email'];
    $eventId = $formData['eventId'];

    if(empty($formData['amount'])) {
        $amount = "0";
    }
    if(empty($_POST['billNumber'])) {
        $billNumber = "0";
    }

    $categoryName = "";
    switch ($category) {
        case "a":
            $categoryName .= "SOCIO";
            break;
        case "b":
            $categoryName .= "NO SOCIO";
            break;
        case "c":
            $categoryName .= "RESIDENTE";
            break;
        default:
            $categoryName .= "ESTUDIANTE";
    }

    $categoryName = $category;

    //include database configuration file
    include_once 'dbConfig.php';
    
    //insert form data in the database
    $query = "INSERT INTO accrg_subscriber (                             
                            event_id, 
                            first_name, 
                            last_name, 
                            pay_date, 
                            catergory_name, 
                            subscriber_cui, 
                            amount, 
                            bill_number, 
                            phone, 
                            email) 
                VALUES ($eventId,'". $firstName ."','". $lastName ."','". $payDate ."',
                          '". $categoryName."','". $docNumber ."','". $amount ."',
                          '". $billNumber ."','". $phone ."','". $email_address ."')";
    $insert = $db->query($query);    
    
    echo $insert?'Row inserted ok':'err';
    echo " \n";

    $to = "contactenos@accrg.net, oscar.enriquez.torre@gmail.com";
    // $to = "oscar.enriquez.torre@gmail.com";
    $email_subject = "Website ACCRG Formulario de Incripcion:  $firstName $lastName";
    $email_body = "";
    $html_body = "
    <html>
    <head>
    <title>Formulario de incripcion</title>
    <style> th { background-color:blue; color: white; text-align: right;}</style>
    </head>
    <body>
    <p>A continuaci&oacute;n encontrara la informaci&oacute;n del participante!</p>
    <table>
    <tr>
    <th>Nombres</th>
    <td>$firstName</td>
    </tr>
    <tr>
    <th>Apellidos</th>
    <td>$lastName</td>
    </tr>
    <tr>
    <th>Fecha de pago</th>
    <td>$payDate</td>
    </tr>
    <tr>
    <th>Cantidad Cancelada</th>
    <td>Q. $amount</td>
    </tr>
    <tr>
    <th>No. de boleta de pago</th>
    <td>$billNumber</td>
    </tr>
    <tr>
    <th>No. Colegiado / Carn&eacute;</th>
    <td>$docNumber</td>
    </tr>
    <tr>
    <th>Tipo de Participante</th>
    <td>$categoryName</td>
    </tr>
    <tr>
    <th>Tel&eacute;fono</th>
    <td>$phone</td>
    </tr>
    <tr>
    <th>E-mail</th>
    <td>$email_address</td>
    </tr>
    </table>
    </body>
    </html>
    ";


    $headers = 'From: noreply@accrg.net' . "\n"; // This is the email address the generated message will be from. We recommend using something like noreply@yourdomain.com.
    $headers .= "Reply-To: $email_address" . "\n";
    
    // Always set content-type when sending HTML email
    $headers .= "MIME-Version: 1.0" . "\n";            

    if($isAttach) {
        echo "Prepando attachment \n";
        // boundary 
        $semi_rand = md5(time()); 
        $mime_boundary = "==Multipart_Boundary_x{$semi_rand}x"; 

        // headers for attachment 
        $headers .= "Content-Type: multipart/mixed;" . "\n";
        $headers .= " boundary=\"{$mime_boundary}\"";        
    
        // multipart boundary 
        $email_body .= "--{$mime_boundary}\n" . "Content-Type: text/html; charset=\"UTF-8\"\n" . 
            "Content-Transfer-Encoding: 7bit\n\n" . $html_body . "\n\n";

        $attachContent = prepareAttachment( $filename, $fileorgname, $mime_boundary );
        $email_body .= $attachContent;
    } else {
        $headers .= "Content-Type: text/html; charset=\"UTF-8\"\n";
        $email_body .= $html_body;
    }
    
    
    $emailData = array (
        'to' => $to,
        'from' => $from,
        'subject' => $email_subject,
        'headers' => $headers,
        'message' => $email_body
    );
    
    return $emailData;
    
}

function prepareAttachment( $filename ,$fileorgname, $mime_boundary) {
    
    $attachContent = "--{$mime_boundary}\n";
    $file = fopen($filename,"rb");
    $data = fread($file,filesize($filename));
    fclose($file);
    $cvData = chunk_split(base64_encode($data));
    $attachContent .= "Content-Type: \"application/octet-stream; name=\"$fileorgname\"\n" . 
    "Content-Disposition: attachment;\n" . " filename=\"$fileorgname\"\n" . 
    "Content-Description: $fileorgname \n" .
    "Content-Transfer-Encoding: base64\n\n" . $cvData . "\n\n";
    $attachContent .= "--{$mime_boundary}--"; 
    return $attachContent;
    
}

function sendMailAsAttachment( $filename, $fileorgname, $formData ) {    
    $emailData = prepareEmail( $formData, TRUE, $filename, $fileorgname );    
    $message = $emailData['message'];    
    $ok = @mail($emailData['to'], $emailData['subject'], $message, $emailData['headers']); 
    if ($ok) { 
            echo "<p>mail sent to $to!</p>"; 
            return true;
    } else { 
            echo "<p>mail could not be sent!</p>"; 
            throw new Exception("Mail could not be sent!");
            return false;
    } 
}

function sendMail( $formData ) {    
    $emailData = prepareEmail( $formData, FALSE, NULL, NULL );    
    $message = $emailData['message'];
    $ok = @mail($emailData['to'], $emailData['subject'], $message, $emailData['headers']); 
    if ($ok) { 
            echo "<p>mail sent to $to!</p>"; 
            return true;
    } else { 
            echo "<p>mail could not be sent!</p>"; 
            throw new Exception("Mail could not be sent!");
            return false;
    } 
}
?>

