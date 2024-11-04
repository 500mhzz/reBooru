<script>
	import Navbar from '$lib/myComponents/Navbar.svelte';
	import '../app.css';
</script>

<div>
	<Navbar />
	<main class="m-2">
		<slot />
	</main>
</div>
