import React from "react";
import Header from "../Components/Header/Header";
import Posts from "../Components/Posts/Posts";
import Footer from "../Components/Footer/Footer";
import banner from "../assets/banner.png";
function Home(props) {
  return (
    <div className="homeParentDiv">
      <Header />
      <img src={banner} alt="olx" style={{ width: "100%" }} />
      <Posts />
      <Footer />
    </div>
  );
}

export default Home;
