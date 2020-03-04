<?php

/* Template Name: Child */

get_header();


$id = get_the_ID();

$title = get_the_title();
$quote = get_field('block_quote');
$top_copy = get_field('top_copy', $id);
$bot_copy = get_field('bottom_copy');
$image = get_field('image', $id);
$content = $post->post_content;


?>

<section class="child-header">
    <div class="container">
        <div class="row">
            <div class="col col-12">
                <?php get_template_part('modules/breadcrumb'); ?>
                <h1 class="white"><?php echo $title; ?></h1>
            </div>
        </div>
    </div>
</section>

<section class="about-section">
    <div class="container">
        <div class="row justify-content-between">
            <div class="col col-12 col-md-8">
                <p class="block-quote"><?php echo $quote; ?></p>
                <?php echo $top_copy; ?>
                <?php
                if( !empty( $image ) ): ?>
                    <img class="w-100" src="<?php echo esc_url($image['url']); ?>" alt="<?php echo esc_attr($image['alt']); ?>" />
                <?php endif; ?>
                <?php echo $bot_copy; ?>
            </div>

            <?php get_template_part('modules/services','sidebar'); ?>
        </div>
    </div>
</section>


<?php get_footer(); ?>
