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


<section>
    <div class="container">




<!-- Build All Modals -->
<?php $i = 0; foreach ( $posts as $post ):
    setup_postdata($post);
    $id = $post->ID;
    $title = $post->post_title;
    $position = get_field('position', $id);
    $email = get_field('email', $id);
    if($email){
        $email_link = '<a href="mailto:' . $email . '" class="team-email">' . $email . '</a>';
    }
    $phone = get_field('phone', $id);
    if($phone){
        $phone_link = '<a href="tel:' . $phone . '" class="team-email">' . $phone . '</a>';
    }
    $bio= get_field('bio');
    ?>
    <div class="modal fade team-modal" id="modal-<?php echo $id; ?>" tabindex="-1" role="dialog" aria-labelledby="<?php echo $title; ?> Modal" aria-hidden="true">
        <div class="modal-dialog modal-lg" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <?php echo wp_get_attachment_image(get_field('headshot',$post->ID),'team-img'); ?>
                    <div class="team-info-cont">
                        <h3 class="modal-title" id="exampleModalLongTitle"><?php echo $title; ?></h3>
                        <h4 class="position"><?php echo $position ?></h4>
                        <p class="contact"><?php echo $email_link; ?> | <?php echo $phone_link; ?></p>
                    </div>


                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <p><?php echo $bio; ?></p>
                </div>
            </div>
        </div>
    </div>
<?php endforeach ?>
    </div>
</section>



<?php get_footer(); ?>
