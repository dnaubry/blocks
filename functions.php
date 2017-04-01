<?php

function blocks_resources() {

    wp_enqueue_style('style', get_stylesheet_uri());

}
add_action('wp_enqueue_scripts', 'blocks_resources');

// function foo_modify_query_order( $query ) {
//     if ( $query->is_home() && $query->is_main_query() ) {
//         $query->set( 'orderby', 'title' );
//         $query->set( 'order', 'ASC' );
//     }
// }
// add_action( 'pre_get_posts', 'foo_modify_query_order' );

// Navigation Menus
register_nav_menus(array(
    'primary' => __( 'Primary Menu'),
    'footer' => __('Footer Menu'),
));