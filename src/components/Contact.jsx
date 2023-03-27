import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import emailjs from "@emailjs/browser";
import { slideIn } from "../utils/motion";

//template_d1686bg
//service_y5i4zsz
//f_rrebR_FfMbUTijz

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  })
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value })
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    emailjs.send("service_y5i4zsz",
      "template_d1686bg",
      {
        from_name: form.name,
        to_name: "Afnan",
        form_email: form.email,
        to_email: "azobayada@gmail.com",
        message: form.message
      },
      "f_rrebR_FfMbUTijz"
    ).then(() => {
      setLoading(false);
      alert("Message Sent Successfully!");

      setForm({
        name: "",
        email: "",
        message: ""
      }), (error) => {
        setLoading(false);
        alert("Something Went Wrong!")
      }
    })
  }
  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl">
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8">
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Name :</span>
            <input type="text"
              name="name"
              onChange={handleChange}
              value={form.name}
              placeholder="Enter Your Name"
              className="bg-tertiary px-6 py-4 placeholder:text-secondary text-white  rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Email :</span>
            <input type="email"
              name="email"
              onChange={handleChange}
              value={form.email}
              placeholder="Enter Your Email"
              className="bg-tertiary px-6 py-4 placeholder:text-secondary text-white  rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Message :</span>
            <textarea rows="7"
              name="message"
              onChange={handleChange}
              value={form.message}
              placeholder="Enter Your Message"
              className="bg-tertiary px-6 py-4 placeholder:text-secondary text-white  rounded-lg outline-none border-none font-medium"
            />
          </label>
          <button type="submit"
            className="bg-tertiary py-3 px-8 w-fit ouline-none font-bold text-white shadow-md shadow-primary rounded-xl">
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]">
        <EarthCanvas />
      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact, "contact")