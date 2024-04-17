import formPhoto from "../../../../images/formPhoto.svg";
import React from "react";
import { withMask } from "use-mask-input";
export default function Form() {
  return (
    <>
      <div className="form">
        <h2 className="form__title">
          Хотите помочь, но не знаете с чего начать? Свяжитесь с нами
        </h2>

        <div className="form__img"></div>
        <form className="form__form">
          <input
            type="phone"
            className="form__input"
            placeholder="Телефон"
            ref={withMask("+7(999)-999-99-99")}
          />
          <button className="form__submit">Заказать звонок</button>
          <p className="form__text">
            Нажимая на кнопку, вы соглашаетесь{" "}
            <span>на обработку персональных данных</span>
          </p>
        </form>
      </div>
    </>
  );
}
