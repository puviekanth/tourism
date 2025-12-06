import React from "react";
import Navbar from "../components/navbar";
import TopPackages from "../components/topPackages";
import Footer from "../components/footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <section>
        <TopPackages />
      </section>
      <Footer />
    </>
  );
};

export default Home;