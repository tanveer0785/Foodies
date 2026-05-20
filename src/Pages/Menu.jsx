import { useEffect, useState } from "react";
import MainLayout from "../layouts/MainLayout";

const menuItems = [
  {
    id: 1,
    name: "Cheese Burger",
    category: "Burger",
    price: "$12",
    image:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd",
  },
  {
    id: 2,
    name: "Italian Pizza",
    category: "Pizza",
    price: "$18",
    image:
      "https://images.unsplash.com/photo-1513104890138-7c749659a591",
  },
  {
    id: 3,
    name: "Creamy Pasta",
    category: "Pasta",
    price: "$15",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdqr0NYBH6rU7C-AyPrZGny9y-ekckzGnkMQ&s",
  },
  {
    id: 4,
    name: "Hot BBQ",
    category: "BBQ",
    price: "$20",
    image:
      "https://images.unsplash.com/photo-1529193591184-b1d58069ecdd",
  },
  {
    id: 5,
    name: "Cold Drinks",
    category: "Drinks",
    price: "$8",
    image:
      "https://images.unsplash.com/photo-1544145945-f90425340c7e",
  },
  {
    id: 6,
    name: "Chocolate Dessert",
    category: "Dessert",
    price: "$10",
    image:
      "https://images.unsplash.com/photo-1551024601-bec78aea704b",
  },
];

const Menu = () => {
  const [selectedCategory, setSelectedCategory] =
    useState("All");

  const [filteredItems, setFilteredItems] =
    useState(menuItems);

  const [formData, setFormData] = useState({
    name: "",
    food: "",
  });

  // Filter Effect
  useEffect(() => {
    if (selectedCategory === "All") {
      setFilteredItems(menuItems);
    } else {
      const filtered = menuItems.filter(
        (item) => item.category === selectedCategory
      );

      setFilteredItems(filtered);
    }
  }, [selectedCategory]);

  // Input Handling
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Submit Handling
  const handleSubmit = (e) => {
    e.preventDefault();

    alert(
      `Order Submitted\nName: ${formData.name}\nFood: ${formData.food}`
    );

    setFormData({
      name: "",
      food: "",
    });
  };

  return (
    <>

      {/* HERO SECTION */}
      <section className="bg-black text-white py-24 text-center">
        <h1 className="text-6xl font-bold mb-4">
          Our Delicious Menu
        </h1>

        <p className="text-gray-300 text-lg">
          Taste the best dishes made by our chefs
        </p>
      </section>

      {/* CATEGORY BUTTONS */}
      <section className="py-10 px-6">
        <div className="flex flex-wrap justify-center gap-4">
          {[
            "All",
            "Burger",
            "Pizza",
            "Pasta",
            "BBQ",
            "Drinks",
            "Dessert",
          ].map((category, index) => (
            <button
              key={index}
              onClick={() =>
                setSelectedCategory(category)
              }
              className={`px-6 py-3 rounded-full cursor-pointer transition duration-300 ${
                selectedCategory === category
                  ? "bg-orange-500 text-white"
                  : "bg-gray-200 hover:bg-orange-200"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </section>

      {/* MENU CARDS */}
      <section className="py-10 px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 cursor-pointer group"
            >
              <div className="overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-64 w-full object-cover group-hover:scale-110 transition duration-500"
                />
              </div>

              <div className="p-6">
                <div className="flex justify-between items-center mb-3">
                  <h2 className="text-2xl font-bold">
                    {item.name}
                  </h2>

                  <span className="text-orange-500 font-bold">
                    {item.price}
                  </span>
                </div>

                <p className="text-gray-500 mb-5">
                  Delicious and freshly prepared food.
                </p>

                <button
                  onClick={() =>
                    alert(`${item.name} Added To Cart`)
                  }
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg transition cursor-pointer"
                >
                  Order Now
                </button>
              </div>
            </div>
          ))}

        </div>
      </section>

      {/* SPECIAL OFFER SECTION */}
      <section className="py-20 bg-orange-500 text-white text-center">
        <h2 className="text-5xl font-bold mb-6">
          Special Offer
        </h2>

        <p className="max-w-2xl mx-auto text-lg">
          Get 30% discount on all pizzas this weekend.
        </p>

        <button className="mt-8 bg-white text-orange-500 px-8 py-3 rounded-lg font-bold hover:bg-gray-200 transition cursor-pointer">
          Claim Offer
        </button>
      </section>

      {/* CHEF SECTION */}
      <section className="py-20 px-6 bg-gray-100">
        <h2 className="text-5xl font-bold text-center mb-12">
          Our Expert Chefs
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          {[
            "https://images.unsplash.com/photo-1600891964092-4316c288032e",
            "https://images.unsplash.com/photo-1559339352-11d035aa65de",
            "https://images.unsplash.com/photo-1541544741938-0af808871cc0",
          ].map((chef, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-lg text-center cursor-pointer hover:-translate-y-2 transition duration-300"
            >
              <img
                src={chef}
                alt="chef"
                className="h-80 w-full object-cover"
              />

              <div className="p-6">
                <h3 className="text-2xl font-bold">
                  Master Chef
                </h3>

                <p className="text-gray-500 mt-2">
                  Professional Food Specialist
                </p>
              </div>
            </div>
          ))}

        </div>
      </section>

      {/* RESERVATION FORM */}
      <section className="py-20 px-6">
        <div className="max-w-2xl mx-auto bg-white shadow-2xl rounded-2xl p-10">

          <h2 className="text-4xl font-bold text-center mb-10">
            Book Your Order
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
              className="w-full border p-4 rounded-lg outline-none focus:border-orange-500"
              required
            />

            <input
              type="text"
              name="food"
              placeholder="Food Name"
              value={formData.food}
              onChange={handleChange}
              className="w-full border p-4 rounded-lg outline-none focus:border-orange-500"
              required
            />

            <button
              type="submit"
              className="w-full bg-orange-500 hover:bg-orange-600 text-white py-4 rounded-lg font-bold transition cursor-pointer"
            >
              Submit Order
            </button>

          </form>
        </div>
      </section>

    </>
  );
};

export default Menu;