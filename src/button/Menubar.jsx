import React from "react";
import { AiOutlineHome } from "react-icons/ai";
import { FcFolder } from "react-icons/fc";
import { GoPerson } from "react-icons/go";
import { Link } from "react-router-dom";
import "./css/Menubar.css";

const Menubar = () => {
  return (
    <div className="button_wrap">
      <div className="buttons">
        <Link to="/">
          <AiOutlineHome />
          <div className="buttons_title">홈</div>
        </Link>
        <Link to="/contact">
          <GoPerson />
          <div className="buttons_title">프로필</div>
        </Link>
        <Link to="/project">
          <FcFolder />
          <div className="buttons_title">프로젝트</div>
        </Link>
      </div>
    </div>
  );
};

export default Menubar;
