import { useState, useRef } from "react";
import Wave from "../components/Wave";
import { FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { FiPhone } from "react-icons/fi";

const EMAILJS_SERVICE_ID  = "service_ioly9u3";
const EMAILJS_TEMPLATE_ID = "template_i08zyrg";
const EMAILJS_PUBLIC_KEY  = "B2JPPHgWN6l5Rh10o";

function Contact() {
  const formRef = useRef(null);
  const [status, setStatus] = useState("idle"); // idle | sending | success | error
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");

    const form = formRef.current;
    const payload = {
      service_id:  EMAILJS_SERVICE_ID,
      template_id: EMAILJS_TEMPLATE_ID,
      user_id:     EMAILJS_PUBLIC_KEY,
      template_params: {
        from_name:  form.user_name.value,
        from_email: form.user_email.value,
        message:    form.message.value,
      },
    };

    try {
      const res = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        const text = await res.text();
        throw new Error(text || "Failed to send.");
      }
    } catch (err) {
      setStatus("error");
      setErrorMsg(err.message || "Something went wrong. Please try again.");
    }
  };

  return (
    <div className="relative overflow-hidden min-h-screen px-6 py-12">
      {/* Push content above the wave footer */}
      <div className="max-w-4xl mx-auto text-center text-amber-50 pb-40 md:pb-48">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Me</h1>

        <p className="text-lg mb-10">
          Feel free to reach out for collaborations, projects, or just to say hello.
        </p>

        {/* Contact Form */}
        <div className="flex justify-center">
          <div className="bg-white w-full max-w-lg p-8 rounded-3xl shadow-xl">
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
              <input
                type="text"
                name="user_name"
                placeholder="Your Name"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-green-700 text-gray-800"
              />

              <input
                type="email"
                name="user_email"
                placeholder="Your Email"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-green-700 text-gray-800"
              />

              <textarea
                rows="5"
                name="message"
                placeholder="Your Message"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-2xl resize-none focus:outline-none focus:ring-2 focus:ring-green-700 text-gray-800"
              ></textarea>

              {/* Status messages */}
              {status === "success" && (
                <p className="text-green-700 font-medium text-sm">
                  ✅ Message sent successfully! I'll get back to you soon.
                </p>
              )}
              {status === "error" && (
                <p className="text-red-600 font-medium text-sm">
                  ❌ {errorMsg}
                </p>
              )}

              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full bg-green-800 text-white py-3 rounded-2xl font-medium hover:bg-green-900 transition duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {status === "sending" ? "Sending…" : "Send Message"}
              </button>
            </form>
          </div>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center items-center  gap-10 mt-12">
          <a
            href="https://www.linkedin.com/in/ranjit-kumar-a-3a7785335"
            target="_blank"
            rel="noopener noreferrer"
            className="relative z-10 hover:scale-110 transition-all duration-300"
          >
            <FaLinkedin className="w-10 h-10 hover:text-blue-400" />
          </a>

          <a
            href="mailto:ranjitkumarachari5@gmail.com"
            className="relative z-10 hover:scale-110 transition-all duration-300"
          >
            <HiOutlineMail className="w-10 h-10 hover:text-red-400" />
          </a>

          <a
            href="tel:+917892356966"
            className="relative z-10 hover:scale-110 transition-all duration-300"
          >
            <FiPhone className="w-10 h-10 hover:text-green-400" />
          </a>
        </div>
      </div>

      {/* Wave sits at the bottom, behind the icons thanks to pb-40 above */}
      <Wave />
    </div>
  );
}

export default Contact;
