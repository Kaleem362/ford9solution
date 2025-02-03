import React from "react";
import "../Styles/TimelineCards.css";
import two from "../images/choosenimagesforslides/2.png";
import three from "../images/choosenimagesforslides/3.png";
import four from "../images/choosenimagesforslides/4.png";
import five from "../images/choosenimagesforslides/5.png";
import six from "../images/choosenimagesforslides/6.png";
import seven from "../images/choosenimagesforslides/7.png";
import eight from "../images/choosenimagesforslides/8.png";
import nine from "../images/choosenimagesforslides/9.png";
import ten from "../images/choosenimagesforslides/10.png";
import eleven from "../images/choosenimagesforslides/11.png";
import twelve from "../images/choosenimagesforslides/12.png";
import thirteen from "../images/choosenimagesforslides/13.png";
import fourteen from "../images/choosenimagesforslides/14.png";
import fifteen from "../images/choosenimagesforslides/15.png";
import sixteen from "../images/choosenimagesforslides/16.png";
import seventeen from "../images/choosenimagesforslides/17.png";
import eighteen from "../images/choosenimagesforslides/18.png";
import nineteen from "../images/choosenimagesforslides/19.png";
import twenty from "../images/choosenimagesforslides/20.png";
import twentyone from "../images/choosenimagesforslides/21.png";
import twentytwo from "../images/choosenimagesforslides/22.png";
import twentythree from "../images/choosenimagesforslides/23.png";
import twenthyfour from "../images/choosenimagesforslides/24.png";
import twentyfive from "../images/choosenimagesforslides/25.png";

function ImageSlider() {
  const images = [
    twenty,
    twentyone,
    twentytwo,
    twentythree,
    twenthyfour,
    two,
    three,
    twentyfive,
    four,
    five,
    six,
    seven,
    eight,
    nine,
    ten,
    eleven,
    twelve,
    thirteen,
    fourteen,
    fifteen,
    sixteen,
    seventeen,
    eighteen,
    nineteen,
  ];

  return (
    <>
      <div className="Timeline-container header d-flex flex-column justify-content-center align-items-center white-background">
        <h1 className="Manrope py-3 my-10 fs-6 fs-md-1">Our Apps</h1>
      </div>
      <div className="google-play-button d-flex justify-content-center">
        <a
          class="btn"
          href="https://play.google.com/store/search?q=fordnine&c=apps&hl=en"
        >
          check out
        </a>
      </div>
      <div className="images-container py-5 overflow-scroll">
        <div className="imgslide">
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Slide ${index + 1}`}
              className="slider-image"
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default ImageSlider;
