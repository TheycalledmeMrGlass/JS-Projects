<?php
session_start();
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>
<?php
$_SESSION["MyName"]="Hassan";
$_SESSION["MyFname"]="Shojaei";
echo "Sessions Are Set";
?>
</body>
</html>



