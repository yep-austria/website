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

<script>
  export let document
</script>

<div class="container">
  <h1>{document.data.page_title}</h1>

  <br /><br />

  {#each document.data.body as slice}
    {#if slice.slice_type === 'report'}
      <div class="report">
        <Report {...slice.primary} />
      </div>
    {/if}
  {/each}
</div>

<style lang="scss">
  .report {
    margin: 3rem 0;
  }
</style>
