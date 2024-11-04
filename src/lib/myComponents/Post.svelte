<script>
	import { goto } from '$app/navigation';
	import Button from '$lib/components/ui/button/button.svelte';
	import Image from './Image.svelte';
	import Icon from '@iconify/svelte';

    export let href;
    export let src;
    export let alt;

    export let likeCount;
    export let bookmarkCount;
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div class="flex flex-col bg-secondary rounded-lg max-w-[200px] border border-white/10  cursor-pointer" on:click={() => goto(href)}>
	<Image {src} {alt} height="200px" width="200px" className="object-cover rounded-b-none border-b border-b-white/10" />
	<div class="flex flex-row items-center justify-center gap-3">
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
