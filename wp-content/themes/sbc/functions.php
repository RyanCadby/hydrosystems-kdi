<?php

// Load PHP Functions
//require_once( __DIR__ . '/classes/admin.php');
require_once( __DIR__ . '/classes/options.php');
require_once( __DIR__ . '/classes/projects.php');
require_once( __DIR__ . '/classes/services.php');
require_once( __DIR__ . '/classes/team-members.php');
require_once( __DIR__ . '/classes/images.php');
require_once( __DIR__ . '/classes/menus.php');
require_once( __DIR__ . '/classes/widgets.php');



//register assets for page templates
function register_assets() {

    // Link global assets
    wp_enqueue_script('global-scripts', get_template_directory_uri() . '/dist/js/global-min.js', array(), '1.0.0', true);
    wp_enqueue_style('global-styles', get_template_directory_uri() . '/dist/css/global.css', array(), '1.0.0', 'all');

    //Link Bootstrap JS
    wp_enqueue_script('util-scripts', get_template_directory_uri() . '/dist/js/util.js', array(), '1.0.0', false);
    wp_enqueue_script('modal-scripts', get_template_directory_uri() . '/dist/js/modal.js', array(), '1.0.0', false);
    wp_enqueue_script('collapse-scripts', get_template_directory_uri() . '/dist/js/collapse.js', array(), '1.0.0', false);

    //   front page
    if ( is_front_page() ):
        wp_enqueue_style('home-styles', get_template_directory_uri() . '/dist/css/home.css', array(), '1.0.0', 'all');
    endif;

    //   About page
    if ( is_page_template('template-about.php') ):
        wp_enqueue_style('about-styles', get_template_directory_uri() . '/dist/css/about.css', array(), '1.0.0', 'all');
    endif;

    //   Project page
    if ( is_archive('project') ):
        wp_enqueue_style('project-styles', get_template_directory_uri() . '/dist/css/projects.css', array(), '1.0.0', 'all');
    endif;

    //   Services page
    if ( is_archive('services') ):
        wp_enqueue_style('service-styles', get_template_directory_uri() . '/dist/css/services.css', array(), '1.0.0', 'all');
    endif;

    //   index/post page
    if ( is_home() ):
        wp_enqueue_style('index-styles', get_template_directory_uri() . '/dist/css/index.css', array(), '1.0.0', 'all');
    endif;

    //   single services page
    if ( is_singular('services') ):
        wp_enqueue_style('single-services-styles', get_template_directory_uri() . '/dist/css/single-services.css', array(), '1.0.0', 'all');
    endif;

    //   single page
    if ( is_single() ):
        wp_enqueue_style('single-styles', get_template_directory_uri() . '/dist/css/single.css', array(), '1.0.0', 'all');
    endif;
}
add_action('wp_enqueue_scripts', 'register_assets');
