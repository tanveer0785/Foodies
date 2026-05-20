const dishes = [
  {
    name: "Pizza",
    image:
      "https://images.unsplash.com/photo-1513104890138-7c749659a591",
  },
  {
    name: "Burger",
    image:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd",
  },
  {
    name: "Pasta",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2IVbrXjRNLF_GJ6esdxJKfThZmppHyvIYag&s",
  },
];

const SpecialDishes = () => {
  return (
    <section className="py-20 px-10 bg-gray-100">
      <h2 className="text-4xl font-bold text-center mb-10">
        Special Dishes
      </h2>

      <div className="grid md:grid-cols-3 gap-8">
        {dishes.map((dish, index) => (
          <div
            key={index}
            className="bg-white rounded-xl overflow-hidden shadow-lg"
          >
            <img
              src={dish.image}
              alt={dish.name}
              className="h-64 w-full object-cover"
            />

            <div className="p-5">
              <h3 className="text-2xl font-bold">
                {dish.name}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SpecialDishes;