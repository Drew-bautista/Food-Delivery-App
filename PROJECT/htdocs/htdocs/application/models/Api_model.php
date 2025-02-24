<?php
defined('BASEPATH') OR exit('No direct script access allowed');
date_default_timezone_set("Asia/Bangkok");
class Api_model extends CI_Model {

  public function __construct(){
      $this->load->database();
  }

  public function asd() {

    $data = array(
      'device_id' => $deviceId,
      'login_status' => 0,
      'code' => $code
    );

    $this->db->where('username', $username);
    return $this->db->update('users', $data);

  }

  public function orders() {

    $query = $this->db->get('orders');

    return $query->result_array();

  }


  public function makeOrder($name,$date,$total) {

    $data = array(
      'user_id' => 1,
      'car_id' => $name,
      'order_date' => $this->input->post('order_date'),
      'status' => 1,
      'total' => $this->input->post('total')
    );

    // $data = array(
    //   'user_id' => 1,
    //   'car_id' => "213",
    //   'order_date' => "asd",
    //   'status' => 1,
    //   'total' => 123,
    // );


    $this->db->insert('orders', $data);
    $insert_id = $this->db->insert_id();

   return  $insert_id;


  }


}
