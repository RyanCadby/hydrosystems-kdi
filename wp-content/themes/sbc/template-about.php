<?php

/* Template Name: About Us */

get_header();

global $wp_query;
$id = get_the_ID();

$title = get_the_title();
$quote = get_field('block_quote');
$top_copy = get_field('top_copy');
$bot_copy = get_field('bottom_copy');
$image = get_field('image');

$args = array(
    'post_status' => 'publish',
    'posts_per_page' => -1,
    'post_type' => 'team-members'
);
$posts = get_posts( $args);


?>

<section class="child-header">
    <div class="container">
        <div class="row">
            <div class="col col-12">
                <a href="#" class="breadcrumb"><i class="fas fa-chevron-circle-left"></i> Home</a>
                <h1 class="white"><?php echo $title; ?></h1>
            </div>
        </div>
    </div>
</section>

<section>
    <div class="container">
        <div class="row">
            <div class="col col-12 col-md-6"></div>
            <div class="col col-12 col-md-6">
                <?php $i = 0; foreach ( $posts as $post ): setup_postdata($post) ?>
                        <div class="proj-card">
                            <?php echo wp_get_attachment_image(get_field('project_photo',$post->ID),'card-img'); ?>
                            <button type="button" class="btn-proj" data-toggle="modal" data-target="#modal-<?php echo $post->ID ?>">
                                <span class="proj-title"><?php echo $post->post_title ?></span>
                            </button>
                        </div>
                <?php endforeach ?>
            </div>
        </div>
    </div>
</section>

<?php get_footer(); ?>
