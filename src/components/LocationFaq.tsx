import FaqList from "./FaqList";

const LocationFaq = () => {
  return (
    <div className="container py-14">
      <div className="grid md:grid-cols-2 gap-20">
        <div className="flex flex-col order-last md:order-first">
          <h2 className="font-head font-bold text-4xl text-center mb-12">
            Store Location
          </h2>
          <div className="w-full h-96 overflow-hidden rounded-lg shadow-2xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3953.0651588750807!2d110.3644954109096!3d-7.782916477193762!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a591a4d553bd5%3A0xc0f964003add568b!2sTugu%20Jogja!5e0!3m2!1sid!2sid!4v1736769330424!5m2!1sid!2sid"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
            ></iframe>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <h2 className="font-head font-bold text-4xl text-center mb-12">
            FAQ
          </h2>
          <FaqList />
        </div>
      </div>
    </div>
  );
};

export default LocationFaq;
