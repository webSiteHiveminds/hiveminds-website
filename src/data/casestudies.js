import { gql } from "@apollo/client";

export const CASE_STUDY_FIELDS = gql`
  fragment CaseStudyFields on CaseStudy {
    id
    excerpt
    title
    date
    databaseId
    modified
    slug
    featuredImage {
      node {
        altText
        sourceUrl
        sizes
        srcSet
      }
    }
    industries {
      edges {
        node {
          databaseId
          name
          slug
          id
        }
      }
    }
    caseStudyFields {
      isSticky
    }
  }
`;

export const QUERY_ALL_CASE_STUDIES = gql`
  ${CASE_STUDY_FIELDS}
  query AllCaseStudies {
    caseStudies(first: 10000, where: { hasPassword: false }) {
      edges {
        node {
          ...CaseStudyFields
        }
      }
    }
  }
`;

export const QUERY_CASESTUDY_BY_SLUG = gql`
  query CaseStudyBySlug($slug: ID!) {
    caseStudy(id: $slug, idType: SLUG) {
      excerpt
      id
      categories {
        edges {
          node {
            databaseId
            id
            name
            slug
          }
        }
      }
      featuredImage {
        node {
          altText
          sourceUrl
          sizes
          srcSet
        }
      }
      industries {
        edges {
          node {
            databaseId
            id
            name
            slug
          }
        }
      }
      services {
        edges {
          node {
            databaseId
            id
            name
            slug
          }
        }
      }
        caseStudyFields {
      relatedCaseStudies {
        nodes {
          ... on CaseStudy {
            id
            featuredImage {
              node {
                altText
                sourceUrl
                srcSet
              }
            }
            slug
            title
          }
        }
      }
    }
      modified
      content
      date
      title
      slug
    }
  }
`;

export const QUERY_CASESTUDIES_BY_INDUSTRY_ID = gql`
  ${CASE_STUDY_FIELDS}
  query CaseStudiesByIndustryId($industryId: Int!) {
    caseStudies(where: { industryId: $industryId, hasPassword: false }) {
      edges {
        node {
          ...PostFields
        }
      }
    }
  }
`;

export const QUERY_CASESTUDY_SEO_BY_SLUG = gql`
  query CaseStudySEOBySlug($slug: ID!) {
    caseStudy(id: $slug, idType: SLUG) {
      id
      seo {
        metaDesc
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

export const GET_HOME_PAGE_CASESTUDIES = gql`
  query homePageCaseStudies {
    caseStudies(first: 10000, where: { hasPassword: false }) {
      edges {
        node {
          caseStudyFields {
            homepageListing {
              metricsSubtext
              numberMetrics
              subtitle
              listingImage {
                node {
                  altText
                  sizes
                  sourceUrl
                }
              }
            }
            ishomepagepost
          }
          title
          slug
          id
          industries {
            edges {
              node {
                name
                slug
              }
            }
          }
        }
      }
    }
  }
`;
