<script>
	import { afterNavigate } from '$app/navigation';

	let isOpen = false; // Mobile menu
	let isDDMOpen = false; // Dropdown menu

	function toggleMenu() {
		isOpen = !isOpen;
		isDDMOpen = false;
	}

	function toggleDropdown() {
		isDDMOpen = !isDDMOpen;
	}

	afterNavigate(() => {
		isOpen = false;
		isDDMOpen = false;
	});
</script>

<header class="px-6 py-4 w-full flex justify-between items-start fixed shadow-lg backdrop-blur-xl z-10 bg-[#ffffffaa]">
	<h3 class="text-xl font-semibold"><a href="/">Studio Luoda</a></h3>

	<!-- Desktop Nav -->
	<nav>
		<ul class="font-medium hidden md:flex gap-6 items-center">
			<li><a href="/">Home</a></li>
			<li><a href="/about">About</a></li>
			<li class="relative">
				<button
					on:click={toggleDropdown}
					class="flex items-center gap-1 hover:text-[#DE2020]"
					aria-haspopup="true"
					aria-expanded={isDDMOpen}
				>
					Service
					<svg
						class="w-4 h-4 transition-transform duration-200"
						viewBox="0 0 20 20"
						fill="currentColor"
						xmlns="http://www.w3.org/2000/svg"
						class:rotate-180={isDDMOpen}
					>
						<path d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z" />
					</svg>
				</button>
				{#if isDDMOpen}
					<div class="w-max absolute top-full left-0 mt-2 bg-white shadow-lg rounded-lg p-4 z-20">
						<ul class="grid gap-4 text-sm">
							<li><a href="/service/web-development">Web Development</a></li>
							<li><a href="/service/ux-design">UX / UI Design</a></li>
							<li><a href="/service/digital-marketing">Digital Marketing</a></li>
						</ul>
					</div>
				{/if}
			</li>
			<li><a href="/contact">Contact</a></li>
		</ul>
	</nav>

	<!-- Hamburger (Mobile) -->
	<button
		aria-label="Toggle mobile menu"
		class="hamburger flex md:hidden cursor-pointer"
		on:click={toggleMenu}
	>
		<span class="bar top" class:is-open={isOpen}></span>
		<span class="bar bottom" class:is-open={isOpen}></span>
	</button>

	<!-- Mobile Nav -->
	{#if isOpen}
		<dialog open class="w-full h-dvh pl-8 flex flex-col fixed top-0 bg-stone-100 z-40">
			<nav class="relative top-32">
				<ul class="text-2xl grid gap-6">
					<li><a href="/">Home</a></li>
					<li><a href="/about">About</a></li>
					<li>
						<button on:click={toggleDropdown} class="flex items-center gap-1 hover:text-[#DE2020]">
							Service
							<svg
								class="w-5 h-5 transition-transform duration-200"
								viewBox="0 0 20 20"
								fill="currentColor"
								xmlns="http://www.w3.org/2000/svg"
								class:rotate-180={isDDMOpen}
							>
								<path d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z" />
							</svg>
						</button>
						{#if isDDMOpen}
							<div class="mt-2 pl-4 border-l-2 border-stone-300">
								<ul class="grid gap-4 text-lg mt-2">
									<li><a href="/service/web-development">Web Development</a></li>
									<li><a href="/service/ux-design">UX / UI Design</a></li>
									<li><a href="/service/digital-marketing">Digital Marketing</a></li>
								</ul>
							</div>
						{/if}
					</li>
					<li><a href="/contact">Contact</a></li>
				</ul>
			</nav>
		</dialog>
	{/if}
</header>

<style>
	a:hover {
		color: #de2020;
	}

	.hamburger {
		flex-direction: column;
		justify-content: center;
		gap: 6px;
		width: 26px;
		height: 24px;
		position: relative;
		z-index: 50;
	}

	.bar {
		height: 2px;
		width: 100%;
		background-color: black;
		border-radius: 50px;
		transition: all 0.3s ease-in-out;
	}

	.bar.top.is-open {
		transform: translateY(4px) rotate(-45deg);
	}

	.bar.bottom.is-open {
		transform: translateY(-4px) rotate(45deg);
	}

	.rotate-180 {
		transform: rotate(360deg);
	}
</style>
