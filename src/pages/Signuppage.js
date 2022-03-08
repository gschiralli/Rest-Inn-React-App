import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import RegistrationForm from "../components/RegistrationForm";

const Signuppage = () => {
  return (
    <>
      <Header />
      <main className="h-[65vh]">
        <RegistrationForm />
      </main>
      <Footer />
    </>
  );
};

export default Signuppage;
