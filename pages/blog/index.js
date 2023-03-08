// next
import Head from "next/head";

// components
import Header from "../../components/Home/Header/Header";
import Footer from "../../components/Home/Footer/Footer";
import BlogHead from "../../components/Blog/BlogHead/BlogHead";
import BlogContent from "../../components/Blog/BlogContent/BlogContent";
import BlogSidebar from "../../components/Blog/BlogSidebar/BlogSidebar";

const blog = () => {
  return (
    <>
      <Head>
        <title>Blog - Takedownly</title>
        <meta name="description" content="Takedownly Submit new request Page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <BlogHead />
      <div className="blog-content md:max-w-7xl xl:max-w-screen-xl mx-auto px-5 py-5">
        <BlogContent />
        <BlogSidebar />
      </div>
      <Footer />
    </>
  );
};

export default blog;
