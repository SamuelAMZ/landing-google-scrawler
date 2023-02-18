import { motion } from "framer-motion";

import {
  BsStarFill,
  BsGoogle,
  BsFacebook,
  BsTwitter,
  BsReddit,
} from "react-icons/bs";
import {
  FaChessPawn,
  FaChessRook,
  FaChessKnight,
  FaChessBishop,
  FaChessQueen,
} from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";

const ReviewCounter = () => {
  return (
    <div className="review-counter">
      <div className="review-counter-wraper md:max-w-7xl xl:max-w-screen-xl mx-auto px-5 py-5">
        {/* big texts */}
        <div className="bigtexts">
          <h2>
            More than <br />
            numbers.
          </h2>
          <h2>
            But we have <br />
            them too.
          </h2>
        </div>

        {/* revews cards */}
        <div className="reviews-cards">
          <motion.div
            className="review-card"
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div>
              <h3>200+</h3>
              <div className="icons-pack stars">
                <BsStarFill />
                <BsStarFill />
                <BsStarFill />
                <BsStarFill />
                <BsStarFill />
              </div>
            </div>
            <p>Positive Reviews</p>
          </motion.div>
          <motion.div
            className="review-card"
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
          >
            <div>
              <h3>182,923</h3>
              <div className="icons-pack chess">
                <FaChessPawn />
                <FaChessRook />
                <FaChessKnight />
                <FaChessBishop />
                <FaChessQueen />
              </div>
            </div>
            <p>Takedowns</p>
          </motion.div>
          <motion.div
            className="review-card"
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <div>
              <h3>1.5M</h3>
              <div className="icons-pack socials">
                <AiFillInstagram />
                <BsFacebook />
                <BsGoogle />
                <BsTwitter />
                <BsReddit />
              </div>
            </div>
            <p>Monitored Media</p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ReviewCounter;
