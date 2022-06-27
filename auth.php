<?
include "connection.php";
$postData = file_get_contents('php://input');
$pdObj = json_decode($postData, true);
$email = $pdObj['user-email'];
$password = $pdObj['user-password'];
 
    $result = $mysqli->query("SELECT * FROM `users` WHERE `user-email` = '$email' AND `user-password` = '$password')");
    $user = $result->fetch_assoc(); //конвертация объекта в массив
    if(count($user) == 0) {
        echo "Такой пользователь не найден"
        exit();
    } 
    setcookie('user', $user['user-name'], time() + 3600 * 24 * 30, "/");
    header("Location: http://GroupCode/project-repository.html");
    die();
?>
