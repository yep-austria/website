<nav>
  <a class="home" href="/">YEP</a>
  <div class="menu">
    <a href="/berichte/">Berichte</a>
    <a href="/about/">About</a>
  </div>
</nav>

<style lang="scss">
  nav {
    background-color: #7cefc0;
    padding: 0 var(--content-calculated-padding);
    height: 3.125rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  a {
    color: black;
    text-decoration: none;
    line-height: 1.4rem;

    &.home {
      font-weight: 900;
      font-size: 1.4rem;
    }
  }
  a:hover {
    text-decoration: underline;
  }

  .menu {
    display: flex;
    gap: 1em;
    align-items: center;
  }
</style>
