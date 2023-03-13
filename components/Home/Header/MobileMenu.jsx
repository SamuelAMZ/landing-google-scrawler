import React, { useContext } from "react";
import Link from "next/link";

// context
import MobileMenuContext from "../../../contexts/MobileMenuContext";

// icons
import { AiOutlineClose } from "react-icons/ai";

const MobileMenu = () => {
  // context
  const { mobileMenu, changeMobileMenu } = useContext(MobileMenuContext);

  return (
    <>
      <div
        className="mobile-menu-back block md:hidden"
        onClick={() => changeMobileMenu(false)}
      ></div>

      <div
        className="close-mobile-menu"
        onClick={() => changeMobileMenu(false)}
      >
        <AiOutlineClose />
      </div>

      <div className="mobile-menu-container block md:hidden">
        <ul onClick={() => changeMobileMenu(false)}>
          <li>
            <Link href={"/"}>Home</Link>
          </li>
          <li>
            <a href="/#pricing">Pricing</a>
          </li>
          <li>
            <Link href={"/blog"}>Blog</Link>
          </li>
          <li>
            <a href="https://app.takedownly.com/">Sign In</a>
          </li>
          <Link href="/start">
            <li className="last-li btn btn-primary">Start</li>
          </Link>
        </ul>
      </div>
    </>
  );
};

export default MobileMenu;
