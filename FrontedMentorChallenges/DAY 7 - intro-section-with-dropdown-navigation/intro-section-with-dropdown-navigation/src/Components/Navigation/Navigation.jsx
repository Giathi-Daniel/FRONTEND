import React from "react";
import "./Navigation.css";

const Navigation = () => {
  return (
    <nav>
      <div className="nav_container">
        <a href="#" className="logo">
          snap
        </a>

        <ul className="nav_links">
          <li className="features">
            <a href="#">
              Features <ion-icon name="chevron-down-outline"></ion-icon>
              {/* <ul className="drop-down">
                <li>
                  <i></i>
                  <a href="#">Todo List</a>
                </li>
                <li>
                  <i className="fas fa-calendar"></i>
                  <a href="#">Calendar</a>
                </li>
                <li>
                  <i className="fas fa-notifications"></i>
                  <a href="#">Reminders</a>
                </li>
                <li>
                  <i></i>
                  <a href="#">Planning</a>
                </li>
              </ul> */}
            </a>
          </li>
          <li className="company">
            <a href="#">
              Company <ion-icon name="chevron-down-outline"></ion-icon>
              {/* <ul className="drop-down">
                <li>History</li>
                <li>Our Team</li>
                <li>Blog</li>
              </ul> */}
            </a>
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
