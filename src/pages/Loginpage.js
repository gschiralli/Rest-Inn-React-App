import Footer from "../components/Footer";
import Header from "../components/Header";
import Login from "../components/Login";

const Loginpage = () => {
  return (
    <>
      <Header />
      <main className=" h-[65vh]">
        <Login />
      </main>
      <Footer />
    </>
  );
};

export default Loginpage;
