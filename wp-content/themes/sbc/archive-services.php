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
                    <h1 class="white"><?php post_type_archive_title(); ?></h1>
                </div>
            </div>
        </div>
    </section>

    <section>
        <div class="container services-cont">
            <div class="row">

                    <div class="col col-12 col-md-8">
                        <?php foreach ( $posts as $post ):
                            setup_postdata($post);
                            $service_title = $post->post_title;
                            ?>
                            <div class="service-card">
                                <h3 class="service-title"><?php echo $service_title; ?></h3>
                                <p class="service-desc"><?php echo $post->post_content ?></p>
                            </div>
                        <?php endforeach; ?>
                        <?php wp_reset_postdata(); ?>
                    </div>
                    <div class="col col-4 d-none d-md-block">
                        <div class="service-menu">
                            <?php foreach ( $posts as $post ): setup_postdata($post) ?>
                            <i class="fas fa-chevron-circle-right"></i>
                            <h4 class="service-title"><?php echo $post->post_title ?></h4>
                            <?php endforeach ?>
                        </div>
                    </div>

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