<?php 
get_header(); 

$post_type_query  = new WP_Query(  
    array (  
        'post_type'      => 'post',  
        'posts_per_page' => -1  
    )  
);   

$posts_array  = $post_type_query->posts;   
$post_title_array = wp_list_pluck( $posts_array, 'post_title', 'ID' );
?>

<section>
    <div class="line"><span class="secondary-color">user@blog</span>:~$ blog ls</div>
    <br/>
    <div id="posts-list" class="line"></div>
    <br/>
    <div class="line"><span class="secondary-color">user@blog</span>:~$ Click a post title to view<span class="blink">_</span></div>
</section>

<script>
    var titles = [];

    <?php 
    foreach($post_title_array as $title){
        ?>
        titles.push("<?= $title ?>");
        <?php
    } 
    ?>

    titles.forEach(function(title){
        document.getElementById("posts-list").innerHTML += "<span class='post-title'>&nbsp;" + title + "&nbsp;</span>" + "&nbsp;&nbsp;&nbsp;&nbsp;";
    });
</script>

<script src="/wp-content/themes/liamob-theme/dist/assets/js/terminal.js" defer>

<?php get_footer(); ?>