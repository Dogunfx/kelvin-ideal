/* eslint-disable @next/next/no-img-element */
"use client";

import { useState } from "react";

import "./animate.css";
const Animation = function () {
  var [margin, setMargin] = useState(-75);

  var divStyle = {
    marginTop: margin,
  };

  const handleChange = function () {
    setMargin(-320);
    setTimeout(function () {
      setMargin(-75);
    }, 400);
  };

  return (
    <>
      <main>
        <div style={divStyle}>
          <img src="dove.png" alt="a picture of a dove" />
        </div>

        <section></section>
      </main>
      <button onClick={handleChange}>Jump</button>
    </>
  );
};

export default Animation;
