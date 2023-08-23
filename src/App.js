import logo from "./logo.svg";
import "./App.css";
import Header from "./Header";
import React from "react";

function App() {
  // const element = React.createElement(
  //   "div",
  //   { className: "block" },
  //   React.createElement(
  //     "h2",
  //     {
  //       className: "sub-title",
  //       id: "sub-title",
  //     },
  //     "Khoá học ReactJS"
  //   ),
  //   React.createElement(
  //     "h1",
  //     {
  //       className: "title",
  //       id: "title",
  //     },
  //     "learning english with alone"
  //   ),
  //   React.createElement(
  //     "p",
  //     {
  //       className: "title",
  //       id: "title",
  //     },
  //     React.createElement(
  //       "a",
  //       {
  //         href: "https://unicode.vn",
  //         target: "_blank",
  //         className: "text--link",
  //         title: "Đăng ký khoá học",
  //       },
  //       "Đăng ký ngay"
  //     )
  //   )
  // );

  return (
    <div>
      <div className="block">
        <h2 className="sub-title" id="sub-title">
          Khoá học ReactJS
        </h2>
        <h1 className="title" id="title">
          Unicode Academy
        </h1>
        <p className="text">
          <a href="https://unicode.vn" className="text--link" target="_blank">
            Đăng ký ngay
          </a>
        </p>
      </div>
      <div className="element">Khoá học lập trình tại unicode</div>
      <label htmlFor="username">UserName</label>
      <input
        type="text"
        name="username"
        id="username"
        defaultValue="YushingDev@gmail.com"
      />
    </div>
  );
}

export default App;
