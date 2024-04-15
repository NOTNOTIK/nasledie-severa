import React from "react";

import headerLogo from "../../images/headerLogo.svg";
import headerNasledie from "../../images/headerNasledie.svg";

export default function Header() {
  return (
    <>
      <header className="header">
        <div className="header__1">
          <div className="header__logo">
            <img src={headerLogo} alt="" className="header__img" />
            <img src={headerNasledie} alt="" className="header__nasledie" />
            <p className="header__text">
              Благотворительный фонд «Наследие
              <br /> Русского Севера»
            </p>
          </div>
          <div className="header__info">
            <p className="header__text">
              160009, г. Вологда,
              <br /> ул. Галкинская, д. 62/а
            </p>
            <button className="header__button">Помочь фонду</button>
          </div>
        </div>
        <nav className="header__nav">
          <p className="header__link">Объекты</p>
          <p className="header__link">Отчёты</p>
          <p className="header__link">История</p>
          <p className="header__link">Документы</p>
          <p className="header__link">Новости</p>
          <p className="header__link">Галерея</p>
          <p className="header__link">Работа в фонде</p>
          <p className="header__link">Благополучателям</p>
          <p className="header__link">Контакты</p>
        </nav>
      </header>
    </>
  );
}
