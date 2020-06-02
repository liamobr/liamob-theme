<?php 
get_header(); 

$post_type_query  = new WP_Query(  
    array (  
        'post_type'      => 'post',  
        'posts_per_page' => -1  
    )  
);   

$posts_array  = $post_type_query->posts;   
?>

<section>
    <div class="line"><span class="secondary-color">liam@blog</span>:~$ blog -l</div>
    <br/>
    <div id="posts-list" class="line"></div>
    <br/>
    <div class="line"><span class="secondary-color">liam@blog</span>:~$ blog -h</div>
    <div class="line">Welcome to my blog!</div>
    <div class="line">Usage: blog [-c] [-l] | [-r] blog_name</div>
    <br/>
    <div class="line">Options:</div>
    <div class="line">-c List all categories</div>
    <div class="line">-l List all blog posts</div>
    <div class="line">-r ID Read specified blog post by ID from 'blog -l'</div>
    <br/>
    <div class="line"><span class="secondary-color">liam@blog</span>:~$ <span class="blink">_</span></div>
</section>

<script>
    var data = [
        <?php foreach($posts_array as $post){ ?>
            {
                title: "<?= $post->post_title ?>",
                url: "<?= $post->guid ?>"
            },
        <?php } ?>
    ];

    data.forEach(function(post){
        document.getElementById("posts-list").innerHTML += "<a class='post-title' href='" + post.url +  "'>&nbsp;" + post.title + "&nbsp;</a>";
    });
</script>

<script src="/wp-content/themes/liamob-theme/dist/js/terminal.js" defer>

<?php get_footer(); ?>