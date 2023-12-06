import moment from "moment/moment";
import React from "react";
import { Link } from "react-router-dom";

const BlogLayoutTwo = ({ blog }) => {

  return (
    <div className="group flex flex-col md:w-[360px] items-center pt-6 rounded-2xl text-dark bg-bg_cl">
      <Link
        href={blog?._id}
        className="h-full rounded-xl overflow-hidden"
      >
        <img
          src={blog?.image}
          placeholder="blur"
          alt={blog?.title}
          className="w-[300px] h-[200px] object-cover object-center group-hover:scale-105 transition-all ease duration-300"
        />
      </Link>

      <div className="text-start w-full py-2 px-8">
        <span className="uppercase text-accent dark:text-accentDark font-semibold text-xs sm:text-sm">
          {blog?.tags}
        </span>
        <Link href={blog?._id} className="my-1">
          <h2 className="font-semibold capitalize text-base sm:text-lg">
            <span
              className=""
            >
              {blog?.title}
            </span>
          </h2>
        </Link>

        <span className="w-full capitalize font-semibold  text-[11px]">
          {moment(blog?.createdAt).fromNow()}
        </span>
      </div>
    </div>
  );
};

export default BlogLayoutTwo;
