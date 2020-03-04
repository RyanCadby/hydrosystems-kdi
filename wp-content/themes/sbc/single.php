<?php

get_header();

$id = get_the_ID();
$img = get_the_post_thumbnail($id, 'full', array( 'class' => 'feat-img' ));
$content = apply_filters('the_content', get_post_field('post_content', $id));

?>

    <section class="child-header">
        <div class="container">
            <div class="row">
                <div class="col col-12">
                    <?php get_template_part('modules/breadcrumb'); ?>
                    <h1 class="white"><?php echo the_title(); ?></h1>
                </div>
            </div>
        </div>
    </section>

    <section>
        <div class="container">
            <div class="row">
                <div class="col col-12 col-md-8">
                    <?php echo $img; ?>
                </div>
                <div class="col col-12 col-md-8">
                    <?php echo $content; ?>
                </div>
            </div>
        </div>
    </section>






<?php get_footer(); ?>