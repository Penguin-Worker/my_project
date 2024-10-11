import React, { Component } from 'react';
import './Header.css'; // Импортируйте CSS-файл

class Header extends Component {
  render() {
    return (
      <header>
        <div className="MenuHigh">
          <nav>
            <div className="mobile-only-content" id="burger-menu1">
              <div className="TABmenu">
                <div className="burger-menu-content" id="burger-menu-content">
                  <nav className="BG">
                    <ul className="burger-menu-links">
                      <li><a href="../HomePage/index.html" data-i18n="home">Home</a></li>
                      <li><a href="../Sun/Sun.html" data-i18n="sun">Sun</a></li>
                      <li><a href="../Optical/Optical.html" data-i18n="optical">Optical</a></li>
                      <li><a href="../Custom/Custom.html" data-i18n="fit_guide">Fit guide</a></li>
                      <li><a href="../Privacy/privacy.html" data-i18n="Privac_Policy">Privacy Policy</a></li>
                      <li><a href="../Privacy/privacy.html" data-i18n="Terms_of_Service">Terms of Service</a></li>
                      <li><button id="theme-toggle" className="StyleBT">T</button></li>
                      <li><button id="openRegisterModal" className="StyleB"><span className="i18n signup">Sign up</span></button></li>
                      <li><button id="openLoginModal" className="StyleB"><span className="i18n login">Log in</span></button></li>
                      <li><button id="logoutButton" className="StyleB"><span className="i18n logout">Log out</span></button></li>
                    </ul>
                  </nav>
                </div>
                <div className="rectangleM1"></div>
                <div className="rectangleM2"></div>
                <div className="rectangleM3"></div>
              </div>
              <div className="rectangleM4"></div>
              <div className="rectangleM5"></div>
            </div>
            <div className="Menu1">
              <div className="rectangle-9"></div>
              <a href="../Custom/Custom.html" className="Menu1text" data-i18n="customer_care">Customer care</a>
            </div>
            <div className="Menu2">
              <div className="rectangle-4"></div>
              <a href="../Privacy/privacy.html" className="Menu2text" data-i18n="account">Account</a>
            </div>
            <div className="Menu3">
              <div className="rectangle-5"></div>
              <a href="../Optical/Optical.html" className="Menu3text" data-i18n="optical">Optical</a>
            </div>
            <div className="Menu4">
              <div className="rectangle-6"></div>
              <a href="../HomePage/index.html" className="Menu4text">yes.</a>
            </div>
            <div className="Menu5">
              <div className="rectangle-7"></div>
              <a href="../Sun/Sun.html" className="Menu5text" data-i18n="sun">Sun</a>
            </div>
            <div className="Menu6">
              <div className="rectangle-8"></div>
              <a href="../Custom/Custom.html" className="Menu6text" data-i18n="fit_guide">Fit guide</a>
            </div>
          </nav>
          <div className="animation-container">
            <div className="cube">
              <div className="side front"></div>
              <div className="side back"></div>
              <div className="side1 left"></div>
              <div className="side right"></div>
              <div className="side top"></div>
              <div className="side1 bottom"></div>
            </div>
            {/* Повторите для других кубов, если нужно */}
          </div>
          <div className="rectangle-1"></div>
          <div className="rectangle-2"></div>
        </div>
        
      </header>
    );
  }
}

export default Header;
