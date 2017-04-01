<!DOCTYPE html>
<html <?php language_attributes(); ?>>
    <head>
        <meta charset="<?php bloginfo('charset'); ?>">
        <meta name="viewport" content="width=device-width">
        <title><?php bloginfo('name'); ?></title>
        <?php wp_head(); ?>
    </head>

<body <?php body_class(); ?>>

    <!-- top-level flex-container -->
    <div class="flex-container">

        <!-- site-nav -->
        <nav class="site-nav flex-item">
                <?php

                $args = array(
                    'theme_location' => 'primary'
                );

                ?>

                <?php wp_nav_menu( $args ); ?>
            </nav><!-- site-nav -->
        
        <!-- inner flex-container -->
        <div class="flex-item flex-container--column">

        <!-- site-header -->
        <header class="site-header flex-item">
            <h1><a href="<?php echo home_url(); ?>"><?php bloginfo('name'); ?></a></h1>
            <h5><?php bloginfo('description'); ?></h5>
        </header><!-- site-header -->
