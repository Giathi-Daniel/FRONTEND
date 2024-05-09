import React from "react";

const Landing = () => {
  return (
    <section className="page_container">
      <div className="page_right">
        <h1>Make remote work</h1>
        <p>
          Get your team in sync, no matter your location. Streamline processes,
          create team rituals, and watch productivity soar.
        </p>
        <button type="button" className="btn">
          Learn more
        </button>
      </div>
      <div className="page_left">
        <img src="/public/image-hero-desktop.png" alt="" />
      </div>
    </section>
  );
};

export default Landing;
