<?php

// --------------------------------------------------------
// ---------------- Theme Options
// --------------------------------------------------------


class Careers_Options_Page {

	/**
	 * Constructor.
	 */
	function __construct() {
		add_action('admin_menu',  array( $this, 'admin_menu' ));
		add_action('acf/init', array( $this, 'admin_menu' ));
//		add_action( 'admin_menu', array( $this, 'add_custom_option_page' ), 100 );
	}

	/**
	 * Registers a new settings page under Settings.
	 */
	function admin_menu() {
		acf_add_options_page(array(
			'page_title' => __('Theme Options'),
			'menu_title' => __('Theme Options'),
			'menu_slug' => 'theme-options',
			'capability' => 'manage_options',
			'position' => '3.11',
			'icon_url' => 'dashicons-welcome-widgets-menus',
			'update_button' => __('Update Theme Options', 'acf'),
			'updated_message' => __("Theme options have been updated", 'acf'),
		));
	}

	/**
	 * Register functions page.
	 */
//	function add_custom_option_page() {
//		add_submenu_page(
//			'theme-options',
//			__( 'Theme Functions', 'textdomain' ),
//			__( 'Theme Functions', 'textdomain' ),
//			'manage_options',
//			'theme-functions',
//			'theme_function_build'
//		);
//	}

}

new Careers_Options_Page;