
import { useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
} from "lucide-react";

const Contact = () => {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // HANDLE INPUT
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // HANDLE SUBMIT
  const handleSubmit = (e) => {
    e.preventDefault();

    alert(`
Message Sent Successfully ✅

Name: ${formData.name}
Email: ${formData.email}
Message: ${formData.message}
    `);

    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <>

      {/* HERO SECTION */}
      <section className="relative h-[70vh] bg-[url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4')] bg-cover bg-center flex items-center justify-center cursor-pointer">

        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 text-center text-white px-6">
          <h1 className="text-6xl font-bold mb-6 cursor-pointer">
            Contact Us
          </h1>

          <p className="max-w-2xl mx-auto text-lg text-gray-200 cursor-pointer">
            Get in touch with Foodies Restaurant for
            reservations, support, and delicious experiences.
          </p>
        </div>
      </section>

      {/* CONTACT INFO */}
      <section className="py-24 px-6 bg-white">

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {[
            {
              icon: <MapPin size={40} />,
              title: "Address",
              info: "123 Food Street, New York",
            },
            {
              icon: <Phone size={40} />,
              title: "Phone",
              info: "+1 234 567 890",
            },
            {
              icon: <Mail size={40} />,
              title: "Email",
              info: "foodies@gmail.com",
            },
            {
              icon: <Clock size={40} />,
              title: "Opening Hours",
              info: "9:00 AM - 11:00 PM",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-gray-100 p-10 rounded-3xl shadow-lg text-center hover:-translate-y-2 hover:shadow-2xl transition duration-300 cursor-pointer"
            >

              <div className="flex justify-center text-orange-500 mb-5 cursor-pointer">
                {item.icon}
              </div>

              <h3 className="text-2xl font-bold mb-3 cursor-pointer">
                {item.title}
              </h3>

              <p className="text-gray-600 cursor-pointer">
                {item.info}
              </p>

            </div>
          ))}

        </div>
      </section>

      {/* CONTACT FORM */}
      <section className="py-24 px-6 bg-gray-100">

        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-14 items-center">

          {/* IMAGE */}
          <div className="overflow-hidden rounded-3xl shadow-2xl cursor-pointer group">
            <img
              src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0"
              alt="restaurant"
              className="w-full h-full object-cover group-hover:scale-110 transition duration-500 cursor-pointer"
            />
          </div>

          {/* FORM */}
          <div className="bg-white p-10 rounded-3xl shadow-2xl">

            <h2 className="text-5xl font-bold mb-8 cursor-pointer">
              Send Message
            </h2>

            <form
              onSubmit={handleSubmit}
              className="space-y-6"
            >

              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full border p-4 rounded-xl outline-none focus:border-orange-500 cursor-pointer"
                required
              />

              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full border p-4 rounded-xl outline-none focus:border-orange-500 cursor-pointer"
                required
              />

              <textarea
                name="message"
                rows="6"
                placeholder="Write Your Message..."
                value={formData.message}
                onChange={handleChange}
                className="w-full border p-4 rounded-xl outline-none focus:border-orange-500 resize-none cursor-pointer"
                required
              ></textarea>

              <button
                type="submit"
                className="w-full bg-orange-500 hover:bg-orange-600 text-white py-4 rounded-xl font-bold transition duration-300 cursor-pointer"
              >
                Send Message
              </button>

            </form>
          </div>

        </div>
      </section>

      {/* MAP SECTION */}
    <section className="py-24 px-6 bg-white">

  <div className="text-center mb-12">
    <h2 className="text-5xl font-bold cursor-pointer">
      Find Our Location
    </h2>

    <p className="text-gray-500 mt-4 cursor-pointer">
      Visit Foodies Restaurant in Feroze Wattwan,
      Sheikhupura, Punjab Pakistan.
    </p>
  </div>

  <div className="max-w-7xl mx-auto rounded-3xl overflow-hidden shadow-2xl cursor-pointer">

    <iframe
      title="Feroze Wattwan Map"
      src="https://maps.google.com/maps?q=Feroze%20Wattwan%20Sheikhupura%20Punjab%20Pakistan&t=&z=13&ie=UTF8&iwloc=&output=embed"
      width="100%"
      height="500"
      allowFullScreen=""
      loading="lazy"
      className="border-0 cursor-pointer"
    ></iframe>

  </div>
</section>

      {/* FAQ SECTION */}
      <section className="py-24 px-6 bg-gray-100">

        <div className="text-center mb-14">
          <h2 className="text-5xl font-bold cursor-pointer">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">

          {[
            {
              question: "Do you offer home delivery?",
              answer:
                "Yes, we provide fast home delivery service.",
            },
            {
              question: "Can I reserve a table online?",
              answer:
                "Yes, you can reserve your table easily.",
            },
            {
              question: "Do you organize birthday events?",
              answer:
                "Yes, we arrange birthday and family events.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition duration-300 cursor-pointer"
            >

              <h3 className="text-2xl font-bold mb-4 text-orange-500 cursor-pointer">
                {item.question}
              </h3>

              <p className="text-gray-600 leading-7 cursor-pointer">
                {item.answer}
              </p>

            </div>
          ))}

        </div>
      </section>

    </>
  );
};

export default Contact;