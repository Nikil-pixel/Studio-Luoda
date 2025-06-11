<script>
	let activeIndex = null;

	const faqs = [
		{
			question: "What services does Studio Luoda offer?",
			answer:
				"We specialize in Web App Development and UI/UX Design — building fast, scalable, and elegant digital solutions tailored for startups, creators, and businesses."
		},
		{
			question: "Do you work with early-stage startups?",
			answer:
				"Absolutely. We love partnering with startups and growing alongside them. We aim to simplify and scale your product without bloated complexity."
		},
		{
			question: "What technologies do you use?",
			answer:
				"We use modern, efficient stacks like SvelteKit, Next.js, Tailwind CSS, Node.js, and more — selected based on performance, maintainability, and fit for your goals."
		},
		{
			question: "How do I get started with a project?",
			answer:
				"Just drop us a message via the contact page or email — we’ll schedule a quick call to understand your needs and take it from there."
		},
		{
			question: "What’s your pricing like?",
			answer:
				"Our pricing is flexible depending on the scope and complexity. We offer transparent estimates and adapt to your stage and budget with clarity."
		}
	];

	const toggle = (i) => {
		activeIndex = activeIndex === i ? null : i;
	};
</script>

<section class="py-20 px-6 sm:px-10 lg:px-20 text-neutral-800">
	<div class="max-w-4xl mx-auto space-y-10">

		<!-- Heading -->
		<div class="text-center space-y-4">
			<h2 class="text-3xl sm:text-4xl font-bold"><span class="text-[#DE2020] text-glow">FAQs</span></h2>
			<p class="text-neutral-600 max-w-xl mx-auto text-lg">
				Answers to common questions about our services, workflow, and approach.
			</p>
		</div>

		<!-- FAQ Accordions -->
		<div class="space-y-4">
			{#each faqs as faq, i}
				<div class="border border-neutral-200 rounded-lg overflow-hidden">
					<button
						class="w-full text-left px-5 py-4 flex justify-between items-center text-base sm:text-lg font-medium hover:bg-neutral-100 transition"
						on:click={() => toggle(i)}
					>
						<span>{faq.question}</span>
						<svg
							class="w-5 h-5 transform transition-transform duration-300"
							style="transform: rotate({activeIndex === i ? 180 : 0}deg);"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
						</svg>
					</button>
					{#if activeIndex === i}
						<div class="px-5 pb-5 text-neutral-600">
							<p>{faq.answer}</p>
						</div>
					{/if}
				</div>
			{/each}
		</div>

	</div>
</section>
