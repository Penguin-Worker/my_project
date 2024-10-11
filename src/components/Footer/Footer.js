import React, { Component } from 'react';
import './Footer.css'; 

class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="FooterRectangle"></div>
        <div className="FooterRecG"></div>
        <div className="FooterRecV"></div>
        <div className="FooterDownRight"></div>
        <div className="FooterTop2">
          <div className="FooterTop2text" data-i18n="we_treat_your_eyes_with_care">
            We treat your eyes with care
          </div>
        </div>
        <div className="FooterTop1">
          <a href="../HomePage/index.html" className="FooterTop1text">yes.</a>
        </div>
        <div className="Footerbase1">
          <div className="Footerbase1text">Designed and built by Margarita</div>
        </div>
        <div className="Footerbase2">
          <div className="Footerbase2text">2020 Yes for Eyes</div>
        </div>
        <div className="Footerbase3">
          <img src="Images/Vector50.svg" className="Footerbase3v" alt="Vector Image" />
        </div>
        <div className="Footerbase4">
          <a href="#Shop" className="Footerbase4text">Shop</a>
        </div>
        <div className="Footerbase5">
          <a href="/Custom/Custom.html" className="Footerbase5text" data-i18n="custom_care">Customer care</a>
        </div>
        <div className="Footerbase6">
          <a href="#Info" className="Footerbase6text">Info</a>
        </div>
        <div className="Footerbase7">
          <a href="/Sun/Sun.html" className="Footerbase7text" data-i18n="sun">Sun</a>
        </div>
        <div className="Footerbase8">
          <a href="/Optical/Optical.html" className="Footerbase8text" data-i18n="optical">Optical</a>
        </div>
        <div className="Footerbase9">
          <a href="#Brands" className="Footerbase9text">Brands</a>
        </div>
        <div className="Footerbase10">
          <a href="../Privacy/privacy.html" className="Footerbase10text">FAQ</a>
        </div>
        <div className="Footerbase11">
          <div className="Footerbase11text">Shipping and returns</div>
        </div>
        <div className="Footerbase12">
          <div className="Footerbase12text" data-i18n="fit_guide">Fit guide</div>
        </div>
        <div className="Footerbase13">
          <a href="../Privacy/privacy.html" className="Footerbase13text" data-i18n="Terms_and_conditions">Terms and conditions</a>
        </div>
        <div className="Footerbase14">
          <a href="../Privacy/privacy.html" className="Footerbase14text" data-i18n="Privacy_Policy">Privacy policy</a>
        </div>
        <div className="Footerbase15">
          <div className="Footerbase15text">We are always close</div>
        </div>
        <div className="Footerbase16">
          <div className="Footerbase16text">No spam, just pure inspiration and good news</div>
        </div>
        <div className="Footerbase17">
          <div className="Footerbase17text">This site is a design concept and not meant for commercial purposes. I don't own or sell any goods displayed on this site.</div>
        </div>
        <div className="Footerbase18" onClick={() => this.callPhoneNumber('+123456789')}>
          <div className="Footerbase18text">+375 44 538 6581</div>
        </div>
        <div className="Footerbase19">
          <a href="mailto:your-email@example.com?subject=Subject&body=Message%20Body" className="Footerbase19text">nikiplaycar@gmail.com</a>
        </div>
        <div className="FooterDown">
          <div className="FooterDownRec1"></div>
          <div className="FooterDownRec2"></div>
          <div className="FooterDownRec3"></div>
          <div className="FooterDownRec4"></div>
          <div className="FooterDownRec5"></div>
          <div className="Footercomma1">,</div>
          <div className="Footercomma2">,</div>
          <div className="Footercomma3">,</div>
          <div className="Footercomma4">,</div>
          <div className="Footerdowntext">Photo materials belong to</div>
          <div className="Footerdown1">
            <div className="Footerdown1text">Unsplash</div>
          </div>
          <div className="Footerdown2">
            <div className="Footerdown2text">Modern Legacy</div>
          </div>
          <div className="Footerdown3">
            <div className="Footerdown3text">TIJN</div>
          </div>
          <div className="Footerdown4">
            <div className="Footerdown4text">Carla Colour</div>
          </div>
          <div className="Footerdown5">
            <div className="Footerdown5text">Krewe</div>
          </div>
        </div>
        <div className="FooterLogoInst">
          <img src="Images/Vector51.svg" className="FooterLogoInstv1" alt="Vector Image" />
          <img src="Images/Vector52.svg" className="FooterLogoInstv2" alt="Vector Image" />
        </div>
        <a href="https://github.com/Penguin-Worker" className="FooterLogoFB">
          <img src="Images/Vector53.svg" className="FooterLogoFBv" alt="Vector Image" />
        </a>
      </footer>
    );
  }

  callPhoneNumber(number) {
    // Здесь можно добавить функциональность для обработки клика на номер телефона
    alert(`Calling ${number}`);
  }
}

export default Footer;
