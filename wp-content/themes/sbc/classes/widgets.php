<?php

//function sbc_register_services_widget() {
//    register_widget( 'sbc_services_widget' );
//}
//add_action( 'widgets_init', 'sbc_register_services_widget' );
//
//class sbc_services_widget extends WP_Widget {
//
//    public function __construct() {
//        $widget_options = array(
//            'classname' => 'about_widget',
//            'description' => 'List your services here',
//        );
//        parent::__construct( 'services_widget', 'Services Widget', $widget_options );
//    }
//
//}

function sbc_widgets_init() {

    register_sidebar( array(
        'name'          => 'About',
        'id'            => 'about-widget',
        'before_widget' => '<div class="about-widget widget">',
        'after_widget'  => '</div>',
        'before_title'  => '<h4 class="about-widget-title">',
        'after_title'   => '</h4>',
    ) );

    register_sidebar( array(
        'name'          => 'Footer Nav',
        'id'            => 'footer-nav',
        'before_widget' => '<div class="footer-nav widget">',
        'after_widget'  => '</div>',
        'before_title'  => '<h4 class="footer-nav-title">',
        'after_title'   => '</h4>',
    ) );

}
add_action( 'widgets_init', 'sbc_widgets_init' );