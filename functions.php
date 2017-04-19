<?php

function blocks_resources() {

    wp_enqueue_style('dashicons');
    wp_enqueue_style('style', get_stylesheet_uri(), 'dashicons');
    wp_enqueue_script('jquery');
    wp_enqueue_script('main', get_template_directory_uri() . '/main.js', array ( 'jquery' ), true);

}
add_action('wp_enqueue_scripts', 'blocks_resources');

// Navigation Menus
register_nav_menus(array(
    'primary' => __( 'Primary Menu'),
));