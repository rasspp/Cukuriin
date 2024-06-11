import React from "react";

export const ContactUs: React.FC = () => {
  return (
    <section id="contact-us" className="contact-us min-h-screen pb-12 pt-20 mb-20">
      <div className="md:max-w-6xl mx-auto text-center">
      <h2 className="text-4xl font-extrabold text-white mb-6">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-blue-500">
                        Hubungi Kami
                    </span>
                </h2>
                <p className="text-xl text-center text-gray-300 mb-12">
          Jika Anda memiliki pertanyaan atau membutuhkan informasi lebih lanjut, jangan ragu untuk menghubungi kami melalui formulir di bawah ini.
        </p>
        <div className="max-w-xl mx-auto p-8 rounded-lg inside-neu inside-neu-hover">
          <form> 
            <div className="mb-6 flex flex-col justify-center items-center">
              <label htmlFor="name" className="w-6/12 h-10 flex items-center justify-center  font-semibold inside-neu-input inside-neu-focus text-white/90">Nama</label>
              <input type="text" id="name" className="w-full px-3 py-2 main-border rounded-md  focus:outline-none inside-neu-input inside-neu-focus text-white" placeholder="Nama Anda" />
            </div>

            <div className="mb-6 flex flex-col justify-center items-center">
              <label htmlFor="email" className="w-6/12 h-10 flex items-center justify-center font-semibold inside-neu-input inside-neu-focus text-white/90">Email</label>
              <input type="email" id="email" className="w-full px-3 py-2 main-border  rounded-md focus:outline-none inside-neu-input inside-neu-focus text-white" placeholder="Email Anda" />
            </div>
            
            <div className="mb-6 flex flex-col justify-center items-center">
              <label htmlFor="message" className="w-6/12 h-10 flex items-center justify-center  font-semibold inside-neu-input inside-neu-focus text-white/90">Pesan</label>
              <textarea id="message" className="w-full px-3 py-2 main-border  rounded-md focus:outline-none  inside-neu-input inside-neu-focus text-white" rows={5} placeholder="Pesan Anda"></textarea>
            </div>
            <div className="text-center">
              <button type="submit" className="bg-gray-800  px-6 py-2 rounded-md  focus:outline-none  focus:ring-opacity-75 inside-neu-input inside-neu-focus text-white/90">
                Kirim
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
