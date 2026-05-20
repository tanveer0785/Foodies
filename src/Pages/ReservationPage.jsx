import { useState } from "react";
import {
  CalendarDays,
  Clock3,
  Users,
  Phone,
  User,
  Mail,
  MessageSquare,
  Star,
  MapPin,
  ChefHat,
  Sparkles,
} from "lucide-react";

const ReservationPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    guests: "",
    date: "",
    time: "",
    occasion: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    alert(`
🎉 Reservation Confirmed

Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Guests: ${formData.guests}
Date: ${formData.date}
Time: ${formData.time}
Occasion: ${formData.occasion}
    `);

    setFormData({
      name: "",
      email: "",
      phone: "",
      guests: "",
      date: "",
      time: "",
      occasion: "",
      message: "",
    });
  };

  return (
    <div className="bg-black text-white overflow-hidden cursor-pointer">
      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-center">
        {/* BG IMAGE */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4"
            alt="restaurant"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/75"></div>
        </div>

        {/* FLOATING BLUR */}
        <div className="absolute top-20 left-20 w-72 h-72 bg-orange-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-red-500/20 rounded-full blur-3xl"></div>

        {/* CONTENT */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
          
          {/* LEFT */}
          <div>
            <div className="inline-flex items-center gap-2 bg-orange-500/20 border border-orange-500/30 px-5 py-2 rounded-full mb-8">
              <Sparkles size={18} className="text-orange-400" />
              <span className="text-orange-300">
                Luxury Dining Experience
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-black leading-tight mb-8">
              Reserve Your
              <span className="block text-orange-500">
                Dream Dinner
              </span>
            </h1>

            <p className="text-lg text-gray-300 leading-8 mb-10 max-w-xl">
              Experience premium dining with world-class chefs,
              luxury interiors, candlelight atmosphere, and
              unforgettable flavors.
            </p>

            {/* STATS */}
            <div className="grid grid-cols-3 gap-6">
              <div className="bg-white/10 backdrop-blur-lg border border-white/10 p-6 rounded-3xl text-center">
                <h3 className="text-3xl font-bold text-orange-400">
                  15K+
                </h3>
                <p className="text-gray-300 text-sm mt-2">
                  Happy Guests
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-lg border border-white/10 p-6 rounded-3xl text-center">
                <h3 className="text-3xl font-bold text-orange-400">
                  5★
                </h3>
                <p className="text-gray-300 text-sm mt-2">
                  Ratings
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-lg border border-white/10 p-6 rounded-3xl text-center">
                <h3 className="text-3xl font-bold text-orange-400">
                  24/7
                </h3>
                <p className="text-gray-300 text-sm mt-2">
                  Service
                </p>
              </div>
            </div>
          </div>

          {/* FORM CARD */}
          <div className="relative cursor-pointer">
            <div className="absolute inset-0 bg-orange-500 blur-3xl opacity-20 rounded-[40px]"></div>

            <div className="relative bg-white/10 backdrop-blur-2xl border border-white/10 rounded-[40px] p-8 lg:p-10 shadow-2xl">
              <div className="mb-8">
                <h2 className="text-4xl font-bold mb-3">
                  Book A Table
                </h2>

                <p className="text-gray-300">
                  Fill out the form below to reserve your seat.
                </p>
              </div>

              <form
                onSubmit={handleSubmit}
                className="space-y-5"
              >
                {/* NAME */}
                <div className="relative">
                  <User
                    size={20}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-orange-400"
                  />

                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-white/10 border border-white/10 text-white placeholder:text-gray-400 pl-12 p-4 rounded-2xl outline-none focus:border-orange-500"
                  />
                </div>

                {/* EMAIL */}
                <div className="relative">
                  <Mail
                    size={20}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-orange-400"
                  />

                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-white/10 border border-white/10 text-white placeholder:text-gray-400 pl-12 p-4 rounded-2xl outline-none focus:border-orange-500"
                  />
                </div>

                {/* PHONE */}
                <div className="relative">
                  <Phone
                    size={20}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-orange-400"
                  />

                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full bg-white/10 border border-white/10 text-white placeholder:text-gray-400 pl-12 p-4 rounded-2xl outline-none focus:border-orange-500"
                  />
                </div>

                {/* GUESTS */}
                <div className="relative">
                  <Users
                    size={20}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-orange-400 z-10 cursor-pointer"
                  />

                  <select
                    name="guests"
                    value={formData.guests}
                    onChange={handleChange}
                    required
                    className="w-full bg-white/10 border border-white/10 text-white pl-12 p-4 rounded-2xl outline-none focus:border-orange-500 appearance-none cursor-pointer"
                  >
                    <option className="text-black" value="">
                      Select Guests
                    </option>

                    <option className="text-black">
                      1 Person
                    </option>

                    <option className="text-black">
                      2 People
                    </option>

                    <option className="text-black">
                      4 People
                    </option>

                    <option className="text-black">
                      6+ People
                    </option>
                  </select>
                </div>

                {/* DATE & TIME */}
                <div className="grid md:grid-cols-2 gap-5">
                  <div className="relative">
                    <CalendarDays
                      size={20}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-orange-400"
                    />

                    <input
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      required
                      className="w-full bg-white/10 border border-white/10 text-white pl-12 p-4 rounded-2xl outline-none focus:border-orange-500"
                    />
                  </div>

                  <div className="relative">
                    <Clock3
                      size={20}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-orange-400"
                    />

                    <input
                      type="time"
                      name="time"
                      value={formData.time}
                      onChange={handleChange}
                      required
                      className="w-full bg-white/10 border border-white/10 text-white pl-12 p-4 rounded-2xl outline-none focus:border-orange-500"
                    />
                  </div>
                </div>

                {/* OCCASION */}
                <select
                  name="occasion"
                  value={formData.occasion}
                  onChange={handleChange}
                  className="w-full bg-white/10 border border-white/10 text-white p-4 rounded-2xl outline-none focus:border-orange-500 cursor-pointer"
                >
                  <option className="text-black" value="">
                    Select Occasion
                  </option>

                  <option className="text-black">
                    Birthday
                  </option>

                  <option className="text-black">
                    Anniversary
                  </option>

                  <option className="text-black">
                    Family Dinner
                  </option>

                  <option className="text-black">
                    Business Meeting
                  </option>
                </select>

                {/* MESSAGE */}
                <div className="relative">
                  <MessageSquare
                    size={20}
                    className="absolute left-4 top-5 text-orange-400"
                  />

                  <textarea
                    name="message"
                    rows="4"
                    placeholder="Special Request..."
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full bg-white/10 border border-white/10 text-white placeholder:text-gray-400 pl-12 p-4 rounded-2xl outline-none focus:border-orange-500 resize-none"
                  ></textarea>
                </div>

                {/* BUTTON */}
                <button
                  type="submit"
                  className="w-full bg-orange-500 hover:bg-orange-600 py-4 rounded-2xl font-bold text-lg transition duration-300 hover:scale-[1.02]"
                >
                  Reserve Now
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section className="py-24 px-6 bg-gradient-to-b from-black to-gray-950">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <p className="text-orange-400 font-semibold mb-4">
              WHY CHOOSE US
            </p>

            <h2 className="text-5xl font-bold">
              Premium Restaurant Experience
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: ChefHat,
                title: "Expert Chefs",
                desc: "World-class chefs creating unforgettable dishes.",
              },
              {
                icon: Star,
                title: "Luxury Dining",
                desc: "Beautiful interiors with romantic atmosphere.",
              },
              {
                icon: MapPin,
                title: "Prime Location",
                desc: "Located in the heart of the city.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white/5 border border-white/10 rounded-3xl p-10 hover:bg-white/10 transition duration-300 hover:-translate-y-2"
              >
                <div className="w-16 h-16 rounded-2xl bg-orange-500/20 flex items-center justify-center mb-6">
                  <item.icon
                    size={30}
                    className="text-orange-400"
                  />
                </div>

                <h3 className="text-2xl font-bold mb-4">
                  {item.title}
                </h3>

                <p className="text-gray-400 leading-7">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY SECTION */}
      <section className="py-24 px-6 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <p className="text-orange-400 font-semibold mb-4">
              OUR GALLERY
            </p>

            <h2 className="text-5xl font-bold">
              Delicious Moments
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              "https://images.unsplash.com/photo-1559339352-11d035aa65de",
              "https://images.unsplash.com/photo-1552566626-52f8b828add9",
              "https://images.unsplash.com/photo-1544025162-d76694265947",
            ].map((img, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-3xl group cursor-pointer"
              >
                <img
                  src={img}
                  alt="gallery"
                  className="w-full h-[400px] object-cover group-hover:scale-110 transition duration-700"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ReservationPage;