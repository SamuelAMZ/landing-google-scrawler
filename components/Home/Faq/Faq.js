import { motion } from "framer-motion";

const Faq = () => {
  return (
    <div className="faq">
      <div className="faq-container md:max-w-7xl xl:max-w-screen-xl mx-auto px-5 py-5">
        <h2>FAQ</h2>

        {/* desktop only */}
        <div className="hidden md:block tab-faq-content">
          <div className="tabs-elements">
            <motion.div
              tabIndex={0}
              className="collapse collapse-arrow faq-details"
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <input type="checkbox" />
              <div className="collapse-title">
                <p>How does Takedownly find infringing content on the web?</p>
              </div>
              <div className="collapse-content">
                <p>
                  <br />
                  Takedownly uses an advanced web crawling software that is
                  constantly scanning the web.
                </p>
              </div>
            </motion.div>
            <motion.div
              tabIndex={0}
              className="collapse collapse-arrow faq-details"
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <input type="checkbox" />
              <div className="collapse-title">
                <p>
                  How quickly can I expect infringing content to be removed once
                  Takedownly has identified it?
                </p>
              </div>
              <div className="collapse-content">
                <p>
                  <br />
                  Due to our close relationship with Google, you can expect the
                  Google search results to be removed within days of notice.
                  <br />
                  <br />
                  We cannot guarantee a time of removal for websites, but due to
                  the force of our legal backing websites and domains typically
                  comply shortly after notice.
                </p>
              </div>
            </motion.div>
            <motion.div
              tabIndex={0}
              className="collapse collapse-arrow faq-details"
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7 }}
            >
              <input type="checkbox" />
              <div className="collapse-title">
                <p>
                  Does Takedownly only work for adult content creators or can it
                  be used for other types of content as well?
                </p>
              </div>
              <div className="collapse-content">
                <p>
                  <br />
                  Nope!
                  <br />
                  <br /> We have experience with all types of content removals.
                  Just a few examples of content we have helped a wide range of
                  clients remove: privacy violations, defamatory content,
                  counterfeit products, and trademark infringement.
                </p>
              </div>
            </motion.div>
            <motion.div
              tabIndex={0}
              className="collapse collapse-arrow faq-details"
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <input type="checkbox" />
              <div className="collapse-title">
                <p>
                  Do you offer any guarantee of complete removal of infringing
                  content?
                </p>
              </div>
              <div className="collapse-content">
                <p>
                  <br />
                  We guarantee we will remove the Google search result.
                  <br />
                  <br /> This will drastically reduce the number of people who
                  will discover this content as they can only find the content
                  through the direct URL.
                  <br />
                  <br /> Unfortunately laws vary in different jurisdictions so
                  we cannot guarantee that every website will takedown the
                  content, but we have a very good record of compliance due to
                  our ability to issue binding legal threats.
                </p>
              </div>
            </motion.div>
            <motion.div
              tabIndex={0}
              className="collapse collapse-arrow faq-details"
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.9 }}
            >
              <input type="checkbox" />
              <div className="collapse-title">
                <p>
                  Is there any limit to the number of takedown requests
                  Takedownly can file?
                </p>
              </div>
              <div className="collapse-content">
                <p>
                  <br />
                  Nope!
                  <br />
                  <br /> When you subscribe to Takedownly we will file takedown
                  requests for every piece of infringing content that we find.
                </p>
              </div>
            </motion.div>
            <motion.div
              tabIndex={0}
              className="collapse collapse-arrow faq-details"
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <input type="checkbox" />
              <div className="collapse-title">
                <p>
                  Is there any minimum commitment for using Takedownly's
                  services?
                </p>
              </div>
              <div className="collapse-content">
                <p>
                  <br />
                  You can cancel easily at anytime.
                </p>
              </div>
            </motion.div>
            <motion.div
              tabIndex={0}
              className="collapse collapse-arrow faq-details lorem"
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.1 }}
            >
              <input type="checkbox" />
              <div className="collapse-title">
                <p>
                  How can I contact Takedownly if I have any questions or
                  concerns?
                </p>
              </div>
              <div className="collapse-content">
                <p>
                  <br />
                  You can contact us at anytime using our 24/7 chat on the
                  website. You can also email us at{" "}
                  <a className="link" href="mailto:contact@takedownly.com">
                    contact@takedownly.com
                  </a>
                  , or message us on WhatsApp and Telegram.
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* mobiles only */}
        <div className="md:hidden block tab-faq-content">
          <div className="tabs-elements">
            <div tabIndex={0} className="collapse collapse-arrow faq-details">
              <input type="checkbox" />
              <div className="collapse-title">
                <p>How does Takedownly find infringing content on the web?</p>
              </div>
              <div className="collapse-content">
                <p>
                  <br />
                  Takedownly uses an advanced web crawling software that is
                  constantly scanning the web.
                </p>
              </div>
            </div>
            <div tabIndex={0} className="collapse collapse-arrow faq-details">
              <input type="checkbox" />
              <div className="collapse-title">
                <p>
                  How quickly can I expect infringing content to be removed once
                  Takedownly has identified it?
                </p>
              </div>
              <div className="collapse-content">
                <p>
                  <br />
                  Due to our close relationship with Google, you can expect the
                  Google search results to be removed within days of notice.
                  <br />
                  <br />
                  We cannot guarantee a time of removal for websites, but due to
                  the force of our legal backing websites and domains typically
                  comply shortly after notice.
                </p>
              </div>
            </div>
            <div tabIndex={0} className="collapse collapse-arrow faq-details">
              <input type="checkbox" />
              <div className="collapse-title">
                <p>
                  Does Takedownly only work for adult content creators or can it
                  be used for other types of content as well?
                </p>
              </div>
              <div className="collapse-content">
                <p>
                  <br />
                  Nope!
                  <br />
                  <br /> We have experience with all types of content removals.
                  Just a few examples of content we have helped a wide range of
                  clients remove: privacy violations, defamatory content,
                  counterfeit products, and trademark infringement.
                </p>
              </div>
            </div>
            <div tabIndex={0} className="collapse collapse-arrow faq-details">
              <input type="checkbox" />
              <div className="collapse-title">
                <p>
                  Do you offer any guarantee of complete removal of infringing
                  content?
                </p>
              </div>
              <div className="collapse-content">
                <p>
                  <br />
                  We guarantee we will remove the Google search result.
                  <br />
                  <br /> This will drastically reduce the number of people who
                  will discover this content as they can only find the content
                  through the direct URL.
                  <br />
                  <br /> Unfortunately laws vary in different jurisdictions so
                  we cannot guarantee that every website will takedown the
                  content, but we have a very good record of compliance due to
                  our ability to issue binding legal threats.
                </p>
              </div>
            </div>
            <div tabIndex={0} className="collapse collapse-arrow faq-details">
              <input type="checkbox" />
              <div className="collapse-title">
                <p>
                  Is there any limit to the number of takedown requests
                  Takedownly can file?
                </p>
              </div>
              <div className="collapse-content">
                <p>
                  <br />
                  Nope!
                  <br />
                  <br /> When you subscribe to Takedownly we will file takedown
                  requests for every piece of infringing content that we find.
                </p>
              </div>
            </div>
            <div tabIndex={0} className="collapse collapse-arrow faq-details">
              <input type="checkbox" />
              <div className="collapse-title">
                <p>
                  Is there any minimum commitment for using Takedownly's
                  services?
                </p>
              </div>
              <div className="collapse-content">
                <p>
                  <br />
                  You can cancel easily at anytime.
                </p>
              </div>
            </div>
            <div
              tabIndex={0}
              className="collapse collapse-arrow faq-details lorem"
            >
              <input type="checkbox" />
              <div className="collapse-title">
                <p>
                  How can I contact Takedownly if I have any questions or
                  concerns?
                </p>
              </div>
              <div className="collapse-content">
                <p>
                  <br />
                  You can contact us at anytime using our 24/7 chat on the
                  website. You can also email us at{" "}
                  <a className="link" href="mailto:contact@takedownly.com">
                    contact@takedownly.com
                  </a>
                  , or message us on WhatsApp and Telegram.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
