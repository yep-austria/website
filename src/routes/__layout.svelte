<script>
  import Footer from '$lib/Footer.svelte'
  import Navbar from '$lib/Navbar.svelte'
  import '../style/main.scss'
</script>

<Navbar />

<main>
  <slot />
</main>

<Footer />
