<?php
//DB details
$dbHost = 'localhost';
$dbUsername = 'npkzplmy_accrg_a';
$dbPassword = 'P@$$w0rd';
$dbName = 'npkzplmy_accrg';

//Create connection and select DB
$db = new mysqli($dbHost, $dbUsername, $dbPassword, $dbName);

if($db->connect_error){
    die("Unable to connect database: " . $db->connect_error);
}