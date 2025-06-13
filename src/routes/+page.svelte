<script>
	import Excellence from '$lib/components/Excellence.svelte';
	import Faq from '$lib/components/FAQ.svelte';
	import bgPattern from '$lib/images/bg-pattern.png';

	import { onMount } from 'svelte';
	import { gsap } from 'gsap';

	onMount(() => {
		//About Section animation
		const timeline = gsap.timeline({ defaults: { ease: 'power2.out' } });

		timeline
			.from('.about-heading', { opacity: 0, y: 20, duration: 1 })
			.from('.about-subtext', { opacity: 0, y: 10, duration: 0.8 }, '-=0.6')
			.from('.about-description', { opacity: 0, y: 10, duration: 0.8 }, '-=0.6')
			.to('.about-heading', { opacity: 0, y: -20, duration: 0.6, delay: 0.6 })
			.to('.about-subtext', { opacity: 0, y: -10, duration: 0.4 }, '-=0.6')
			.to('.about-description', { opacity: 0, y: -10, duration: 0.4 }, '-=0.6')
			.to('.about-wrapper', { opacity: 0 })
			.to('.block-1', { duration: 1, y: -2000 })
			.to('.block-2', { duration: 1, y: -2000 }, '-=0.9')
			.to('.block-3', { duration: 1, y: -2000 }, '-=0.9')
			.to('.block-4', { duration: 1, y: -2000 }, '-=0.9')
			.to('.block-5', { duration: 1, y: -2000 }, '-=0.9')
			.to('.block-6', { duration: 1, y: -2000 }, '-=0.9')
			// .to('.block-7', { duration: 1, y: -2000 }, '-=0.9')

			.to('#about-section', {
				display: 'none',
				duration: 0
			});

		//Marquee text - Hero section
		let marquee = gsap.to('.marquee-track', {
			xPercent: -100,
			repeat: -1,
			runBackwards: true,
			duration: 16,
			ease: 'linear'
		});

		let marqueeRev = gsap.to('.marquee-track-rev', {
			xPercent: -100,
			repeat: -1,
			duration: 16,
			ease: 'linear'
		});
	});

	const services = [
		{
			title: 'Web App',
			description:
				'Robust, scalable apps—including SPA & PWA—with optimized performance and modern UX.',
			icon: 'i-lucide-layout-dashboard'
		},
		{
			title: 'Landing Page',
			description: 'High-converting, lightning-fast landing pages designed for clarity and action.',
			icon: 'i-lucide-globe'
		},
		{
			title: 'Portfolio Site',
			description: 'Clean, expressive portfolios that showcase your work with elegance and flair.',
			icon: 'i-lucide-folder-open'
		},
		{
			title: 'Blog',
			description: 'SEO-optimized blogs powered by CMS or static generation, built for growth.',
			icon: 'i-lucide-file-text'
		},
		{
			title: 'CMS',
			description:
				'Custom content management systems—headless or full-stack—for flexible publishing.',
			icon: 'i-lucide-database'
		},
		{
			title: 'E-Commerce',
			description: 'User-first online stores with dynamic product flows and seamless checkout.',
			icon: 'i-lucide-shopping-cart'
		}
	];

	const uxServices = [
		{
			title: 'UI/UX Design for Web Apps',
			description: 'Crafting intuitive interfaces with pixel-perfect visuals.',
			icon: 'i-lucide-monitor-smartphone'
		},
		{
			title: 'Wireframing & UX Strategy',
			description: 'Structuring user journeys with clarity and purpose.',
			icon: 'i-lucide-shapes'
		},
		{
			title: 'Interaction Design & Motion',
			description: 'Micro-interactions and motion design that guide users.',
			icon: 'i-lucide-move'
		},
		{
			title: 'Mobile-Responsive UI',
			description: 'Designs that adapt fluidly across devices.',
			icon: 'i-lucide-smartphone'
		},
		{
			title: 'Redesigns & UX Audits',
			description: 'Evaluating and enhancing existing experiences.',
			icon: 'i-lucide-rotate-ccw'
		},
		{
			title: 'Accessibility & Inclusive Design',
			description: 'Creating for everyone, including all abilities.',
			icon: 'i-lucide-eye'
		}
	];
</script>

