// eslint-disable-next-line import/no-anonymous-default-export
export default {
    title: 'HiveMinds - Data-Driven Digital Marketing Solutions for Business Growth',
    description: "HiveMinds is a digital marketing agency that combines strategic expertise, advanced technology, and data-driven insights to deliver customized solutions. Our services include performance marketing, SEO, creative content, and more, aimed at driving sustainable growth for businesses across various industries.",
    additionalMetaTags: [
        {
            name: 'viewport',
            content: 'width=device-width, initial-scale=1.0, maximum-scale=5.0',
        },
    ],
    additionalLinkTags: [
        {
          rel: 'icon',
          type: "image/x-icon",
          href: '/favicon.ico',
        },
        {
            rel: "preload",
            href: "/assets/fonts/avenir.woff",
            as: "font",
            type: "font/woff",
            crossOrigin: "",
          },
          {
            rel: "preload",
            href: "/assets/fonts/avenir-medium.woff",
            as: "font",
            type: "font/woff",
            crossOrigin: "",
          },
          {
            rel: "preload",
            href: "/assets/fonts/ppneuemontreal-medium.woff",
            as: "font",
            type: "font/woff",
            crossOrigin: "",
          },
        // {
        //   rel: 'alternate',
        //   type: 'application/rss+xml',
        //   title: 'AMS Digital Feed',
        //   href: 'https://www.amsltd.com/feed.xml'
        // },
      ],
    openGraph: {
        type: 'website',
        locale: 'en_US',
        images: [
            {
                url: 'https://www.hiveminds.in/assets/seo/homepage.png',
                width: 1909,
                height: 949,
                alt: "Hivemimds Og Image",
                type: "image/png",
            },
        ],
        siteName: 'Hiveminds',
    },
    twitter: {
        site: 'Hiveminds',
        cardType: 'summary_large_image',
    },
};