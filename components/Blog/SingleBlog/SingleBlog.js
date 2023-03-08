import React, { useEffect } from "react";

// next
import Link from "next/link";
import { useRouter } from "next/router";

// react query
import { useQuery } from "react-query";

// helpers
import getReq from "../../../helpers/getReq";

// react markdown
import ReactMarkdown from "react-markdown";

// icons
import { BiLock } from "react-icons/bi";

const SingleBlog = () => {
  const router = useRouter();
  const { slug } = router.query;

  // get all categories
  const getSingleBlogPost = async (e) => {
    // send req
    return await getReq(`/api/blogs?filters[slug][$eq]=${slug}&populate=*`);
  };

  const { data: blogPost, isLoading } = useQuery(
    ["singlepost", slug],
    getSingleBlogPost,
    {
      refetchOnWindowFocus: true,
      enabled: true,
    }
  );

  return (
    <div className="single-post-container">
      {/* cover background */}
      <div
        className="cover-background"
        style={{
          backgroundImage: `url(${process.env.NEXT_PUBLIC_BLOG_SITE_DOMAIN}${blogPost?.data[0]?.attributes?.cover.data.attributes.url})`,
        }}
      ></div>

      {/* body */}
      <div className="single-blog-body">
        {/* icon */}
        <div className="single-blog-icon">
          <BiLock />
        </div>

        {/* title */}
        <h1>{blogPost?.data[0]?.attributes?.title}</h1>
        {/* posted */}
        <div className="single-blog-posted">
          <h3>
            POSTED ON {blogPost?.data[0]?.attributes?.updatedAt.split("T")[0]}{" "}
            IN{" "}
            <span>
              {
                blogPost?.data[0]?.attributes.categories?.data[0]?.attributes
                  ?.name
              }
            </span>
          </h3>
        </div>
        <span className="single-blog-sep"></span>
        {/* body */}
        <div className="single-blog-body-content">
          <ReactMarkdown children={blogPost?.data[0]?.attributes?.body} />
        </div>
        {/* action */}
        <div className="single-blog-action">
          <p>
            Remove Leaks and Boost Earnings Today by using{" "}
            <Link href="/start">
              <a>Takedownly service</a>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SingleBlog;
