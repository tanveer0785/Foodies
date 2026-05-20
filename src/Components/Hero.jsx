const Hero = () => {
  return (
    <section className="h-screen bg-[url('https://images.unsplash.com/photo-1504674900247-0877df9cc836')] bg-cover bg-center flex items-center justify-center text-white">
      <div className="text-center bg-black/50 p-10 rounded-xl">
        <h1 className="text-6xl font-bold mb-4">
          Delicious Food
        </h1>

        <p className="text-xl mb-6">
          Taste the best dishes in town
        </p>

        <button className="bg-orange-500 px-6 py-3 rounded-lg">
          Order Now
        </button>
      </div>
    </section>
  );
};

export default Hero;