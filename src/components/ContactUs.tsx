import React from "react";

export const ContactUs: React.FC = () => {
  return (
    <section id="contact-us" className="contact-us min-h-screen pb-12 pt-20 mb-20">
      <div className="md:max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-semibold text-white mb-10 w-auto h-12 flex justify-center items-center">Hubungi Kami</h2>
          <p className="text-lg text-center text-gray-400 mb-12">
          Jika Anda memiliki pertanyaan atau membutuhkan informasi lebih lanjut, jangan ragu untuk menghubungi kami melalui formulir di bawah ini.
        </p>
        <div className="max-w-xl mx-auto p-8 rounded-lg inside-neu border">
          <form> 
            <div className="mb-6 flex flex-col justify-center items-center">
              <label htmlFor="name" className="w-6/12 h-10 flex items-center justify-center text-white font-semibold inside-neu-input">Nama</label>
              <input type="text" id="name" className="w-full px-3 py-2 border rounded-md text-gray-400 focus:outline-none inside-neu-input" placeholder="Nama Anda" />
            </div>

            <div className="mb-6 flex flex-col justify-center items-center">
              <label htmlFor="email" className="w-6/12 h-10 flex items-center justify-center text-white font-semibold inside-neu-input">Email</label>
              <input type="email" id="email" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none inside-neu-input" placeholder="Email Anda" />
            </div>
            
            <div className="mb-6 flex flex-col justify-center items-center">
              <label htmlFor="message" className="w-6/12 h-10 flex items-center justify-center text-white font-semibold inside-neu-input">Pesan</label>
              <textarea id="message" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none  inside-neu-input" rows={5} placeholder="Pesan Anda"></textarea>
            </div>
            <div className="text-center">
              <button type="submit" className="bg-gray-800 text-white px-6 py-2 rounded-md  focus:outline-none  focus:ring-opacity-75 inside-neu-input">
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
