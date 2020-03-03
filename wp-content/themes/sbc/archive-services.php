<?php

// General Info
$id = get_the_ID();

$args = array(
  'post_type' => 'services',
    'post_status' => 'publish',
    'posts_per_page' => -1
);
$posts = get_posts($args);

get_header();
?>

    <section class="child-header">
        <div class="container">
            <div class="row">
                <div class="col col-12">
                    <a href="#" class="breadcrumb"><i class="fas fa-chevron-circle-left"></i> Home</a>
                    <h1 class="white">Our <?php post_type_archive_title(); ?></h1>
                </div>
            </div>
        </div>
    </section>

    <section>
        <div class="container services-cont">
            <div class="row justify-content-between">

                    <div class="col col-12 col-md-8">
                        <?php foreach ( $posts as $post ):
                            setup_postdata($post);
                            $service_title = $post->post_title;
                            $excerpt = $post->post_excerpt;
                            $link = get_the_permalink();
                            ?>
                            <div class="service-card">
                                <a href="<?php echo $link ?>" class="service-title-link"><h3 class="service-title"><?php echo $service_title; ?></h3></a>
                                <p class="service-excerpt"><?php echo $excerpt ?></p>
                                <a href="<?php echo $link ?>" class="read-more">learn more <i class="fas fa-chevron-right"></i><i class="fas fa-chevron-right"></i></a>
                            </div>
                        <?php endforeach; ?>
                        <?php wp_reset_postdata(); ?>
                    </div>
                <?php get_template_part('modules/services','sidebar'); ?>

            </div>
        </div>
    </section>


    <script>

    </script>

    <style>
        .service-desc .more-text{
            display: none;
        }
    </style>






<?php get_footer(); ?>