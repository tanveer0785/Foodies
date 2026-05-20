import MainLayout from "../layouts/MainLayout";
import { useEffect } from "react";

const AboutPage = () => {
  // Scroll Effect
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {/* HERO SECTION */}
      <section className="relative h-[70vh] bg-[url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4')] bg-cover bg-center flex items-center justify-center">
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 text-center text-white px-6">
          <h1 className="text-6xl font-bold mb-6">About Foodies</h1>

          <p className="max-w-2xl mx-auto text-lg text-gray-200">
            Experience delicious food, luxury atmosphere, and unforgettable
            taste with Foodies Restaurant.
          </p>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="py-24 px-6 lg:px-20 bg-white">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          <div className="overflow-hidden rounded-3xl shadow-2xl cursor-pointer">
            <img
              src="https://images.unsplash.com/photo-1552566626-52f8b828add9"
              alt="restaurant"
              className="w-full h-full object-cover hover:scale-110 transition duration-500"
            />
          </div>

          <div>
            <h2 className="text-5xl font-bold mb-6">Our Story</h2>

            <p className="text-gray-600 leading-8 mb-6">
              Foodies Restaurant started with a passion for serving fresh and
              tasty meals. Our mission is to provide high-quality food with
              excellent customer service and a cozy atmosphere.
            </p>

            <p className="text-gray-600 leading-8">
              We believe that food is not just about eating, it’s about creating
              memories with family and friends.
            </p>

            <button className="mt-8 bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg transition cursor-pointer">
              Explore Menu
            </button>
          </div>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section className="py-24 bg-gray-100 px-6">
        <div className="text-center mb-14">
          <h2 className="text-5xl font-bold">Why Choose Us</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              title: "Fresh Food",
              desc: "Daily fresh ingredients and healthy meals.",
            },
            {
              title: "Expert Chefs",
              desc: "Professional chefs with years of experience.",
            },
            {
              title: "Fast Delivery",
              desc: "Quick and safe delivery service.",
            },
            {
              title: "Luxury Dining",
              desc: "Beautiful and relaxing environment.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg text-center hover:-translate-y-2 transition duration-300 cursor-pointer"
            >
              <h3 className="text-2xl font-bold mb-4 text-orange-500">
                {item.title}
              </h3>

              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CHEFS SECTION */}
      <section className="py-24 px-6 bg-white">
        <div className="text-center mb-14">
          <h2 className="text-5xl font-bold">Meet Our Chefs</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {[
            "https://images.unsplash.com/photo-1600891964092-4316c288032e",
            "https://images.unsplash.com/photo-1559339352-11d035aa65de",
            "https://images.unsplash.com/photo-1541544741938-0af808871cc0",
          ].map((chef, index) => (
            <div
              key={index}
              className="bg-gray-100 rounded-3xl overflow-hidden shadow-xl cursor-pointer group"
            >
              <div className="overflow-hidden">
                <img
                  src={chef}
                  alt="chef"
                  className="h-96 w-full object-cover group-hover:scale-110 transition duration-500"
                />
              </div>

              <div className="p-6 text-center">
                <h3 className="text-3xl font-bold">Master Chef</h3>

                <p className="text-gray-500 mt-2">
                  International Cuisine Specialist
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* STATS SECTION */}
      <section className="py-24 bg-orange-500 text-white">
        <div className="grid md:grid-cols-4 gap-10 text-center px-6">
          {[
            {
              number: "15+",
              title: "Years Experience",
            },
            {
              number: "50+",
              title: "Food Items",
            },
            {
              number: "20k+",
              title: "Happy Customers",
            },
            {
              number: "10+",
              title: "Professional Chefs",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="cursor-pointer hover:scale-105 transition duration-300"
            >
              <h2 className="text-6xl font-bold mb-3">{item.number}</h2>

              <p className="text-xl">{item.title}</p>
            </div>
          ))}
        </div>
      </section>

      {/* GALLERY SECTION */}
      <section className="py-24 px-6 bg-gray-100">
        <div className="text-center mb-14">
          <h2 className="text-5xl font-bold">Restaurant Gallery</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4",
            "https://images.unsplash.com/photo-1559339352-11d035aa65de",
            "https://images.unsplash.com/photo-1552566626-52f8b828add9",
            "https://images.unsplash.com/photo-1528605248644-14dd04022da1",
            "https://images.unsplash.com/photo-1414235077428-338989a2e8c0",
            "https://images.unsplash.com/photo-1504674900247-0877df9cc836",
          ].map((image, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-3xl shadow-xl cursor-pointer group"
            >
              <img
                src={image}
                alt="gallery"
                className="h-80 w-full object-cover group-hover:scale-110 transition duration-500"
              />
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default AboutPage;
