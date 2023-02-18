// react
import { useState, useContext } from "react";

// context
import StartFormContext from "../../../contexts/StartFormContext";
import StartContext from "../../../contexts/StartContext";

// icons
import { MdAlternateEmail, MdOutlineEmail } from "react-icons/md";

const Step1 = () => {
  // context
  const { data, changeData } = useContext(StartFormContext);
  const { startData, changeStartData } = useContext(StartContext);

  const [stepData, setStepData] = useState({
    email: "",
    username: "",
  });
  const [platformData, setPlatformData] = useState({
    onlyfans: false,
    fansly: false,
    loyalFans: false,
    pocketStars: false,
    admireme: false,
    manyvids: false,
    fanvue: false,
    chaturbate: false,
    stripchat: false,
    myfreecams: false,
    patreon: false,
    other: false,
  });

  // update data onchange from form
  const updateData = (e, type) => {
    // platformData
    if (type === "onlyfans") {
      setPlatformData({ ...platformData, onlyfans: !platformData.onlyfans });
    }
    if (type === "fansly") {
      setPlatformData({ ...platformData, fansly: !platformData.fansly });
    }
    if (type === "loyalFans") {
      setPlatformData({ ...platformData, loyalFans: !platformData.loyalFans });
    }
    if (type === "pocketStars") {
      setPlatformData({
        ...platformData,
        pocketStars: !platformData.pocketStars,
      });
    }
    if (type === "admireme") {
      setPlatformData({ ...platformData, admireme: !platformData.admireme });
    }
    if (type === "manyvids") {
      setPlatformData({ ...platformData, manyvids: !platformData.manyvids });
    }
    if (type === "fanvue") {
      setPlatformData({ ...platformData, fanvue: !platformData.fanvue });
    }
    if (type === "chaturbate") {
      setPlatformData({
        ...platformData,
        chaturbate: !platformData.chaturbate,
      });
    }
    if (type === "stripchat") {
      setPlatformData({ ...platformData, stripchat: !platformData.stripchat });
    }
    if (type === "myfreecams") {
      setPlatformData({
        ...platformData,
        myfreecams: !platformData.myfreecams,
      });
    }
    if (type === "patreon") {
      setPlatformData({ ...platformData, patreon: !platformData.patreon });
    }
    if (type === "other") {
      setPlatformData({ ...platformData, other: !platformData.other });
    }
    // stepData
    if (type === "username") {
      setStepData({ ...stepData, username: e.target.value });
    }
    if (type === "email") {
      setStepData({ ...stepData, email: e.target.value });
    }
  };

  const handleForm = (e) => {
    e.preventDefault();

    console.log({ platformData, stepData });

    // set data to context
    changeStartData({ platformData, stepData });

    // if all validations are good, go to next step
    changeData(true);
  };

  return (
    <>
      {!data && (
        <div className="step-form md:max-w-7xl xl:max-w-screen-xl mx-auto px-5 py-5 flex items-center justify-between md:px-10 xl:px-5">
          <form onSubmit={handleForm}>
            <div className="form-elm">
              <h2>Choose your main platform(s)</h2>

              <div className="step-inputs">
                <div className="btn-input">
                  <input
                    type="checkbox"
                    onChange={(e) => updateData(e, "onlyfans")}
                  />
                  <button
                    className={
                      platformData.onlyfans
                        ? "btn btn-outline btn-primary w-full"
                        : "btn btn-outline w-full"
                    }
                  >
                    <h5 className="h-6 w-6">a</h5>
                    Onlyfans
                  </button>
                </div>
                <div className="btn-input">
                  <input
                    type="checkbox"
                    onChange={(e) => updateData(e, "fansly")}
                  />
                  <button
                    className={
                      platformData.fansly
                        ? "btn btn-outline btn-primary w-full"
                        : "btn btn-outline w-full"
                    }
                  >
                    <h5 className="h-6 w-6">b</h5>
                    Fansly
                  </button>
                </div>
                <div className="btn-input">
                  <input
                    type="checkbox"
                    onChange={(e) => updateData(e, "loyalFans")}
                  />
                  <button
                    className={
                      platformData.loyalFans
                        ? "btn btn-outline btn-primary w-full"
                        : "btn btn-outline w-full"
                    }
                  >
                    <h5 className="h-6 w-6">c</h5>
                    LoyalFans
                  </button>
                </div>
                <div className="btn-input">
                  <input
                    type="checkbox"
                    onChange={(e) => updateData(e, "pocketStars")}
                  />
                  <button
                    className={
                      platformData.pocketStars
                        ? "btn btn-outline btn-primary w-full"
                        : "btn btn-outline w-full"
                    }
                  >
                    <h5 className="h-6 w-6">d</h5>
                    PocketStars
                  </button>
                </div>
                <div className="btn-input">
                  <input
                    type="checkbox"
                    onChange={(e) => updateData(e, "admireme")}
                  />
                  <button
                    className={
                      platformData.admireme
                        ? "btn btn-outline btn-primary w-full"
                        : "btn btn-outline w-full"
                    }
                  >
                    <h5 className="h-6 w-6">e</h5>
                    Admireme.Vip
                  </button>
                </div>
                <div className="btn-input">
                  <input
                    type="checkbox"
                    onChange={(e) => updateData(e, "manyvids")}
                  />
                  <button
                    className={
                      platformData.manyvids
                        ? "btn btn-outline btn-primary w-full"
                        : "btn btn-outline w-full"
                    }
                  >
                    <h5 className="h-6 w-6">f</h5>
                    Manyvids
                  </button>
                </div>
                <div className="btn-input">
                  <input
                    type="checkbox"
                    onChange={(e) => updateData(e, "fanvue")}
                  />
                  <button
                    className={
                      platformData.fanvue
                        ? "btn btn-outline btn-primary w-full"
                        : "btn btn-outline w-full"
                    }
                  >
                    <h5 className="h-6 w-6">g</h5>
                    Fanvue
                  </button>
                </div>
                <div className="btn-input">
                  <input
                    type="checkbox"
                    onChange={(e) => updateData(e, "chaturbate")}
                  />
                  <button
                    className={
                      platformData.chaturbate
                        ? "btn btn-outline btn-primary w-full"
                        : "btn btn-outline w-full"
                    }
                  >
                    <h5 className="h-6 w-6">h</h5>
                    Chaturbate
                  </button>
                </div>
                <div className="btn-input">
                  <input
                    type="checkbox"
                    onChange={(e) => updateData(e, "stripchat")}
                  />
                  <button
                    className={
                      platformData.stripchat
                        ? "btn btn-outline btn-primary w-full"
                        : "btn btn-outline w-full"
                    }
                  >
                    <h5 className="h-6 w-6">i</h5>
                    Stripchat
                  </button>
                </div>
                <div className="btn-input">
                  <input
                    type="checkbox"
                    onChange={(e) => updateData(e, "myfreecams")}
                  />
                  <button
                    className={
                      platformData.myfreecams
                        ? "btn btn-outline btn-primary w-full"
                        : "btn btn-outline w-full"
                    }
                  >
                    <h5 className="h-6 w-6">j</h5>
                    Myfreecams
                  </button>
                </div>
                <div className="btn-input">
                  <input
                    type="checkbox"
                    onChange={(e) => updateData(e, "patreon")}
                  />
                  <button
                    className={
                      platformData.patreon
                        ? "btn btn-outline btn-primary w-full"
                        : "btn btn-outline w-full"
                    }
                  >
                    <h5 className="h-6 w-6">k</h5>
                    Patreon
                  </button>
                </div>
                <div className="btn-input">
                  <input
                    type="checkbox"
                    onChange={(e) => updateData(e, "other")}
                  />
                  <button
                    className={
                      platformData.other
                        ? "btn btn-outline btn-primary w-full"
                        : "btn btn-outline w-full"
                    }
                  >
                    <h5 className="h-6 w-6">l</h5>
                    Other
                  </button>
                </div>
              </div>
            </div>

            <div className="form-elm">
              <h2>Contact Info</h2>
              <div className="input-group">
                <div>
                  <MdAlternateEmail />
                </div>
                <input
                  type="text"
                  placeholder="Username"
                  className="input input-bordered w-full outline"
                  value={stepData.username}
                  onChange={(e) => updateData(e, "username")}
                  required
                />
              </div>
              <div className="input-group">
                <div>
                  <MdOutlineEmail />
                </div>
                <input
                  type="email"
                  placeholder="Email"
                  className="input input-bordered w-full outline"
                  value={stepData.email}
                  onChange={(e) => updateData(e, "email")}
                  required
                />
              </div>
            </div>
            <button className="btn btn-primary">Next</button>
          </form>
        </div>
      )}
    </>
  );
};

export default Step1;
