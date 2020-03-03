<?php

// Add "menus" tab under appearance
function register_my_menus() {
    register_nav_menus(
        array(
            'top-nav' => __( 'Top Nav' ),
            'footer-nav' => __( 'Footer Nav' ),
        )
    );
}
add_action( 'init', 'register_my_menus' );


// Custom Menu for Primary Nav
//class CIM_Walker extends Walker_Nav_Menu {
//
//    function start_el(&$output, $item, $depth=0, $args=array(), $id = 0) {
//        $object = $item->object;
//        $type = $item->type;
//        $classes = $item->classes;
//        $target = $item->target;
//        $title = $item->title;
//        $description = $item->description;
//        $permalink = $item->url;
//        $icon = get_field('icon', $item->ID);
//
//        // open list item
//        $output .= '<li class="' .  implode(" ", $classes) . '">';
//
//        // Open <a>
//        if( $permalink && $permalink != '#' ) {
//            $output .= '<a href="' . $permalink . '" target="' . $target . '">';
//
//        } else {
//            $output .= '<span>';
//        }
//
//        // Add Title + Icon
//        if ($icon){
//            $output .= $icon . " " . $title;
//        } else {
//            $output .= $title;
//        }
//
//        // Close </a>
//        if( $permalink && $permalink != '#' ) {
//            $output .= '</a>';
//        } else {
//            $output .= '</span>';
//        }
//
//        // add expand icon if has child
//        if ( in_array('menu-item-has-children', $classes) ){
//            $output .= '<i class="fas fa-angle-double-down"></i>';
//        }
//    }
//}
