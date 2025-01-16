import { useState } from "react";
import productMain from "../assets/category/p1-main.png";
import productWedding from "../assets/category/p2-wedding.png";
import productMoney from "../assets/category/p3-money.png";
import productSingleVase from "../assets/category/p4-singlevas.png";
import productMedium from "../assets/category/p5-medium.png";
import productSimple from "../assets/category/p6-simple.png";
import productLarge from "../assets/category/p7-largegiant.png";
import serviceMain from "../assets/category/s1-main.png";
import serviceRakit from "../assets/category/s2-consult.png";
import serviceDecor from "../assets/category/s3-decor.png";
import serviceDelivery from "../assets/category/s4-rakit.png";
import serviceConsult from "../assets/category/s5-custom.png";
import serviceMaintenance from "../assets/category/s6-kirim.png";
import serviceCustom from "../assets/category/s7-rawat.png";

import arrow2 from "../assets/icons/arrow2.svg";

interface Item {
  id: number;
  itemImage: string;
  alt: string;
  title: string;
}

interface CategoryType {
  id: number;
  name: string;
  mainImage: string;
  desc: string;
  item: Item[];
}

const Categories: CategoryType[] = [
  {
    id: 1,
    name: "Product",
    mainImage: productMain,
    desc: "ini merupakan kategori produk kami, ganti ke services untuk mengakses layanan dalam bentuk jasa yang kami miliki.",
    item: [
      {
        id: 1,
        itemImage: productWedding,
        alt: "Product Wedding",
        title: "Wedding Bouquet",
      },
      {
        id: 2,
        itemImage: productMoney,
        alt: "Product Money",
        title: "Money",
      },
      {
        id: 3,
        itemImage: productSingleVase,
        alt: "Product Single Vase",
        title: "Single & Vas",
      },
      {
        id: 4,
        itemImage: productMedium,
        alt: "Product Medium",
        title: "Medium",
      },
      {
        id: 5,
        itemImage: productSimple,
        alt: "Product Simple",
        title: "Simple",
      },
      {
        id: 6,
        itemImage: productLarge,
        alt: "Product Large",
        title: "Large & Giant",
      },
    ],
  },
  {
    id: 2,
    name: "Services",
    mainImage: serviceMain,
    desc: "Ini merupakan kategori layanan kami, ganti ke product untuk mengakses produk yang kami miliki.",
    item: [
      {
        id: 1,
        itemImage: serviceConsult,
        alt: "Konsultasi Desain",
        title: "Konsultasi Desain",
      },
      {
        id: 2,
        itemImage: serviceDecor,
        alt: "Dekorasi Acara",
        title: "Dekorasi Acara",
      },
      {
        id: 3,
        itemImage: serviceRakit,
        alt: "Rakit Bunga",
        title: "Rakit Bunga",
      },
      {
        id: 4,
        itemImage: serviceCustom,
        alt: "Custom Buket",
        title: "Custom Buket",
      },
      {
        id: 5,
        itemImage: serviceDelivery,
        alt: "Kirim Bunga",
        title: "Kirim Bunga",
      },
      {
        id: 6,
        itemImage: serviceMaintenance,
        alt: "Perawatan Bunga",
        title: "Perawatan Bunga",
      },
    ],
  },
];

