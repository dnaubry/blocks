<!DOCTYPE html>
<html <?php language_attributes(); ?>>
    <head>
        <meta charset="<?php bloginfo('charset'); ?>">
        <meta name="viewport" content="width=device-width">
        <title><?php bloginfo('name'); ?></title>
        <?php wp_head(); ?>
    </head>

<body <?php body_class(); ?>>

    <!-- outer flex-container -->
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
        
        <!-- main inner flex-container -->
        <div class="flex-item flex-container--column flex-container--min-height">
            <!-- site-header -->
            <header class="site-header flex-item">
                <h1><a href="<?php echo home_url(); ?>"><?php bloginfo('name'); ?></a></h1>
                <h5><?php bloginfo('description'); ?></h5>
            </header><!-- site-header -->
            
            <!-- sort & search flex-container -->
            <div class="flex-container flex-container--align-center flex-container--wrap">
                <!-- search posts -->
                <div class="search-form flex-item">
                    <?php get_search_form(); ?>
                </div><!-- search posts -->
                <!-- sort posts form -->
                <div class="sort-form flex-item">
                    <form action="" method="get">
                        <select name="orderby" class="form-select form-select--large">
                            <?php
                                $orderby_options = array(
                                    'post_title' => 'Sort By Title',
                                    'post_date' => 'Sort By Date Added',
                                );
                                foreach( $orderby_options as $value => $label ) {
                                    echo "<option ".selected( $_GET['orderby'], $value )." value='$value'>$label</option>";
                                }
                            ?>
                        </select>
                        <select name="order" class="form-select form-select--small">
                        <?php
                            $order_options = array(
                                'ASC' => 'Ascending',
                                'DESC' => 'Descending',
                            );
                            foreach( $order_options as $value => $label ) {
                                echo "<option ".selected( $_GET['order'], $value )." value='$value'>$label</option>";
                            }
                        ?>
                    </select>
                        <input type="submit" value="Sort" class="form-submit" />
                    </form>
                </div><!-- sort posts form -->
            </div><!-- sort & search flex-container -->
