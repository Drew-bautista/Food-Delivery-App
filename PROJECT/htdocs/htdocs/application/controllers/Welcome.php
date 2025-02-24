<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Welcome extends CI_Controller {

	/**
	 * Index Page for this controller.
	 *
	 * Maps to the following URL
	 * 		http://example.com/index.php/welcome
	 *	- or -
	 * 		http://example.com/index.php/welcome/index
	 *	- or -
	 * Since this controller is set as the default controller in
	 * config/routes.php, it's displayed at http://example.com/
	 *
	 * So any other public methods not prefixed with an underscore will
	 * map to /index.php/welcome/<method_name>
	 * @see https://codeigniter.com/user_guide/general/urls.html
	 */
	public function index()
	{
		$this->load->library('nexmo');
		// set response format: xml or json, default json
		$this->nexmo->set_format('json');
		$from = '639771069611';
		$to = '639771069620';
		$message = array(
				'text' => 'test message',
		);

		$this->nexmo->send_message($from, $to, $message);
		// $response = $this->nexmo->send_message($from, $to, $message);
		// echo "<h1>Text Message</h1>";
		// $this->nexmo->d_print($response);
		// echo "<h3>Response Code: ".$this->nexmo->get_http_status()."</h3>";
	}
}
