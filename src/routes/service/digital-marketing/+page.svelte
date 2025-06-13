<script>
    const marketingServices = [
	{
		title: 'SEO & Organic Visibility',
		description:
			'Boost your discoverability with technical SEO, on-page optimization, content strategies, and search intent alignment. We optimize every layer of your site for search engines and real humans — ensuring you rank with purpose.',
		image: ''
	},
	{
		title: 'Content Marketing',
		description:
			'We plan and produce content that converts — blogs, guides, case studies, and thought leadership designed to build trust, authority, and organic growth. Backed by keyword research and storytelling that resonates.',
		image: ''
	},
	{
		title: 'Social Media Marketing',
		description:
			'We create lean, intentional social strategies that drive engagement. From branded content to community building and analytics, we help you stay relevant and authentic across platforms like Instagram, X (Twitter), and LinkedIn.',
		image: ''
	},
	{
		title: 'Paid Advertising (PPC)',
		description:
			'Reach your target audience faster with laser-focused ad campaigns across Google, Meta, and more. We manage budgets, optimize creatives, and refine funnels to increase ROI — not just impressions.',
		image: ''
	},
	{
		title: 'Email Marketing & Automation',
		description:
			'Turn inboxes into conversions. We build email flows, newsletters, and drip campaigns that are timely, clean, and personalized — helping you nurture leads, retain customers, and grow loyalty.',
		image: ''
	},
	{
		title: 'Brand Positioning & Messaging',
		description:
			'Define what makes your brand matter. We refine your messaging, voice, and content tone to create a cohesive identity across touchpoints — making sure people don’t just find you, but remember you.',
		image: ''
	},
	{
		title: 'Analytics & Conversion Optimization',
		description:
			'We don’t guess — we analyze. With tools like GA4, Hotjar, and custom dashboards, we track what works, where users drop off, and how to improve. Every insight feeds back into smarter strategies.',
		image: ''
	}
];

</script>

<svelte:head>
  <title>Digital Marketing Services – Studio Luoda</title>
  <meta name="description" content="Amplify your reach with SEO, content strategy, and data-driven digital marketing built to convert." />
  <meta name="keywords" content="digital marketing, SEO, content strategy, marketing services, online visibility, brand growth" />
  <meta property="og:title" content="Digital Marketing Services – Studio Luoda" />
  <meta property="og:description" content="Boost your brand with intelligent marketing strategies tailored to your audience." />
  <meta property="og:url" content="https://yourdomain.com/service/digital-marketing" />
  <meta property="og:type" content="website" />
  <meta property="theme-color" content="#DE2020" />
</svelte:head>

<section class="min-h-dvh px-6 py-20 text-neutral-900 flex items-center justify-center overflow-hidden relative">
	<div class="absolute top-0 w-[200dvh] h-[200dvh] -z-5 bg-blend-overlay bg-radial from-[hsla(0,75%,50%,0.3)] to-60%"></div>

	<div class="max-w-3xl text-center space-y-6">
		<h1 class="text-4xl md:text-5xl font-bold tracking-tight">
			<span class="text-[#de2020] text-glow">Growth-Focused</span> Digital Marketing
		</h1>
		<p class="text-lg md:text-xl text-neutral-600">
			We help brands grow through strategic campaigns, clean creative, and data-backed decisions. From search to social, we craft marketing ecosystems that drive real, measurable results.
		</p>
		<a
			href="/contact"
			class="inline-block bg-black text-white px-6 py-3 rounded hover:bg-[#DE2020] hover:shadow-xl hover:shadow-[hsla(0,75%,50%,0.4)] transition"
		>
			Start a Campaign
		</a>
	</div>

	<div class="absolute bottom-12 flex justify-center items-center">
		<span class="flex items-center text-stone-600">
			<div class="mouse"></div>
			Scroll to explore
		</span>
	</div>
</section>

<section class="text-center max-w-4xl mx-auto py-20 px-6">
	<h2 class="text-3xl md:text-4xl font-semibold mb-6">
		Tailored Marketing for the Modern Brand
	</h2>
	<p class="text-neutral-600 text-lg md:text-xl">
		We don’t chase trends — we build strategies. Studio Luoda’s digital marketing services combine audience psychology, conversion science, and minimal creative to craft scalable growth systems. Whether you're launching or scaling, we help you reach the right people, at the right time, with the right message.
	</p>
</section>

<section class="mb-20 py-20 px-6 text-center bg-stone-200 lg:rounded-3xl mx-auto max-w-5xl mt-12">
	<h2 class="text-3xl md:text-4xl font-semibold mb-4">Let’s Scale Your Brand</h2>
	<p class="text-neutral-600 text-lg md:text-xl mb-6">
		Whether you're starting fresh or refining what works — we’ll build a custom marketing system that fits your brand, voice, and growth stage.
	</p>
	<a
		href="/contact"
		class="inline-block bg-black text-white px-6 py-3 rounded hover:bg-[#DE2020] hover:shadow-xl hover:shadow-[hsla(0,75%,50%,0.4)] transition"
	>
		Request a Proposal
	</a>
</section>

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

