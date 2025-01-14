import HeroImg from "../assets/hero.png";

const Hero = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${HeroImg})`,
      }}
      className="bg-cover bg-center w-full min-h-screen flex flex-col items-center justify-center text-white"
    >
      <div className="container flex justify-end">
        <div className="lg:w-1/2 xl:w-1/4 space-y-4">
          <h1 className="text-7xl font-head font-extrabold leading-tight bg-gradient-to-b from-white from-70% to-[#182405] bg-clip-text text-transparent mt-8 md:mt-0">
            Lupy Florist
          </h1>
          <h2 className="text-2xl font-medium">Feel the Bloom</h2>
          <p className="text-sm leading-5">
            Lupy Florist adalah perusahaan yang menyediakan layanan produk
            rangkaian bunga, seperti bouquet, bunga vas, dan lainnya. Kami
            menawarkan bunga segar potong, dried flowers, preserved flowers,
            serta bunga lokal dan impor untuk memenuhi kebutuhan pelanggan.
            Sesuai komitmen & tujuan kami untuk memberikan yang terbaik bagi
            pelanggan.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
