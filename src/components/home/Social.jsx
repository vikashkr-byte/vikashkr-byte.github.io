import React from "react";

const Social = () => {
  return (
    <div className="home__social">
      <a
        href="https://www.linkedin.com/in/vikash-kumar-474728182/"
        className="home__social-icon"
        target="_blank"
      >
        <i className="uil uil-linkedin"></i>
      </a>
      <a
        href="https://github.com/vikashkr-byte"
        className="home__social-icon"
        target="_blank"
      >
        <i className="uil uil-github"></i>
      </a>
      {/* <a href="" className="home__social-icon" target="_blank">
        <i className="uil uil-slack"></i>
      </a> */}
    </div>
  );
};

export default Social;
