import { useState } from "react";
import arrow from "../assets/icons/arrow.svg";
import renata from "../assets/products/renata.png";
import lyla from "../assets/products/lyla.png";
import brigita from "../assets/products/brigita.png";
import snow from "../assets/products/snow.png";
import aurora from "../assets/products/aurora.png";
import flower from "../assets/products/flower.png";
import rangkaiSimple from "../assets/rangkai/rangkai-simple.png";
import rangkaiPremium from "../assets/rangkai/rangkai-premium.png";
import rangkaiExclusive from "../assets/rangkai/rangkai-exclusive.png";
import OfferedCard from "./Elements/OfferedCard";

export interface OfferedCardType {
  id: number;
  name: string;
  price: string;
  image: string;
  isFavorite: boolean;
  category: string;
  type: string;
}

const initialCard: OfferedCardType[] = [
  {
    id: 1,
    name: "Renata Yellow",
    price: "Rp 200.000",
    image: renata,
    isFavorite: false,
    category: "Product",
    type: "Top Seller",
  },
  {
    id: 2,
    name: "lyla",
    price: "Rp 200.000",
    image: lyla,
    isFavorite: false,
    category: "Product",
    type: "Top Seller",
  },
  {
    id: 3,
    name: "Brigita Yellow",
    price: "Rp 200.000",
    image: brigita,
    isFavorite: false,
    category: "Product",
    type: "Top Seller",
  },
  {
    id: 4,
    name: "Snow White",
    price: "Rp 200.000",
    image: snow,
    isFavorite: false,
    category: "Product",
    type: "Maybe You Like",
  },
  {
    id: 5,
    name: "Aurora",
    price: "Rp 200.000",
    image: aurora,
    isFavorite: false,
    category: "Product",
    type: "Promo",
  },
  {
    id: 6,
    name: "Rangkai Simple",
    price: "Rp 200.000",
    image: rangkaiSimple,
    isFavorite: false,
    category: "Services",
    type: "Top Seller",
  },
  {
    id: 7,
    name: "Rangkai Premium",
    price: "Rp 200.000",
    image: rangkaiPremium,
    isFavorite: false,
    category: "Services",
    type: "Maybe You Like",
  },
  {
    id: 8,
    name: "Rangkai Exclusive",
    price: "Rp 200.000",
    image: rangkaiExclusive,
    isFavorite: false,
    category: "Services",
    type: "Promo",
  },
];

const Offered = () => {
  const [offeredCard, setOfferedCard] = useState(initialCard);
  const [type, setType] = useState<string>("Top Seller");
  const [category, setCategory] = useState<string>("All");

  const filteredCard = offeredCard.filter(
    (card) => {
      if (category === "All") {
        return card.type === type;
      } else {
        return card.type === type && card.category === category;
      }
    }
  );

  const handleTypeClick = (typeName: string) => {
    setType(typeName);
  };

  const handleCategoryClick = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCategory(e.target.value);
  };

  const handleFavoriteClick = (id: number) => {
    setOfferedCard((prev) =>
      prev.map((card) =>
        card.id === id ? { ...card, isFavorite: !card.isFavorite } : card
      )
    );
  };

  return (
    <div id="product" className="container py-16 md:py-8">
      <div className="flex flex-wrap gap-10 justify-center mb-12">
        <button
          onClick={() => handleTypeClick("Top Seller")}
          className={`${
            type === "Top Seller" ? "underline font-medium text-primary" : ""
          } font`}
        >
          Top Seller
        </button>
        <button
          onClick={() => handleTypeClick("Maybe You Like")}
          className={`${
            type === "Maybe You Like"
              ? "underline font-medium text-primary"
              : ""
          }`}
        >
          Maybe You Like
        </button>
        <button
          onClick={() => handleTypeClick("Promo")}
          className={`${
            type === "Promo" ? "underline font-medium text-primary" : ""
          }`}
        >
          Promo
        </button>

        <select
          className="p-2 rounded border border-gray-400"
          value={category}
          onChange={handleCategoryClick}
        >
          <option value="All">All</option>
          <option value="Product">Products</option>
          <option value="Services">Services</option>
        </select>
      </div>
      <div className="flex flex-wrap items-center justify-center">
        <div className="bg-primary rounded-xl w-full md:max-w-[300px] flex overflow-hidden py-4">
          <div className="self-center space-y-10 relative left-10 top-8">
            <h2 className="font-head text-white font-bold text-4xl">
              {type}
            </h2>
            <img src={arrow} alt="" className="rotate-90 md:rotate-0" />
          </div>
          <img src={flower} alt="flowerIMG" className="relative left-8" />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-5 -mt-10 md:-ml-8 gap-6 relative">
          {filteredCard.map((card) => (
            <OfferedCard
              key={card.id}
              offeredCard={card}
              toggleFavorite={handleFavoriteClick}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Offered;
