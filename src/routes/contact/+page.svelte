<script>
	import tic from '$lib/icons/tic.svg';
	import cross from '$lib/icons/cross.svg';

	let name = '';
	let email = '';
	let message = '';
	let submitted = false;
	let errorMessage = '';
	let loading = false; // 🆕 loading state

	const handleSubmit = async () => {
		submitted = false;
		errorMessage = '';
		loading = true; // 🟡 Start loading

		const res = await fetch('/contact', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ name, email, message })
		});

		loading = false; // 🔵 Stop loading

		if (res.ok) {
			submitted = true;
			name = '';
			email = '';
			message = '';

			setTimeout(() => {
				submitted = false;
			}, 5000);
		} else {
			const error = await res.json();
			errorMessage = error?.error || 'Unknown error';

			setTimeout(() => {
				errorMessage = '';
			}, 5000);
		}
	};
</script>

<svelte:head>
	<title>Contact Us – Studio Luoda</title>
	<meta
		name="description"
		content="Let's collaborate. Reach out to Studio Luoda for custom web design, development, or creative tech services."
	/>
	<meta
		name="keywords"
		content="contact Studio Luoda, work with us, design inquiries, web studio contact, digital collaboration"
	/>
	<meta property="og:title" content="Contact Studio Luoda" />
	<meta
		property="og:description"
		content="Get in touch to start your next digital project with a creative team that cares."
	/>
	<meta property="og:url" content="https://yourdomain.com/contact" />
	<meta property="og:type" content="website" />
</svelte:head>

<main>
	{#if submitted}
		<div
			class="bg-white border border-stone-300 p-4 rounded-xl text-xl text-center font-medium absolute right-10 top-20 shadow-xl flex gap-4 items-center z-50"
		>
			<img src={tic} alt="done-icon" class="size-6 p-1 bg-green-400 rounded-full" />
			Message sent successfully!
		</div>
	{/if}

	{#if errorMessage}
		<div
			class="bg-white border border-stone-300 p-4 rounded-xl text-xl text-center font-medium absolute right-10 top-20 shadow-xl flex gap-4 items-center z-50"
		>
			<img src={cross} alt="error-icon" class="size-6 p-1 bg-red-400 rounded-full" />
			{errorMessage}
		</div>
	{/if}

	<section class="min-h-screen bg-black-100 px-6 py-26 text-neutral-900">
		<div class="max-w-2xl mx-auto bg-white p-8 shadow-lg rounded-xl space-y-8">
			<div>
				<h1 class="text-3xl font-bold text-center">Contact Us</h1>
				<p class="text-center text-neutral-600 mt-2">Have a project in mind? Let’s talk.</p>
			</div>

			<form on:submit|preventDefault={handleSubmit} class="space-y-6">
				<div>
					<label for="name" class="block mb-2 text-sm font-medium">Name</label>
					<input
						id="name"
						type="text"
						bind:value={name}
						required
						class="w-full px-4 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-stone-300"
					/>
				</div>

				<div>
					<label for="email" class="block mb-2 text-sm font-medium">Email</label>
					<input
						id="email"
						type="email"
						bind:value={email}
						required
						class="w-full px-4 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-stone-300"
					/>
				</div>

				<div>
					<label for="message" class="block mb-2 text-sm font-medium">Message</label>
					<textarea
						id="message"
						rows="5"
						bind:value={message}
						required
						class="w-full px-4 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-stone-300"
					></textarea>
				</div>

				<button
					type="submit"
					class="bg-black text-white px-6 py-2 rounded-md hover:bg-[#DE2020] transition flex items-center justify-center gap-2"
					disabled={loading}
				>
					{#if loading}
						<!-- You can use an SVG spinner or just text -->
						<svg
							class="animate-spin h-5 w-5 text-white"
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
						>
							<circle
								class="opacity-25"
								cx="12"
								cy="12"
								r="10"
								stroke="currentColor"
								stroke-width="4"
							></circle>
							<path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
							></path>
						</svg>
						Sending...
					{:else}
						Send Message
					{/if}
				</button>
			</form>
		</div>
	</section>
</main>
