import React from "react";
import "../../components/Layout.css";

export default function Footer() {
  return (
    <>
      <footer className=" footer text-muted">
        <div className="container">
          &copy; 2022 - SuaVoz -{" "}
          <a asp-area="" asp-controller="Home" asp-action="Privacy">
            Privacidade
          </a>{" "}
          /
          <a asp-area="" asp-controller="Home" asp-action="Termos">
            Termos de Uso
          </a>
        </div>
      </footer>
      <footer class="footer__container">
        <div class="footer__content container">
          <div class="footer__header">
            <img src="~/img/suaVoz-bege.png" alt="" class="footer__logo" />
            <p class="footer__paragraph">&copy; 2021 Company, Inc</p>
          </div>
          <ul class="footer__body">
            <li class="footer__item">
              <a href="#" class="footer__links">
                <i class="fa-brands fa-instagram social__media"></i>
              </a>
            </li>
            <li class="footer__item">
              <a href="#" class="footer__links">
                <i class="fa-brands fa-facebook social__media"></i>
              </a>
            </li>
            <li class="footer__item">
              <a href="#" class="footer__links">
                <i class="fa-brands fa-twitter social__media"></i>
              </a>
            </li>
            <li class="footer__item">
              <a href="#" class="footer__links">
                <i class="fa-brands fa-youtube social__media"></i>
              </a>
            </li>
            <li class="footer__item">
              <a href="#" class="footer__links">
                <i class="fa-brands fa-twitch social__media"></i>
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
}
