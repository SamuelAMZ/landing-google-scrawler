// next
import Head from "next/head";

// components
import Header from "../components/Home/Header/Header";
import Hero from "../components/Home/Hero/Hero";
import AfterHero from "../components/Home/AfterHero/AfterHero";
import BigPoints from "../components/Home/BigPoints/BigPoints";
import ReviewCounter from "../components/Home/ReviewCounter/ReviewCounter";
import Proof from "../components/Home/Proof/Proof";
import Pricing from "../components/Home/Pricing/Pricing";
import Faq from "../components/Home/Faq/Faq";
import Footer from "../components/Home/Footer/Footer";

export default function Home() {
  return (
    <div className="max-w-full">
      <Head>
        <title>Home - Takedownly</title>
        <meta name="description" content="Takedownly Home Page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="homepage">
        <Header />
        <Hero />
        <AfterHero />
        <BigPoints />
        <ReviewCounter />
        <Proof />
        <Pricing />
        <Faq />
        <Footer />
      </div>
    </div>
  );
}
