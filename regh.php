<?
    include "connection.php";
    $postData = file_get_contents('php://input');
    $pdObj = json_decode($postData, true);
    $login = $pdObj['user-name'];

    $email = $pdObj['user-email'];
    $password = $pdObj['user-password'];
    
    $query = $mysqli->query("INSERT INTO `users` VALUES (NULL, '$login', '$email', '$password')");
    echo $_POST;
?>

    