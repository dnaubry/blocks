<?php

function blocks_resources() {

    wp_enqueue_style('style', get_stylesheet_uri());

}
add_action('wp_enqueue_scripts', 'blocks_resources');

// Navigation Menus
register_nav_menus(array(
    'primary' => __( 'Primary Menu'),
));