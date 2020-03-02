<?php get_header(); ?>

<!--HERO SECTION-->
<section class="d-blue-bg white" id="home-landing">
    <div class="container">
        <div class="row">
            <div class="col col-12 col-md-6">
                <h1 class="white"><?php the_field('hero_title'); ?></h1>
                <p class="white"><?php the_field('hero_description'); ?></p>
                <a href="<?php the_field('hero_cta_link'); ?>" class="btn ol"><?php the_field('hero_cta_txt'); ?><i class="fas fa-angle-double-right"></i></a>
            </div>
        </div>
        <img src="http://localhost:3000/hydrosystems-kdi/wp-content/themes/sbc/dist/imgs/home-sprinkler-head.jpg" class="home-img">
    </div>
</section>

<!--SERVICES SECTION-->
<section>
    <div class="container">
        <div class="row">
            <div class="col col-12">
                <h2 class="d-blue text-center"><?php the_field('services_title'); ?></h2>
                <p class="text-center copy-width"><?php the_field('services_description'); ?></p>
                <div class="divider"><img src="http://localhost:3000/hydrosystems-kdi/wp-content/themes/sbc/dist/imgs/divider-gray.png"></div>
            </div>
            <div class="col col-12 col-md-4 text-center mb-5">
                <h3 class="l-blue"><?php the_field('service_1_title'); ?></h3>
                <p ><?php the_field('service_1_description'); ?></p>
                <a class="feature-link" href="<?php the_field('service_1_cta_link');?>"><?php the_field('service_1_cta_text');?><i class="fas fa-angle-double-right"></i></a>
            </div>
            <div class="col col-12 col-md-4 text-center mb-5">
                <h3 class="l-blue"><?php the_field('service_2_title'); ?></h3>
                <p><?php the_field('service_2_description'); ?></p>
                <a class="feature-link" href="<?php the_field('service_2_cta_link');?>"><?php the_field('service_2_cta_text');?><i class="fas fa-angle-double-right"></i></a>
            </div>
            <div class="col col-12 col-md-4 text-center mb-5">
                <h3 class="l-blue"><?php the_field('service_3_title'); ?></h3>
                <p><?php the_field('service_3_description'); ?></p>
                <a class="feature-link" href="<?php the_field('service_3_cta_link');?>"><?php the_field('service_3_cta_text');?><i class="fas fa-angle-double-right"></i></a>
            </div>
            
            <div class="col col-12">
                <a href="<?php the_field('services_cta_link'); ?>" class="btn centered"><?php the_field('services_cta_txt');?><i class="fas fa-angle-double-right"></i></a>
            </div>
</section>

<!--PROJECT SECTION-->
<section class="l-gray-bg">
    <div class="container">
        <div class="row">
            <div class="col col-12">
                <h2 class="d-blue text-center"><?php the_field('projects_title'); ?></h2>
                <p class="text-center copy-width"><?php the_field('projects_description'); ?></p>
                <div class="divider"><img src="http://localhost:3000/hydrosystems-kdi/wp-content/themes/sbc/dist/imgs/divider-gray.png"></div>
            </div>
        </div>
    </div>

    <div class="container-fluid fullwidth">
        <div class="row">
            <?php
            $args = array(
                'post_status' => 'publish',
                'posts_per_page' => 3,
                'post_type' => 'projects',
                'tax_query' => array(
                    array(
                        'taxonomy' => 'featured_project',
                        'field' => 'slug',
                        'terms' => 'featured',
                    )
                )
            );
            $projects = get_posts($args);
            foreach ($projects as $post):
                setup_postdata($post);
            ?>
            <div class="col col-12 col-md-4">
                <?php echo wp_get_attachment_image(get_field('project_photo',$post->ID),'project-img'); ?>
            </div>
            <?php endforeach; ?>
            <?php wp_reset_postdata();?>
        </div>
    </div>

    <div class="container">
        <div class="row">
            <div class="col col-12 mt-5">
                <a href="<?php the_field('projects_cta_link'); ?>" class="btn centered"><?php the_field('projects_cta_txt');?><i class="fas fa-angle-double-right"></i></a>
            </div>
        </div>
    </div>
</section>


<!--RECENT NEWS SECTION-->
<section>
    <div class="container">
        <div class="row">
            <div class="col col-12">
                <h2 class="d-blue text-center"><?php the_field('news_title'); ?></h2>
                <p class="text-center copy-width"><?php the_field('news_description'); ?></p>
                <div class="divider"><img src="http://localhost:3000/hydrosystems-kdi/wp-content/themes/sbc/dist/imgs/divider-gray.png"></div>
            </div>

            <div class="col col-12 col-md-4 mb-5">
                <a href="#" class="card">
                    <?php echo wp_get_attachment_image(93,'card-img',"",array('class' => 'card-img-top')); ?>
                    <div class="card-body">
                        <h4 class="card-title l-blue">Maecenas ornare libero vitae lorem gravida viverra.</h4>
                        <p class="card-text"><i class="fas fa-calendar"></i> Jan 10, 1900</p>
                        <i class="fas fa-chevron-circle-right"></i>
                    </div>
                </a>
            </div>
            <div class="col col-12 col-md-4 mb-5">
                <a href="#" class="card">
                    <?php echo wp_get_attachment_image(93,'card-img',"",array('class' => 'card-img-top')); ?>
                    <div class="card-body">
                        <h4 class="card-title l-blue">Maecenas ornare libero vitae lorem gravida viverra.</h4>
                        <p class="card-text"><i class="fas fa-calendar"></i> Jan 10, 1900</p>
                        <i class="fas fa-chevron-circle-right"></i>
                    </div>
                </a>
            </div>
            <div class="col col-12 col-md-4 mb-5">
                <a href="#" class="card">
                    <?php echo wp_get_attachment_image(93,'card-img',"",array('class' => 'card-img-top')); ?>
                    <div class="card-body">
                        <h4 class="card-title l-blue">Maecenas ornare libero vitae lorem gravida viverra.</h4>
                        <p class="card-text"><i class="fas fa-calendar"></i> Jan 10, 1900</p>
                        <i class="fas fa-chevron-circle-right"></i>
                    </div>
                </a>
            </div>

            <div class="col col-12">
                <a href="<?php the_field('news_cta_link'); ?>" class="btn centered"><?php the_field('news_cta_txt');?><i class="fas fa-angle-double-right"></i></a>
            </div>
        </div>
    </div>
</section>
<?php get_footer(); ?>

