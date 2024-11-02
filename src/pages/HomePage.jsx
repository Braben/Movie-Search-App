import React from "react";
import Hero from "../components/Hero";
import MovieList from "../components/MovieList";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import LoginPage from "./LoginPage";

const HomePage = () => {
  return (
    <div>
      <LoginPage />
      <Navbar />
      <Hero />
      <MovieList />
      <Footer />
    </div>
  );
};

export default HomePage;
