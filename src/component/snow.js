import "./snow.css";
import React, { useEffect } from "react";

function Snowflake({ findId }) {
  useEffect(() => {
    const snowflake = document.createElement("div");
    const delay = Math.random() * 10;
    const MIN_DURATION = 10;
    const initialOpacity = Math.random();
    const duration = Math.random() * 20 + MIN_DURATION;

    snowflake.classList.add("snowflake");
    snowflake.style.left = `${Math.random() * window.screen.width}px`;
    snowflake.style.animationDelay = `${delay}s`;
    snowflake.style.opacity = initialOpacity;
    snowflake.style.animation = `fall ${duration}s linear`;

    findId.appendChild(snowflake);

    setTimeout(() => {
      findId.removeChild(snowflake);
      Snowflake();
    }, (duration + delay) * 1000);
  }, [findId]);

  return null;
}

export default Snowflake;
