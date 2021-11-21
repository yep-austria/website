<script>
  import Navbar from '$lib/Navbar.svelte'
  import '../style/main.scss'
</script>

<Navbar />

<slot />

<footer>
  <div class="footerwidth">
    <strong><a href="/">YEP</a></strong>
    <a href="/about/">About</a>
    <a href="/impressum/">Impressum</a>
    <a href="/privacy/">Privacy Policy</a>
  </div>
</footer>
