<?php
//$str="HEY THERE";
//$final=substr($str,1);
//echo str_replace("HEY","BLUE",$str);
$servername="localhost";
$username='root';
$password="mysql";
$dbname="training";
try{

$conn=new PDO("mysql:host=$servername;dbname=training",$username,$password);
$conn->setAttribute(PDO::ATTR_ERRMODE,PDO::ERRMODE_EXCEPTION);
//$sql="CREATE TABLE users(id INT(6) AUTO_INCREMENT PRIMARY KEY ,firstname VARCHAR(30) NOT NULL,lastname VARCHAR(30) NOT NULL,email VARCHAR (50))";
   // $sql="INSERT INTO  users(Phonenumber,POSITION) VALUES ('0931389','Maneger')";
 //   $sql="UPDATE users SET username='nima' WHERE id=1";
    $sql="DELETE FROM users WHERE id=3";
$conn->exec($sql);
echo "database Successfully";

}catch (PDOException $e){
echo $e->getMessage();
}
$conn=null;

