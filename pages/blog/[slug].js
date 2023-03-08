// next
import Head from "next/head";

// components
import Header from "../../components/Home/Header/Header";
import Footer from "../../components/Home/Footer/Footer";
import SingleBlog from "../../components/Blog/SingleBlog/SingleBlog";
import SingleSuggetions from "../../components/Blog/SingleSuggetions/SingleSuggetions";

const slug = () => {
  return (
    <>
      <Header />
      <SingleBlog />
      <SingleSuggetions />
      <Footer />
    </>
  );
};

export default slug;
