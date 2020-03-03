<?php

/* Template Name: Project Index */

get_header();

global $wp_query;
$id = get_the_ID();

$title = get_the_title();
$image = get_field('image');
$content = $post->post_content;

$url = (isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] === 'on' ? "https" : "http") . "://$_SERVER[HTTP_HOST]$_SERVER[REQUEST_URI]";
$url = substr($url, 0, -1);
$pathFragments = explode('/', $url);
$end = end($pathFragments);


$args = array(
    'posts_per_page' => '-1',
    'post_type' => 'projects',
    'tax_query' => array(
        array(
            'taxonomy' => 'project_category',
            'field'    => 'slug',
            'terms' => $end
        )
    )
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

<section class="category-section pb-0">
    <div class="container">
        <div class="row">
            <div class="col col-12">
                <ul>
                    <?php
                    $customPostTaxonomies = get_object_taxonomies('projects');

                    if(count($customPostTaxonomies) > 0)
                    {
                        foreach($customPostTaxonomies as $tax)
                        {
                            if($tax != 'featured_project'):
                            $args = array(
                                'orderby' => 'name',
                                'show_count' => 0,
                                'pad_counts' => 0,
                                'hierarchical' => 1,
                                'taxonomy' => $tax,
                                'title_li' => ''
                            );

                            $cats = wp_list_categories( $args );
                            endif;
                        }
                    }

                    ?>
                </ul>
            </div>
        </div>
    </div>
</section>

<section class="project-grid pt-0">
    <div class="container">
        <div class="row">
            <?php $i = 0; foreach ( $posts as $post ): setup_postdata($post) ?>
                <div class="col col-12 col-sm-6 col-lg-4">
                    <div class="proj-card">
                        <?php echo wp_get_attachment_image(get_field('project_photo',$post->ID),'card-img'); ?>
                        <button type="button" class="btn-proj" data-toggle="modal" data-target="#modal-<?php echo $post->ID ?>">
                            <span class="proj-title"><?php echo $post->post_title ?></span>
                        </button>
                    </div>
                </div>
            <?php endforeach ?>
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
