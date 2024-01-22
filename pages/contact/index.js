import Circles from "/components/Circles";
import React from "react";
import { BsArrowRight } from "react-icons/bs";

import { motion } from "framer-motion";


import { fadeIn } from "../../variants";

const Contact = () => {
  const [info, setInfo] = React.useState({
    name:"",
    email:"",
    subject: "",
    text:"",
  })
   const handleChange = (event)=> {
    const {name, value} = event.target;
    setInfo(prevInfo => {
      return {
        ...prevInfo,
        [name]: value
      }
    })
    console.log(info)
  }
  async function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "1c7997a5-5680-4daf-b0af-a53e89668b7e");
    formData.append("data", info)
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: json
    });
    const result = await response.json();
    if (result.success) {
        console.log(result);
    }
}
  return (
    <div className="h-full bg-primary/30 ">
      <div className="contianer mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full">
        <div className="flex flex-col w-full max-w-[700px]  ">
          <motion.h2
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            animate="show"
            exit={"hidden"}
            className="h2 text-center mb-12 "
          >
           {" Let's "}<span className="text-accent">connect.</span>
          </motion.h2>
          {/* form */}
          <motion.form
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            animate="show"
            exit={"hidden"}
            action=""
            className="flex-1 flex flex-col gap-6 w-full mx-auto  "
            onSubmit={handleSubmit}
          >
            <div className="flex gap-x-6 w-full ">
              <input name="name" type="text" placeholder="name" onChange={handleChange} className="input" />
              <input name="email" type="text" placeholder="email" className="input" onChange={handleChange} />
            </div>
            <input type="text" placeholder="subject" className="input" onChange={handleChange} name="subject" />
            <textarea
              name="text"
              id=""
              onChange={handleChange}
              cols="30"
              rows="10"
              placeholder="message"
              className="textarea"
            ></textarea>
            <button 
            type="submit"
            className="btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group ">
              <span className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500">
                {"Let's "}talk
              </span>
              <BsArrowRight className="-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]  ">
                {" "}
              </BsArrowRight>
            </button>
          </motion.form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
