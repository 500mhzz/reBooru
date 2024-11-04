<script lang="ts">
    import { onMount } from 'svelte';
    import { Skeleton } from '$lib/components/ui/skeleton';

    export let src: string;
    export let alt: string;
    export let height: string;
    export let width: string;
    export let className: string;

    let loaded = false;
    let failed = false;
    let loading = false;

    onMount(() => {
        const img = new Image();
        img.src = src;
        loading = true;

        img.onload = () => {
            loading = false;
            loaded = true;
        };
        img.onerror = () => {
            loading = false;
            failed = true;
        };
    });
</script>

{#if loading}
    <Skeleton style="height: {height}; width: {width};" class="rounded-lg bg-white/20" />
{:else if failed}
    <div class="h-[{height}] w-[{width}]">
        <p>Failed to load image</p>
    </div>
{:else if loaded}
    <img
        {src}
        {alt}
        loading="lazy"
        style="height: {height}; width: {width};"
        class="rounded-lg {className}"
    />
{/if}