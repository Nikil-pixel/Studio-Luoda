<script>
	// images
	import performance from '$lib/icons/performance.svg';
	import accessibility from '$lib/icons/accessibility.svg';
	import seo from '$lib/icons/seo.svg';
	import bug from '$lib/icons/bug.svg';
	import responsive from '$lib/icons/responsive.svg';
	import code from '$lib/icons/code.svg';

	const strengths = [
		{
			title: 'Performance',
			desc: 'We build blazing-fast websites that prioritize load time, smooth interactions, and optimized assets.',
			icon: performance
		},
		{
			title: 'Accessibility',
			desc: 'We ensure inclusive experiences by designing with accessibility in mind for all users.',
			icon: accessibility
		},
		{
			title: 'SEO Best Practices',
			desc: 'Our websites are structured for organic discoverability and technical SEO optimization.',
			icon: seo
		},
		{
			title: 'Bug-Free Delivery',
			desc: 'Rigorous testing and attention to detail means our solutions work cleanly — every time.',
			icon: bug
		},
		{
			title: 'Responsiveness',
			desc: 'Mobile-first and responsive design is our default — every screen size gets a refined experience.',
			icon: responsive
		},
		{
			title: 'Code Quality',
			desc: 'We write modular, scalable, and maintainable code — built to evolve with your product.',
			icon: code
		}
	];
</script>

<section class="py-20 px-6 sm:px-10 lg:px-20 text-neutral-800">
	<div class="max-w-6xl mx-auto space-y-12">
		<!-- Heading -->
		<div class="text-center space-y-4">
			<h2 class="text-3xl sm:text-4xl font-bold">What We <span class="text-[#DE2020] text-glow">Excel At</span></h2>
			<p class="text-neutral-600 text-lg max-w-2xl mx-auto">
				Studio Luoda is committed to building websites that aren’t just beautiful — they perform,
				scale, and deliver real value.
			</p>
		</div>

		<!-- Strength List -->
		<div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
			{#each strengths as item}
				<div class="p-6 rounded-xl border border-stone-200">
					<div class="mb-2 flex gap-4">
						<img src={item.icon} alt={item.title + ' icon'} class="w-5 text-3xl mb-3" />
						<h3 class="text-lg font-semibold mb-2">{item.title}</h3>
					</div>
					<p class="text-neutral-600 text-sm">{item.desc}</p>
				</div>
			{/each}
		</div>
	</div>
</section>
