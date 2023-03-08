// next
import Head from "next/head";
import { useRouter } from "next/router";

// components
import Header from "../../components/Home/Header/Header";
import Footer from "../../components/Home/Footer/Footer";
import BlogHead from "../../components/Blog/BlogHead/BlogHead";
import BlogContent from "../../components/Blog/BlogContent/BlogContent";
import BlogSidebar from "../../components/Blog/BlogSidebar/BlogSidebar";

const category = () => {
  const router = useRouter();
  const { category } = router.query;

  return (
    <>
      <Head>
        <title>Categories - Takedownly</title>
        <meta name="description" content="Takedownly Submit new request Page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <BlogHead current={category} />
      <div className="blog-content md:max-w-7xl xl:max-w-screen-xl mx-auto px-5 py-5">
        <BlogContent current={category} />
        <BlogSidebar />
      </div>
      <Footer />
    </>
  );
};

export default category;
