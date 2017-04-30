<?php

get_header(); ?>

    <!-- posts -->
    <div class="flex-container flex-container--wrap">

    <?php

    if (have_posts()) :
        while (have_posts()) : the_post(); ?>

            <article class="post flex-item--1">
                <h2><?php the_title(); ?></h2>
                <?php the_content(); ?>
            </article>

        <?php endwhile;

        else :

            echo '<p>No content found</p>';

        endif; ?>
        
    </div><!-- posts -->

<?php

get_footer();

?>
