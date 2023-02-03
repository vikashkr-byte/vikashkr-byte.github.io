import React, { useContext } from "react";
import "./ProductList.css";
import Product from "../product/Product";
import Zappos from "../../img/zappos_long_screenshot.png";
import Sepora from "../../img/sepora_india_long_screenshot.png";
import Zee5 from "../../img/zee_5_long_screenshot.png";
import HTML from "../../img/html5_bgless.png";
import CSS from "../../img/css_logo_bgless.png";
import JavaScript from "../../img/js_bgless.png";
import React_logo from "../../img/React-icon.png";
import Axios from "../../img/axios-bgless.png";
import JSON from "../../img/json_server-bgless.png";
import Router_Dom from "../../img/react-router-dom-logo.png";
import Chakr_UI from "../../img/chakra-ui-bgless.png";
// import { ThemeProContext } from "../../Contexts/ThemeContext";
let projectArray = [
  {
    title: "Zappos Clone",
    image: Zappos,
    link: "https://silly-rabanadas-972b2d.netlify.app/",
    gitHub:
      "https://github.com/vikashkr-byte/Zappos_com_Clone/tree/main/zappos_com",
    description:
      "Zappos.com is an American online shoe and clothing retailer based in Las Vegas, United States.",
    project_details: [
      {
        project_key: "Project Type : ",
        value: "Individual Project",
      },
      {
        project_key: "Duration : ",
        value: "05 days",
      },
      {
        project_key: "Role : ",
        value:
          "Homepage with using Chakra UI components only, login using reqres.in api, using axios for fetching data, private route, and checkout.",
      },
    ],

    stack: [
      {
        name: "React",
        image: React_logo,
      },
      {
        name: "Chakra UI",
        image: Chakr_UI,
      },
      {
        name: "JSON server",
        image: JSON,
      },
      {
        name: "Axios",
        image: Axios,
      },
      {
        name: "React Router Dom",
        image: Router_Dom,
      },
    ],
  },
  {
    title: "Zee 5 Clone",
    image: Zee5,
    link: "https://startling-beijinho-cb157a.netlify.app/",
    gitHub: "https://github.com/vikashkr-byte/zee5_com_Clone",
    description:
      "ZEE5 is an Indian subscription video on-demand and over-the-top streaming service, run by Zee Entertainment Enterprises.",
    project_details: [
      {
        project_key: "Project Type : ",
        value: "Accomplished with a team of 5 developers.",
      },
      {
        project_key: "Duration : ",
        value: "05 days.",
      },
      {
        project_key: "Role : ",
        value: "Landing page with carousel and page navigation.",
      },
    ],
    stack: [
      {
        name: "HTML",
        image: HTML,
      },
      {
        name: "CSS",
        image: CSS,
      },
      {
        name: "JavaScript",
        image: JavaScript,
      },
    ],
  },
  {
    title: "Sephora India Clone",
    image: Sepora,
    link: "https://magenta-melba-85b7ee.netlify.app/",
    gitHub: "https://github.com/vikashkr-byte/Sephora_clone",
    description:
      " Sephora is the leading chain of cosmetics and perfume stores in India with a powerful beauty presence in countries around the world.",
    project_details: [
      {
        project_key: "Project Type : ",
        value: "Accomplished with a team of 5 developers.",
      },
      {
        project_key: "Duration : ",
        value: "05 days",
      },
      {
        project_key: "Role : ",
        value: "User validation with local storage.",
      },
    ],
    stack: [
      {
        name: "HTML",
        image: HTML,
      },
      {
        name: "CSS",
        image: CSS,
      },
      {
        name: "JavaScript",
        image: JavaScript,
      },
    ],
  },
];
let darkBackGround="black"
let lightBackGround="white"
const ProductList = () => {
  // const {theme}=useContext(ThemeProContext)
  // console.log('theme:', theme)
  //   let darkmode
  //   if(theme=="dark"){
  //    darkmode=true
  //   }else{
  //    darkmode=false
  //   }
  return (
    <div className="plc" id='projects' style={{backgroundColor:"rgb(250,250,250)",color:darkBackGround}}>
      <div className="pl-texts">
        <h1 className="pl-title">Explore, Learn & Create.</h1>
        <p className="pl-desc">
          This section displays some of my projects that I've worked on while
          Learning at Masai School.
        </p>
      </div>
      <div className="pl-list">
        {projectArray.map((item) => (
          <Product
            key={item.image}
            title={item.title}
            image={item.image}
            link={item.link}
            gitHub={item.gitHub}
            description={item.description}
            project_details={item.project_details}
            stack={item.stack}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
