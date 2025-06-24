import React from "react";
import image3 from "./high-angle-asian-dish-plate-with-herbs.jpg";
import Section from "./section.js";
export function Introduction() {
  return (
    <Section
      id="introduction"
      data="flip-left"
      image={image3} 
      alt = "Dumplings"
      clas = "Introduction h1"
      imgId = "img-3"
      heading = "Introduction to Dumplings"
    >
       <p>
        <strong>Dumplings</strong> {" "} are traditional foods in many cultures around
        the world, primarily{" "}
        <a href="https://en.wikipedia.org/wiki/China" target="_blank" rel = "noreferrer">
          in China</a>, where it was made. Ever since its invention, it has been a staple in Asian culture.
        
      </p>
      <p>
        Dumplings{" "}are savory fillings wrapped with dough, usually filled with meats like beef or
        pork. This food was and is a very important part of my life, with my Mom
        making it almost every week for me.
      </p>
      <p>
        Many countries have invented their own versions of the Chinese
        dumplings, such as{" "}
        <a href="https://en.wikipedia.org/wiki/Pierogi" target="_blank" rel = "noreferrer">
          Pierogi
        </a>
        , made in{" "}
        <a href="https://en.wikipedia.org/wiki/Poland" target="_blank" rel = "noreferrer">
          Poland
        </a>
        , and{" "}
        <a href="https://en.wikipedia.org/wiki/Mandu_(food)" target="_blank" rel = "noreferrer">
          Mandu
        </a>
        , made in{" "}
        <a href="https://en.wikipedia.org/wiki/Korea" target="_blank" rel = "noreferrer">
          Korea.
        </a>
      </p>
    </Section>  
  );
}
