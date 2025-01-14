import star from "../../assets/icons/star.svg";
import starFill from "../../assets/icons/star-fill.svg";

interface StarRatingProps {
  rating: number;
}

const StarRating = ({ rating }: StarRatingProps) => {
  const stars = [];
  for (let i = 0; i < 5; i++) {
    stars.push(
      i < rating ? <img key={i} src={starFill} /> : <img key={i} src={star} />
    );
  }
  return <div className="flex">{stars}</div>;
};

export default StarRating;
