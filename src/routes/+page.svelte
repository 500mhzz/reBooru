<script lang="ts">
    import { onMount } from 'svelte';
    import Post from "$lib/myComponents/Post.svelte";

    let posts: {
        likeCount: number,
        bookmarkCount: number,
        src: string,
        alt: string,
        href: string,
        width: number,
        height: number,
    }[] = [];

    export let data;

    onMount(async () => {
        const res = await data.response;
        posts = res.posts.map((post: any) => {
            const width = post.file.width;
            const height = post.file.height;
            return {
                likeCount: post.score.up,
                bookmarkCount: post.fav_count,
                src: post.file.url,
                alt: post.tags.artist.join(', '),
                href: `https://e621.net/posts/${post.id}`,
                width,
                height,
            };
        });
    });
</script>

<div class="masonry sm:masonry-sm md:masonry-md lg:masonry-lg">
    {#each posts as post}
        <div class="break-inside mb-3">
            <Post {...post} />
        </div>
    {/each}
</div>