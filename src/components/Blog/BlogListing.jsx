import React, { useEffect, useState } from "react";
import { useQueryState } from "next-usequerystate";
import BlogFilter from "./BlogFilter";
import BlogCard from "./BlogCard";
import Pagination from "../Pagination";

const BlogListing = ({ posts, pagination }) => {
  const [category, setCategory] = useQueryState("category");
  const [year, setYear] = useQueryState("year");

  const [filteredBlogs, setFilteredBlogs] = useState(posts);

  // Filtering Logic
  useEffect(() => {
    let filtered = posts;

    if (category) {
      filtered = filtered.filter((post) => post.blogFields.blogType[0] === category);
    }
    if (year) {
      filtered = filtered.filter((post) => new Date(post.date).getFullYear().toString() === year);
    }

    setFilteredBlogs(filtered);
  }, [category, year, posts]);

  // Function to clear filters
  const clearFilters = () => {
    setCategory(null);
    setYear(null);
  };

  return (
    <section className="w-screen h-full pb-[7%] mobile:pb-[10%]" id="blog-listing">
      <div className="container-lg h-full">

        {/* Blog Filter Component */}
        <BlogFilter category={category} setCategory={setCategory} year={year} setYear={setYear} clearFilters={clearFilters} />

        {/* Filtered Blogs */}
        <div className="flex flex-wrap items-start justify-start gap-[1vw] gap-y-[2vw] tablet:mt-[4vw] mobile:gap-y-[8vw]">
          {filteredBlogs.length > 0 ? (
            filteredBlogs.map((post) => (
              <BlogCard
                key={post.id}
                category={post.categories[0].name}
                date={post.date}
                imgSrc={post.featuredImage}
                title={post.title}
                description={post.excerpt}
                link={post.slug}
              />
            ))
          ) : (
            <p className="text-center w-full text-lg font-semibold">No posts found.</p>
          )}
        </div>

        <div>
          {pagination && (
            <Pagination
              addCanonical={false}
              currentPage={pagination?.currentPage}
              pagesCount={pagination?.pagesCount}
              basePath={pagination?.basePath}
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default BlogListing;
