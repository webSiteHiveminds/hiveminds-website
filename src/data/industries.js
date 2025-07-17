import { gql } from "@apollo/client";

export const QUERY_ALL_INDUSTRIES = gql`
  query AllIndustries {
    industries(first: 10000) {
      edges {
        node {
          databaseId
          id
          name
          slug
        }
      }
    }
  }
`;

export const QUERY_INDUSTRY_BY_SLUG = gql`
  query IndustryBySlug($slug: ID!) {
    industry(id: $slug, idType: SLUG) {
      databaseId
      id
      name
      slug
       seo {
      title
      opengraphImage {
        altText
        sourceUrl
        mediaDetails {
          height
          width
        }
      }
      metaDesc
    }
      caseStudies(first: 1000) {
        edges {
          node {
            title
            slug
            featuredImage {
              node {
                altText
                sourceUrl
              }
            }
            excerpt
          }
        }
      }
    }
  }
`;

export const QUERY_INDUSTRY_SEO_BY_SLUG = gql`
  query IndustrySEOBySlug($slug: ID!) {
    industry(id: $slug, idType: SLUG) {
      id
      seo {
        title
        opengraphImage {
          altText
          sourceUrl
          mediaDetails {
            height
            width
          }
        }
      }
    }
  }
`;
