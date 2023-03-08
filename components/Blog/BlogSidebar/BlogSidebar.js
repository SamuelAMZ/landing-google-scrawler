import React from "react";

// next
import Link from "next/link";

// react query
import { useQuery } from "react-query";

// helpers
import getReq from "../../../helpers/getReq";

const BlogSidebar = () => {
  // get sidebar posts
  const getSidebarPosts = async (e) => {
    // send req
    return await getReq(
      `/api/blogs?populate=*&pagination[page]=1&pagination[pageSize]=3&sort[0]=publishedAt%3Aasc`
    );
  };

  const { data: blogPosts, isLoading } = useQuery(
    ["sidebarblogposts"],
    getSidebarPosts,
    {
      refetchOnWindowFocus: true,
      enabled: true,
    }
  );

  return (
    <div className="blog-sidebar-container">
      <div className="blog-sidebar-header">
        <h2>Featured Posts</h2>
      </div>

      <div className="blog-sidebar-body">
        {blogPosts?.data?.map((item) => {
          return (
            <Link href={`/blog/${item?.attributes?.slug}`} key={item?.id}>
              <a>
                <div className="sidebar-card-item" key={item.id}>
                  {/* category and title */}
                  <div className="sidebar-card-item-category-title">
                    <p>
                      {item?.attributes.categories?.data[0]?.attributes?.name.substr(
                        0,
                        20
                      )}
                      {item?.attributes.categories?.data[0]?.attributes?.name
                        .length >= 20 && "..."}
                    </p>
                    <h3>{item?.attributes.title}</h3>
                  </div>
                  {/* image */}
                  <img
                    src={`${process.env.NEXT_PUBLIC_BLOG_SITE_DOMAIN}${item?.attributes?.cover.data.attributes.url}`}
                  />
                </div>
              </a>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default BlogSidebar;
