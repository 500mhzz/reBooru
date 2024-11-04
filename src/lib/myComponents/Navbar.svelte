<script>
	import Button from '$lib/components/ui/button/button.svelte';
</script>

<div class="m-2 flex flex-col rounded-lg border border-white/10 bg-secondary">
	<div class="flex flex-row items-center justify-between p-3">
		<h1 class="text-xl font-semibold">Re:Booru</h1>

		<Button href="/auth/login" class="rounded-lg px-5 py-2 text-base">Login</Button>
	</div>
	<div
		class="flex flex-row items-center gap-2 rounded-b-lg border-t border-t-white/10 bg-background/50 p-2"
	>
		<a
			href="/"
			class="rounded-lg border border-white/10 bg-secondary px-3 py-1 hover:border-white/20">Home</a
		>
		<a
			href="/explore"
			class="rounded-lg border border-white/10 bg-secondary px-3 py-1 hover:border-white/20"
			>Explore</a
		>
		<a
			href="/search"
			class="rounded-lg border border-white/10 bg-secondary px-3 py-1 hover:border-white/20">Search</a
		>
	</div>
</div>
