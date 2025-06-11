<script>
  import location from '$lib/icons/location.svg';
  import phone from '$lib/icons/phone.svg';
  import mail from '$lib/icons/mail.svg';
  import instagram from '$lib/icons/instagram.svg';
  import facebook from '$lib/icons/facebook.svg';
  import dribbble from '$lib/icons/dribbble.svg';
  import x from '$lib/icons/x.svg';
  import logo from '$lib/icons/logoLight.svg';

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
    {
      name: 'Services',
      sub: [
        { name: 'Web Development', href: '/service/web-development' },
        { name: 'UX Design', href: '/service/ux-design' },
        { name: 'Digital Marketing', href: '/service/digital-marketing' }
      ]
    }
  ];

  const socials = [
    { name: 'Instagram', href: 'https://www.instagram.com/studio_luoda/', icon: instagram },
    { name: 'Facebook', href: 'https://www.facebook.com/profile.php?id=61577405181360&sk=about', icon: facebook },
    { name: 'Dribbble', href: 'https://dribbble.com/Studio_Luoda', icon: dribbble },
    { name: 'X', href: 'https://x.com/Studio_Luoda', icon: x }
  ];

</script>

<footer class="bg-neutral-900 text-neutral-300 px-6 pt-12 text-sm">
  <div class="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
    
    <!-- Logo + Description -->
    <div class="space-y-4">
      <h2 class="text-2xl font-bold text-white flex gap-2 items-center"><img src={logo} alt="logo" class="size-6"> Studio Luoda</h2>
      <p>
        Crafting intuitive digital experiences for startups, creators, and design-forward companies.
      </p>
    </div>

    <!-- Navigation -->
    <div>
      <h3 class="text-neutral-100 font-semibold mb-4 uppercase tracking-wider">Navigation</h3>
      <ul class="space-y-2">
        {#each navLinks as link}
          {#if link.sub}
            <li class="font-semibold text-neutral-400 mt-3">{link.name}:</li>
            <ul class="ml-2 pl-2 border-l border-neutral-700 space-y-1">
              {#each link.sub as sublink}
                <li><a href={sublink.href} class="hover:text-white transition">{sublink.name}</a></li>
              {/each}
            </ul>
          {:else}
            <li><a href={link.href} class="hover:text-white transition">{link.name}</a></li>
          {/if}
        {/each}
      </ul>
    </div>

    <!-- Socials -->
    <div>
      <h3 class="text-neutral-100 font-semibold mb-4 uppercase tracking-wider">Connect</h3>
      <div class="flex space-x-4">
        {#each socials as social}
          <a aria-label={social.name} href={social.href} target="_blank" rel="noopener noreferrer" class="hover:text-white">
            <img src={social.icon} alt={social.name} class="w-7 h-7" />
          </a>
        {/each}
      </div>
    </div>

    <!-- Contact Info -->
    <div>
      <h3 class="text-neutral-100 font-semibold mb-4 uppercase tracking-wider">Contact</h3>
      <ul class="space-y-3 text-neutral-300">
        <li class="flex items-start gap-2">
          <img src={location} alt="location" class="w-4 mt-1">
          <span>WD-54, Anandha bhavan complex, Third floor, 17/52, Puthur High Rd, Trichy, Tamil Nadu - 620017</span>
        </li>
        <li class="flex items-center gap-2">
          <img src={phone} alt="phone" class="w-4">
          <a href="tel:+919597953523" class="hover:text-white">+91 9597 953 523</a>
        </li>
        <li class="flex items-center gap-2">
          <img src={mail} alt="email" class="w-4">
          <a href="mailto:hello@studioluoda.com" class="hover:text-white">hello@studioluoda.com</a>
        </li>
      </ul>
    </div>

  </div>

  <!-- Legal Links -->
  <div class="max-w-7xl mx-auto mt-12 border-t text-xs border-stone-800 py-6 text-neutral-300">
    <div class="">&copy; {new Date().getFullYear()} Studio Luoda. All rights reserved.</div>
  </div>
</footer>
