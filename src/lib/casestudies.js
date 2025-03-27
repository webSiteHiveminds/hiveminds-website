import { getApolloClient } from "./apollo-client";
import { sortObjectsByDate } from "./datetime";

import {
  QUERY_ALL_CASE_STUDIES,
  QUERY_CASESTUDY_BY_SLUG,
  QUERY_CASESTUDY_SEO_BY_SLUG,
  GET_HOME_PAGE_CASESTUDIES,
} from "../data/casestudies";

/**
 * caseStudyPathBySlug
 */

export function caseStudyPathBySlug(slug) {
  return `casestudies/${slug}`;
}

// casestudydetailbyslug

export async function getCaseStudyBySlug(slug) {
  const apolloClient = getApolloClient();

  let caseStudyData;
  let seoData;

  try {
    caseStudyData = await apolloClient.query({
      query: QUERY_CASESTUDY_BY_SLUG,
      variables: {
        slug,
      },
    });
  } catch (e) {
    console.log(
      `[casestudies][getCastestudyBySlug] Failed to query CASESTUDY data: ${e.message}`
    );
    throw e;
  }

  if (!caseStudyData?.data.caseStudy) return { caseStudy: undefined };

  const caseStudy = [caseStudyData?.data.caseStudy].map(mapCaseStudyData)[0];

  try {
    seoData = await apolloClient.query({
      query: QUERY_CASESTUDY_SEO_BY_SLUG,
      variables: {
        slug,
      },
    });
  } catch (e) {
    console.log(
      `[caseStudies][getCaseStudyBySlug] Failed to query SEO plugin: ${e.message}`
    );
    console.log(
      "Is the SEO Plugin installed? If not, disable WORDPRESS_PLUGIN_SEO in next.config.js."
    );
    throw e;
  }

  const { seo = {} } = seoData?.data?.caseStudy || {};

  caseStudy.metaTitle = seo.title;
  caseStudy.metaDescription = seo.metaDesc;
  caseStudy.metaImage = seo.opengraphImage;

  return {
    caseStudy,
  };
}

/**
 * getAllCaseStudies
 */
export async function getAllCaseStudies() {

  const apolloClient = getApolloClient();

  const data = await apolloClient.query({
    query: QUERY_ALL_CASE_STUDIES,
  });

  const caseStudies = data?.data.caseStudies.edges.map(({ node = {} }) => node);

  return {
    caseStudies:
      Array.isArray(caseStudies) && caseStudies.map(mapCaseStudyData),
  };
}

export async function getHomePageCaseStudies() {
  const apolloClient = getApolloClient();

  const data = await apolloClient.query({
    query: GET_HOME_PAGE_CASESTUDIES,
  });
  const caseStudies = data?.data.caseStudies.edges.map(({ node = {} }) => node);

  return {
    caseStudies: Array.isArray(caseStudies) && caseStudies.map(mapCaseStudyData),
  };
}

/**
 * mapCaseStudyData
 */

export function mapCaseStudyData(caseStudy = {}) {
  const data = { ...caseStudy };
  if (data.categories) {
    data.categories = data.categories.edges.map(({ node }) => {
      return {
        ...node,
      };
    });
  }
  if (data.industries) {
    data.industries = data.industries.edges.map(({ node }) => {
      return {
        ...node,
      };
    });
  }
  if (data.services) {
    data.services = data.services.edges.map(({ node }) => {
      return {
        ...node,
      };
    });
  }
  if (data.featuredImage) {
    data.featuredImage = data.featuredImage.node;
  }
  return data;
}

/**
 * sortStickyCaseStudies
 */

export function sortStickyCaseStudies(caseStudies) {
  return [...caseStudies].sort((caseStudy) =>
    caseStudy.caseStudyFields.isSticky ? -1 : 1
  );
}

/**
 * getRecentCaseStudies
 */

export async function getRecentCaseStudies() {
  const { caseStudies } = await getAllCaseStudies();
  const sorted = sortObjectsByDate(caseStudies);
  return {
    caseStudies: sorted.slice(0, 4),
  };
}

/**
 * getCaseStudiesPerPage
 */

export const getCaseStudiesPerPage = process.env.CASESTUDY_PER_PAGE || 9;

/**
 * getPageCount
 */

export async function getPagesCount(caseStudies, caseStudiesPerPage) {
  const _caseStudiesPerPage = caseStudiesPerPage ?? (getCaseStudiesPerPage);
  return Math.ceil(caseStudies.length / _caseStudiesPerPage);
}

/**
 * getPaginatedCaseStudies
 */

export async function getPaginatedCaseStudies({currentPage = 1} = {}) {
  const { caseStudies } = await getAllCaseStudies();
  const caseStudiesPerPage = 9;
  const pagesCount = await getPagesCount(caseStudies, caseStudiesPerPage);

  let page = Number(currentPage);

  if (typeof page === "undefined" || isNaN(page)) {
    page = 1;
  } else if (page > pagesCount) {
    return {
      caseStudies: [],
      pagination: {
        currentPage: undefined,
        pagesCount,
      },
    };
  }

  const offset = caseStudiesPerPage * (page - 1);
  const sortedCaseStudies = sortStickyCaseStudies(caseStudies);
  return {
    caseStudies: sortedCaseStudies.slice(offset, offset + caseStudiesPerPage),
    pagination: {
      currentPage: page,
      pagesCount,
    },
  };
}