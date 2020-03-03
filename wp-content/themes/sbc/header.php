<!doctype html>
<html lang="en">

<head>

    <meta charset="<?php bloginfo( 'charset' ); ?>" />
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <title><?php wp_title(); ?></title>

    <!-- Load Fonts -->
    <link href="https://fonts.googleapis.com/css?family=Open+Sans:400,400i,700|Titillium+Web:700&display=swap" rel="stylesheet">
    <script src="https://kit.fontawesome.com/54a52a737c.js" crossorigin="anonymous"></script>
    <script src="https://code.jquery.com/jquery-3.4.1.min.js" integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo=" crossorigin="anonymous"></script>


    <?php wp_head() ;?>




</head>

<!-- START BODY -->
<body <?php body_class(); ?>>

<!-- START PAGE -->
<div id="page">

    <div class="container">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="#"><img src="<?php echo get_template_directory_uri(); ?>/dist/imgs/hs-kdi-logo-h.png" alt="Hydro Systems KDI Logo"></a>
            <button class="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="navbar-link-container navbar-collapse collapse justify-content-end" id="navbarSupportedContent">
<!--                <button class="close-mobile-nav" aria-label="Toggle navigation"><i class="fas fa-times"></i></button>-->
                <?php wp_nav_menu(array(
                    'theme_location' => 'top-nav'
                )); ?>
            </div>
        </nav>
    </div>

<!--End Nav Bar-->


<!-- START CONTENT -->
<div id="content" >


