import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import HeadingCard from "./Components/HeadingCard/HeadingCard";
import Food from "./Components/Food/Food";
import Category from "./Components/Category/Category";
import Footer from "./Components/Footer/Footer";
import About from "./Components/About/About";
import Spices from "./Components/Spices/Spices";
import ChefSection from "./Components/ChefSection/ChefSection";
import Happening from "./Components/Happening/Happening";
import NewsLetter from "./Components/NewsLetter/NewsLetter";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Spices />
      <HeadingCard />
      <ChefSection />
      <Food />
      <Happening />
      <Category />
      <NewsLetter />
      <Footer />
    </div>
  );
}

export default App;
