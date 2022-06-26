<?
$mysqli = new Mysqli('GroupCode', 'root', 'root', 'GroupCode'); 
header('Access-Control-Allow-Origin', '*');
header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    $result = $mysqli->query("SELECT * FROM `projects`");
     $projects = array();
    while($row =mysqli_fetch_assoc($result))
    {
        $projects[] = $row;
    }

    $normal_projects = json_encode($projects);
    return $projects;
?>