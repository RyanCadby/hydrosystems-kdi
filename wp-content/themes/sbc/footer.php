
<!--END CONTENT-->

<?php
$facebook_url = get_field('facebook_url', 'option');
$twitter_url = get_field('twitter_url', 'option');
$instagram_url = get_field('instagram_url', 'option');

if($facebook_url):
    $facebook = '<a href="'. $facebook_url . '" class="facebook social-link"><i class="fab fa-facebook-square"></i></a>';
endif;
if($twitter_url):
    $twitter = '<a href="'. $facebook_url . '" class="twitter social-link"><i class="fab fa-twitter-square"></i></a>';
endif;
if($instagram_url):
    $instagram = '<a href="'. $instagram_url . '" class="instagram social-link"><i class="fab fa-instagram-square"></i></a>';
endif;
?>

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
        </div>
    </div>
</section>

<section class="footer-info-section">
    <div class="container">
        <div class="row">
            <div class="col col-12 col-lg-4">
                <a class="footer-logo-link" href="#"><img src="<?php echo get_template_directory_uri(); ?>/dist/imgs/hs-kdi-logo-h.png" alt="Hydro Systems KDI Logo"></a>
                <h4 class="follow text-center">Follow Us: <?php if($instagram):echo $instagram; endif; if($facebook):echo $facebook; endif; if($twitter):echo $twitter; endif;?></h4>
            </div>
            <div class="col col-12 col-lg-5">
                <!-- About us widget -->
                <?php
                    if(is_active_sidebar('about-widget'))
                    {
                        dynamic_sidebar('about-widget');
                    }
                ?>

            </div>
            <div class="col col-12 col-lg-3">
                <!-- footer nav -->
                <?php
                if(is_active_sidebar('footer-nav'))
                {
                    dynamic_sidebar('footer-nav');
                }
                ?>

            </div>
        </div>
    </div>
</section>

</body>

<?php wp_footer(); ?>
</html>