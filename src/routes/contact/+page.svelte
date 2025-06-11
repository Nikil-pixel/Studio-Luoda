<script>
	import tic from '$lib/icons/tic.svg';
	import cross from '$lib/icons/cross.svg';

	let name = '';
	let email = '';
	let message = '';
	let submitted = false;
	let errorMessage = '';

	const handleSubmit = async () => {
		submitted = false;
		errorMessage = '';

		const res = await fetch('/contact', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ name, email, message })
		});

		if (res.ok) {
			submitted = true;
			name = '';
			email = '';
			message = '';

			setTimeout(() => {
				submitted = false;
			}, 5000); // hide success after 5s
		} else {
			const error = await res.json();
			errorMessage = error?.error || 'Unknown error';

			setTimeout(() => {
				errorMessage = '';
			}, 5000); // hide error after 5s
		}
	};
</script>


<svelte:head>
	<title>Studio Luoda | Contact</title>
	<meta name="description" content="Svelte demo app" />
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
					class="bg-black text-white px-6 py-2 rounded-md hover:bg-[#DE2020] transition"
				>
					Send Message
				</button>
			</form>
		</div>
	</section>
</main>
