<div class="quote">
  <blockquote>
    <slot />
  </blockquote>
  <slot name="sub" />
</div>

<style lang="scss">
  .quote {
    color: white;
    font-style: italic;
  }
  .quote {
    background-image: var(--background-image);
    background-size: contain;
    background-repeat: no-repeat;
    background-position: bottom center;
  }
  blockquote {
    margin: 0;
    font-size: 3rem;
    quotes: '“' '„' '‘' '‚';
    &:before {
      content: open-quote;
    }
    &:after {
      content: close-quote;
    }
  }
</style>
