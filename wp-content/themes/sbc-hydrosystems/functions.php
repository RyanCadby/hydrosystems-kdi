<?php

// Load PHP Functions
require_once( __DIR__ . '/classes/admin.php');



//register assets for page templates
function register_assets() {

}
add_action('wp_enqueue_scripts', 'register_assets');





