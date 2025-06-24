import React from 'react';
export default function Section(props) {
  return (
    <div id={props.id} data-aos = {props.data} style = {{border: `0.25vh solid rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`, backgroundColor: `rgba(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255}, 0.25`}}>
        <a href = "#landing">Go back</a>
        <div id = "h1-container" style = {{marginTop: "5vh"}}>
      <h1 className = {props.clas}>{props.heading}</h1>
{props.children}
</div>
        <img src={props.image} id = {props.imgId} className="image" alt = "Dumplings" style = {{position: "relative", left: "1em", animation: `rotate ${Math.random() * 20}s ease-in-out infinite`}} />
        </div>
  );
}
// how did u end up here