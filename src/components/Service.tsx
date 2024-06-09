import React from "react";

export const Service: React.FC = () => {
  const childBarber =
    "https://images.unsplash.com/photo-1521490683712-35a1cb235d1c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2hpbGQlMjBiYXJiZXJ8ZW58MHx8MHx8fDA%3D";
  const teenagerBarber =
    "https://images.unsplash.com/photo-1493256338651-d82f7acb2b38?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZXN0ZXRpYyUyMGJhcmJlcnxlbnwwfHwwfHx8MA%3D%3D";
  const adultBarber =
    "https://images.unsplash.com/photo-1590540179852-2110a54f813a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzl8fGVzdGV0aWMlMjBiYXJiZXJ8ZW58MHx8MHx8fDA%3D";

  return (
    <section
      id="service"
      className="service min-h-screen  rounded-sm pb-12 pt-20 bg-gray-800"
    >
      <div className="md:max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-semibold text-white mb-10">
          Pelayanan Kami
        </h2>
        <p className="text-lg text-center text-gray-400 mb-12">
          Kami menawarkan berbagai layanan untuk memenuhi kebutuhan Anda dengan
          kualitas terbaik.
        </p>
        <div className="w-full grid grid-cols-3 justify-center gap-2">
          {/* Card 1 */}
          <div
            className={`mt-10 relative h-64 border inside-neu-input rounded-sm p-6 hover:shadow-lg transition-shadow duration-300`}
          >
            <img
              src={childBarber}
              alt="child-barber"
              className=" grayscale brightness-[13%] absolute top-0 left-0 w-full z-10 shadow-lg"
            />

            <div className="absolute left-0 w-full z-20">
              <h2 className="w-full text-2xl font-semibold text-white mb-2">
                Anak-anak
              </h2>
              <p className="text-gray-300 text-start px-3 ">
                - Potong rambut bergaya{" "}
                <span className="text-blue-300">(Rp 20.000)</span>.
                <br />- Perawatan rambut anak{" "}
                <span className="text-blue-300">(Rp 25.000)</span>.
                <br />- Potong rambut standar{" "}
                <span className="text-blue-300">(Rp 15.000)</span>.
                <br />- 3 cm <span className="text-blue-300">(Rp 10.000)</span>.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div
            className={` relative h-64 border inside-neu-input rounded-sm p-6 hover:shadow-lg transition-shadow duration-300`}
          >
            <img
              src={teenagerBarber}
              alt="child-barber"
              className="grayscale brightness-[30%] absolute top-0 left-0 w-full z-10 shadow-md"
            />

            <div className="absolute left-0 w-full z-20">
              <h2 className="w-full text-2xl font-semibold text-white mb-2">
                Remaja
              </h2>
              <p className="text-gray-300 text-start px-3 ">
                - Hanya samping{" "}
                <span className="text-blue-300">(Rp 15.000)</span>.
                <br />- Potong rambut bergaya{" "}
                <span className="text-blue-300">(Rp 30.000)</span>.
                <br />- Cuci rambut{" "}
                <span className="text-green-500">(gratis)</span>.
                <br />- Perawatan rambut{" "}
                <span className="text-blue-300">(Rp 30.000)</span>.
                <br />- Pomade 1x{" "}
                <span className="text-green-500">(gratis)</span>.
                <br />- Pewarnaan rambut{" "}
                <span className="text-blue-300">(Rp 50.000)</span>.
                <br />- Styling rambut{" "}
                <span className="text-blue-300">(Rp 20.000)</span>.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div
            className={`mt-10 relative h-64 border inside-neu-input rounded-sm p-6 hover:shadow-lg transition-shadow duration-300`}
          >
            <img
              src={adultBarber}
              alt="child-barber"
              className="grayscale brightness-[30%] absolute top-0 left-0 w-full z-10 shadow-md"
            />

            <div className="absolute left-0 w-full z-20">
              <h2 className="w-full text-2xl font-semibold text-white mb-2">
                Dewasa
              </h2>
              <p className="text-gray-300 text-start px-3 ">
                - Potong rambut bergaya{" "}
                <span className="text-blue-300">(Rp 35.000)</span>.
                <br />- Perawatan kulit kepala{" "}
                <span className="text-blue-300">(Rp 30.000)</span>.
                <br />- Pijat kepala{" "}
                <span className="text-green-500">(gratis)</span>.
                <br />- Cuci rambut{" "}
                <span className="text-green-500">(gratis)</span>.
                <br />- Shaving{" "}
                <span className="text-blue-300">(Rp 25.000)</span>.
                <br />- Pewarnaan rambut{" "}
                <span className="text-blue-300">(Rp 40.000)</span>.
                <br />- Botak Licin{" "}
                <span className="text-blue-300">(Rp 50.000)</span>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;
