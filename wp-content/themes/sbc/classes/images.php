<?php

// Add custom image sizes cards
add_action( 'after_setup_theme', 'custom_image_sizes' );
function custom_image_sizes() {
    add_image_size( 'project-img', 600, 450, array('center', 'center'));
    add_image_size( 'team-img', 500, 400, array('center', 'center'));
    add_image_size( 'card-img', 400, 250, array('center', 'center'));
}