<script lang="ts">
  import * as prismic from '@prismicio/helpers'
  import filesize from 'filesize'
  import type { RichTextField, ImageFieldImage, FilledLinkToMediaField } from '@prismicio/types'

  export let title: string
  export let description: RichTextField
  export let image: ImageFieldImage
  export let document: FilledLinkToMediaField
</script>

<h2>{title}</h2>

{@html prismic.asHTML(description)}

<img src={image.url} alt={image.alt} />

<a href={document.url}>Bericht herunterladen ({filesize(parseInt(document.size, 10))})</a>

<style>
  img {
    max-width: 100%;
  }
</style>
