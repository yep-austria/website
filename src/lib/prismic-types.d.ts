import type { RichTextField, ImageFieldImage, FilledLinkToMediaField } from '@prismicio/types'

export type Report = {
  title: string
  description: RichTextField
  image: ImageFieldImage
  document: FilledLinkToMediaField
}
