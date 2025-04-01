import { postPathBySlug } from './blogs';
import { homepage, faviconPath } from './util';

export function ArticleJsonLd({ post = {} }) {
  const { title, slug, date, author, categories, modified, featuredImage, metaDescription } = post;
  const path = postPathBySlug(slug);
  const datePublished = !!date && new Date(date);
  const dateModified = !!modified && new Date(modified);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${homepage}/${path}`,
    },
    headline: title,
    image: [featuredImage?.sourceUrl],
    datePublished: datePublished ? datePublished.toISOString() : '',
    dateModified: dateModified ? dateModified.toISOString() : datePublished.toISOString(),
    description: metaDescription,
    keywords: [categories.map(({ name }) => `${name}`).join(', ')],
    copyrightYear: datePublished ? datePublished.getFullYear() : '',
    author: {
      '@type': 'Person',
      name: author?.name,
    },
    publisher: {
      '@type': 'Organization',
      name: "Hiveminds",
      logo: {
        '@type': 'ImageObject',
        url: `${homepage}/${faviconPath}`,
      },
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export function OrganizationJsonLd() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${homepage}/#organization`,
    name: "Hiveminds",
    description: "HiveMinds is a digital marketing agency that combines strategic expertise, advanced technology, and data-driven insights to deliver customized solutions. Our services include performance marketing, SEO, creative content, and more, aimed at driving sustainable growth for businesses across various industries. ",
    url: homepage,
    telephone: "080 4680 1708",
    email: "sales@hiveminds.in",
    address: {
      "@type": 'PostalAddress',
      streetAddress: '7th Floor, Global Tech Park, 11,',
      addressLocality: 'O Shaughnessy Rd, Langford Town, Langford Gardens',
      addressRegion: 'Bengaluru, Karnataka 560025',
      addressCountry: 'India',
    },
    logo: `${homepage}/favicon.ico`,
    sameAs: [
      "https://www.facebook.com/hiveminds/",
      "https://www.linkedin.com/in/hiveminds-school-of-digital-264139246/",
      "https://www.linkedin.com/in/hiveminds-innovative-market-solutions-02b730b7/",
      "https://x.com/_hiveminds"
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export function WebsiteJsonLd() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${homepage}/#website`,
    name: 'Hiveminds',
    url: homepage,
    copyrightYear: new Date().getFullYear(),
    'inLanguage': "en-US",
    "publisher": [
      {
        "@id": `${homepage}/#organization`
      }
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export function ImageObjectJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ImageObject",
    '@id': `${homepage}/assets/seo/homepage.png`,
    url: `${homepage}/assets/seo/homepage.png`,
    width: "1920",
    height: "1016",
    inLanguage: "en-US"
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export function WebpageJsonLd({ metadata = {} }) {
  const { title, path, metaDescription, date_published, date_modified } = metadata;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${homepage}/${path}#webpage`,
    url: `${homepage}/${path}`,
    name: `${title}`,
    description: `${metaDescription}`,
    datePublished: `${date_published}`,
    dateModified: `${date_modified}`,
    publisher: {
      "@type": "Organization",
      name: "Hiveminds",
      logo: {
        "@type": "ImageObject",
        url: `${homepage}/${faviconPath}`,
      }
    },
    "about": {
      "@id": `${homepage}/${path}#organization`
    },
    "isPartOf": {
      "@id": `${homepage}/${path}#website`
    },
    "inLanguage": "en_US",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export function LocalBusiness() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "HiveMinds Innovative Market Solutions Pvt Ltd",
    "image": `https://www.hiveminds.in/seo/logo.png`,
    "@id": "",
    "url": `${homepage}`,
    "telephone": "080 4680 1708",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "7th Floor, Global Tech Park, 11,",
      "addressLocality": "O Shaughnessy Rd, Langford Town, Langford Gardens",
      "postalCode": "560025",
      "addressCountry": "Bengaluru, Karnataka 560025",
      "addressRegion": "India"
    },
    "sameAs": [
      "https://www.facebook.com/hiveminds/",
      "https://www.linkedin.com/in/hiveminds-school-of-digital-264139246/",
      "https://www.linkedin.com/in/hiveminds-innovative-market-solutions-02b730b7/",
      "https://x.com/_hiveminds"
    ],
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday"
        ],
        "opens": "09:30",
        "closes": "06:30"
      }
    ]
  };

  return (
    <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
  />
  );
}