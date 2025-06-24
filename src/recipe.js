import React from "react";
import img5 from "./rolling-pin-1680702_640.png";
import Section from "./section.js";
export default function Recipe(){
    return (
        <Section id = "recipe" data = "flip-left" clas = "recipe" heading = "Dumpling Recipe" image = {img5} imgId = "img-5">
            <h2>Ingredients</h2>
            <ul id = "ingredients">
                <li>Dumplings Flour Paper</li>
                <li>Eggs</li>
                <li>Water</li>
                <li>Ground beef</li>
                <li>Onions</li>
                <li>Soy sauce</li>
                <li>Salt</li>
                <li>Chinese Vinegar</li>
            </ul>
            <h2>Instructions</h2>
            <ol id = "instructions">
                <li>Get a large bowl and add ground beef into it.</li>
                <li>Chop up some onions and add it into the bowl</li>
                <li>Add one tsp. of soy sauce and salt</li>
                <li>Crack one egg into it and begin vigorously mixing, preferably with chopsticks</li>
                <li>Prepare a small bowl of water and your flour paper for dumplings</li>
                <li>Take a spoonful of the ground beef mixture and place it in the middle fo the flour paper</li>
                <li>Use your finger and dip it in the water, cover the edges of the flour paper</li>
                <li>Fold the paper in half and pinch the edges, be careful to not spill any mixture out!</li>
                <li>Repeat until you have enough dumplings to your liking</li>
                <li>Take a bowl with water and boil it</li>
                <li>After the water is boiling, place the dumplings inside. Cook until the dumplings float to the top</li>
                <li>Take the dumplings out carefully and serve with vinegar</li>
            </ol>;
        </Section>
    );
}