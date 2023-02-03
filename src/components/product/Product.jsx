import React, { useContext } from "react";
// import { ThemeProContext } from "../../Contexts/ThemeContext";
import "./Product.css";

let darkBackGround = "black";
let lightBackGround = "white";
const Product = ({
  title,
  image,
  link,
  gitHub,
  description,
  project_details,
  stack,
}) => {
  // const { theme } = useContext(ThemeProContext);
  // console.log("theme:", theme);
  // let darkmode;
  // if (theme == "dark") {
  //   darkmode = true;
  // } else {
  //   darkmode = false;
  // }
  // console.log("project_details:", project_details);
  return (
    <div className="p" key={image} >
      <div className="p-wrapper">
        <div className="p-browser">
          <div className="p-circle red" back></div>
          <div className="p-circle yellow" back></div>
          <div className="p-circle green" back></div>
        </div>
        <a href={link} target={"_blank"} rel="noreferrer">
          <img src={image} alt="main" className="p-img" />
        </a>
      </div>
      {/* det  box */}
      <div
        className="p-details"
        style={{ backgroundColor: "rgb(250,250,250)" }}
      >
        <div className="p-details-title-box">
          <div className="p-details-title-box-left">
            <h4 className="p-details-title">{title}</h4>
          </div>
          <div className="p-details-title-box-right">
            <a
              href={link}
              target={"_blank"}
              className="p-details-github-link"
              rel="noreferrer"
            >
              <h5 className="p-details-github-text">Live</h5>
            </a>
            <a
              href={gitHub}
              className="p-details-github-link"
              target={"_blank"}
              rel="noreferrer"
            >
              <h5 className="p-details-github-text">GitHub</h5>
            </a>
          </div>
        </div>
        <hr />
        {/* description */}
        <div className="p-details-description">
          <p className="p-details-desc-text">{description}</p>
          <p className="p-details-project_details">Project Details :</p>
          {project_details.map((single_point) => (
            <p
              key={single_point.project_key}
              className="p-details-detail-text-points"
            >
              {" "}
              <span className="p-details-detail-point">
                • {single_point.project_key}
              </span>{" "}
              {single_point.value}
            </p>
          ))}
        </div>

        {/* description */}
        <hr />
        {/* stack */}
        <div className="p-details-tech-stack">
          <p className="p-details-project_details">Tech Stack Used :</p>
          <div className="p-details-tech-stack-box">
            {stack.map((item) => (
              <img
                src={item.image}
                alt="image"
                className="p-details-tech-stack-icons"
              />
            ))}
          </div>
        </div>
        {/* stack */}
      </div>
      {/* det box */}
    </div>
  );
};

export default Product;
