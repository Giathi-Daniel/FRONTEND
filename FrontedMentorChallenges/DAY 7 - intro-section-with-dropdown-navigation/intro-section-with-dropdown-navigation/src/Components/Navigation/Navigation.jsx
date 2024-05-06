import React from "react";

const Navigation = () => {
  return (
    <nav>
      <div>
        <a href="#">Navigation</a>
        <ul className="nav_links">
          <li>
            <a href="#">Features</a>
          </li>
          <li>
            <a href="#">Company</a>
          </li>
          <li>
            <a href="#">Careers</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
        </ul>

        <ul className="nav_form">
          <li>
            <a href="#">Login</a>
          </li>
          <li>
            <a href="#">Register</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
