<script>
	import '../app.css';
	import Navbar from '$lib/components/Navbar.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import BackToTop from '$lib/components/assets/backToTop.svelte';

	let { children } = $props();
</script>

<Navbar />

{@render children()}

<BackToTop />

<Footer />