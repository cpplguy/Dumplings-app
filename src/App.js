import logo from './logo.svg';
import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
import './App.css';
import DumplingWords from "./header.js"
import {Introduction}from "./introduction.js";
import History from "./history.js";
import Recipe from "./recipe.js"
import Footer from "./footer.js";
import Quiz from "./quiz.js";
import {Minigame} from "./minigame.js"
function App() {
    useEffect(() => {
    AOS.init({
      duration: 1500
    });
    console.log("Enjoy my dumplings website. Email me for bugs and stuffos.")
  }, []);
  return (
    <>
    <img src = {logo} className = "react"/>
    <DumplingWords/>
    <Introduction />
    <History/>
    <Recipe/>
    <Quiz/>
    <Minigame/>
    <Footer/>
    </>
  );
}

export default App;
