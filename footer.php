            <footer class="site-footer">
             <?php

                  $args = array(
                      'theme_location' => 'footer'
                 );

                    ?>
                <nav class="site-nav">
                <?php wp_nav_menu( $args ); ?>
                </nav>

                <p>Danielle Aubry - &copy; <?php echo date('Y'); ?></p>

            </footer>

        </div><!-- inner flex-container -->

    <?php wp_footer(); ?>

    </div><!-- outer flex-container -->
</body>
</html>