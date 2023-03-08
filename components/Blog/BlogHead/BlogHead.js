import React from "react";

// next
import Link from "next/link";

// react query
import { useQuery } from "react-query";

// helpers
import getReq from "../../../helpers/getReq";

const BlogHead = ({ current }) => {
  // get all categories
  const getAllCategories = async (e) => {
    // send req
    return await getReq(
      "/api/categories?pagination[page]=1&pagination[pageSize]=50"
    );
  };

  const { data: allCategories, isLoading } = useQuery(
    ["allcategories"],
    getAllCategories,
    {
      refetchOnWindowFocus: true,
      enabled: true,
    }
  );

  return (
    <div className="blog-header">
      <div className="md:max-w-7xl xl:max-w-screen-xl mx-auto px-5 py-5">
        <h1>Takedownly Blog.</h1>
        <span className="blog-separator"></span>
        <div className="blog-categories">
          <Link href="/blog">
            <a>
              <button
                className={
                  !current
                    ? "btn btn-primary btn-sm btn-blog"
                    : "btn btn-outline btn-sm btn-blog btn-shadow"
                }
              >
                All Posts
              </button>
            </a>
          </Link>
          <div className="single-categories">
            {allCategories?.data?.map((item) => {
              return (
                <Link
                  href={`/categories/${item?.attributes.slug}`}
                  key={item.id}
                >
                  <a>
                    <button
                      className={
                        item?.attributes.slug === current
                          ? "btn btn-primary btn-sm btn-blog btn-shadow"
                          : "btn btn-outline btn-sm btn-blog btn-shadow"
                      }
                    >
                      {item?.attributes.name}
                    </button>
                  </a>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogHead;
