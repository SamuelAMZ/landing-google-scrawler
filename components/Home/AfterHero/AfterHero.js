// next
import Link from "next/link";

// motion
import { motion } from "framer-motion";

// icons
import { BsPeopleFill, BsFillBarChartFill } from "react-icons/bs";
import { BiTimeFive } from "react-icons/bi";

const AfterHero = () => {
  return (
    <div className="after-hero md:max-w-7xl xl:max-w-screen-xl mx-auto px-5 py-5">
      {/* second part logos */}
      <div className="logos-items">
        <motion.h3
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
        >
          Trusted by Top Content Creators
        </motion.h3>
        <div className="logos">
          <motion.img
            src="/static/img/platform7.png"
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          />
          <motion.img
            src="/static/img/platform1.png"
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
          />
          <motion.img
            src="/static/img/platform2.png"
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          />
          <motion.img
            src="/static/img/platform3.png"
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.9 }}
          />
          <motion.img
            src="/static/img/platform4.png"
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          />
          <motion.img
            src="/static/img/platform5.png"
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.1 }}
          />
          <motion.img
            src="/static/img/platform6.png"
            className="hidden md:block"
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.2 }}
          />
        </div>
      </div>

      {/* first part */}
      <motion.h2
        className="why"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
      >
        Why <span>Takedownly?</span>
      </motion.h2>
      <div className="tag-lines">
        <motion.div
          className="tag-item"
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
        >
          <div className="svg-item svg-2">
            <BsFillBarChartFill />
          </div>

          <h2>Increase revenue.</h2>
          <p>
            Experience a <span> 5x return on investment on average</span> by
            turning leaked views into paying customers. Let Takedownly help you
            achieve your financial goals faster.
          </p>
        </motion.div>

        <motion.div
          className="tag-item"
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="svg-item">
            <BsPeopleFill />
          </div>

          <h2>Made by experts.</h2>
          <p>
            The only takedown service designed and run by a{" "}
            <span>
              California attorney and Google legal removal specialist.
            </span>{" "}
            Don't risk your valuable content and hard-earned money by entrusting
            it to an inexperienced team.
          </p>
        </motion.div>

        <motion.div
          className="tag-item"
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.9 }}
        >
          <div className="svg-item svg-3">
            <BiTimeFive />
          </div>

          <h2>Save time.</h2>
          <p>
            Get back{" "}
            <span>valuable time and focus on income-generating tasks</span> with
            Takedownly. Our web crawler takes care of the tedious job of finding
            and responding to your leaked content so you can spend your time on
            what really matters: growing your business and reaching your
            financial goals.
          </p>
        </motion.div>
      </div>

      <Link href="/start">
        <button className="btn btn-primary w-full block md:hidden">
          free content review
        </button>
      </Link>
    </div>
  );
};

export default AfterHero;
