<script>
	import webApp from '$lib/images/services/webApp.png';
	import spa from '$lib/images/services/spa.png';
	import pwa from '$lib/images/services/pwa.png';
	import blog from '$lib/images/services/blog.png';
	import cms from '$lib/images/services/cms.png';
	import ecommerce from '$lib/images/services/ecommerce.png';
	import landing from '$lib/images/services/landing.png';
	import portfolio from '$lib/images/services/portfolio.png';

	const services = [
	{
		title: 'Web Applications',
		description:
			'We build high-performance, scalable web applications custom-fitted to your unique business logic, workflows, and user requirements. From complex dashboards to interactive platforms, we ensure seamless user experiences, clean architecture, and maintainable code built for long-term growth.',
		image: webApp
	},
	{
		title: 'Single Page Application',
		description:
			'We specialize in building SPAs (Single Page Applications) using modern JavaScript frameworks like Svelte, React, or Vue. These dynamic applications load content instantly without full page reloads, ensuring a fluid, app-like experience that enhances usability and user engagement.',
		image: spa
	},
	{
		title: 'Progressive Web Apps',
		description:
			'Our PWAs combine the best of web and mobile apps — fast, reliable, installable, and offline-capable. We use modern PWA standards to create cross-platform apps that feel native while remaining accessible via the web, providing a consistent and dependable experience even on slow networks.',
		image: pwa
	},
	{
		title: 'Blog',
		description:
			'We develop performance-optimized blogs tailored to your content strategy and growth needs. Whether for personal branding, corporate publishing, or niche topics, our blogs are built with clean structure, SEO in mind, fast load times, and easy content management.',
		image: blog
	},
	{
		title: 'CMS',
		description:
			'We design intuitive, fast-loading Content Management Systems — custom-built or headless (like Strapi, Sanity, or Contentful). These platforms enable you to manage and scale your content effortlessly, with a focus on usability, flexibility, and performance.',
		image: cms
	},
	{
		title: 'E-com',
		description:
			'From modern storefronts to full-scale e-commerce platforms, we develop secure, scalable systems with features like product management, real-time inventory, multi-currency checkout, payment gateway integration, and tailored UX for higher conversion rates.',
		image: ecommerce
	},
	{
		title: 'Landing Pages',
		description:
			'We craft high-converting landing pages engineered for performance, clarity, and conversion. Whether for product launches, email campaigns, or lead capture, our pages are optimized for speed, SEO, and usability — with built-in support for A/B testing and analytics.',
		image: landing
	},
	{
		title: 'Portfolio Sites',
		description:
			'We create elegant, minimal portfolio websites that put your work front and center. Designed for creatives, designers, freelancers, and studios — our portfolio sites are fast, responsive, and aligned with your brand to showcase your skills and achievements beautifully.',
		image: portfolio
	}
];

</script>

<svelte:head>
  <title>Web Development Services – Studio Luoda</title>
  <meta name="description" content="Custom web development tailored to your brand's goals – optimized for performance, accessibility, and scalability." />
  <meta name="keywords" content="web development, frontend development, SvelteKit, responsive websites, fast websites, custom websites" />
  <meta property="og:title" content="Web Development Services – Studio Luoda" />
  <meta property="og:description" content="Building blazing-fast, modern websites using the latest tech and best UX principles." />
  <meta property="og:url" content="https://yourdomain.com/service/web-development" />
  <meta property="og:type" content="website" />
  <meta property="theme-color" content="#DE2020" />
</svelte:head>

<main>
	<section class="min-h-dvh px-6 py-20 text-neutral-900 flex items-center justify-center overflow-hidden relative">
    <div class="absolute top-0 w-[200dvh] h-[200dvh] -z-5 bg-blend-overlay bg-radial from-[hsla(0,75%,50%,0.3)] to-60%"></div>
		<div class="max-w-3xl text-center space-y-6">
			<h1 class="text-4xl md:text-5xl font-bold tracking-tight">
				<span class="text-[#de2020] text-glow">Performance-Driven</span> Web Development
			</h1>
			<p class="text-lg md:text-xl text-neutral-600">
				We build elegant, scalable, and lightning-fast web applications using modern frameworks and
				best practices. Clean code. Seamless UX. Built to scale.
			</p>
			<a
				href="/contact"
				class="inline-block bg-black text-white px-6 py-3 rounded hover:bg-[#DE2020] hover:shadow-xl hover:shadow-[hsla(0,75%,50%,0.4)] transition"
			>
				Start a Project
			</a>
		</div>
		<div class="absolute bottom-12 flex justify-center items-center">
			<span class="flex items-center text-stone-600"
				><div class="mouse"></div>
				Scroll to know more</span
			>
		</div>
	</section>

	<section class="w-full pt-20 flex flex-col justify-between items-center">
		{#each services as service}
			<div
				class="w-full lg:min-h-[80dvh] max-w-120 lg:max-w-none px-6 lg:px-18 py-12 flex flex-col lg:flex-row justify-between gap-8"
			>
				<!-- Text + Image Container -->
				<div class="w-fit lg:pt-12 lg:min-w-2/5 flex flex-col gap-2">
					<h1
						class="w-fit mb-6 text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold text-shadow-md"
					>
						We develop
						<span class="text-[#e11d48] tracking-tight">{service.title}</span>
					</h1>

					<!-- Mobile Image -->
					<img
						src={service.image}
						alt={service.title}
						class="w-full h-auto mb-4 rounded-lg lg:hidden aspect-video shadow-2xl shadow-[rgba(0,0,0,0.1)] bg-neutral-800"
					/>

					<p class="max-w-120 text-stone-500">
						{service.description}
					</p>
					<a
						href="/contact"
						class="w-fit bg-black text-white px-6 py-3 rounded hover:bg-[#DE2020] hover:shadow-xl hover:shadow-[hsla(0,75%,50%,0.4)] transition"
					>
						Enquire now
					</a>
				</div>

				<!-- Desktop Image -->
				<img
					src={service.image}
					alt={service.title}
					class="hidden lg:block max-w-5/10 h-fit rounded-3xl shadow-2xl shadow-[rgba(0,0,0,0.1)] bg-neutral-800"
				/>
			</div>
		{/each}
	</section>
</main>

<style>
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
</style>
