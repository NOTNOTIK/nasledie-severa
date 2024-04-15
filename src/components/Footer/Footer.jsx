import React from "react";
import footerLogo from "../../images/FooterPng.svg";
import footerGroup from "../../images/FooterGroup.png";
import paycards from "../../images/paycards.svg";
import placestart from "../../images/placestart.svg";
export default function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="footer__container1">
          <img src={footerLogo} alt="" className="footer__logo" />
          <nav className="footer__nav">
            <a href="#" className="footer__link">
              Отчеты
            </a>
            <a href="#" className="footer__link">
              История
            </a>
            <a href="#" className="footer__link">
              Документы
            </a>

            <a href="#" className="footer__link">
              Новости
            </a>
            <a href="#" className="footer__link">
              Галерея
            </a>
            <a href="#" className="footer__link">
              Работа в фонде
            </a>

            <a href="#" className="footer__link">
              Объекты
            </a>
            <a href="#" className="footer__link">
              Контакты
            </a>
            <a href="#" className="footer__link">
              Благополучателям
            </a>
          </nav>
          <div className="footer__info">
            <p className="footer__phone">+7 911 503-15-18</p>
            <p className="footer__adress">
              60009, г. Вологда, <br />
              ул. Галкинская, д. 62/а
            </p>
            <p className="footer__email">office@nasledie-severa.ru</p>
          </div>
        </div>
        <img src={footerGroup} alt="" className="footer__group" />
        <div className="footer__politics">
          <p className="footer__text">
            © Благотворительный фонд «Наследие Русского Севера», 2022
          </p>
          <p className="footer__text">Политика конфиденциальности</p>
          <div className="footer__block">
            <p className="footer__text">Оплата:</p>
            <img src={paycards} alt="" className="footer__paycards" />
          </div>
          <div className="footer__block2">
            <p className="footer__text">Сделано в</p>
            <img src={placestart} alt="" className="footer__placestart" />
          </div>
        </div>
      </footer>
    </>
  );
}
