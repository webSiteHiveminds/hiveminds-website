import { gql } from '@apollo/client';

export const POST_FIELDS = gql`
  fragment PostFields on Post {
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
    excerpt
    featuredImage {
      node {
        altText
        sourceUrl
        srcSet
        sizes
      }
    }
    blogFields {
      blogType
    }
    date
    isSticky
    slug
    title
  }
`;

export const QUERY_ALL_POSTS = gql`
  ${POST_FIELDS}
  query AllPosts {
    posts(first: 10000, where: { hasPassword: false }) {
      edges {
        node {
          ...PostFields
        }
      }
    }
  }
`;

export const QUERY_POST_BY_SLUG = gql`
  query PostBySlug($slug: ID!) {
    post(id: $slug, idType: SLUG) {
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
      modified
      content
      date
      blogFields {
        heroImage {
          node {
            altText
            sourceUrl
            srcSet
            sizes
          }
        }
        blogType
      }
      author{
        node{
          name
        }
      }
      title
      slug
      isSticky
    }
  }
`;

export const QUERY_POSTS_BY_CATEGORY_ID = gql`
  ${POST_FIELDS}
  query PostsByCategoryId($categoryId: Int!) {
    posts(where: { categoryId: $categoryId, hasPassword: false }) {
      edges {
        node {
          ...PostFields
        }
      }
    }
  }
`;

export const QUERY_POST_SEO_BY_SLUG = gql`
  query PostSEOBySlug($slug: ID!) {
    post(id: $slug, idType: SLUG) {
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

export const QUERY_POST_PER_PAGE = gql`
  query PostPerPage {
    allSettings {
      readingSettingsPostsPerPage
    }
  }
`;

export const GET_HOME_PAGE_POSTS = gql`
  query postsforHomePage {
    posts(first: 4) {
      nodes {
        featuredImage {
          node {
            sourceUrl
          }
        }
        id
        slug
        title
        date
      }
    }
  }
`;
