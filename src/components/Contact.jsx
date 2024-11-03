import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = React.memo(() => {
  useEffect(() => {
    // Initialize EmailJS only once
    emailjs.init("Fdw9Lui_H7KZO3dgw");
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();

    // Simple validation
    if (!name || !email || !message) {
      toast.error("Please fill out all fields.");
      return;
    }

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
      console.log("Message sent successfully!", response.status, response.text);

      // Show success toast and clear form
      toast.success("Your message has been sent!", { autoClose: 5000 });
      form.reset();
    } catch (error) {
      console.error("Message failed to send:", error);
      toast.error("Failed to send message. Please try again later.", { autoClose: 5000 });
    }
  };

  return (
    <section className="py-16 lg:section" id="contact">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          {/* Text */}
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView="show"
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

          {/* Form */}
          <motion.form
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.3 }}
            onSubmit={handleSubmit}
            className="flex-1 border rounded-2xl flex flex-col gap-y-6 pb-24 p-6 items-start"
          >
            <input
              className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all"
              type="text"
              name="name"
              placeholder="Your name"
              aria-label="Your name"
            />
            <input
              className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all"
              type="email"
              name="email"
              placeholder="Your email"
              aria-label="Your email"
            />
            <textarea
              className="bg-transparent border-b py-12 outline-none w-full placeholder:text-white focus:border-accent transition-all mb-12 resize-none"
              name="message"
              placeholder="Your message"
              aria-label="Your message"
            ></textarea>
            <button type="submit" className="btn btn-lg">
              Send message
            </button>
          </motion.form>
        </div>
      </div>
      {/* Toast Container */}
      <ToastContainer />
    </section>
  );
});

export default Contact;
