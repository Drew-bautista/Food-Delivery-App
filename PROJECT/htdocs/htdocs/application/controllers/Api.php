<?php
defined('BASEPATH') OR exit('No direct script access allowed');
ini_set('display_errors', 0);
date_default_timezone_set("Asia/Bangkok");
class Api extends CI_Controller {

  public function __construct() {
      parent::__construct();
  }

  public function connect() {
    echo "string";
  }

  public function orders() {
    echo json_encode($this->api_model->orders());

  }

  public function makeOrder() {

    $name = $this->input->post('car_id');
    $date = $this->input->post('order_date');
    $total = $this->input->post('total');

    $id = $this->api_model->makeOrder($name,$date,$total);
    
    echo json_encode($id);
  }


  public function deleteOrder($id) {

    echo $this->db->delete('orders', array('id' => $id));

  }
}