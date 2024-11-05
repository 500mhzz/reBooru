<script lang="ts">
    import { goto } from '$app/navigation';
    import Button from '$lib/components/ui/button/button.svelte';
    import Image from './Image.svelte';
    import Icon from '@iconify/svelte';

    export let href: string;
    export let src;
    export let alt;

    export let likeCount;
    export let bookmarkCount;

    function handleClick() {
        console.log('Navigating to:', href); // Debugging step
        goto(href);
    }
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div
    class="flex cursor-pointer flex-col rounded-lg border border-white/10 bg-secondary"
    on:click={handleClick}
>
    <Image
        {src}
        {alt}
        height="auto"
        width="full"
        className="block rounded-b-none border-b border-b-white/10"
    />
    <div class="flex flex-row items-center justify-center gap-3 p-2">
        <Button variant="ghost" class="flex flex-row items-center gap-1 p-0 text-muted-foreground">
            <Icon icon="majesticons:chevron-up-circle-line" font-size="1.4rem" />
            {likeCount}
        </Button>
        <Button variant="ghost" class="flex flex-row items-center gap-1 p-0 text-muted-foreground">
            <Icon icon="majesticons:heart-line" font-size="1.4rem" />
            {bookmarkCount}
        </Button>
    </div>
</div>