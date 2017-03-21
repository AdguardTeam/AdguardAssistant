<?php
$subrootdir = "/adguard-assistant/";

if ($_SERVER['REMOTE_ADDR'] == "127.0.0.1" || $_SERVER['REMOTE_ADDR'] == "localhost" || $_SERVER['REMOTE_ADDR'] == null) $subrootdir = "";
define('ROOT_DIR', $_SERVER["DOCUMENT_ROOT"] . $subrootdir);
//include(ROOT_DIR."templates/autoload.php");
?>
<!doctype html>
<html class="no-js">
<head>

    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">

    <meta name="viewport" content="width=device-width"/>

    <title>Adguard Assistant</title>

    <link rel="stylesheet" href="skin/css/style.css"/>


</head>
<body>

    <div class="main">
