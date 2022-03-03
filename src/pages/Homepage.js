import Header from "../components/Header";
import Hero from "../components/Hero";
import TypeList from "../components/TypeList";
import BestSellerList from "../components/BestSellerList";
import Footer from "../components/Footer";

function Homepage() {
  return (
    <div>
      <Header />
      <Hero />
      <main className="max-w-7xl mx-auto px-8 sm:px-16">
        <section className="pt-6">
          <h2 className="text-4xl font-semibold pb-5">Property Types</h2>
          <TypeList />
        </section>
        <section>
          <h2 className="text-4xl font-semibold py-10">Best Sellers</h2>
          <BestSellerList />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Homepage;
