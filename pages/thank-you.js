import Head from "next/head";

// components
import Header from "../components/Start/Header/Header";
import ThankYou from "../components/ThankYou/ThankYou";

const thankYou = () => {
  return (
    <>
      <Head>
        <title>Thank You - Takedownly</title>
        <meta name="description" content="Takedownly Thank You Page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <ThankYou />
    </>
  );
};

export default thankYou;
