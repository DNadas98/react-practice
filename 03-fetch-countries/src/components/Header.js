import React from "react";

function Header({ pageTitle }) {
  return (
    <div className="Header">
      <h1>
        <a href="/">{pageTitle}</a>
      </h1>
    </div>
  );
}

export default Header;
