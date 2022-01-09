import React from "react";
import { Link } from "react-router-dom";
import "../styles/sidebar.css";

const Sidebar = () => {
  const token = localStorage.getItem("user-token");

  return (
    <div className="sidebar ">
      <div className="sidebar-wrapper">
        <Link to="/">
          <div className="logo-box center flex-column pt-20 pb-20">
            <div className="image-container center">
              <img
                src={`${process.env.PUBLIC_URL}/assets/logo-celestial-church-of-christ.png`}
                alt=""
                height="70px"
                width="160px"
              />
            </div>
            <span className="logo center">GB-DIOCESE</span>
          </div>
        </Link>
        {token !== null && token !== "" && (
          <div className="nav-wrapper">
            <ul className="nav">
              <li>
                <Link to="/parish">Paroisse</Link>
              </li>
              <li>
                <Link to="/shepherd">Berger</Link>
              </li>
              <li>
                <Link to="/anointment">Onction</Link>
              </li>
              <li>
                <Link to="/baptism">Bapteme</Link>
              </li>
              <li>
                <Link to="/user">utilisateur</Link>
              </li>
              <li>
                <Link to="/setting">Parametre</Link>
              </li>
            </ul>
          </div>
        )}
        {token !== null && token !== "" && (
          <div className="profile-wrapper pt-20 pb-20">
            <div className="profile flex-row center">
              <p>John Doe</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
