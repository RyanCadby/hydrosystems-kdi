<?php

// Create the team members custom post type
function create_teammembers() {

    register_post_type( 'team-members',
        array(
            'labels' => array(
                'name' => __( 'Team Members' ),
                'singular_name' => __( 'Team Member' ),
                'add_new' => _x('Add New', 'add new'),
                'add_new_item' => __('Add New Team Member'),
                'new_item' => __('New Team Member'),
                'menu_name' => __('Team Members')
            ),
            'public' => true,
            'has_archive' => true,
            'rewrite' => array('slug' => 'team_member'),
            'menu_icon' => 'dashicons-universal-access',
            'show_in_menu' => true,
            'menu_position' => 3,
            'supports' => array('title', 'editor', 'excerpt', 'thumbnail')
        ));
}
add_action( 'init', 'create_teammembers' );