<svelte:head>
  <title>Studio Luoda – Elevating Digital Experiences</title>
  <meta name="description" content="Studio Luoda is a creative tech studio crafting elegant, high-performance digital experiences through design and development." />
  <meta name="keywords" content="Studio Luoda, web design, web development, UX design, digital studio, creative tech, modern websites, UI/UX" />
  <meta property="og:title" content="Studio Luoda – Elevating Digital Experiences" />
  <meta property="og:description" content="Design-driven digital studio building intuitive web experiences for startups and creators." />
  <meta property="og:url" content="https://yourdomain.com/" />
  <meta property="og:type" content="website" />
</svelte:head>

<section id="about-section" class="absolute w-full max-w-dvw overflow-hidden z-8">
	<div class="about-wrapper text-center w-full absolute z-4">
		<h1 class="about-heading text-3xl sm:text-5xl font-bold">
			<span class="opacity-70">Studio</span> Luoda
		</h1>
		<p class="about-subtext italic text-base sm:text-lg mt-2 opacity-60">
			<i class="">Luo<span class="mr-px ml-0.5 relative bottom-1 rounded">.</span>da</i> - from Finnish,
			meaning "to create".
		</p>
		<p class="about-description mt-6 sm:mt-8 md:text-xl font-medium">
			We’re a small creative studio building clean, user-first web experiences.
		</p>
	</div>

	<!-- Animated Red Blocks for Transition -->
	<div id="block-wrapper" class="max-w-dvw h-max grid grid-cols-6">
		<!-- <div class="block-7 h-dvh bg-[#DE2020]"></div> -->
		<div class="block-6 h-dvh bg-[#DE2020]"></div>
		<div class="block-5 h-dvh bg-[#DE2020]"></div>
		<div class="block-4 h-dvh bg-[#DE2020]"></div>
		<div class="block-3 h-dvh bg-[#DE2020]"></div>
		<div class="block-2 h-dvh bg-[#DE2020]"></div>
		<div class="block-1 h-dvh bg-[#DE2020]"></div>
	</div>
</section>

<!-- ------------ Hero Section ------------- -->
<!-- --------------------------------------- -->
<!-- --------------------------------------- -->

<section class="h-svh items-end justify-center grid">
	<div class="px-8 pt-16 flex flex-col justify-center items-center gap-3 text-center">
		<h1 class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-[0.01px]">
			Redefining <br /> <span class="text-glow text-[#DE2020]">Web</span> experiences
		</h1>
		<p class="mt-2 text-[#7A7A7A]">Crafting sleek, high-performing websites that stand out</p>
		<a href='/contact'
			class="w-fit px-3 py-2 font-medium rounded bg-black hover:bg-[#DE2020] hover:shadow-[hsla(0,75%,50%,0.4)] hover:shadow-lg text-white hover:text-white"
		>
			Get in touch
		</a>
	</div>
	<div class="max-w-240 overflow-hidden fadeout">
		<div class="my-4 marquee-text flex">
			<div id="marquee-track" class="marquee-track">
				<p>Next.JS</p>
				<p>MERN</p>
				<p>TailwindCSS</p>
				<p>React</p>
				<p>Sveltekit</p>
				<p>Typescript</p>
				<p>GSAP</p>
				<p>Redis</p>
				<p>PostgreSQL</p>
				<p>MongoDB</p>
			</div>
			<div class="marquee-track">
				<p>Next.JS</p>
				<p>MERN</p>
				<p>TailwindCSS</p>
				<p>React</p>
				<p>Sveltekit</p>
				<p>Typescript</p>
				<p>GSAP</p>
				<p>Redis</p>
				<p>PostgreSQL</p>
				<p>MongoDB</p>
			</div>
		</div>
		<div class="my-4 marquee-text flex">
			<div class="marquee-track-rev">
				<p>Illustrator</p>
				<p>Figma</p>
				<p>UX reserch</p>
				<p>Wireframe</p>
				<p>Prototype</p>
				<p>Illustrator</p>
				<p>Adobe Xd</p>
				<p>After effect</p>
				<p>Navigation</p>
			</div>
			<div class="marquee-track-rev">
				<p>Illustrator</p>
				<p>Figma</p>
				<p>UX reserch</p>
				<p>Wireframe</p>
				<p>Prototype</p>
				<p>Illustrator</p>
				<p>Adobe Xd</p>
				<p>After effect</p>
				<p>Navigation</p>
			</div>
		</div>
	</div>

	<div class="w-full relative bottom-12 flex justify-center items-center">
		<span class="flex items-center text-stone-500"
			><div class="mouse"></div>
			Scroll down</span
		>
	</div>
</section>

<!-- ------------ Hero Section ------------- -->
<!-- --------------------------------------- -->
<!-- --------------------------------------- -->

