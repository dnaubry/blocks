<?php

get_header(); ?>

<div class="sort-container">
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
				'DESC' => 'Descending',
				'ASC' => 'Ascending',
			);
			foreach( $order_options as $value => $label ) {
				echo "<option ".selected( $_GET['order'], $value )." value='$value'>$label</option>";
			}
		?>
	</select>
        <input type="submit" value="Sort" class="form-submit" />
    </form>
</div>

<!-- posts -->
<div class="flex-container flex-container--wrap">

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

<?php

get_footer();

?>
