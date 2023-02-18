import Link from "next/link";

const Header = () => {
  return (
    <div className="md:max-w-7xl xl:max-w-screen-xl mx-auto px-5 py-5 flex items-center justify-between md:px-10 xl:px-5">
      {/* logo */}
      <div className="start-logo">
        <Link href={"/"}>
          <a>
            <img src="/static/img/logo.png" alt="logo" className="logo" />
          </a>
        </Link>
        <h2>Remove Leaks and Boost Earnings.</h2>
      </div>
    </div>
  );
};

export default Header;
