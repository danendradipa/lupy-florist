import productMain from "../assets/category/p1-main.png";
import productWedding from "../assets/category/p2-wedding.png";
import productMoney from "../assets/category/p3-money.png";
import productSingleVase from "../assets/category/p4-singlevas.png";
import productMedium from "../assets/category/p5-medium.png";
import productSimple from "../assets/category/p6-simple.png";
import productLarge from "../assets/category/p7-largegiant.png";
import arrow2 from "../assets/icons/arrow2.svg";

const Category = () => {
  return (
    <div id="services" className="container py-12">
      <div className="flex justify-center gap-6 mb-12">
        <h2 className="font-head font-bold text-4xl">Category</h2>
        <div className="mt-1">
          <select className=" p-2 rounded text-lg" value="Product">
            <option value="Product">Products</option>
            <option value="Services">Services</option>
          </select>
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 auto-rows-[180px]">
        <div className="row-span-2 col-span-2 rounded-2xl overflow-hidden relative flex items-end">
          <img
            src={productMain}
            alt=""
            className="w-full object-cover h-full"
          />
          <div className="backdrop-blur-sm absolute max-w-80 bg-black/10 rounded-2xl px-6 pt-4 pb-8 mb-7 ms-7 space-y-3 border border-gray-300/30">
            <h2 className="font-head font-extrabold text-white text-lg">Product</h2>
            <p className="text-sm text-white">
              ini merupakan kategori produk kami, ganti ke services untuk
              mengakses layanan dalam bentuk jasa yang kami miliki.
            </p>
          </div>
          <div className="h-16 w-16 bg-white absolute bottom-0 right-0 rounded-tl-2xl flex items-center justify-center">
            <img src={arrow2} alt="" className="w-10 h-10 text-white rotate-90 md:rotate-0" />
          </div>
        </div>
        <div className="col-span-2 rounded-2xl overflow-hidden relative flex justify-center items-end">
          <img
            src={productWedding}
            alt=""
            className="w-full object-cover h-full"
          />
          <div className="backdrop-blur-sm absolute w-11/12 bg-black/10 rounded-2xl px-6 py-2 mb-3 space-y-3 border border-gray-300/30">
            <h2 className="font-head font-extrabold text-white text-lg">Wedding Bouquet</h2>
          </div>
        </div>
        <div className="rounded-2xl overflow-hidden relative flex justify-center items-end">
          <img
            src={productMoney}
            alt=""
            className="w-full object-cover h-full"
          />
          <div className="backdrop-blur-sm absolute w-11/12 bg-black/10 rounded-2xl px-6 py-2 mb-3 space-y-3 border border-gray-300/30">
            <h2 className="font-head font-extrabold text-white text-lg text-center">Money</h2>
          </div>
        </div>
        <div className="rounded-2xl overflow-hidden relative flex justify-center items-end">
          <img
            src={productSingleVase}
            alt=""
            className="w-full object-cover h-full"
          />
          <div className="backdrop-blur-sm absolute w-11/12 bg-black/10 rounded-2xl px-6 py-2 mb-3 space-y-3 border border-gray-300/30">
            <h2 className="font-head font-extrabold text-white text-lg text-center">Single & Vas</h2>
          </div>
        </div>
        <div className="rounded-2xl overflow-hidden relative flex justify-center items-end">
          <img
            src={productMedium}
            alt=""
            className="w-full object-cover h-full"
          />
          <div className="backdrop-blur-sm absolute w-11/12 bg-black/10 rounded-2xl px-6 py-2 mb-3 space-y-3 border border-gray-300/30">
            <h2 className="font-head font-extrabold text-white text-lg text-center">Medium</h2>
          </div>
        </div>
        <div className="rounded-2xl overflow-hidden relative flex justify-center items-end">
          <img
            src={productSimple}
            alt=""
            className="w-full object-cover h-full"
          />
          <div className="backdrop-blur-sm absolute w-11/12 bg-black/10 rounded-2xl px-6 py-2 mb-3 space-y-3 border border-gray-300/30">
            <h2 className="font-head font-extrabold text-white text-lg text-center">Simple</h2>
          </div>
        </div>
        <div className="col-span-2 rounded-2xl overflow-hidden relative flex justify-center items-end">
          <img
            src={productLarge}
            alt=""
            className="w-full object-cover h-full"
          />
          <div className="backdrop-blur-sm absolute w-11/12 bg-black/10 rounded-2xl px-6 py-2 mb-3 space-y-3 border border-gray-300/30">
            <h2 className="font-head font-extrabold text-white text-lg text-right">Large & Giant</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
