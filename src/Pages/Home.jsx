import Hero from "../components/Hero";
import About from "../components/About";
import SpecialDishes from "../components/SpecialDishes";

import {
  Star,
  ChefHat,
  Clock3,
  Utensils,
  Users,
  MapPin,
  Phone,
  ArrowRight,
  Sparkles,
} from "lucide-react";

const Home = () => {
  return (
    <div className="overflow-hidden bg-black">
      {/* HERO */}
      <Hero />

      {/* ABOUT */}
      <About />

      {/* SPECIAL DISHES */}
      <SpecialDishes />

      {/* ================= SERVICES SECTION ================= */}
      <section className="py-28 px-6 bg-gradient-to-b from-black to-gray-950 text-white">
        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-20">
            <p className="text-orange-500 font-semibold tracking-[5px] mb-4">
              OUR SERVICES
            </p>

            <h2 className="text-5xl md:text-6xl font-black mb-6">
              Premium Restaurant Services
            </h2>

            <p className="max-w-2xl mx-auto text-gray-400 leading-8">
              Experience luxury dining, fast delivery,
              and world-class chefs in one place.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: ChefHat,
                title: "Expert Chefs",
                desc: "Professional chefs preparing delicious meals.",
              },
              {
                icon: Clock3,
                title: "Fast Delivery",
                desc: "Quick food delivery at your doorstep.",
              },
              {
                icon: Utensils,
                title: "Luxury Dining",
                desc: "Experience premium dining atmosphere.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white/5 border border-white/10 rounded-[35px] p-10 hover:bg-orange-500 transition duration-500 group hover:-translate-y-4 backdrop-blur-xl"
              >
                <div className="w-20 h-20 rounded-3xl bg-orange-500/20 flex items-center justify-center mb-8 group-hover:bg-white/20">
                  <item.icon
                    size={40}
                    className="text-orange-500 group-hover:text-white"
                  />
                </div>

                <h3 className="text-3xl font-bold mb-5">
                  {item.title}
                </h3>

                <p className="text-gray-400 group-hover:text-white leading-8">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= FOOD GALLERY ================= */}
      <section className="py-28 px-6 bg-white">
        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-20">
            <p className="text-orange-500 font-semibold tracking-[5px] mb-4">
              FOOD GALLERY
            </p>

            <h2 className="text-5xl md:text-6xl font-black text-black">
              Delicious Food Collection
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              "https://images.unsplash.com/photo-1504674900247-0877df9cc836",
              "https://images.unsplash.com/photo-1546069901-ba9599a7e63c",
              "https://images.unsplash.com/photo-1551218808-94e220e084d2",
            ].map((img, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-[35px] group cursor-pointer relative"
              >
                <img
                  src={img}
                  alt="food"
                  className="w-full h-[450px] object-cover group-hover:scale-110 transition duration-700"
                />

                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition duration-500 flex items-center justify-center">
                  <button className="bg-orange-500 px-8 py-4 rounded-full text-white font-semibold">
                    View Dish
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= WHY CHOOSE US ================= */}
      <section className="py-28 px-6 bg-gradient-to-b from-gray-950 to-black text-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">

          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1552566626-52f8b828add9"
              alt="restaurant"
              className="rounded-[40px] shadow-2xl"
            />

            <div className="absolute -bottom-10 -right-10 bg-orange-500 rounded-[30px] p-8 shadow-2xl">
              <h3 className="text-4xl font-black">
                15+
              </h3>

              <p className="text-lg">
                Years Experience
              </p>
            </div>
          </div>

          <div>
            <p className="text-orange-500 font-semibold tracking-[5px] mb-4">
              WHY CHOOSE US
            </p>

            <h2 className="text-5xl md:text-6xl font-black mb-8 leading-tight">
              Best Restaurant In Town
            </h2>

            <p className="text-gray-400 leading-8 mb-12 text-lg">
              We provide high-quality food, luxury environment,
              professional chefs, and unforgettable dining
              experience for our valuable customers.
            </p>

            <div className="space-y-6">
              {[
                "Fresh & Organic Ingredients",
                "Professional Master Chefs",
                "Luxury Dining Environment",
                "Fast & Friendly Service",
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-5 bg-white/5 border border-white/10 rounded-2xl p-5 hover:bg-orange-500 transition duration-300"
                >
                  <div className="w-12 h-12 rounded-full bg-orange-500 flex items-center justify-center text-white text-xl font-bold">
                    ✓
                  </div>

                  <p className="text-lg font-medium">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================= TESTIMONIALS ================= */}
      <section className="py-28 bg-black text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-20">
            <p className="text-orange-500 font-semibold tracking-[5px] mb-4">
              TESTIMONIALS
            </p>

            <h2 className="text-5xl md:text-6xl font-black mb-6">
              What Customers Say
            </h2>

            <p className="max-w-2xl mx-auto text-gray-400 leading-8">
              Thousands of customers love our food,
              atmosphere, and luxury dining experience.
            </p>
          </div>

          {/* AUTO SCROLL */}
          <div className="relative overflow-hidden">

            <div className="flex gap-8 animate-scroll w-max">

              {[
                {
                  name: "Ali Ahmed",
                  role: "Food Blogger",
                  image:
                    "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
                  review:
                    "Amazing food quality and outstanding service.",
                  location: "Lahore",
                },

                {
                  name: "Sara Khan",
                  role: "Travel Influencer",
                  image:
                    "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
                  review:
                    "Luxury restaurant with beautiful atmosphere.",
                  location: "Islamabad",
                },

                {
                  name: "Usman Malik",
                  role: "Businessman",
                  image:
                    "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d",
                  review:
                    "Perfect place for meetings and dinners.",
                  location: "Karachi",
                },

                {
                  name: "Ayesha Noor",
                  role: "Fashion Designer",
                  image:
                    "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df",
                  review:
                    "Loved the candlelight dinner experience.",
                  location: "Multan",
                },

                {
                  name: "Hamza Ali",
                  role: "Photographer",
                  image:
                    "https://images.unsplash.com/photo-1504257432389-52343af06ae3",
                  review:
                    "Professional staff and beautiful environment.",
                  location: "Faisalabad",
                },

                {
                  name: "Zara Sheikh",
                  role: "Content Creator",
                  image:
                    "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
                  review:
                    "Highly recommended for luxury dining.",
                  location: "Rawalpindi",
                },
              ]
                .concat([
                  {
                    name: "Ali Ahmed",
                    role: "Food Blogger",
                    image:
                      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
                    review:
                      "Amazing food quality and outstanding service.",
                    location: "Lahore",
                  },

                  {
                    name: "Sara Khan",
                    role: "Travel Influencer",
                    image:
                      "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
                    review:
                      "Luxury restaurant with beautiful atmosphere.",
                    location: "Islamabad",
                  },
                ])
                .map((item, index) => (
                  <div
                    key={index}
                    className="min-w-[350px] bg-white/5 border border-white/10 rounded-[35px] overflow-hidden hover:-translate-y-4 transition duration-500 group backdrop-blur-xl"
                  >

                    <div className="relative h-[260px] overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>

                      <div className="absolute top-5 left-5 flex gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            size={18}
                            className="fill-orange-500 text-orange-500"
                          />
                        ))}
                      </div>
                    </div>

                    <div className="p-8">
                      <h3 className="text-3xl font-bold text-orange-500 mb-2">
                        {item.name}
                      </h3>

                      <p className="text-gray-400 mb-1">
                        {item.role}
                      </p>

                      <p className="text-sm text-gray-500 mb-5">
                        📍 {item.location}
                      </p>

                      <p className="text-gray-300 leading-7 mb-6">
                        {item.review}
                      </p>

                      <button className="bg-orange-500 hover:bg-orange-600 px-6 py-3 rounded-full font-semibold transition duration-300">
                        Read More
                      </button>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================= TEAM SECTION ================= */}
     <section className="py-28 px-6 bg-white overflow-hidden">
  <div className="max-w-[1600px] mx-auto">

    {/* Heading */}
    <div className="text-center mb-20">
      <p className="text-orange-500 font-semibold tracking-[5px] mb-4">
        OUR CHEFS
      </p>

      <h2 className="text-5xl md:text-7xl font-black text-black">
        Meet Our Experts
      </h2>
    </div>

    {/* Cards */}
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
      {[
        {
          name: "Chef Alex",
          role: "Master Chef",
          img: "https://images.unsplash.com/photo-1607631568010-a87245c0daf8?q=80&w=1200&auto=format&fit=crop",
        },

        {
          name: "Chef John",
          role: "Italian Chef",
          img: "https://images.unsplash.com/photo-1583394293214-28ded15ee548?q=80&w=1200&auto=format&fit=crop",
        },

        {
          name: "Chef Emma",
          role: "Dessert Chef",
          img: "https://images.unsplash.com/photo-1595475038784-bbe439ff41e6?q=80&w=1200&auto=format&fit=crop",
        },
      ].map((chef, index) => (
        <div
          key={index}
          className="group relative h-[650px] w-full rounded-[40px] overflow-hidden shadow-2xl"
        >
          {/* Image */}
          <img
            src={chef.img}
            alt={chef.name}
            className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition duration-700"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

          {/* Content */}
          <div className="absolute bottom-0 left-0 w-full p-10 text-white">
            <h3 className="text-4xl md:text-5xl font-black mb-3">
              {chef.name}
            </h3>

            <p className="text-orange-400 font-semibold text-xl tracking-wide">
              {chef.role}
            </p>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* ================= CTA ================= */}
      <section className="py-28 px-6 bg-orange-500 text-white relative overflow-hidden">

        <div className="absolute top-0 left-0 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-black/20 rounded-full blur-3xl"></div>

        <div className="max-w-5xl mx-auto text-center relative z-10">

          <Sparkles
            size={50}
            className="mx-auto mb-8"
          />

          <h2 className="text-5xl md:text-6xl font-black mb-8 leading-tight">
            Reserve Your Table Today
          </h2>

          <p className="text-xl leading-8 mb-12 text-orange-100">
            Book your seat now and enjoy premium dining
            experience with your family and friends.
          </p>

          <button className="bg-white text-orange-500 px-10 py-5 rounded-full font-bold flex items-center gap-3 mx-auto hover:bg-black hover:text-white transition duration-300 text-lg">
            Book Now
            <ArrowRight size={22} />
          </button>
        </div>
      </section>

      {/* ================= CONTACT INFO ================= */}
      <section className="py-28 px-6 bg-black text-white">
        <div className="max-w-7xl mx-auto">

          <div className="grid md:grid-cols-3 gap-10">

            {[
              {
                icon: MapPin,
                title: "Location",
                desc: "Main City Road, Restaurant Street",
              },

              {
                icon: Phone,
                title: "Contact",
                desc: "+92 300 1234567",
              },

              {
                icon: Users,
                title: "Customers",
                desc: "15,000+ Happy Customers",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white/5 border border-white/10 rounded-[35px] p-10 text-center hover:bg-orange-500 transition duration-500 group"
              >
                <div className="w-20 h-20 rounded-3xl bg-orange-500/20 flex items-center justify-center mx-auto mb-8 group-hover:bg-white/20">
                  <item.icon
                    size={40}
                    className="text-orange-500 group-hover:text-white"
                  />
                </div>

                <h3 className="text-3xl font-bold mb-4">
                  {item.title}
                </h3>

                <p className="text-gray-400 group-hover:text-white leading-7">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;