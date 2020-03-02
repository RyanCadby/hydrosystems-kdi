<?php

// Load PHP Functions
//require_once( __DIR__ . '/classes/admin.php');
require_once( __DIR__ . '/classes/options.php');
require_once( __DIR__ . '/classes/projects.php');
require_once( __DIR__ . '/classes/team-members.php');
require_once( __DIR__ . '/classes/images.php');
require_once( __DIR__ . '/classes/widget.php');



//register assets for page templates
function register_assets() {

    // Link global assets
    wp_enqueue_script('global-scripts', get_template_directory_uri() . '/dist/js/global-min.js', array(), '1.0.0', true);
    wp_enqueue_style('global-styles', get_template_directory_uri() . '/dist/css/global.css', array(), '1.0.0', 'all');

    //Link Bootstrap JS
    wp_enqueue_script('util-scripts', get_template_directory_uri() . '/dist/js/util.js', array(), '1.0.0', false);
    wp_enqueue_script('modal-scripts', get_template_directory_uri() . '/dist/js/modal.js', array(), '1.0.0', false);

    //   front page
    if ( is_front_page() ):
        wp_enqueue_style('home-styles', get_template_directory_uri() . '/dist/css/home.css', array(), '1.0.0', 'all');
    endif;

    //   About page
    if ( is_page_template('template-about.php') ):
        wp_enqueue_style('about-styles', get_template_directory_uri() . '/dist/css/about.css', array(), '1.0.0', 'all');
    endif;

    //   Project page
    if ( is_page_template('template-project-index.php') ):
        wp_enqueue_style('project-styles', get_template_directory_uri() . '/dist/css/projects.css', array(), '1.0.0', 'all');
    endif;
}
add_action('wp_enqueue_scripts', 'register_assets');
