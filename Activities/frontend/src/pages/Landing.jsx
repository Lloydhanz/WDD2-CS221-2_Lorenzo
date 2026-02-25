import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import MainContent from "../components/MainContent";
import Footer from "../components/Footer";

export default function Landing() {
  return (
    <div>
      <Header />
      <Hero
        title="My App"
        description="Your one-stop solution for inventory management."
        ButtonText="Get Started"
      />
      <MainContent />
      <Footer />
    </div>
  );
}
