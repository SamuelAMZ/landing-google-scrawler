// react
import { useContext, useEffect } from "react";

// next
import Link from "next/link";

// react query
import { useQuery } from "react-query";

// helpers
import postReq from "../../helpers/postReq";

// contexts
import StartFormContext from "../../contexts/StartFormContext";
import StartContext from "../../contexts/StartContext";

// icons
import { AiFillCheckCircle } from "react-icons/ai";

const ThankYou = () => {
  const { data, changeData } = useContext(StartFormContext);
  const { startData, changeStartData } = useContext(StartContext);

  // reset steps
  useEffect(() => {
    changeData(false);
  }, []);

  // sent thank you email
  const thankYouEmail = async (e) => {
    // send req
    return await postReq({ data: startData }, "/api/thankyou");
  };

  const { data: thankyouData, isLoading } = useQuery(
    ["thankyou", startData],
    thankYouEmail,
    {
      refetchOnWindowFocus: false,
      enabled: true,
    }
  );

  return (
    <div className="thank-you md:max-w-7xl xl:max-w-screen-xl mx-auto px-5 py-5">
      <div className="checks-head-lorem">
        <AiFillCheckCircle />
        <h1>Success!</h1>
      </div>

      <div className="additional-text">
        <h2>
          Your request for a free report has been received and is being
          processed.{" "}
        </h2>
        <br />
        <p>
          Thank you for choosing Takedownly to protect your valuable content.
          You will receive a follow-up email from us shortly, which will include
          a detailed report of any leaked content found online.
          <br />
          <br />
          If you have any questions in the meantime, please don't hesitate to
          reach out to our team. We're here to help you take control of your
          online presence.
        </p>

        <br />
        <Link href={"/"}>
          <button className="btn btn-outline btn-primary">Home</button>
        </Link>
      </div>
    </div>
  );
};

export default ThankYou;
