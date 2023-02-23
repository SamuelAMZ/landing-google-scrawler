import { useState, useEffect, useContext } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

// contexts
import StartFormContext from "../../../contexts/StartFormContext";

// icons
import { IoIosArrowUp } from "react-icons/io";

// components
import Cookie from "../Cookie/Cookie";

const Header = () => {
  const [isAnim, setIsAnim] = useState(false);
  const router = useRouter();

  // context
  const { data, changeData } = useContext(StartFormContext);

  // reset steps
  useEffect(() => {
    changeData(false);
  }, []);

  // scroll to top
  const scrollToTop = () => {
    const topElm = document.querySelector(".header");
    topElm.scrollIntoView({ behavior: "smooth", block: "end" });
  };
  const [topNow, setTopNow] = useState(false);

  const scrollFunction = () => {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      setTopNow(true);
    } else {
      setTopNow(false);
    }
  };

  // page transition loading animation
  const animStart = () => {
    setIsAnim(true);
  };
  const animEnd = () => {
    setIsAnim(false);
  };

  useEffect(() => {
    window.onscroll = () => scrollFunction();
  }, [topNow]);

  // get if page is a parent page or a subpage
  useEffect(() => {
    router.events.on("routeChangeStart", animStart);
    router.events.on("routeChangeComplete", animEnd);
    router.events.on("routeChangeError", animEnd);

    return () => {
      router.events.off("routeChangeStart", animStart);
      router.events.off("routeChangeComplete", animEnd);
      router.events.off("routeChangeError", animEnd);
    };
  }, []);

  return (
    <>
      <div id="top" className="header">
        <div className="header-wrapper md:max-w-7xl xl:max-w-screen-xl mx-auto px-5 py-5 flex items-center justify-between md:px-10 xl:px-5">
          {/* logo */}
          <div className="header-first-part">
            <Link href={"/#top"}>
              <a>
                <img src="/static/img/logo.png" alt="logo" className="logo" />
              </a>
            </Link>

            <div className="menu-items-tk">
              <a className="hidden md:block" href="/#pricing">
                Pricing
              </a>
            </div>
          </div>

          {/* action buttons */}
          <div className="header-second-part">
            <a href="https://app.takedownly.com/">
              <p>Sign in</p>
            </a>

            <Link href="/start">
              <button className="btn btn-outline btn-primary hidden md:block">
                free content review
              </button>
            </Link>
            <Link href="/start">
              <button className="btn btn-outline btn-primary block md:hidden">
                START
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* loading screen routing animation */}
      {isAnim && (
        <div className="loading">
          <div className="loader"></div>
        </div>
      )}

      {/* scroll to top */}
      {topNow && (
        <div className="back-to-top" onClick={() => scrollToTop()}>
          <IoIosArrowUp />
        </div>
      )}

      {/* cookie banner */}
      <Cookie />
    </>
  );
};

export default Header;
