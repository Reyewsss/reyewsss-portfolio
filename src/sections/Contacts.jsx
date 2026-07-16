import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { motion as m } from "framer-motion";
import { useState } from "react";

function Contacts() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error' | null

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 30,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
        duration: 0.8,
      },
    },
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch("https://formspree.io/f/maqrqlly", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", message: "" });
        console.log("Email sent successfully!");
      } else {
        const errorData = await response.json();
        console.error("Formspree error:", errorData);
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("Network error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <m.div
      className="min-h-screen bg-dark-radial-bottom flex items-center justify-center px-6 py-20 border-b border-white/10 shadow-lg"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="max-w-5xl mx-auto w-full">
        {/* Flex container for side by side layout */}
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Left Side - Text Content */}
          <m.div
            variants={itemVariants}
            className="lg:w-1/2 text-center lg:text-left"
          >
            <h3 className="text-white font-geist text-3xl md:text-4xl font-bold mb-4 scroll">
              Have a Project in Mind?
            </h3>
            <p className="text-white/40 font-geist-mono text-sm mb-8 max-w-lg mx-auto lg:mx-0 scroll">
              Let's collaborate and bring your ideas to life. I'm always open to
              new opportunities and discussions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start scroll">
              <div className="flex items-center gap-3 text-white/60">
                <div className="w-10 h-10 rounded-full bg-green-400/10 flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-green-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <span className="font-geist-mono text-xs">
                  reyesjundillmharcalagahan@gmail.com
                </span>
              </div>
              <div className="flex items-center gap-3 text-white/60">
                <div className="w-10 h-10 rounded-full bg-green-400/10 flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-green-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <span className="font-geist-mono text-xs">Quezon City, PH</span>
              </div>
            </div>
          </m.div>

          {/* Right Side - Contact Form */}
          <m.div variants={itemVariants} className="lg:w-1/2 w-full">
            <form
              onSubmit={handleSubmit}
              className="bg-white/5 backdrop-blur-sm rounded-xl p-6 md:p-8 border border-white/10 scroll"
            >
              <h3 className="text-white font-geist text-lg font-bold mb-6">
                Send Me a Message
              </h3>

              <div className="space-y-4">
                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="text-white/60 font-geist-mono text-xs mb-2 block"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-green-400 transition-colors duration-300 font-geist"
                    placeholder="John Doe"
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="text-white/60 font-geist-mono text-xs mb-2 block"
                  >
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-green-400 transition-colors duration-300 font-geist"
                    placeholder="john@example.com"
                  />
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="text-white/60 font-geist-mono text-xs mb-2 block"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="4"
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-green-400 transition-colors duration-300 font-geist resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full px-6 py-3 rounded-lg transition-all duration-300 font-geist-mono text-sm flex items-center justify-center gap-2 group
                    ${
                      isSubmitting
                        ? "bg-white/10 border border-white/20 text-white/50 cursor-not-allowed"
                        : "bg-green-400/20 border border-green-400 text-white/80 hover:bg-green-400/30"
                    }`}
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                          fill="none"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        />
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <FontAwesomeIcon
                        icon={faPaperPlane}
                        className="text-sm group-hover:translate-x-1 transition-transform duration-300"
                      />
                    </>
                  )}
                </button>

                {/* Status Messages */}
                {submitStatus === "success" && (
                  <div className="mt-4 p-3 bg-green-500/20 border font-geist-mono border-green-400 rounded-lg text-green-400 text-sm">
                    Message sent successfully! I'll get back to you soon.
                  </div>
                )}
                {submitStatus === "error" && (
                  <div className="mt-4 p-3 bg-red-500/20 border border-red-400 rounded-lg text-red-400 text-sm font-geist-mono">
                    Failed to send message. Please try again or email me
                    directly.
                  </div>
                )}
              </div>
            </form>
          </m.div>
        </div>
      </div>
    </m.div>
  );
}

export default Contacts;
