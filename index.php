<?php

get_header(); ?>

    <!-- posts -->
    <div class="posts">

    <?php

    if (have_posts()) :
        while (have_posts()) : the_post(); ?>

            <article class="post">
                <h2><?php the_title(); ?></h2>
                <?php the_content(); ?>
            </article>

        <?php endwhile;

        else :

            echo '<p>No content found</p>';

        endif; ?>
        
    </div><!-- posts -->
    <div class="spacer"></div>

<?php

get_footer();

?>
