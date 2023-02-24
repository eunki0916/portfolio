import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Home from "./pages/Home";
import Project from "./pages/Project";

import Contact from "./pages/Contact";

import { FcFolder } from "react-icons/fc";
import { MdClose } from "react-icons/md";
import Menubar from "./button/Menubar";

function App() {
  return (
    <>
      <div className="home_wrap">
        <div className="top">
          <div className="title">
            <div className="img">
              <FcFolder />
            </div>
            <div className="text">포트폴리오</div>
            <div className="close">
              <MdClose />
            </div>
          </div>
          <div className="menu"></div>
        </div>

        <div className="bot">
          <div className="left">
            <Menubar />
          </div>
          <div className="right">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/project" element={<Project />}></Route>
            </Routes>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
