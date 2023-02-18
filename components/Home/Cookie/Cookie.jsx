import { motion } from "framer-motion";
import CookieConsent from "react-cookie-consent";

const Cookie = () => {
  return (
    <div className="cookie-banner-tk">
      <CookieConsent
        location="bottom"
        cookieName="cookieConsent"
        style={{ background: "#fff" }}
        buttonStyle={{
          background: "#385dff",
          color: "white",
          fontSize: "15px",
          padding: ".7rem",
          borderRadius: "10px",
          boxShadow: "0px 80px 120px rgba(0, 0, 0, 0.15)",
        }}
        expires={150}
      >
        <p style={{ fontSize: "15px", color: "black" }}>
          This website uses cookies to ensure you get the best experience on our
          website. By using our site you consent cookies.{" "}
          <a className="link" href="/privacy-and-cookie-policy">
            Learn more
          </a>
        </p>
        {/* <button className="btn btn-primary btn-sm">Close</button> */}
      </CookieConsent>
    </div>
  );
};

export default Cookie;
