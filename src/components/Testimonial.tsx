import TestimonialCard from "./Elements/TestimonialCard";
import avatar1 from "../assets/avatar1.jpg";
import avatar2 from "../assets/avatar2.jpg";
import avatar3 from "../assets/avatar3.jpg";

const testimonials = [
  {
    id: 1,
    name: "Christoper Robin",
    type: "Renata Yellow",
    image: avatar1,
    rating: 5,
    time: "3 hours ago",
    text: "Bunga yang saya beli di Lupy Florist sangat cantik dan segar. Harganya pun terjangkau. Terima kasih Lupy Florist! Saya membeli jenis Renata Yellow dan sangat puas dengan kualitasnya.",
  },
  {
    id: 2,
    name: "Alicia Clark",
    type: "Snow White",
    image: avatar2,
    rating: 4,
    time: "5 hours ago",
    text: "Bunganya bagus, fresh, dan harganya terjangkau. Saya beli Snow White dan sangat puas dengan kualitasnya.",
  },
  {
    id: 3,
    name: "Andrew Garfield",
    type: "Aurora",
    image: avatar3,
    rating: 4,
    time: "5 hours ago",
    text: "Saya membeli jenis Aurora dan sangat puas dengan kualitasnya. Bunganya bagus, fresh, dan harganya terjangkau.",
  },
];

const Testimonial = () => {
  return (
    <div className="container py-14">
      <h2 className="font-head font-bold text-4xl text-center mb-12">
        What they said about Us?
      </h2>
      <div className="grid md:grid-cols-3 gap-8">
        {testimonials.map((testimonial) => (
          <TestimonialCard key={testimonial.id} testimonial={testimonial} />
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
