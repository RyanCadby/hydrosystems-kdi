<?php

/* Template Name: About Us */

get_header();

global $wp_query;
$id = get_the_ID();

$title = get_the_title();
$quote = get_field('block_quote');
$content = get_field('content');

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
                <?php get_template_part('modules/breadcrumb'); ?>
<!--                <a href="--><?php //home_url(); ?><!--" class="breadcrumb"><i class="fas fa-chevron-circle-left"></i> Home</a>-->
                <h1 class="white"><?php echo $title; ?></h1>
            </div>
        </div>
    </div>
</section>

<section>
    <div class="container">
        <div class="row">
            <!-- -->
            <div class="col col-12 col-md-6">
                <p class="block-quote"><?php echo $quote; ?></p>
                <?php echo $content; ?>
            </div>

            <!-- Team Members -->
            <div class="col col-12 col-md-6">
                <div class="team-grid-cont">
                    <?php $i = 0; foreach ( $posts as $post ):
                        setup_postdata($post);
                        $name = $post->post_title;
                        $position= get_field('position', $id);
                        $id = $post->ID;
                        ?>
                            <div class="team-card">
                                <?php echo wp_get_attachment_image(get_field('headshot', $id),'team-img'); ?>
                                <button type="button" class="btn-proj" data-toggle="modal" data-target="#modal-<?php echo $id; ?>">
                                    <h3 class="name"><?php echo $name; ?></h3>
                                    <p class="position"><?php echo $position; ?></p>
                                </button>
                            </div>
                    <?php endforeach ?>
                </div>
            </div>
        </div>
    </div>
</section>





<!-- Build All Modals -->
<?php $i = 0; foreach ( $posts as $post ):
    setup_postdata($post);
    $id = $post->ID;
    $title = $post->post_title;
    $cats = get_field('project_categories', $id);
    $desc = get_field('project_description');
    ?>
    <div class="modal fade" id="modal-<?php echo $id; ?>" tabindex="-1" role="dialog" aria-labelledby="<?php echo $title; ?> Modal" aria-hidden="true">
        <div class="modal-dialog modal-lg" role="document">
            <div class="modal-content">
                <?php echo wp_get_attachment_image(get_field('project_photo',$post->ID),'proj-modal-img'); ?>
                <div class="modal-header">
                    <h3 class="modal-title" id="exampleModalLongTitle"><?php echo $title; ?></h3>
                    <!--                    <p>--><?php //echo $cats; ?><!--</p>-->
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <p><?php echo $desc; ?></p>
                </div>
            </div>
        </div>
    </div>
<?php endforeach ?>




<?php get_footer(); ?>
