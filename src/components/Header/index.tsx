import { useState } from "react";
import "./index.scss";
import { FiMenu, FiX } from "react-icons/fi";

export const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      {/* */}
      {/* # Mobile Menu Button */}
      <button
        className={`mobile-toggle ${isMobileMenuOpen ? "mobile-toggle--hidden" : ""}`}
        onClick={() => setIsMobileMenuOpen(true)}
      >
        <FiMenu />
      </button>
      <header className={`header ${isMobileMenuOpen ? "header--open" : ""}`}>
        {/* # Container */}
        <div className="header__container">
          <button className="header__close-btn" onClick={() => setIsMobileMenuOpen(false)}>
            <FiX />
          </button>
          <h1 className="header__logo">
            {"<"} Ricardo {"/>"}
          </h1>
          {/* # Navbar */}
          <nav className="header__nav">
            {/* # About me */}
            <ul className="header__links header__links--main">
              <li className="header__item header__item--label">About me.</li>
              <li className="header__item">
                <a className="header__link" href="">
                  About
                </a>
              </li>
              <li className="header__item">
                <a className="header__link" href="">
                  CV
                </a>
              </li>
            </ul>
            {/* # Contact Links */}
            <ul className="header__links header__links--bottom">
              <li className="header__item header__item--label">Contact.</li>
              <li className="header__item">
                <a className="header__link" href="">
                  LinkedIn
                </a>
              </li>
              <li className="header__item">
                <a className="header__link" href="">
                  Github
                </a>
              </li>
              <li className="header__item">
                <a className="header__link" href="">
                  Mail
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};
