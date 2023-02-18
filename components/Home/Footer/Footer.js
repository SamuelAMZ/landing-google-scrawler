// next
import Link from "next/link";

const Footer = () => {
  return (
    <div className="footer-container md:max-w-7xl xl:max-w-screen-xl mx-auto px-5 py-5">
      <div className="logo-site">
        <img src="/static/img/logo.png" alt="logo footer" />
        <p>Remove Leaks and Boost Earnings.</p>
      </div>

      <div className="menu-items-tk">
        <Link href="/privacy-and-cookie-policy">Privacy and cookie policy</Link>
      </div>

      <Link href="/start">
        <div className="footer-actions">
          <button className="btn btn-primary">free content review</button>
        </div>
      </Link>
    </div>
  );
};

export default Footer;
