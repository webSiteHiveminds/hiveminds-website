import Layout from "@/components/Layout";
import { getPaginatedPosts, getAllPosts, getPagesCount } from "@/lib/blogs";
import {
  fadeIn,
  fadeUp,
  headingAnim,
  paraAnim,
  routeChangeTop,
} from "@/components/gsapAnimations";
import img from "../../../../public/assets/images/blogpage/blog-listing-hero.png";
import Hero from "@/components/Hero";
import BlogListing from "@/components/Blog/BlogListing";
import Metadata from "@/components/Metadata";

const metadata = {
  title:
    " HiveMinds Blog | Insights on Digital Marketing, SEO, and E-Commerce Trends",
  metaDescription:
    "Explore the HiveMinds Blog for expert articles on digital marketing strategies, SEO best practices, and the latest e-commerce trends. Stay informed with industry updates and case studies to enhance your online presence.",
  path: "blog",
  img: "homepage.png",
  date_published: "2025-03-21T00:00",
  date_modified: "2025-03-21T00:00",
};

export default function Blog({ posts, pagination }) {
  headingAnim();
  paraAnim();
  fadeUp();
  fadeIn();
  routeChangeTop();

  return (
    <>
      <Metadata metadata={metadata} noindex={true}/>
      <Layout>
        <Hero
          title1={"What's"}
          title2={"Buzzing"}
          para={
            "Leveraging data-driven insights and technical expertise, HiveMinds crafts SEO solutions that elevate digital visibility and drive measurable results, turning organic searches into valuable customer relationships."
          }
          img={img}
        />
        <div className="pt-[5%] tablet:pt-[12%] mobile:pt-[15%]">
          <BlogListing posts={posts} pagination={pagination} />
        </div>
      </Layout>
    </>
  );
}

export async function getStaticProps({ params = {} } = {}) {
  const { posts, pagination } = await getPaginatedPosts({
    currentPage: params?.page,
  });

  if (!pagination.currentPage) {
    return {
      props: {},
      notFound: true,
    };
  }

  return {
    props: {
      posts,
      pagination: {
        ...pagination,
        basePath: "/blog",
      },
    },
    revalidate: 500,
  };
}

export async function getStaticPaths() {
  const { posts } = await getAllPosts();
  const pagesCount = await getPagesCount(posts);

  const paths = [...new Array(pagesCount)].map((_, i) => {
    return { params: { page: String(i + 1) } };
  });

  return {
    paths,
    fallback: "blocking",
  };
}
