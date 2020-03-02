<?php

// Load PHP Functions
//require_once( __DIR__ . '/classes/admin.php');
require_once( __DIR__ . '/classes/options.php');
require_once( __DIR__ . '/classes/projects.php');
require_once( __DIR__ . '/classes/team-members.php');
require_once( __DIR__ . '/classes/images.php');



//register assets for page templates
function register_assets() {

    wp_enqueue_script('global-scripts', get_template_directory_uri() . '/dist/js/global-min.js', array(), '1.0.0', true);

    //   front page
    if ( is_front_page() ):
        wp_enqueue_style('home-styles', get_template_directory_uri() . '/dist/css/home.css', array(), '1.0.0', 'all');
    endif;
}
add_action('wp_enqueue_scripts', 'register_assets');
