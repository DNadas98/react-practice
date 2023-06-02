import React from "react";

function Footer({ name }) {
  const year = new Date().getFullYear();
  return (
    <div className="Footer">
      <h1>
        {year} ©{" "}
        <a rel="noreferrer" target="_blank" href="https://github.com/DNadas98">
          {name}
        </a>
      </h1>
    </div>
  );
}

export default Footer;
