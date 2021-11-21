import * as prismic from '@prismicio/client'

const endpoint = prismic.getEndpoint('yep-at')
const client = prismic.createClient(endpoint)

export default client
