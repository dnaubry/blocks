            <footer class="site-footer">
             <?php

                  $args = array(
                      'theme_location' => 'footer'
                 );

                    ?>

                <p>Danielle Aubry - &copy; <?php echo date('Y'); ?></p>

            </footer>

        </div><!-- main inner flex-container -->

    <?php wp_footer(); ?>

    </div><!-- outer flex-container -->
        <!-- mobile navigation menu -->
        <div class="mobile-nav flex-container">
                <div id="sort-icon" class="flex-item--1"><span class="sort-mobile dashicons dashicons-sort"></span>sort</div>
                <div class="flex-item--1">
                    <span id="menu-icon" class="menu-icon--is-visible menu-icon"><span class="dashicons dashicons-menu"></span>menu</span>
                    <span id="close-icon" class="close-icon"><span class="dashicons dashicons-no-alt"></span>close</span>
                </div>
                <div id="search-icon" class="flex-item--1"><span class="search-mobile dashicons dashicons-search"></span>search</div>
        </div>
    </div><!-- mobile navigation menu -->
</body>
</html>