import * as prismic from '@prismicio/client'
import * as prismicH from '@prismicio/helpers'
import * as prismicNext from '@prismicio/next'
import sm from './sm.json'

/**
 * The project's Prismic repository name.
 */
export const repositoryName = prismic.getRepositoryName(sm.apiEndpoint)

/**
 * The project's Prismic Link Resolver. This function determines the URL for a given Prismic document.
 *
 * @type {prismicH.LinkResolverFunction}
 */
// Update the Link Resolver to match your project's route structure
export function linkResolver(doc) {
    switch (doc.type) {
        case 'homepage':
            return '/'
        case 'trek':
            return `/trek/${doc.uid}`
        case 'articles_landing_type':
            return `/articles/${doc.uid}`
        case "family_trek":
            return `/family-trek/${doc.uid}`
        case "post":
            return `/blog/${doc.uid}`
        case "user_dashboard":
            return `/user-dashboard/${doc.uid}`
        case "document_trek_type":
            return `/documented-trek/${doc.uid}`
        default:
            return `/${doc.uid}`;
    }
}

/**
 * Creates a Prismic client for the project's repository. The client is used to
 * query content from the Prismic API.
 *
 * @param config {prismicNext.CreateClientConfig} - Configuration for the Prismic client.
 */
export const createClient = (config = {}) => {
    const client = prismic.createClient(sm.apiEndpoint, { ...config, accessToken: 'MC5ZS0ljT2hJQUFDVUF5Tk5X.EGDvv70577-9Gu-_vX9Y77-9BhF_aO-_vSRx77-9UO-_ve-_vUHvv73vv70QC--_vWN1Hu-_vV4' })

    prismicNext.enableAutoPreviews({
        client,
        previewData: config.previewData,
        req: config.req,
    })

    return client
}