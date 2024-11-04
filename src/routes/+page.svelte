<script lang="ts">
    import { onMount } from 'svelte';
    import Image from "$lib/myComponents/Image.svelte";
    import Post from "$lib/myComponents/Post.svelte";

    let posts: {
        likeCount: number,
        bookmarkCount: number,
        src: string,
        alt: string,
        href: string,
    }[] = [];

    onMount(async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/photos?_limit=20');
        const data = await response.json();
        posts = data.map((post: any) => ({
            likeCount: Math.floor(Math.random() * 100),
            bookmarkCount: Math.floor(Math.random() * 100),
            src: post.url,
            alt: post.title,
            href: `https://jsonplaceholder.typicode.com/photos/${post.id}`
        }));
    });
</script>

<div class="flex flex-wrap gap-2">
    {#each posts as post}
        <Post {...post} />
    {/each}
</div>