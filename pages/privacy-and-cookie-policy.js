// next
import Head from "next/head";

// components
import Header from "../components/Start/Header/Header";

const privacyPolicy = () => {
  return (
    <>
      <Head>
        <title>Privacy and cookie policy - Takedownly</title>
        <meta
          name="description"
          content="Takedownly privacy and cookie policy Page"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <div className="privacy-policy md:max-w-7xl xl:max-w-screen-xl mx-auto px-5 py-5">
        <h2>PRIVACY POLICY</h2>
        <p>
          At Takedownly, we take the privacy of our users seriously. <br /> We
          understand that you trust us with your personal information and we are
          committed to protecting it. This Privacy Policy describes how we
          collect, use, share and protect your personal information.
        </p>
        <h3>Collection of Personal Information:</h3>
        <p>
          We may collect personal information from you when you use our website
          or services, such as your name, email address, phone number, and
          content you upload.{" "}
        </p>
        <h3>Use of Personal Information:</h3>
        <p>
          We use your personal information to provide you with our services, to
          communicate with you, and to improve our website and services. We will
          not share your personal information with any third parties unless
          required by law or as part of providing you with our services.
        </p>
        <h3>Sharing of Personal Information: </h3>
        <p>
          We will not share your personal information with any third-party
          service providers for the purpose of sending takedown notices. Only
          Takedownly will be sending those notices on behalf of our users. All
          the personal information provided will be kept confidential and will
          only be used for the purpose of providing our services.{" "}
        </p>

        <h3>Security of Personal Information:</h3>

        <p>
          We take reasonable measures to protect your personal information from
          unauthorized access, use, or disclosure. We use industry standard
          security protocols to safeguard your personal information and protect
          it from unauthorized access, misuse, alteration, or destruction.
          However, no method of transmission over the internet, or method of
          electronic storage, is 100% secure. <br />
          <br /> Therefore, we cannot guarantee the absolute security of your
          personal information. We encourage you to be vigilant in protecting
          your personal information, and to always use a strong password and be
          mindful of suspicious emails, phone calls or messages that may be
          attempts to phish for your information. If you suspect any
          unauthorized access to your account, please contact us immediately.
          <br />
          <br /> Additionally, please note that this privacy policy is subject
          to change at any time, and any changes will be reflected on this page.
          We recommend that you review this page periodically to stay informed
          about our privacy practices. If you have any questions or concerns
          about our Privacy Policy, please contact us at{" "}
          <a href="mailto:support@takedownly.com" className="link">
            support@takedownly.com
          </a>{" "}
          .
        </p>
        <h2 className="mt-5">COOKIE POLICY</h2>
        <p>
          Cookies are small text files that are placed on your device when you
          visit our website. They are used to remember your preferences and to
          improve your browsing experience.
          <br />
          <br /> Our website uses both session cookies, which expire when you
          close your browser, and persistent cookies, which remain on your
          device until they expire or are deleted. You can control the use of
          cookies on our website through your browser settings.
        </p>
      </div>
    </>
  );
};

export default privacyPolicy;
