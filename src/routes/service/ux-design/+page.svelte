<script>
	import uxResearch from '$lib/images/services/ux-research.png';
	import wireframe from '$lib/images/services/wireframe.png';
	import uiDesign from '$lib/images/services/ui-design.png';
	import interaction from '$lib/images/services/interaction.png';
	import mobile from '$lib/images/services/mobile.png';
	import redesign from '$lib/images/services/redesign.png';
	import accessibility from '$lib/images/services/accessibility.png';

	const services = [
	{
		title: 'UX Research',
		description:
			'We begin with a deep understanding of your users, their needs, behaviors, and pain points. Through methods like interviews, usability tests, user flows, and competitor analysis, we uncover actionable insights to guide design decisions and reduce guesswork early on.',
		image: uxResearch
	},
	{
		title: 'Wireframing & UX Strategy',
		description:
			'We translate ideas into structured, low-fidelity wireframes that define layout, information hierarchy, and navigation. Paired with a solid UX strategy, this phase ensures every interface element serves a purpose — aligned with both user goals and business objectives.',
		image: wireframe
	},
	{
		title: 'UI/UX Design for Web Apps',
		description:
			'We design intuitive, beautiful, and scalable user interfaces for modern web applications. Every screen is crafted with a focus on usability, consistency, and accessibility — ensuring users can interact effortlessly across flows, no matter the complexity of the product.',
		image: uiDesign
	},
	{
		title: 'Interaction Design & Motion',
		description:
			'We add life to your interfaces with purposeful micro-interactions, animations, and transitions. These elements guide users, reinforce intent, and bring clarity — all while maintaining a balance between aesthetic motion and performance.',
		image: interaction
	},
	{
		title: 'Mobile Responsive UI',
		description:
			'We ensure your product works flawlessly on all devices — from large desktops to small screens. Using responsive frameworks and custom design breakpoints, we adapt layouts and interactions to deliver a frictionless mobile experience.',
		image: mobile
	},
	{
		title: 'Redesigns & UX Audits',
		description:
			'Have an existing product? We analyze and redesign it based on modern usability standards. Our UX audits evaluate key metrics like navigation flow, accessibility, visual hierarchy, and conversion points — delivering practical suggestions and complete redesigns when needed.',
		image: redesign
	},
	{
		title: 'Accessibility & Inclusive Design',
		description:
			'We build experiences that are accessible to everyone — regardless of ability. From color contrast and keyboard navigation to screen reader support and WCAG compliance, our designs prioritize inclusivity without compromising elegance.',
		image: accessibility
	}
];

</script>

<svelte:head>
  <title>UX Design Services – Studio Luoda</title>
  <meta name="description" content="User-centered design for web and product experiences that are intuitive, accessible, and delightful." />
  <meta name="keywords" content="UX design, UI design, user experience, interface design, accessibility" />
  <meta property="og:title" content="UX Design Services – Studio Luoda" />
  <meta property="og:description" content="Design systems and interfaces that prioritize usability, aesthetics, and brand identity." />
  <meta property="og:url" content="https://yourdomain.com/service/ux-design" />
  <meta property="og:type" content="website" />
</svelte:head>

<main>
	<section class="min-h-dvh px-6 py-20 text-neutral-900 flex items-center justify-center overflow-hidden relative">
	<div class="absolute top-0 w-[200dvh] h-[200dvh] -z-5 bg-blend-overlay bg-radial from-[hsla(0,75%,50%,0.3)] to-60%"></div>
	<div class="max-w-3xl text-center space-y-6">
		<h1 class="text-4xl md:text-5xl font-bold tracking-tight">
			<span class="text-[#de2020] text-glow">Human-Centered</span> UX Design Services
		</h1>
		<p class="text-lg md:text-xl text-neutral-600">
			We craft meaningful, intuitive, and accessible user experiences rooted in research and strategy.
			From UX audits to responsive interfaces, we align every interaction with your users’ needs and business goals.
		</p>
		<a
			href="/contact"
			class="inline-block bg-black text-white px-6 py-3 rounded hover:bg-[#DE2020] hover:shadow-xl hover:shadow-[hsla(0,75%,50%,0.4)] transition"
		>
			Start a UX Project
		</a>
	</div>
	<div class="absolute bottom-12 flex justify-center items-center">
		<span class="flex items-center text-stone-600">
			<div class="mouse"></div>
			Scroll to explore our UX expertise
		</span>
	</div>
</section>


	<section class="w-full px-6 lg:px-20 pt-20 flex flex-col justify-between items-center divide-y-2 divide-stone-200">
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
