import React from "react";

// next
import Link from "next/link";

// react query
import { useQuery } from "react-query";

// helpers
import getReq from "../../../helpers/getReq";

// icons
import { BiLock } from "react-icons/bi";

const SingleSuggetions = () => {
  // get all categories
  const getSuggetionsPosts = async (e) => {
    // send req
    return await getReq(
      `/api/blogs?populate=*&pagination[page]=1&pagination[pageSize]=3&sort[0]=publishedAt%3Aasc`
    );
  };

  const { data: blogPosts, isLoading } = useQuery(
    ["suggetionsblogposts"],
    getSuggetionsPosts,
    {
      refetchOnWindowFocus: true,
      enabled: true,
    }
  );

  return (
    <div className="suggetion-container md:max-w-7xl xl:max-w-screen-xl mx-auto px-5 py-5">
      {/* title */}
      <div className="suggetion-title">
        <p>More Posts</p>
        <h4>You Might Also Like</h4>
        <span className="suggetion-sep"></span>
      </div>

      {/* suggetions cards */}
      <div className="suggetions-card-container">
        {blogPosts?.data?.map((item) => {
          return (
            <Link href={`/blog/${item?.attributes?.slug}`} key={item?.id}>
              <a>
                <div className="suggetion-card">
                  <img
                    src={`${process.env.NEXT_PUBLIC_BLOG_SITE_DOMAIN}${item?.attributes?.cover.data.attributes.url}`}
                  />
                  <div className="suggetion-card-icon">
                    <BiLock />
                  </div>
                  <h2 className="suggetion-card-title">
                    {item?.attributes?.title}
                  </h2>
                  <p>
                    {item?.attributes?.updatedAt.split("T")[0]} in{" "}
                    <span>
                      {item?.attributes?.categories?.data[0]?.attributes?.name.substr(
                        0,
                        10
                      )}
                    </span>
                  </p>
                </div>
              </a>
            </Link>
          );
        })}
      </div>

      <Link href="/blog">
        <button className="btn btn-outline w-full">View All Posts</button>
      </Link>
    </div>
  );
};

export default SingleSuggetions;
