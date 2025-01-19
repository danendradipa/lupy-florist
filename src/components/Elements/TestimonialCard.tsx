import StarRating from "./StarRating";

interface Testimonial {
  id: number;
  name: string;
  type: string;
  image: string;
  rating: number;
  time: string;
  text: string;
}

interface TestimonialProps {
  testimonial: Testimonial;
}

const TestimonialCard = ({ testimonial }: TestimonialProps) => {
  return (
    <div className=" border border-gray-300 pt-6 py-12 px-8 rounded-2xl shadow-lg">
      <div className="flex flex-col gap-12">
        <div className="flex gap-7 items-center">
          <img
            src={testimonial.image}
            alt=""
            className="h-20 w-20 rounded-full object-cover"
          />
          <div className="flex flex-col gap-2">
            <div className="space-y-1">
              <p className="font-head font-bold text-lg">{testimonial.name}</p>
              <p className=" text-[12px] text-gray-500/80">
                {testimonial.type}
                <span className=" ms-2 me-2">&#8226;</span> {testimonial.time}
              </p>
            </div>
            <StarRating rating={testimonial.rating} />
          </div>
        </div>
        <p>
          {testimonial.text}
        </p>
      </div>
    </div>
  );
};

export default TestimonialCard;
