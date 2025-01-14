import { OfferedCardType } from "./Offered";
import heart from "../assets/icons/heart.svg";
import heartFilled from "../assets/icons/heart-fill.svg";

interface OfferedProps {
  offeredCard: OfferedCardType;
  toggleFavorite: (id: number) => void;
}

const OfferedCard = ({ offeredCard, toggleFavorite }: OfferedProps) => {
  return (
    <div className="flex flex-col bg-white rounded-2xl overflow-hidden max-w-[186px] p-2.5 space-y-3 shadow-xl border border-gray-300">
      <div className="relative">
        <img
          src={offeredCard.image}
          alt="renata"
          className="w-full h-[164px] object-cover rounded-xl"
        />
        <div className="backdrop-blur-sm absolute w-8 h-8 bg-white/10 rounded-full border right-1.5 top-1.5 flex items-center justify-center cursor-pointer">
          <img
            src={offeredCard.isFavorite ? heartFilled : heart}
            alt="heart"
            onClick={() => toggleFavorite(offeredCard.id)}
            className="transition-transform duration-300 ease-in-out transform hover:scale-110"
          />
        </div>
      </div>
      <div className="pb-4">
        <h2 className="font-medium">{offeredCard.name}</h2>
        <p className=" text-gray-400">{offeredCard.price}</p>
      </div>
    </div>
  );
};

export default OfferedCard;
