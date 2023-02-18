import { motion } from "framer-motion";

// next
import Link from "next/link";

// icons
import { FaShieldAlt, FaSearch, FaGoogle, FaUserMinus } from "react-icons/fa";
import { SiOnlyfans, SiGoogle } from "react-icons/si";
import { BiSupport } from "react-icons/bi";
import { BsShieldCheck, BsSearch } from "react-icons/bs";

const BigPoints = () => {
  return (
    <div className="bigs">
      <div className="bigpoints md:max-w-7xl xl:max-w-screen-xl mx-auto px-5 py-5">
        <h2
          className="services-heading"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Our <span>Features</span>
        </h2>
        <div className="points-elements">
          <div className="element">
            <div className="icons-wrapper">
              <BsShieldCheck className="icons-element" />
            </div>
            <div>
              <h3>
                DMCA <br />
                Takedown
              </h3>
              <p>
                Our team of lawyers draft and send DMCA Takedown and Cease and
                Desist notices to websites hosting your leaked content ensuring
                swift removal. Our unparalleled legal expertise boasts the
                highest compliance rate in the industry, giving you peace of
                mind and protection of your content.
              </p>
            </div>
          </div>
          <div className="element">
            <div className="icons-wrapper">
              <BsSearch className="icons-element" />
            </div>
            <div>
              <h3>
                24/7 <br />
                Crawler
              </h3>
              <p>
                Our 24/7 web crawler is always on the lookout for your content,
                so you can reclaim control and increase your earnings with ease.
                With our expert legal team, your intellectual property is
                protected day and night, giving you peace of mind and financial
                security.
              </p>
            </div>
          </div>
          <div className="element">
            <div className="icons-wrapper">
              <SiGoogle className="icons-element" />
            </div>
            <div>
              <h3>
                Google Search
                <br />
                Removal
              </h3>
              <p>
                Our close relationship with Google helps us remove infringing
                Google search results swiftly, making it harder for audiences to
                find leaks and driving more traffic to your paid content.
              </p>
            </div>
          </div>
          <div className="element">
            <div className="icons-wrapper">
              <SiOnlyfans className="icons-element" />
            </div>
            <div>
              <h3>
                Social Media <br />
                Management
              </h3>
              <p>
                Maximize your reach, engage your audience, and boost your income
                with our social media management. Our expert team takes care of
                your online presence, creating and sharing eye-catching teasers
                and interacting with your fans, giving you more freedom to focus
                on what you do best - creating valuable content.
              </p>
            </div>
          </div>
          <div className="element">
            <div className="icons-wrapper">
              <FaUserMinus className="icons-element" />
            </div>
            <div>
              <h3>
                Complete
                <br />
                Anonymity
              </h3>
              <p>
                Filing takedown requests on your own exposes your personal
                information. When using Takedownly we use our own contact
                information ensuring that your personal details remain
                confidential and secure, giving you the peace of mind that your
                anonymity is always protected.
              </p>
            </div>
          </div>
          <div className="element">
            <div className="icons-wrapper">
              <BiSupport className="icons-element" />
            </div>
            <div>
              <h3>
                Live
                <br /> Support
              </h3>
              <p>
                Our team of experts is available to assist you with any
                questions or concerns you may have, providing you with the
                support you need to effectively protect your intellectual
                property.
              </p>
            </div>
          </div>
        </div>

        <Link href="/start">
          <button className="btn btn-primary hidden md:block">
            free content review
          </button>
        </Link>
      </div>
    </div>
  );
};

export default BigPoints;
