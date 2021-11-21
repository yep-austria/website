<script lang="ts">
  import type { Report } from '$lib/prismic-types'
  import * as prismic from '@prismicio/helpers'
  import filesize from 'filesize'

  export let report: Report
</script>

<h2>{report.title}</h2>

{@html prismic.asHTML(report.description)}

<div class="image">
  <img src={report.image.url} alt={report.image.alt} />
</div>

<a class="download" href={report.document.url}>
  Bericht herunterladen<br />
  ({filesize(parseInt(report.document.size, 10))})
</a>

<style lang="scss">
  .image {
    margin: 3rem 0;
  }
  img {
    max-width: 100%;
  }
  .download {
    display: block;
    margin: 1.5rem auto;
    border: 2px solid var(--primary-color);
    border-radius: 3px;
    padding: 0.5em 0.75em;
    width: 14em;
    text-align: center;
    &:hover {
      text-decoration: none;
      background: #2ec59811;
    }
  }
</style>
