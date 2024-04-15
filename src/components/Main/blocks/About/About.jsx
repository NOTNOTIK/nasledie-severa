import about from "../../../../images/About.svg";
import group from "../../../../images/Group.png";
import aboutborder from "../../../../images/About111.png";
export default function About() {
  return (
    <>
      <div className="About">
        <img src={aboutborder} alt="" className="About__border" />
        <div className="About__container">
          <div className="About__photo">
            <img src={group} alt="" className="About__photo-abs" />
            <img src={about} alt="" className="About__photo-img" />
          </div>
          <div className="About__info">
            <h2 className="About__title">О фонде</h2>
            <p className="About__text">
              Основной целью деятельности фонда является оказание
              благотворительной помощи в восстановлении порушенных храмов
              Московской области. В своей работе Фонд стремится, прежде всего,
              сохранить и передать потомкам практически утерянные храмы. Если
              это не сделать сейчас, многие святыни разрушатся, как уже исчезли
              безвозвратно многие сотни храмов.
            </p>
            <p className="About__text">
              На сегодняшний день на собранные пожертвования Фондом ведутся
              реставрационные работы по следующим храмам: Ново-Никольскому
              собору города Можайска, Троицкому храму села Бисерово (Бронницкий
              церковный округ), - Покровскому храму села Никоновское (Бронницкий
              церковный округ), Сергиевскому храму села Горы (Озерский церковный
              округ), Никольскому храму Никола-Будки г. Серпухов (Серпуховский
              церковный округ), по зданию больничного корпуса с домовой церковью
              XIX в. Общины «Отрада и утешение» села Добрыниха.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
