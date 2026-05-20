import MainLayout from "../layouts/MainLayout";
import { useEffect, useState } from "react";

const galleryImages = [
  {
    id: 1,
    category: "Food",
    image:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836",
  },
  {
    id: 2,
    category: "Restaurant",
    image:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4",
  },
  {
    id: 3,
    category: "Chef",
    image:
      "https://images.unsplash.com/photo-1559339352-11d035aa65de",
  },
  {
    id: 4,
    category: "Food",
    image:
      "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe",
  },
  {
    id: 5,
    category: "Restaurant",
    image:
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0",
  },
  {
    id: 6,
    category: "Chef",
    image:
      "https://images.unsplash.com/photo-1600891964092-4316c288032e",
  },
  {
    id: 7,
    category: "Food",
    image:
      "https://images.unsplash.com/photo-1552566626-52f8b828add9",
  },
  {
    id: 8,
    category: "Restaurant",
    image:
      "https://images.unsplash.com/photo-1528605248644-14dd04022da1",
  },
];

const GalleryPage = () => {
  const [selectedCategory, setSelectedCategory] =
    useState("All");

  const [filteredImages, setFilteredImages] =
    useState(galleryImages);

  const [selectedImage, setSelectedImage] =
    useState(null);

  // FILTER EFFECT
  useEffect(() => {
    if (selectedCategory === "All") {
      setFilteredImages(galleryImages);
    } else {
      const filtered = galleryImages.filter(
        (item) => item.category === selectedCategory
      );

      setFilteredImages(filtered);
    }
  }, [selectedCategory]);

  return (
    <>

      {/* HERO SECTION */}
      <section className="relative h-[70vh] bg-[url('https://images.unsplash.com/photo-1504674900247-0877df9cc836')] bg-cover bg-center flex items-center justify-center">

        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 text-center text-white px-6">
          <h1 className="text-6xl font-bold mb-5">
            Our Gallery
          </h1>

          <p className="max-w-2xl mx-auto text-lg text-gray-200">
            Explore delicious dishes, luxury interiors,
            and our expert chefs.
          </p>
        </div>
      </section>

      {/* FILTER BUTTONS */}
      <section className="py-12 px-6 bg-white">

        <div className="flex flex-wrap justify-center gap-5">

          {[
            "All",
            "Food",
            "Restaurant",
            "Chef",
          ].map((category, index) => (
            <button
              key={index}
              onClick={() =>
                setSelectedCategory(category)
              }
              className={`px-7 py-3 rounded-full transition duration-300 cursor-pointer font-semibold ${
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

      {/* GALLERY GRID */}
      <section className="py-16 px-6 bg-gray-100">

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {filteredImages.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedImage(item.image)}
              className="overflow-hidden rounded-3xl shadow-xl cursor-pointer group relative"
            >

              <img
                src={item.image}
                alt="gallery"
                className="h-80 w-full object-cover group-hover:scale-110 transition duration-500"
              />

              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                <h2 className="text-white text-2xl font-bold">
                  {item.category}
                </h2>
              </div>

            </div>
          ))}

        </div>
      </section>

      {/* SPECIAL MOMENTS SECTION */}
      <section className="py-24 px-6 bg-white">

        <div className="text-center mb-14">
          <h2 className="text-5xl font-bold">
            Special Moments
          </h2>

          <p className="text-gray-500 mt-4">
            Beautiful memories created with our customers.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">

          {[
            "https://images.unsplash.com/photo-1528605248644-14dd04022da1",
            "https://images.unsplash.com/photo-1414235077428-338989a2e8c0",
            "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4",
          ].map((image, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-3xl shadow-xl cursor-pointer group"
            >
              <img
                src={image}
                alt="moments"
                className="h-96 w-full object-cover group-hover:scale-110 transition duration-500"
              />
            </div>
          ))}

        </div>
      </section>

      {/* VIDEO SECTION */}
      <section className="py-24 bg-orange-500 text-white text-center px-6">

        <h2 className="text-5xl font-bold mb-6">
          Watch Our Restaurant Story
        </h2>

        <p className="max-w-2xl mx-auto text-lg mb-10">
          Discover our journey, food preparation,
          and luxury dining experience.
        </p>

        <button
          onClick={() =>
            alert("Video Coming Soon...")
          }
          className="bg-white text-orange-500 px-10 py-4 rounded-xl font-bold hover:bg-gray-200 transition cursor-pointer"
        >
          Play Video
        </button>
      </section>

      {/* LIGHTBOX MODAL */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 px-6">

          <div className="relative max-w-5xl w-full">

            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-14 right-0 text-white text-5xl cursor-pointer"
            >
              ×
            </button>

            <img
              src={selectedImage}
              alt="preview"
              className="w-full max-h-[85vh] object-contain rounded-2xl"
            />
          </div>
        </div>
      )}

    </>
  );
};

export default GalleryPage;