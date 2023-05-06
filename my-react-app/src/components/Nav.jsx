import logo from "../images/Logo.svg";
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import { useState } from "react";

const Nav = () => {
  window.addEventListener("scroll", () => {
    const header = document.querySelector("#header");
    header.classList.toggle("scroll", window.scrollY > 0);
  });

  const [showMenu, setShowMenu] = useState(true);

  const toggleHandler = () => {
    setShowMenu((prevState) => !prevState);
  };
  return (
    <header id="header">
      <nav className="container">
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <ul className={showMenu ? "nav__list" : "nav__list active"}>
          <li>
            <a href="/" className="nav__link">
              About us
            </a>
          </li>
          <li>
            <a href="/" className="nav__link">
              Services
            </a>
          </li>
          <li>
            <a href="/" className="nav__link">
              Use Cases
            </a>
          </li>
          <li>
            <a href="/" className="nav__link">
              Pricing
            </a>
          </li>
          <li>
            <a href="/" className="nav__link">
              Blog
            </a>
          </li>
          <li>
            <a href="/" className="nav__link request__btn">
              Request a quote
            </a>
          </li>
        </ul>
        <ul className="nav__list-desk">
          <li>
            <a href="/" className="nav__link-desk">
              About us
            </a>
          </li>
          <li>
            <a href="/" className="nav__link-desk">
              Services
            </a>
          </li>
          <li>
            <a href="/" className="nav__link-desk">
              Use Cases
            </a>
          </li>
          <li>
            <a href="/" className="nav__link-desk">
              Pricing
            </a>
          </li>
          <li>
            <a href="/" className="nav__link-desk">
              Blog
            </a>
          </li>
          <li>
            <a href="/" className="request__btn-desk">
              Request a quote
            </a>
          </li>
        </ul>
        <button className="toggle__btn" onClick={toggleHandler}>
          <span>{showMenu ? <IoMenu /> : <IoClose />}</span>
        </button>
      </nav>
    </header>
  );
};

export default Nav;
