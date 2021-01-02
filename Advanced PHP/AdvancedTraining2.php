<?php
$cookie_name="text";
$cookie_value="ok";
setcookie($cookie_name,$cookie_value,time()-);
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>
<?php
var_dump(time());
?>
