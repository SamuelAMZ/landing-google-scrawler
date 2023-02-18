// react
import { useState } from "react";

// motion
import { motion } from "framer-motion";

// icons
import {
  AiFillCheckCircle,
  AiTwotoneStar,
  AiOutlineInfoCircle,
} from "react-icons/ai";

const Pricing = () => {
  const [mode, setMode] = useState(false);

  return (
    <div
      id="pricing"
      className="pricing-wraper md:max-w-7xl xl:max-w-screen-xl mx-auto px-5 py-5"
    >
      <div className="pricing-header">
        <h2>Choose your plan</h2>
        <h3>No hidden feeds or lock-in contracts.</h3>
      </div>

      <div className="pricing-box">
        {/* <div className="pricing-box-heading">
          <h3>
            <span>30-day</span>
            <br />
            money-back
            <br />
            guarantee.{" "}
          </h3>
          <br />
          <span className="sep"></span>
          <h3>
            <br /> <span>Cancel</span> <br />
            anytime.
          </h3>
        </div> */}
        <motion.div
          className="pricing-box-price"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {/* pricing prices head */}
          <div className="pricing-box-price-head">
            <p>Monthly</p>
            <input
              type="checkbox"
              className="toggle toggle-primary"
              value={mode}
              onChange={(e) => setMode(e.target.checked)}
            />
            <p>Quarterly</p>
            <span className="hidden md:block">22% OFF</span>
          </div>

          {/* pricing body */}
          <div className="pricing-body">
            {/* beginner */}
            <div className="pricing-elm">
              <div className="pricing-elm-head">
                <h3>Beginner</h3>
                {mode ? (
                  <h4>
                    $200 <span>Per quarter</span>
                  </h4>
                ) : (
                  <h4>
                    $60 <span>Per month</span>
                  </h4>
                )}
              </div>
              <div className="pricing-elm-body">
                <div className="elm-notice">
                  <span>Features</span>
                </div>
                <ul className="elm-features">
                  <li>
                    <AiFillCheckCircle />{" "}
                    <p>Unlimited Google Search Delisting</p>{" "}
                  </li>
                  <li>
                    <AiFillCheckCircle /> <p>Weekly Email Reports</p>{" "}
                  </li>
                  <li>
                    <AiFillCheckCircle /> <p>1 User Name</p>{" "}
                  </li>
                  <li>
                    <AiFillCheckCircle /> <p>Anonymity</p>{" "}
                  </li>
                </ul>
                <button className="btn btn-primary">Start</button>
              </div>
            </div>

            {/* basic */}
            <div className="pricing-elm">
              {/* most popular widget */}
              <div className="most-popular">
                <AiTwotoneStar />
                <span>Most Popular</span>
              </div>
              <div className="pricing-elm-head">
                <h3>Basic</h3>
                {mode ? (
                  <h4>
                    $400 <span>Per quarter</span>
                  </h4>
                ) : (
                  <h4>
                    $150 <span>Per month</span>
                  </h4>
                )}
              </div>
              <div className="pricing-elm-body">
                <div className="elm-notice">
                  <span>Features</span>
                  <p>All the benefits of Beginner, and:</p>
                </div>
                <ul className="elm-features">
                  <li>
                    <AiFillCheckCircle />{" "}
                    <p>
                      Lawyer drafted DMCA Takedowns sent directly to pirates
                    </p>{" "}
                  </li>
                  <li>
                    <AiFillCheckCircle />{" "}
                    <p>
                      Lawyer drafted Cease and Desists sent directly to pirates
                    </p>{" "}
                  </li>
                  <li>
                    <AiFillCheckCircle /> <p>24/7 Web Crawler</p>{" "}
                  </li>
                  <li>
                    <AiFillCheckCircle /> <p>Daily Email Reports</p>{" "}
                  </li>
                  <li>
                    <AiFillCheckCircle /> <p>5 User Names</p>{" "}
                  </li>
                </ul>
                <button className="btn btn-primary">Start</button>
              </div>
            </div>

            {/* pro */}
            <div className="pricing-elm pro">
              <div className="pricing-elm-head">
                <h3>Pro</h3>
                {mode ? (
                  <h4>
                    $800 <span>Per quarter</span>
                  </h4>
                ) : (
                  <h4>
                    $300 <span>Per month</span>
                  </h4>
                )}
              </div>
              <div className="pricing-elm-body">
                <div className="elm-notice">
                  <span>Features</span>
                  <p className="p-pro">All the greatness of Basic, and:</p>
                </div>
                <ul className="elm-features pro-elm">
                  <li>
                    <AiFillCheckCircle />{" "}
                    <p>
                      We optimally post compelling content teasers across Reddit
                      and Twitter
                    </p>{" "}
                  </li>
                  <li>
                    <AiFillCheckCircle />{" "}
                    <p>
                      Interact and respond to your fans in your style across all
                      platforms
                    </p>{" "}
                  </li>
                  <li>
                    <AiFillCheckCircle />{" "}
                    <p>Organically drive traffic to your paid websites</p>{" "}
                  </li>
                </ul>
                <button className="btn btn-primary pro-btn">Start</button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* pricing footer */}
        <div className="pricing-footer">
          <AiOutlineInfoCircle />
          <h3>30-day money-back guarantee - Cancel anytime .</h3>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
