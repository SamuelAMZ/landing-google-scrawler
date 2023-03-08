import React from "react";

// next
import Link from "next/link";

// icons
import { BiLock } from "react-icons/bi";

const BlogCard = ({ postData }) => {
  return (
    <Link href={`/blog/${postData?.slug}`}>
      <a>
        <div className="blog-card-wraper">
          {/* img */}
          <img
            src={`${process.env.NEXT_PUBLIC_BLOG_SITE_DOMAIN}${postData?.cover.data.attributes.url}`}
          />
          {/* icon */}
          <div className="blog-card-icon-wrapper">
            <div className="blog-card-icon">
              <BiLock />
            </div>
          </div>
          <div className="blog-card-content">
            {/* title */}
            <h2 className="blog-card-title">{postData?.title}</h2>
            {/* desc */}
            <p className="blog-card-desc">
              {postData?.body.substr(0, 200)}
              {postData?.body.length >= 200 && "..."}{" "}
            </p>
          </div>

          <div className="blog-card-footer">
            {/* sep */}
            <span className="blog-card-sep"></span>
            {/* date plus category */}
            <div className="blog-card-category">
              {postData?.updatedAt.split("T")[0]} IN{" "}
              <span>{postData?.categories?.data[0]?.attributes?.name}</span>
            </div>
          </div>
        </div>
      </a>
    </Link>
  );
};

export default BlogCard;
