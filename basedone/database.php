<?php 
/***
 * Retourne une connection a la base de donné
 * 
 * @return PDO
 */
function getPdo(): PDO
{  
    $pdo = new PDO('mysql:host=localhost;dbname=portofolio;charset=utf8', 'root', '', [
        PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
        PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC
    ]);

    return $pdo;
}