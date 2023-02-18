import { motion } from "framer-motion";

const Proof = () => {
  return (
    <div className="proof-wraper">
      <div className=" md:max-w-7xl xl:max-w-screen-xl mx-auto px-5 py-5">
        <h2 className="head">
          Industry experts<span>.</span>
        </h2>

        <div className="proof-container">
          <motion.div
            className="elm"
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <img src="/static/img/pro2.png" />
            <h2>Google Legal</h2>
            <p>
              Our experience processing legal removals and developing guidelines
              and policies at Google gives us in-depth insider skills and
              knowledge of the processes and procedures for removing copyrighted
              content from websites.
            </p>
          </motion.div>
          <motion.div
            className="elm"
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <img src="/static/img/pro1.png" />
            <h2>Licensed California Attorneys</h2>
            <p>
              At Takedownly we are licensed attorneys in California, meaning
              that our legal expertise is backed by the authority of the state
              bar. This allows us to send powerful DMCA takedown notices and
              cease and desist letters that carry the weight of legal authority,
              ensuring that infringing websites take our requests seriously.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Proof;
