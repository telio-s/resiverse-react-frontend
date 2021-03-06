import React, { useRef, useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from "./page/Home";
import Account from "./page/Account";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faCircleXmark,
  faFileLines,
  faUser,
  faPenToSquare,
} from "@fortawesome/free-regular-svg-icons";
import {
  faAngleLeft,
  faPlus,
  faEllipsis,
  faXmark,
  faCircleUser,
  faHouse,
  faBell,
  faCircleCheck,
  faCamera,
  faComputerMouse,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import Agreement from "./page/Agreement";

library.add(faCircleXmark);
library.add(faAngleLeft);
library.add(faChevronDown);
library.add(faPlus);
library.add(faEllipsis);
library.add(faXmark);
library.add(faBell);
library.add(faCircleUser);
library.add(faUser);
library.add(faFileLines);
library.add(faHouse);
library.add(faPenToSquare);
library.add(faCircleCheck);
library.add(faCamera);
library.add(faComputerMouse);
library.add(faPaperPlane);


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/account" element={<Account />} />
          <Route path="/agreement" element={<Agreement />} />
        </Routes>
        <ToastContainer />
      </Router>
    </>
  );
}

export default App;
