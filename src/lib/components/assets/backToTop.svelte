<script>
  import upArrow from '$lib/icons/upArrow.svg';
  import { onMount } from 'svelte';

  let isVisible = false;

  onMount(() => {
    const toggleVisibility = () => {
      isVisible = window.scrollY > 300;
    };
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  });

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
</script>

{#if isVisible}
  <button
    aria-label="Back to top"
    on:click={scrollToTop}
    class="fixed bottom-5 right-5 z-50 p-3 rounded-full cursor-pointer bg-white shadow-md border border-stone-300 hover:bg-[#DE2020] hover:border-[#DE2020] hover:shadow-[hsla(0,75%,50%,0.4)] transition-all duration-300 group"
  >
    <img src={upArrow} alt="Up Arrow" class="w-4 h-4 group-hover:invert group-hover:brightness-200" />
  </button>
{/if}
