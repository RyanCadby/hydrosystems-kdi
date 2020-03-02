<?php

function sbc_register_services_widget() {
    register_widget( 'sbc_services_widget' );
}
add_action( 'widgets_init', 'sbc_register_services_widget' );

class sbc_services_widget extends WP_Widget {

    public function __construct() {
        $widget_options = array(
            'classname' => 'services_widget',
            'description' => 'List your services here',
        );
        parent::__construct( 'services_widget', 'Services Widget', $widget_options );
    }

}

function sbc_widgets_init() {

    register_sidebar( array(
        'name'          => 'Services',
        'id'            => 'services-widget',
        'before_widget' => '<div class="services-widget">',
        'after_widget'  => '</div>',
        'before_title'  => '<h2 class="services-widget-title">',
        'after_title'   => '</h2>',
    ) );

}
add_action( 'widgets_init', 'sbc_widgets_init' );