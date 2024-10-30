import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();

    emailjs.init("Fdw9Lui_H7KZO3dgw");

    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const message = form.message.value;

    try {
      const response = await emailjs.send(
        "service_ij0gh6r",
        "template_sni5m3m",
        {
          from_name: name,
          from_email: email,
          message: message,
        }
      );
      console.log("SUCCESS!", response.status, response.text);
      
      // Show success toast
      toast.success("Your message has been sent!");
      
      // Clear form fields
      form.reset();
    } catch (error) {
      console.log("FAILED...", error, error.text);
      
      // Show error toast
      toast.error("Failed to send message. Please try again.");
    }
  };

  return (
    <section className="py-16 lg:section" id="contact">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          {/* text */}
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 flex justify-start items-center"
          >
            <div>
              <h4 className="text-xl uppercase text-accent font-medium mb-2 tracking-wide">
                Get in touch
              </h4>
              <h2 className="text-[45px] lg:text-[90px] leading-none mb-12">
                Let's work <br /> together!
              </h2>
            </div>
          </motion.div>
          {/* form */}
          <motion.form
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            onSubmit={handleSubmit}
            className="flex-1 border rounded-2xl flex flex-col gap-y-6 pb-24 p-6 items-start"
          >
            <input
              className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white 
            focus:border-accent transition-all"
              type="text"
              name="name"
              placeholder="Your name"
            />
            <input
              className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white 
            focus:border-accent transition-all"
              type="email"
              name="email"
              placeholder="Your email"
            />
            <textarea
              className="bg-transparent border-b py-12 outline-none w-full placeholder:text-white 
            focus:border-accent transition-all mb-12 resize-none"
              name="message"
              placeholder="Your message"
            ></textarea>
            <button className="btn btn-lg">Send message</button>
          </motion.form>
        </div>
      </div>
      {/* Toast container */}
      <ToastContainer />
    </section>
  );
};

export default Contact;
