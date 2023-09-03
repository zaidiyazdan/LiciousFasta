import React, { useState } from "react";
import myPhoto from "../assets/img/IMG_20220710_200024.jpg";
import { useState } from "react";

export default function Profile({name}) {
    const [count,setCount] = useState(0);
    const inCount = () =>{
        setCount(count + 1)
    }
  return (
    <div>
      <h1>Hii i am {name} Yazdan</h1>
      <img src={myPhoto} alt="about_me" className="myImage"/>
      <p>I developed this Application useing the public api of swiggy </p>
      {/* <p>{count}</p>
      <button onClick={inCount}>Click Me</button> */}
    </div>
  );
}
