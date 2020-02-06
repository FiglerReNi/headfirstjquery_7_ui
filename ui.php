<?php
if (isset($_POST['action']) && $_POST['action'] === "mentes") {
    $date = htmlspecialchars($_POST['date']);
    $distance = htmlspecialchars($_POST['distance']);
    $weight = htmlspecialchars($_POST['weight']);
    $height = htmlspecialchars($_POST['height']);
    $creature_color = htmlspecialchars($_POST['color']);
    $latitude = htmlspecialchars($_POST['latitude']);
    $longitude = htmlspecialchars($_POST['longitude']);

}