<?php

// Database connection
$con = mysqli_connect("localhost", "root", "", "fenta");

// Set headers
header('Content-Type: application/json');
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");

// Check if there's a specific id parameter in the URL
if (isset($_GET['id'])) {
    $id = $_GET['id'];
    $select = "SELECT * FROM `booktable` WHERE `id`='$id' and`action` = 'approve'";
    $result = mysqli_query($con, $select);
    
    // Fetch the row for the specific item
    $row = mysqli_fetch_assoc($result);
    if ($row) {
        echo json_encode($row);  // Return the item as a JSON response
    } else {
        echo json_encode(["error" => "Data not found"]);
    }
} 

?>