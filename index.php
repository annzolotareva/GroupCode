<?
    $mysqli = new $mysqli('groupcode', 'root', 'root', 'usersbd');
    
    if($_POST["user-name"]){$login = strip_tags($_POST["user-name"]);}

    if($_POST["user-email"]){$email= strip_tags($_POST["user-email"]);}

    if ($_POST["user-password"]){$password= strip_tags($_POST["user-password"]);)

    if ($login && $email && $password) {
    $query = $mysqli->query("INSERT INTO `users` VALUES(NULL, '$login', '$email', '$password')");
    $message = 'Всё хорошо';
    } else {
    $message = 'Не удалось записать данные';
    }
?>