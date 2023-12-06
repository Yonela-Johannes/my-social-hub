import moment from "moment/moment";
import React from "react";
import { Link } from "react-router-dom";

const BlogLayoutThree = ({ blog }) => {
  return (
    <div className="group flex flex-col items-center bg-bg_alt p-5 rounded-xl hover:bg-bg_light duration-300">
      <Link href={blog?.url} className="h-full rounded-xl overflow-hidden">
        <img
          src={blog?.image}
          placeholder="blur"
          alt={blog?.title}
          className="w-[280px]  h-[220px] object-cover object-center  group-hover:scale-105 transition-all ease duration-300 "
        />
      </Link>

      <div className="flex flex-col w-full mt-4">
        <span className="uppercase text-accent dark:text-accentDark font-semibold text-xs sm:text-sm">
          {blog?.tags}
        </span>
        <Link href={blog?.url} className="inline-block my-1">
          <h2 className="font-semibold capitalize  text-base sm:text-lg">
            <span
              className="bg-gradient-to-r from-accent/50 to-accent/50  dark:from-accentDark/50
              dark:to-accentDark/50
              bg-[length:0px_6px]
              group-hover:bg-[length:100%_6px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 "
            >
              {blog?.title}
            </span>
          </h2>
        </Link>

        <span className="capitalize  font-semibold  text-[11px]">
          {moment(blog?.publishedAt).fromNow()}
        </span>
      </div>
    </div>
  );
};

export default BlogLayoutThree;
