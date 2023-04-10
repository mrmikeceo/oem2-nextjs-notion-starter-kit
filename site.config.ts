import { siteConfig } from './lib/site-config'

export default siteConfig({
  // the site's root Notion page (required)
  rootNotionPageId: '1efb99b10e9946bf80ff69152eeb17bd',

  // if you want to restrict pages to a single notion workspace (optional)
  // (this should be a Notion ID; see the docs for how to extract this)
  rootNotionSpaceId: 'deef835eccb283dd92867e3721a81105334d63a5',

  // basic site info (required)
  name: 'OEM2 - All about technology trends',
  domain: 'oem2com.notion.site',
  author: 'Good A. Brain',

  // open graph metadata (optional)
  description: 'Were dedicated to exploring the most exciting innovations and emerging trends in the world of tech, and sharing them with our readers in an engaging and accessible way',

  // social usernames (optional)
  twitter: 'transitive_bs',
  // github: 'transitive-bullshit',
  linkedin: 'fisch2',
  // newsletter: '#', // optional newsletter URL
  // youtube: '#', // optional youtube channel name or `channel/UCGbXXXXXXXXXXXXXXXXXXXXXX`

  // default notion icon and cover images for site-wide consistency (optional)
  // page-specific values will override these site-wide defaults
  defaultPageIcon: 'https://oem2.com/page-icon.png',
  defaultPageCover: 'https://oem2.com/page-cover.jpg',
  defaultPageCoverPosition: 0.5,

  // whether or not to enable support for LQIP preview images (optional)
  isPreviewImageSupportEnabled: true,

  // whether or not redis is enabled for caching generated preview images (optional)
  // NOTE: if you enable redis, you need to set the `REDIS_HOST` and `REDIS_PASSWORD`
  // environment variables. see the readme for more info
  isRedisEnabled: true,

  // map of notion page IDs to URL paths (optional)
  // any pages defined here will override their default URL paths
  // example:
  //
  // pageUrlOverrides: {
  //   '/foo': '067dd719a912471ea9a3ac10710e7fdf',
  //   '/bar': '0be6efce9daf42688f65c76b89f8eb27'
  // }
  pageUrlOverrides: null,

  pageUrlAdditions: {
    '/the-social-audio-revolution': 'c4deaf33cc924ad7a5b9f69c6ae04a01'
  },

  // whether to use the default notion navigation style or a custom one with links to
  // important pages
  navigationStyle: 'custom',
  navigationLinks: [
    {
      title: 'About',
      pageId: 'aef3608c00e9418ea1f42e1b3fcd6629'
    },
    {
      title: 'Contact',
      pageId: 'eaceefbed0f94c1a805aad0aa8b904ac'
    }
  ]
})
