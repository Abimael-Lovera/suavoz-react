import React from "react";
import "../../components/Layout.css";
import logoFooter from "../../assets/suaVoz-bege.png";

export default function Footer() {
  return (
    <>
      <footer className="footer__container">
        <div className="footer__content container">
          <div className="footer__header">
            
            <div className="logoETextoFooter">
              <img src={logoFooter} alt="logo Sua Voz" />
              <p className="container">
                &copy; 2022 - SuaVoz -
                <a className="linksLgpd" href=""> Privacidade </a>
                | 
                <a className="linksLgpd" href=""> Termos de Uso</a>
              </p>
            </div>
          </div>
          <ul className="footer__body">
            <li className="footer__item">
              <a href="#" className="footer__links">
                <i className="fa-brands fa-instagram social__media"></i>
              </a>
            </li>
            <li className="footer__item">
              <a href="#" className="footer__links">
                <i className="fa-brands fa-facebook social__media"></i>
              </a>
            </li>
            <li className="footer__item">
              <a href="#" className="footer__links">
                <i className="fa-brands fa-twitter social__media"></i>
              </a>
            </li>
            <li className="footer__item">
              <a href="#" className="footer__links">
                <i className="fa-brands fa-youtube social__media"></i>
              </a>
            </li>
            <li className="footer__item">
              <a href="#" className="footer__links">
                <i className="fa-brands fa-twitch social__media"></i>
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
}
