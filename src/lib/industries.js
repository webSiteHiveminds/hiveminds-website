import { getApolloClient } from './apollo-client';

import { QUERY_ALL_INDUSTRIES, QUERY_INDUSTRY_BY_SLUG, QUERY_INDUSTRY_SEO_BY_SLUG } from '../data/industries';


/**
 * industryPathBySlug
 */

export function industryPathBySlug(slug) {
  return `casestudies/industries/${slug}`;
}

/**
 * getAllIndustries
 */

export async function getAllIndustries() {
  const apolloClient = getApolloClient();

  const data = await apolloClient.query({
    query: QUERY_ALL_INDUSTRIES,
  });

  const industries = data?.data.industries.edges.map(({ node = {} }) => node);

  return {
    industries: Array.isArray(industries) && industries.map(mapIndustryData),
  };
}

/**
 * getIndustryBySlug
 */

export async function getIndustryBySlug(slug) {
  const apolloClient = getApolloClient();
  const apiHost = new URL(process.env.WORDPRESS_GRAPHQL_ENDPOINT).host;

  let industryData;
  let seoData;

  try {
    industryData = await apolloClient.query({
      query: QUERY_INDUSTRY_BY_SLUG,
      variables: {
        slug,
      },
    });
  } catch (e) {
    console.log(`[industry][getIndustriesBySlug] Failed to query industry data: ${e.message}`);
    throw e;
  }

  if (!industryData?.data.industry) return { industry: undefined };

  const industry = mapIndustryData(industryData?.data.industry);

  // If the SEO plugin is enabled, look up the data
  // and apply it to the default settings

  if (process.env.WORDPRESS_PLUGIN_SEO === true) {
    try {
      seoData = await apolloClient.query({
        query: QUERY_INDUSTRY_SEO_BY_SLUG,
        variables: {
          slug,
        },
      });
    } catch (e) {
      console.log(`[industries][getIndustrySeoBySlug] Failed to query SEO plugin: ${e.message}`);
      console.log('Is the SEO Plugin installed? If not, disable WORDPRESS_PLUGIN_SEO in next.config.js.');
      throw e;
    }

    const { seo = {} } = seoData?.data?.industry || {};

    industry.title = seo.title;
    industry.description = seo.metaDesc;

    // The SEO plugin by default includes a canonical link, but we don't want to use that
    // because it includes the WordPress host, not the site host. We manage the canonical
    // link along with the other metadata, but explicitly check if there's a custom one
    // in here by looking for the API's host in the provided canonical link

    if (seo.canonical && !seo.canonical.includes(apiHost)) {
      industry.canonical = seo.canonical;
    }

    industry.og = {
      author: seo.opengraphAuthor,
      description: seo.opengraphDescription,
      image: seo.opengraphImage,
      modifiedTime: seo.opengraphModifiedTime,
      publishedTime: seo.opengraphPublishedTime,
      publisher: seo.opengraphPublisher,
      title: seo.opengraphTitle,
      type: seo.opengraphType,
    };

    industry.article = {
      author: industry.og.author,
      modifiedTime: industry.og.modifiedTime,
      publishedTime: industry.og.publishedTime,
      publisher: industry.og.publisher,
    };

    industry.robots = {
      nofollow: seo.metaRobotsNofollow,
      noindex: seo.metaRobotsNoindex,
    };

    industry.twitter = {
      description: seo.twitterDescription,
      image: seo.twitterImage,
      title: seo.twitterTitle,
    };
  }

  return {
    industry,
  };
}

/**
 * getIndustries
 */

export async function getIndustries({ count } = {}) {
  const { industries } = await getAllIndustries();
  return {
    industries: industries.slice(0, count),
  };
}

/**
 * mapIndustryData
 */

export function mapIndustryData(industry = {}) {
  const data = { ...industry };

  if (industry.caseStudies) {
    data.caseStudies = data.caseStudies.edges.map(({ node }) => {
      return {
        ...node,
      }
    })
  }

  return data;
}
