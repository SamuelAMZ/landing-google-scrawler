// react
import { useState, useContext } from "react";

// next
import { useRouter } from "next/router";

// axios
const axios = require("axios");

// helpers
import notif from "../../../helpers/notif";

// context
import StartFormContext from "../../../contexts/StartFormContext";
import StartContext from "../../../contexts/StartContext";

// icons
import { AiOutlineUser, AiOutlineLink } from "react-icons/ai";

const Step2 = () => {
  // router hook
  const router = useRouter();

  // context
  const { data, changeData } = useContext(StartFormContext);
  const { startData, changeStartData } = useContext(StartContext);

  // states
  const [stepData, setStepData] = useState({
    firstname: "",
    lastname: "",
    linktree: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  // update data onchange from form
  const updateData = (e, type) => {
    if (type === "firstname") {
      setStepData({ ...stepData, firstname: e.target.value });
    }
    if (type === "lastname") {
      setStepData({ ...stepData, lastname: e.target.value });
    }
    if (type === "linktree") {
      setStepData({ ...stepData, linktree: e.target.value });
    }
    if (type === "message") {
      setStepData({ ...stepData, message: e.target.value });
    }
  };

  const handleForm = (e) => {
    e.preventDefault();

    // set data to context
    changeStartData({ ...startData, contactData: stepData });

    // gettting date
    const date = new Date();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    let currentDate = `${day}-${month}-${year}`;

    // grab details
    const data = { ...startData, contactData: stepData, date: currentDate };
    console.log(data);

    // send email

    const url = `${process.env.NEXT_PUBLIC_SITE_DOMAIN}/api/start`;
    let config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    // loading
    setIsLoading(true);
    axios
      .post(url, { data: data }, config)
      .then(function (response) {
        console.log(response);
        // if error log error on screen
        if (response.data.code === "bad") {
          notif("Something went wrong, please retry!");
          setIsLoading(false);
        }

        // redirect to thank you if all good
        if (response.data.code === "ok") {
          setIsLoading(false);
          notif("Sent successfully!");
          // redirect
          router.push("/thank-you");
        }
      })
      .catch(function (error) {
        console.log(error);
        notif("Something went wrong, please retry!");
        setIsLoading(false);
      });
  };

  return (
    <>
      {data && (
        <div className="step-form md:max-w-7xl xl:max-w-screen-xl mx-auto px-5 py-5 flex items-center justify-between md:px-10 xl:px-5">
          <form onSubmit={handleForm}>
            <div className="form-elm">
              <h2>Your details</h2>
              <div className="input-group">
                <div>
                  <AiOutlineUser />
                </div>
                <input
                  type="text"
                  placeholder="First name"
                  className="input input-bordered w-full outline"
                  value={stepData.firstname}
                  onChange={(e) => updateData(e, "firstname")}
                  required
                />
              </div>

              <div className="input-group">
                <div>
                  <AiOutlineUser />
                </div>
                <input
                  type="text"
                  placeholder="Last name"
                  className="input input-bordered w-full outline"
                  value={stepData.lastname}
                  onChange={(e) => updateData(e, "lastname")}
                  required
                />
              </div>

              <div className="input-group">
                <div>
                  <AiOutlineLink />
                </div>
                <input
                  type="text"
                  placeholder="Linktree"
                  className="input input-bordered w-full outline"
                  value={stepData.linktree}
                  onChange={(e) => updateData(e, "linktree")}
                />
              </div>

              <div className="step2-details last-input">
                <h2>
                  Leave us a message <span>optional</span>{" "}
                </h2>
                <textarea
                  className="textarea textarea-bordered w-full"
                  placeholder="Message"
                  value={stepData.message}
                  onChange={(e) => updateData(e, "message")}
                ></textarea>
              </div>
            </div>

            <div className="btn-group-form">
              <label className="btn" onClick={() => changeData(false)}>
                previous
              </label>

              {isLoading ? (
                <button className="btn btn-primary loading">
                  Submiting...
                </button>
              ) : (
                <button className="btn btn-primary">Submit</button>
              )}
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default Step2;
