<!doctype html>
<html lang="en">

<head>


</head>

<!-- START BODY -->
<body>

<!-- START PAGE -->
<div id="page">

<!--    Start Nav Bar   -->
    <nav class="navbar" id="navbar">

    <!--toggle mobile nav-->
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <i class="fas fa-bars"></i>
        </button>

    <!-- nav bar logo -->
        <a class="navbar-brand" href="<?php echo get_home_url(); ?>" id="logo">
            <?php if ($text_logo): ?>
                <?php echo $text_logo; ?>
            <?php else: ?>
                <span class="white">Careers Theme</span>
            <?php endif; ?>
        </a>

        <div class="navbar-link-container">
            <button class="close-mobile-nav" aria-label="Toggle navigation"><i class="fas fa-times"></i></button>
            <?php wp_nav_menu(array(
                    'theme_location' => 'top-nav',
                    'walker' => new CIM_Walker()
            )); ?>
        </div>


    </nav>
<!--End Nav Bar-->


<!-- START CONTENT -->
<div id="content" >


