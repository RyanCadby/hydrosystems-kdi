<?php

/* Template Name: Child */

get_header();

global $wp_query;
$id = get_the_ID();

$title = get_the_title();
$quote = get_field('block_quote');
$top_copy = get_field('top_copy');
$bot_copy = get_field('bottom_copy');
$image = get_field('image');
$content = $post->post_content;


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

<section class="about-section">
    <div class="container">
        <div class="row">
            <div class="col col-8">
                <p class="block-quote"><?php echo $quote; ?></p>
                <?php echo $top_copy; ?>
                <?php
                if( !empty( $image ) ): ?>
                    <img src="<?php echo esc_url($image['url']); ?>" alt="<?php echo esc_attr($image['alt']); ?>" />
                <?php endif; ?>
                <?php echo $bot_copy; ?>
            </div>
        </div>
    </div>
</section>

<?php get_footer(); ?>
