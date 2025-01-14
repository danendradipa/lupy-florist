import wcu1 from "../assets/wcu1.png";
import wcu2 from "../assets/wcu2.png";
import wcu3 from "../assets/wcu3.png";
import wcu4 from "../assets/wcu4.png";

const WhyChooseUs = () => {
  return (
    <div className="container py-14">
      <div className="grid grid-cols-1 md:grid-cols-2 justify-items-end gap-24">
        <div className="flex flex-col gap-9">
          <h2 className="font-head font-bold text-4xl">Why Choose Us?</h2>
          <p className="">
            Lupy Florist adalah pilihan utama Anda untuk semua kebutuhan bunga,
            menawarkan keindahan dan keunikan dalam setiap rangkaian yang kami
            buat. Kami berkomitmen untuk menyediakan bunga segar berkualitas
            tinggi, memastikan setiap
            buket dan dekorasi memiliki daya tarik visual yang luar biasa dan
            ketahanan yang lama.
          </p>
          <div className="flex gap-5 font-semibold ">
            <a href="#">FAQ</a>
            <a href="#">Contact</a>
          </div>
          <button className="self-start">
            <a
              href="#"
              className="bg-primary font-medium text-white px-6 py-3.5 rounded-full hover:bg-green-950 transition-all duration-500 block"
            >
              Discover More
            </a>
          </button>
        </div>
        <div className="grid grid-cols-3 gap-4 auto-rows-[170px]">
          <div className="col-span-2 rounded-2xl rounded-tl-none overflow-hidden">
            <img src={wcu1} alt="" className="w-full h-full object-cover" />
          </div>
          <div className="rounded-2xl rounded-tr-none overflow-hidden">
            <img src={wcu2} alt="" className="w-full h-full object-cover" />
          </div>
          <div className="rounded-2xl rounded-bl-none overflow-hidden">
            <img src={wcu3} alt="" className="w-full h-full object-cover" />
          </div>
          <div className="col-span-2 rounded-2xl rounded-br-none overflow-hidden">
            <img src={wcu4} alt="" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
