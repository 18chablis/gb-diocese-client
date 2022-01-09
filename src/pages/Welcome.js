import React from "react";
import { Link } from "react-router-dom";

import "../styles/welcome.css";

const Welcome = () => {
  return (
    <div className="welcome flex-column ">
      <div class="loader pb-20">
        <span>--</span>Bienvenue a GB-Diocese Web App<span>--</span>
      </div>
      <div className="pt-20 ">
        <Link to="/login" className="btn">
          Login to continue
        </Link>
      </div>
    </div>
  );
};

export default Welcome;
