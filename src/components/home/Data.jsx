import React from "react";

const Data = () => {
  return (
    <div className="home__data">
      <h1 className="home__title">Vikash Kumar</h1>
      <h3 className="home__subtitle">MERN Developer</h3>
      <p className="home__description">I like learning new things.</p>
      <a href="#contacts" >
        <button
          style={{
            position: "relative",
            height: "32px",
            width: "130px",
            backgroundColor: "black",
            fontSize: "16px",
            display: "flex",
            justifyContent: "space-between",
            borderRadius: "10px",
            alignItems: "center",
            color: "white",
            padding: "5px 15px",
          }}
        >
          Say Hello!
          <i
            className="uil uil-message"
            size="12px"
            style={{
              marginLeft: "10px",
              transform: "rotate(-25deg)",
              position: "absolute",
              marginLeft: "90px",
              marginBottom: "2px",
            }}
          ></i>
        </button>
      </a>
    </div>
  );
};

export default Data;
