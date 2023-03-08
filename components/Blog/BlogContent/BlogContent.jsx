import React, { useState } from "react";

// next
import Link from "next/link";

// react query
import { useQuery } from "react-query";

// helpers
import getReq from "../../../helpers/getReq";

// components
import BlogCard from "../BlogCard/BlogCard";

// icons
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";

const BlogContent = ({ current }) => {
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(7);

  // get all categories
  const getBlogPosts = async (e) => {
    let url = `/api/blogs?populate=*&pagination[page]=${page}&pagination[pageSize]=${perPage}&sort[0]=publishedAt%3Adesc`;
    // send req
    return await getReq(url);
  };

  const { data: blogPosts, isLoading } = useQuery(
    ["blogposts", page, current],
    getBlogPosts,
    {
      refetchOnWindowFocus: true,
      enabled: true,
    }
  );

  const filteredData = (blogPosts) => {
    let returnedData = [];

    if (current) {
      blogPosts?.forEach((elm) => {
        elm.attributes?.categories.data.forEach((cat) => {
          if (cat.attributes.slug === current) {
            returnedData.push(elm);
          }
        });
      });
      return returnedData;
    }

    if (blogPosts) {
      returnedData = blogPosts;
    }

    return returnedData;
  };

  return (
    <>
      <div className="blog-content-wrapper">
        <div className="blog-card-wrapper">
          {filteredData(blogPosts?.data).map((item) => {
            return <BlogCard postData={item.attributes} key={item.id} />;
          })}
        </div>

        <div className="blog-pagination">
          {page > 1 && (
            <button
              className="btn btn-primary gap-2"
              onClick={() => setPage(page - 1)}
            >
              <MdKeyboardArrowLeft className="pag-btn" /> Previous
            </button>
          )}

          {page < blogPosts?.meta.pagination.total &&
            !(perPage >= blogPosts?.meta.pagination.total) && (
              <button
                className="btn btn-primary gap-2"
                onClick={() => setPage(page + 1)}
              >
                Next <MdKeyboardArrowRight className="pag-btn" />
              </button>
            )}
        </div>
      </div>
    </>
  );
};

export default BlogContent;
