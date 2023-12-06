import { sortBlogs } from "../../utils";
import React from "react";
import BlogLayoutThree from "../Blogs/BlogLayoutThree";
import { Link } from "react-router-dom";

const RecentBlogs = ({ blogs }) => {
  const sortedBlogs = sortBlogs(blogs);
  return (
    <section className="w-full  mt-10 px-5 flex flex-col items-center justify-center">
      <div className="w-[1000px] flex  justify-between">
        <h2 className="w-fit text-bg_light inline-block font-bold capitalize text-xl md:text-2xl text-dark dark:text-light">
          Recent Posts
        </h2>
        <Link
          href="/categories/all"
          className="inline-block font-medium text-bg_light underline underline-offset-2      text-base md:text-lg"
        >
          view all
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 grid-rows-2 gap-16 mt-16">
        {sortedBlogs?.slice(0, 6).map((blog, index) => {
          return (
            <article key={index} className="col-span-1 row-span-1 relative">
              <BlogLayoutThree blog={blog} />
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default RecentBlogs;
