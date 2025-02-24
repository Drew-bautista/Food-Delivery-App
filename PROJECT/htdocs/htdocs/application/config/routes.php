<?php
defined('BASEPATH') OR exit('No direct script access allowed');

$route['default_controller'] = 'api/orders';
$route['404_override'] = '';
$route['translate_uri_dashes'] = FALSE;

$route['orders'] = 'api/orders';
$route['orders_now'] = 'api/makeOrder';
$route['order/(:any)'] = 'api/order/$1';
$route['order/(:any)/delete'] = 'api/deleteOrder/$1';