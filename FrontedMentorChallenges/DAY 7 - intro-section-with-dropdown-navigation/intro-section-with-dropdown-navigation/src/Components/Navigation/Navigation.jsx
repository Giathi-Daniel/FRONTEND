import React from "react";
import "./Navigation.css";
import "./Navigation.js";

const Navigation = () => {
  return (
    <nav>
      <div className="nav_container">
        <a href="#" className="logo">
          snap
        </a>

        {/* *********** NAVLINKS ************* */}
        <ul className="nav_links">
          <li className="features">
            <a href="#">
              Features <ion-icon name="chevron-down-outline"></ion-icon>
              <div id="features">
                <ul className="drop-down">
                  <li>
                    <ion-icon name="today-outline todo"></ion-icon>
                    <a href="#">Todo List</a>
                  </li>
                  <li>
                    <ion-icon name="calendar-outline cal"></ion-icon>
                    <a href="#">Calendar</a>
                  </li>
                  <li>
                    <ion-icon name="notifications-outline out"></ion-icon>
                    <a href="#">Reminders</a>
                  </li>
                  <li>
                    <ion-icon name="time-outline clock"></ion-icon>
                    <a href="#">Planning</a>
                  </li>
                </ul>
              </div>
            </a>
          </li>
          <li className="company">
            <a href="#">
              Company <ion-icon name="chevron-down-outline"></ion-icon>
              <div id="company">
                <ul className="drop-down">
                  <li>History</li>
                  <li>Our Team</li>
                  <li>Blog</li>
                </ul>
              </div>
            </a>
          </li>
          <li>
            <a href="#">Careers</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
        </ul>

        {/* *********** FORM ************* */}
        <ul className="nav_form">
          <li>
            <a href="#">Login</a>
          </li>
          <li>
            <a href="#" className="btn_primary">
              Register
            </a>
          </li>
        </ul>

        <div className="menu_btn">
          <ion-icon name="menu-outline" id="open"></ion-icon>
          <ion-icon name="close-outline" id="close"></ion-icon>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
