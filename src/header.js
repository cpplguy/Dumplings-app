import image from "./top-view-japanese-dumplings-assortment.jpg";
import image2 from "./high-angle-asian-dish-plate-with-herbs-chopsticks.jpg";
import React, { useState, useEffect } from "react";
export default function DumplingWords() {
  const Component = (props) => {
    const [letters, setLetters] = useState(false);
    useEffect(() => {
      setTimeout(() => {
        setLetters(true);
      }, props.time - 200);
    }, []);
    return (
      <>
        <div>
          <h1 className={`letters${letters ? " visible" : ""}`}>
            {props.children}
          </h1>
        </div>
      </>
    );
  };
  return (
    <div className="container">
      <div className="center-container" id = "landing">
        <Component  time={250}>D</Component>
        <Component time={500}>U</Component>
        <Component time={750}>M</Component>
        <Component time={1000}>P</Component>
        <Component time={1250}>L</Component>
        <Component time={1500}>I</Component>
        <Component time={1750}>N</Component>
        <Component time={2000}>G</Component>
        <Component time={2250}>S</Component>
        <br />
        <nav  id = "nav" data-aos = "flip-up" style = {{backgroundColor: `rgba(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, 0.75)`}}>
    
          <a href="#introduction">Introduction <div className = "line"></div></a>
          <a href="#history">History of Dumplings <div className = "line"></div></a>
            <a href="#recipe">Dumpling Recipes <div className = "line"></div></a>
          <a href="#quiz">Quiz <div className = "line"></div></a>
          <a href = "#minigame">Dumpling Minigame<div className = "line"></div></a>

        </nav>
        <div id="image-container">
          <Component time={Math.random() * 1000}>
            <img src={image} className="image" style = {{animation: `rotate ${Math.random() * 200}s linear infinite`}}/>
          </Component>
          <Component time={Math.random() * 1000 + 500}>
            <img src={image2} className="image" style = {{animation: `rotate ${Math.random() * 250}s linear infinite`}}/>
          </Component>
        </div>
      </div>
      <div id="name">
        <br />
        <br />
        <Component time={2500}>R</Component>
        <Component time={2750}>A</Component>
        <Component time={3000}>M</Component>
        <Component time={3250}>O</Component>
        <Component time={3500}>N</Component>
      </div>
    </div>
  );
}
