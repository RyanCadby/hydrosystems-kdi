<?php get_header();

$home_id = get_the_ID();

?>

<!--HERO SECTION-->
<section class="white" id="home-landing">
    <div class="hero-bg"></div>
    <div class="container">
        <div class="row">
            <div class="col col-12 col-md-6">
                <h1 class="white"><?php the_field('hero_title'); ?></h1>
                <p class="white"><?php the_field('hero_description'); ?></p>
                <a href="<?php the_field('hero_cta_link'); ?>" class="btn ol"><?php the_field('hero_cta_txt'); ?><i class="fas fa-angle-double-right"></i></a>
            </div>
        </div>
        <img src="<?php echo get_template_directory_uri();?>/dist/imgs/hskdi-hero-bg-2.png" class="d-none d-md-block home-bg-img">
        <img src="<?php echo get_template_directory_uri();?>/dist/imgs/home-sprinkler-head.jpg" class="d-none d-md-block home-img">
    </div>

</section>

<!--SERVICES SECTION-->
<section>
    <div class="container">
        <div class="row">
            <div class="col col-12">
                <h2 class="d-blue text-center"><?php the_field('services_title'); ?></h2>
                <p class="text-center copy-width"><?php the_field('services_description'); ?></p>
                <div class="divider"><img src="<?php echo get_template_directory_uri();?>/dist/imgs/divider-gray.png"></div>
            </div>
            <div class="col col-10 col-md-4 text-center mb-5">
                <h3 class="l-blue"><?php the_field('service_1_title'); ?></h3>
                <p ><?php the_field('service_1_description'); ?></p>
                <a class="feature-link" href="<?php the_field('service_1_cta_link');?>"><?php the_field('service_1_cta_text');?><i class="fas fa-angle-double-right"></i></a>
            </div>
            <div class="col col-10 col-md-4 text-center mb-5">
                <h3 class="l-blue"><?php the_field('service_2_title'); ?></h3>
                <p><?php the_field('service_2_description'); ?></p>
                <a class="feature-link" href="<?php the_field('service_2_cta_link');?>"><?php the_field('service_2_cta_text');?><i class="fas fa-angle-double-right"></i></a>
            </div>
            <div class="col col-10 col-md-4 text-center mb-5">
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
                <div class="divider"><img src="<?php echo get_template_directory_uri(); ?>/dist/imgs/divider-gray.png"></div>
            </div>
        </div>
    </div>

    <div class="container-fluid fullwidth proj-cont">
        <div class="row justify-content-center">
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
            <div class="col col-10 col-sm-8 col-md-4">
                <div class="proj-card">
                    <?php echo wp_get_attachment_image(get_field('project_photo',$post->ID),'card-img'); ?>
                    <a class="link-proj" href="<?php echo get_post_type_archive_link( 'projects' ); ?>">
                        <span class="proj-title"><?php echo $post->post_title ?></span>
                    </a>
                </div>
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
        <div class="row justify-content-center">
            <div class="col col-12">
                <h2 class="d-blue text-center"><?php the_field('news_title'); ?></h2>
                <p class="text-center copy-width"><?php the_field('news_description'); ?></p>
                <div class="divider"><img src="<?php echo get_template_directory_uri(); ?>/dist/imgs/divider-gray.png"></div>
            </div>

            <?php
                $args = array(
                    'post_type' => 'post',
                    'posts_per_page' => 3,
                );

            $posts = get_posts($args);

                foreach( $posts as $post ):
                    $id = get_the_ID();
                    $title = $post->post_title;
                    $date = get_the_date('F j, Y', $id);
                    $link = get_the_permalink($id);
            ?>
                <div class="col col-12 col-sm-8 col-md-6 col-lg-4 mb-5">
                    <a href="<?php echo $link; ?>" class="card">
                        <?php echo wp_get_attachment_image(93,'card-img',"",array('class' => 'card-img-top')); ?>
                        <div class="card-body">
                            <h4 class="card-title l-blue"><?php echo $title; ?></h4>
                            <p class="card-text"><i class="fas fa-calendar"></i> <?php echo $date; ?> </p>
                            <i class="fas fa-chevron-circle-right"></i>
                        </div>
                    </a>
                </div>
            <?php endforeach; ?>

            <div class="col col-12">
                <a href="<?php the_field('news_cta_link', $home_id); ?>" class="btn centered"><?php the_field('news_cta_txt', $home_id);?><i class="fas fa-angle-double-right"></i></a>
            </div>
        </div>
    </div>
</section>

<?php get_footer(); ?>

