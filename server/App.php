<?php
namespace Truthy;
require_once('../vendor/autoload.php');
use Buddie\Buddie\Buddie;

class App{
  public function start(){
    $buddie = new Buddie();
    $reviews = $buddie->reviews();
    if (is_bool($reviews)) {
      $reviews = [];
    }
    $this->respond($reviews);
  } 
  public function respond(array $data){
    header('Content-Type: application/json; charset=utf-8');
    echo json_encode($data);
    exit();
  } 
} 

(new App())->start();