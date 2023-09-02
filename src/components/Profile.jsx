import React from "react";
import myPhoto from "../assets/img/IMG_20220710_200024.jpg";

export default function Profile({name}) {
  return (
    <div>
      <h1>Hii i am {name} Yazdan</h1>
      <img src={myPhoto} alt="about_me" className="myImage"/>
      <p>I developed this Application useing the public api of swiggy </p>
    </div>
  );
}
