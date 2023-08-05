import React from "react";
import BannerImg from "../../assets/banner-img.png";

const Hero = () => {
  return (
    <div className="hero-banner bg-gradient-to-r from-purple-600 to-indigo-900 py-10 md:h-screen-80">
      <div className="content max-w-2xl mx-auto md:max-w-6xl md:flex md:justify-between md:items-center">
        <img
          className="banner-img w-48 md:w-96 xl:w-120  mr-6 md:mr-20 xl:mr-0 mb-4 md:mb-0 md:mt-12 xl:mt-0"
          src={BannerImg}
          alt="Banner"
        />
        <div className="text-content text-white text-center md:text-left">
          <h1 className="text-4xl md:text-7xl font-bold leading-tight mb-4 md:mb-8">
            SALES
          </h1>
          <p className="text-sm md:text-lg max-w-xs md:max-w-md mb-4 md:mb-8">
          Unleash the full potential of your music with our brand new Eclipse X1 headphones. Designed with audiophiles in mind, these sleek and stylish headphones deliver unparalleled sound quality, taking you on a sonic journey like never before.
          </p>
          <div className="ctas flex justify-center md:justify-start gap-4">
            <div className="banner-cta  hover:scale-110 transition-transform rounded-lg uppercase text-xs md:text-base font-medium border-2 border-white px-4 py-2 transition-all ease-in-out duration-300 cursor-pointer hover:opacity-60">
              Read More
            </div>
            <div className="banner-cta v2  hover:scale-110 transition-transform rounded-lg uppercase text-xs md:text-base font-medium border-2 border-white bg-white text-black px-4 py-2 transition-all ease-in-out duration-300 cursor-pointer hover:opacity-60">
              Shop Now
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;



