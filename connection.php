<?php
$host = 'sql7.freesqldatabase.com';
$benutzername = 'sql7639714';
$passwort = 'zvn8kFpfDa';
$datenbankname = 'sql7639714';

// Verbindung herstellen
$verbindung = new mysqli($host, $benutzername, $passwort, $datenbankname);

// Überprüfen, ob die Verbindung erfolgreich war
if ($verbindung->connect_error) {
    die('Verbindung fehlgeschlagen: ' . $verbindung->connect_error);
} else {
    echo 'Verbindung erfolgreich hergestellt!';
}
?>
