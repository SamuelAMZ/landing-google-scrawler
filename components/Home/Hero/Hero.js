// react
import { useState, useEffect } from "react";

// next
import Link from "next/link";

// framer motion
import { motion, AnimatePresence } from "framer-motion";

const Hero = () => {
  const items = [
    {
      id: 1,
      content: "Creators",
    },
    {
      id: 2,
      content: "Onlyfans",
    },
    {
      id: 3,
      content: "Patreon",
    },
    {
      id: 4,
      content: "Fansly",
    },
    {
      id: 5,
      content: "Chaturbate",
    },
    {
      id: 6,
      content: "Youtube",
    },
    {
      id: 7,
      content: "Manyvids",
    },
    {
      id: 8,
      content: "Fanvue",
    },
    {
      id: 9,
      content: "PocketStars",
    },
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((state) => {
        if (state >= items.length - 1) return 0;
        return state + 1;
      });
    }, 2000);
    return () => clearInterval(id);
  }, []);

  return (
    <>
      <div className="hero-wraper md:max-w-7xl xl:max-w-screen-xl mx-auto px-5 py-5">
        {/* texts */}
        <div className="textsHeading">
          <motion.h1 className="text-5xl" style={{ position: "relative" }}>
            Remove Leaks
            <br /> and Boost
            <br /> Earnings — <br />
            For{" "}
            <AnimatePresence>
              <motion.div
                key={items[index].id}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={{ ease: "easeInOut" }}
                style={{ position: "absolute" }}
                className="elements-anim"
              >
                {items[index].content}
              </motion.div>
            </AnimatePresence>
          </motion.h1>
          <p>
            Defend your <span>valuable content</span> and{" "}
            <span>maximize your income</span> with Takedownly.
          </p>
          <Link href="/start">
            <button className="btn btn-primary">free content review</button>
          </Link>
        </div>
        {/* hero image */}
        <div className="hero-image">
          <motion.img
            src="/static/img/hero.png"
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
          />
        </div>
      </div>

      {/* background element */}
      <div className="background-element"></div>
    </>
  );
};

export default Hero;
