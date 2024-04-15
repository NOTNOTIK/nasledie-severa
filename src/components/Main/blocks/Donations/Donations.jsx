import img53 from "../../../../images/Rectangle53.svg";
import aboutborder from "../../../../images/About111.png";
import poloska1 from "../../../../images/poloska1.svg";
import poloska2 from "../../../../images/poloska2.svg";
import poloska3 from "../../../../images/poloska3.svg";
export default function Donations() {
  return (
    <div className="Donations">
      <img src={aboutborder} alt="" className="Donations__border" />
      <h2 className="Donations__title">Пожертвования</h2>
      <div className="Donations__container">
        <div className="Donations__block">
          <div className="Donations__img-container">
            <img src={img53} alt="" className="Donations__img" />
            <h3 className="Donations__name">
              Храм Петра и Павла в Новинках 1772 год
            </h3>
            <p className="Donations__sum">Собрано: 349 003 руб.</p>
            <img src={poloska1} alt="" className="Donations__poloska" />
            <p className="Donations__purpose">Нужно собрать: 50 700 000 руб</p>
          </div>
          <button className="Donations__button">Подробнее</button>
        </div>
        <div className="Donations__block">
          <div className="Donations__img-container">
            <img src={img53} alt="" className="Donations__img" />
            <h3 className="Donations__name">Сергиевский храм, с. Горы</h3>
            <p className="Donations__sum">Собрано: 349 003 руб.</p>
            <img src={poloska2} alt="" className="Donations__poloska" />
            <p className="Donations__purpose">Нужно собрать: 50 700 000 руб</p>
          </div>
          <button className="Donations__button">Подробнее</button>
        </div>
        <div className="Donations__block">
          <div className="Donations__img-container">
            <img src={img53} alt="" className="Donations__img" />
            <h3 className="Donations__name">
              Сергиевский храм, с. Горы и Храм Петра и Павла в Новинках 1772 год
            </h3>
            <p className="Donations__sum">Собрано: 349 003 руб.</p>
            <img src={poloska3} alt="" className="Donations__poloska" />
            <p className="Donations__purpose">Нужно собрать: 50 700 000 руб</p>
          </div>
          <button className="Donations__button">Подробнее</button>
        </div>
      </div>
    </div>
  );
}
