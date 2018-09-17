<?php
global $post;

$current = $post->post_title;
?>

<div class="breadcrumbs-wrapper">
	<div class="breadcrumbs-container">
		<nav role="navigation">
			<ul class="breadcrumbs">
				<li><a>Home</a></li>
                <?php if(is_page() && $post->post_parent){
                    ?>
                    <li>
                        <a href="<?= get_post_permalink($post->post_parent); ?>">
                            <?= get_post($post->post_parent)->post_title; ?>
                        </a>
                    </li>
                    <?php
                } ?>
                <li><a aria-label="You are here:"><?= $current ?></a></li>
			</ul>
		</nav>
	</div>
</div>