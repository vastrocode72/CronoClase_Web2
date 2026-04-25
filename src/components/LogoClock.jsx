import React from "react";
import "../styles/StyleLogIn.css";
import clockPng from "../assets/clock.png";

export default function LogoClock() {
    return (
        <div className="main_log_in">
              <div className="container_title_crono">
                <h1 className="featurette-heading fw-normal lh-1 titleCrono">
                  Cron
                  <span>
                    <img className="userCrono" src={clockPng} alt="clock" />
                  </span>
                  Clase
                </h1>
              </div>
        </div>
    )
}

