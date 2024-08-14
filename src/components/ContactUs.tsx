import React from "react";

export const ContactUs: React.FC = () => {
  return (
    <section id="contact-us" className="contact-us min-h-screen pb-12 pt-20 mb-20">
      <div className="md:max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-white mb-6">
          <span className="bg-clip-text bg-gradient-to-r from-teal-400 to-red-500 text-transparent font-bold">
            Contact
            <span className="bg-clip-text bg-gradient-to-r from-red-500 to-orange-400 text-transparent">Us</span>
          </span>
        </h2>
        <p className="text-xl text-center text-gray-300 mb-12">
          If you have any questions or need more information, feel free to reach out to us through the form below.
        </p>
        <div className="max-w-xl mx-auto p-8 rounded-lg inside-neu inside-neu-hover transition-all hover:scale-[0.985]">
          <form> 
            <div className="mb-6 flex flex-col justify-center items-center">
              <label htmlFor="name" className="w-6/12 h-10 flex items-center justify-center font-semibold inside-neu-input inside-neu-focus text-white/80">Name</label>
              <input type="text" id="name" className="w-full px-3 py-2 main-border rounded-md focus:outline-none inside-neu-input inside-neu-focus text-white/60" placeholder="Your Name" />
            </div>

            <div className="mb-6 flex flex-col justify-center items-center">
              <label htmlFor="email" className="w-6/12 h-10 flex items-center justify-center font-semibold inside-neu-input inside-neu-focus text-white/80">Email</label>
              <input type="email" id="email" className="w-full px-3 py-2 main-border rounded-md focus:outline-none inside-neu-input inside-neu-focus text-white/60" placeholder="Your Email" />
            </div>
            
            <div className="mb-6 flex flex-col justify-center items-center">
              <label htmlFor="message" className="w-6/12 h-10 flex items-center justify-center font-semibold inside-neu-input inside-neu-focus text-white/80">Message</label>
              <textarea id="message" className="w-full px-3 py-2 main-border rounded-md focus:outline-none inside-neu-input inside-neu-focus text-white/60" rows={5} placeholder="Your Message"></textarea>
            </div>
            <div className="text-center">
              <button type="submit" className="bg-gray-800 px-6 py-2 rounded-md focus:outline-none focus:ring-opacity-75 inside-neu-input inside-neu-focus text-white/90">
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
