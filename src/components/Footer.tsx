const company = [
  {
    id: 1,
    title: "About Us",
  },
  {
    id: 2,
    title: "Legal Information",
  },
  {
    id: 3,
    title: "Contact Us",
  },
  {
    id: 4,
    title: "Blog",
  },
];

const helpCenter = [
  {
    id: 1,
    title: "Why Us",
  },
  {
    id: 2,
    title: "FAQs",
  },
  {
    id: 3,
    title: "How to Order",
  },
];

const Footer = () => {
  return (
    <div className="pt-16 bg-primary mt-8">
      <div id="contact" className="container">
        <div className="flex justify-between gap-12 flex-wrap">
          <div className="space-y-9">
            <h2 className="text-5xl font-extrabold text-white">Lupy Florist</h2>
            <p className="text-white font-light text-sm max-w-[340px]">
              Pilihan utama Anda untuk semua kebutuhan bunga, menawarkan
              keindahan dan keunikan dalam setiap rangkaian yang kami buat.
            </p>
          </div>
          <div className="">
            <h3 className="text-white font-bold mb-4 font-main text-lg">
              Company
            </h3>
            <ul className="text-white font-light space-y-3">
              {company.map((item) => {
                return (
                  <li key={item.id}>
                    <a className="mb-2">{item.title}</a>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="flex flex-col gap-4 w-[230px]">
            <h3 className="text-white font-bold font-main text-lg">
              Help Center
            </h3>
            <div className="flex gap-4 items-center">
              <ul className="text-white font-light space-y-3">
                {helpCenter.map((item) => {
                  return (
                    <li key={item.id}>
                      <a className="mb-2">{item.title}</a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
          <div className="flex flex-col">
            <h3 className="text-white font-bold font-main text-lg mb-4">
              Kontak
            </h3>
            <div className="space-y-3">
              <p className="font-light text-white">Phone: 1234567890</p>
              <p className="font-light text-white">Email: company@email.com</p>
              <p className="font-light text-white">
                Location: Karangmalang, DIY
              </p>
            </div>
            <div className="flex space-x-4">
              <a href="#" className="text-white">
                <i className="text-xl"></i>
              </a>
              <a href="#" className="text-white">
                <i className="text-xl"></i>
              </a>
              <a href="#" className="text-white">
                <i className="text-xl"></i>
              </a>
              <a href="#" className="text-white">
                <i className="text-xl"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto px-4 py-10 mt-10 text-center border-t border-white">
        <p className="text-white font-main">
          Copyright © {new Date().getFullYear()} Luppy Florits | All rights
          reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
