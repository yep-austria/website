<script context="module">
  import Report from '$lib/Report.svelte'
  import client from '../utils/client'

  export async function load() {
    const document = await client.getByUID('reports', 'reports')
    return {
      props: {
        document,
      },
    }
  }
</script>

<script lang="ts">
  import type { Slice } from '@prismicio/types'
  import type { Report as ReportType } from '$lib/prismic-types'

  export let document

  $: reports = (document.data.body as Slice<string, ReportType>[])
    .filter(slice => slice.slice_type === 'report')
    .map(slice => slice.primary)
</script>

<section>
  <h1>{document.data.page_title}</h1>

  <br /><br />

  {#each reports as report, i (report.title)}
    <div class="report">
      <Report {report} />
    </div>
    {#if i + 1 < reports.length}
      <hr />
    {/if}
  {/each}
</section>

<style lang="scss">
  .report {
    margin: 3rem 0;
  }
</style>
