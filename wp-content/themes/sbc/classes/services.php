<?php

// Create the services custom post type
function create_services() {

    register_post_type( 'services',
        array(
            'labels' => array(
                'name' => __( 'Services' ),
                'singular_name' => __( 'Services' ),
                'add_new' => _x('Add New', 'add new'),
                'add_new_item' => __('Add New Service'),
                'new_item' => __('New Service'),
                'menu_name' => __('Services')
            ),
            'public' => true,
            'has_archive' => true,
            'rewrite' => array('slug' => 'services'),
            'menu_icon' => 'dashicons-rest-api',
            'show_in_menu' => true,
            'menu_position' => 6,
            'supports' => array('title', 'editor', 'excerpt', 'thumbnail')
        ));
}
add_action( 'init', 'create_services' );