<!-- ----------- Service Section ----------- -->
<!-- --------------------------------------- -->
<!-- --------------------------------------- -->
<div style={`background-image: url('${bgPattern}')`} class="bg-center bg-cover">
	<div class="p-4 text-lg text-center sticky top-14 text-stone-400 bg-stone-700 z-9">
		What we do?
	</div>
	<section
		class="py-16 px-6 sm:px-8 lg:px-12 text-neutral-900 backdrop-blur-2xl bg-[hsla(0,0%,100%,0.3)]"
	>
		<div class="max-w-7xl mx-auto space-y-12">
			<!-- Heading -->
			<div class="text-center space-y-4">
				<h2 class="text-3xl sm:text-4xl font-bold">
					<span class="text-[#DE2020] text-glow">Development</span> Services
				</h2>
				<p class="text-neutral-600 max-w-xl mx-auto">
					We build reliable digital solutions for modern businesses—from sleek SPAs to scalable web
					platforms.
				</p>
			</div>

			<!-- Service List -->
			<div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
				{#each services as service}
					<div class="p-6 rounded-xl border border-stone-200 bg-[hsla(0,0%,100%,0.8)] text-center">
						<div class="text-[] text-2xl mb-4">
							<i class={service.icon}></i>
							<h3 class="text-lg font-semibold mb-2">
								{service.title}
							</h3>
						</div>
						<p class="text-sm text-neutral-600">{service.description}</p>
					</div>
				{/each}
			</div>
		</div>
	</section>

	<section
		class="py-16 px-6 sm:px-8 lg:px-12 text-neutral-900 backdrop-blur-2xl bg-[hsla(0,0%,100%,0.3)]"
	>
		<div class="max-w-7xl mx-auto space-y-12">
			<!-- Heading -->
			<div class="text-center space-y-4">
				<h2 class="text-3xl sm:text-4xl font-bold">
					<span class="text-[#DE2020] text-glow">UX Design</span> Services
				</h2>
				<p class="text-neutral-600 max-w-xl mx-auto">
					We deliver human-centered design systems and interactive experiences that elevate your
					digital product.
				</p>
			</div>

			<!-- Service List -->
			<div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
				{#each uxServices as service}
					<div class="p-6 text-center rounded-xl border border-stone-200 bg-[hsla(0,0%,100%,0.8)]">
						<div class="text-] text-2xl mb-4">
							<i class={service.icon}></i>
							<h3 class="text-lg font-semibold mb-2">
								{service.title}
							</h3>
						</div>
						<p class="text-sm text-neutral-600">{service.description}</p>
					</div>
				{/each}
			</div>
		</div>
	</section>
</div>
<!-- ----------- Service Section ----------- -->
<!-- --------------------------------------- -->
<!-- --------------------------------------- -->

<Excellence />

<Faq />

<!-- <section class="h-dvh px-6 flex"></section> -->

<style>
	.marquee-text {
		overflow: clip;
	}

	.marquee-track {
		display: flex;
		width: max-content;
	}
	.marquee-track-rev {
		display: flex;
		width: max-content;
	}

	.marquee-text p {
		width: max-content;
		margin: 0 0.5rem;
		border: 1px dashed black;
		color: black;
		border-radius: 999px;
		padding: 12px 2rem;
	}

	@keyframes marquee-move-text {
		to {
			transform: translateX(-50%);
		}
	}

	.fadeout {
		mask-image: linear-gradient(
			to right,
			transparent,
			black var(--fade-size, 16rem),
			black calc(100% - var(--fade-size, 16rem)),
			transparent
		);
	}

	.mouse {
		width: 22px;
		height: 40px;
		margin: 0 10px;
		border: 1px solid #79716b;
		border-radius: 60px;
		position: relative;
		&::before {
			content: '';
			width: 12px;
			height: 12px;
			position: absolute;
			top: 5px;
			left: 50%;
			transform: translateX(-50%);
			background-color: #79716b;
			border-radius: 50%;
			opacity: 1;
			animation: wheel 2.4s infinite;
			-webkit-animation: wheel 2.4s infinite;
		}
	}

	@keyframes wheel {
		to {
			opacity: 0.2;
			top: 22px;
		}
	}

	.about-wrapper {
		min-height: 100dvh;
		background-color: #de2020;
		color: white;
		display: flex;
		justify-content: center;
		flex-direction: column;
		padding: 0 1rem;
		z-index: 20;
		overflow: hidden;
	}
</style>
