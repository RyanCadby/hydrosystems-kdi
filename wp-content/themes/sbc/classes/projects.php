<?php


// Create the team members custom post type
function create_projects() {

    register_post_type( 'projects',
        array(
            'labels' => array(
                'name' => __( 'Projects' ),
                'singular_name' => __( 'Project' ),
                'add_new' => _x('Add New', 'add new'),
                'add_new_item' => __('Add New Project'),
                'new_item' => __('New Project'),
                'menu_name' => __('Projects')
            ),
            'public' => true,
            'has_archive' => 'projects',
            'rewrite' => array('slug' => 'project'),
            'menu_icon' => 'dashicons-admin-page',
            'show_in_menu' => true,
            'menu_position' => 4,
            'supports' => array('title', 'editor', 'excerpt', 'thumbnail')
        ));
}
add_action( 'init', 'create_projects' );


function create_project_taxonomy() {
    register_taxonomy(
        'project_category',
        array( 'projects' ),
        array(
            'label' => __( 'Project Category' ),
            'rewrite' => array( 'slug' => 'project-category' ),
            'hierarchical' => true,
        )
    );
    register_taxonomy(
        'featured_project',
        array( 'projects' ),
        array(
            'label' => __( 'Featured Project' ),
            'rewrite' => array( 'slug' => 'featured-project' ),
            'hierarchical' => false,
        )
    );
}
add_action( 'init', 'create_project_taxonomy', 0 );