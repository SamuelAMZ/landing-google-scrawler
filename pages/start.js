// next
import Head from "next/head";

// components
import Header from "../components/Start/Header/Header";
import Step1 from "../components/Start/Step1/Step1";
import Step2 from "../components/Start/Step2/Step2";

const start = () => {
  return (
    <>
      <Head>
        <title>Start - Takedownly</title>
        <meta name="description" content="Takedownly Submit new request Page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Step1 />
      <Step2 />
    </>
  );
};

export default start;
