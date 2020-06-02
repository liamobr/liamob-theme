<?php get_header(); ?>

<main>
    <?php while ( have_posts() ) : the_post(); ?>
        <h1><?php the_title() ?></h1>
        <div class="back">
            <a href="/blog"><i class="fas fa-angle-double-left"></i>Go back</a>
        </div>
        <div>
            <?php the_content() ?>
        </div>
    <?php endwhile; ?>
</main>

<?php get_footer(); ?>