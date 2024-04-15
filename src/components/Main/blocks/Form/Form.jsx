import formPhoto from "../../../../images/formPhoto.svg";
export default function Form() {
  return (
    <>
      <div className="form">
        <h2 className="form__title">
          Хотите помочь, но не знаете с чего начать? Свяжитесь с нами
        </h2>

        <div className="form__img"></div>
        <form className="form__form">
          <input type="phone" className="form__input" placeholder="Телефон" />
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
