
<!--END CONTENT-->

<!-- Start Contact Section -->
<section class="l-blue-bg" id="contact">
    <div class="container">
        <div class="row">
            <div class="col col-12">
                <h2 class="white text-center"><?php the_field('contact_title', 'option'); ?></h2>
                <p class="white text-center copy-width"><?php the_field('contact_description', 'option'); ?></p>
                <div class="divider"><img src="http://localhost:3000/hydrosystems-kdi/wp-content/themes/sbc/dist/imgs/divider-white.png"></div>
            </div>
        </div>
        <div class="row equal-height">
            <div class="col col-12 col-md-5 col-lg-4 col-xl-3">
                <div class="card mb-5 mb-md-0">
                    <div class="card-body">
                        <h4 class="d-blue mb-5">Locations</h4>
                        <div class="location mb-5">
                        <span class="location-name"><i class="fas fa-map-marker-alt"></i> <?php the_field('location_1_title', 'option'); ?></span><br>
                        <?php the_field('location_1_address_line_1','option'); ?><br>
                        <?php the_field('location_1_address_line_2','option'); ?><br>
                        <?php if(get_field('location_1_phone','option')): ?>
                            <span class="location-meta"><i class="fas fa-mobile-alt"></i><?php the_field('location_1_phone','option'); ?></span>
                        <?php endif;?>
                        <?php if(get_field('location_1_fax','option')): ?>
                            <span class="location-meta"><i class="fas fa-fax"></i><?php the_field('location_1_fax','option'); ?></span>
                        <?php endif;?>
                        </div>
                        <div class="location">
                        <span class="location-name"><i class="fas fa-map-marker-alt"></i> <?php the_field('location_2_title', 'option'); ?></span><br>
                        <?php the_field('location_2_address_line_1','option'); ?><br>
                        <?php the_field('location_2_address_line_2','option'); ?><br>
                        <?php if(get_field('location_2_phone','option')): ?>
                        <span class="location-meta"><i class="fas fa-mobile-alt"></i><?php the_field('location_2_phone','option'); ?></span>
                        <?php endif;?>
                        <?php if(get_field('location_2_fax','option')): ?>
                        <span class="location-meta"><i class="fas fa-fax"></i><?php the_field('location_2_fax','option'); ?></span>
                        <?php endif;?>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col col-12 col-md-7 col-lg-8 col-xl-9">
                <div class="card">
                    <div class="card-body">
                        <h4 class="d-blue mb-5">Contact Form</h4>
                        <?php echo do_shortcode("[ninja_form id=2]"); ?>
                    </div>
                </div>
            </div>
</section>

</body>

<?php wp_footer(); ?>
</html>