const Category = () => {
  const [selectedCategory, setSelectedCategory] = useState("Product");

  const categoryMain = Categories.find(
    (category) => category.name === selectedCategory
  );

  const handleCategoryClick = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCategory(e.target.value);
  };

  return (
    <div id="services" className="container py-12">
      <div className="flex justify-center gap-6 mb-12">
        <h2 className="font-head font-bold text-4xl">Category</h2>
        <div className="mt-1">
          <select
            className=" p-2 rounded text-lg"
            value={selectedCategory}
            onChange={handleCategoryClick}
          >
            <option value="Product">Products</option>
            <option value="Services">Services</option>
          </select>
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 auto-rows-[180px]">
        <div className="row-span-2 col-span-2 rounded-2xl overflow-hidden relative flex items-end">
          <img
            src={categoryMain?.mainImage}
            alt={categoryMain?.name}
            className="w-full object-cover h-full"
          />
          <div className="backdrop-blur-sm absolute max-w-80 bg-black/10 rounded-2xl px-6 pt-4 pb-8 mb-7 ms-7 space-y-3 border border-gray-300/30">
            <h2 className="font-head font-extrabold text-white text-lg">
              {categoryMain?.name}
            </h2>
            <p className="text-sm text-white">{categoryMain?.desc}</p>
          </div>
          <div className="h-16 w-16 bg-white absolute bottom-0 right-0 rounded-tl-2xl flex items-center justify-center">
            <img
              src={arrow2}
              alt=""
              className="w-10 h-10 text-white rotate-90 md:rotate-0"
            />
          </div>
        </div>
        <div className="col-span-2 rounded-2xl overflow-hidden relative flex justify-center items-end">
          <img
            src={categoryMain?.item[0].itemImage}
            alt=""
            className="w-full object-cover h-full"
          />
          <div className="backdrop-blur-sm absolute w-11/12 bg-black/10 rounded-2xl px-6 py-2 mb-3 space-y-3 border border-gray-300/30">
            <h2 className="font-head font-extrabold text-white text-lg">
              {categoryMain?.item[0].title}
            </h2>
          </div>
        </div>
        <div className="rounded-2xl overflow-hidden relative flex justify-center items-end">
          <img
            src={categoryMain?.item[1].itemImage}
            alt=""
            className="w-full object-cover h-full"
          />
          <div className="backdrop-blur-sm absolute w-11/12 bg-black/10 rounded-2xl px-6 py-2 mb-3 space-y-3 border border-gray-300/30">
            <h2 className="font-head font-extrabold text-white text-lg text-center">
              {categoryMain?.item[1].title}
            </h2>
          </div>
        </div>
        <div className="rounded-2xl overflow-hidden relative flex justify-center items-end">
          <img
            src={categoryMain?.item[2].itemImage}
            alt=""
            className="w-full object-cover h-full"
          />
          <div className="backdrop-blur-sm absolute w-11/12 bg-black/10 rounded-2xl px-6 py-2 mb-3 space-y-3 border border-gray-300/30">
            <h2 className="font-head font-extrabold text-white text-lg text-center">
              {categoryMain?.item[2].title}
            </h2>
          </div>
        </div>
        <div className="rounded-2xl overflow-hidden relative flex justify-center items-end">
          <img
            src={categoryMain?.item[3].itemImage}
            alt=""
            className="w-full object-cover h-full"
          />
          <div className="backdrop-blur-sm absolute w-11/12 bg-black/10 rounded-2xl px-6 py-2 mb-3 space-y-3 border border-gray-300/30">
            <h2 className="font-head font-extrabold text-white text-lg text-center">
              {categoryMain?.item[3].title}
            </h2>
          </div>
        </div>
        <div className="rounded-2xl overflow-hidden relative flex justify-center items-end">
          <img
            src={categoryMain?.item[4].itemImage}
            alt=""
            className="w-full object-cover h-full"
          />
          <div className="backdrop-blur-sm absolute w-11/12 bg-black/10 rounded-2xl px-6 py-2 mb-3 space-y-3 border border-gray-300/30">
            <h2 className="font-head font-extrabold text-white text-lg text-center">
              {categoryMain?.item[4].title}
            </h2>
          </div>
        </div>
        <div className="col-span-2 rounded-2xl overflow-hidden relative flex justify-center items-end">
          <img
            src={categoryMain?.item[5].itemImage}
            alt=""
            className="w-full object-cover h-full"
          />
          <div className="backdrop-blur-sm absolute w-11/12 bg-black/10 rounded-2xl px-6 py-2 mb-3 space-y-3 border border-gray-300/30">
            <h2 className="font-head font-extrabold text-white text-lg text-right">
              {categoryMain?.item[5].title}
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
