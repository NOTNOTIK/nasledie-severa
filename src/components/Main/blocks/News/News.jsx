import img1 from "../../../../images/Rectangle53.png";
import img2 from "../../../../images/Rectangle54.svg";
import img3 from "../../../../images/Rectangle55.svg";
import img4 from "../../../../images/Rectangle56.svg";
import s777 from "../../../../images/Group777.png";
export default function News() {
  return (
    <>
      <div className="News">
        <h2 className="News__title">Новости</h2>
        <div className="News__container">
          <div className="News__block">
            <img src={img1} alt="" className="News__img" />
            <p className="News__text">
              Разнообразный и богатый опыт говорит нам, что курс на
              социально-ориентированный национальный проект требует определения
              и уточнения направлений прогрессивного развития.
            </p>
            <button className="News__button">Подробнее</button>
          </div>
          <div className="News__block">
            <img src={img2} alt="" className="News__img" />
            <p className="News__text">
              С учётом сложившейся международной обстановки, начало повседневной
              работы по формированию позиции создаёт предпосылки для
              глубокомысленных рассуждений.
            </p>
            <button className="News__button">Подробнее</button>
          </div>
          <div className="News__block">
            <img src={img3} alt="" className="News__img" />
            <p className="News__text">
              Но сложившаяся структура организации напрямую зависит от
              инновационных методов управления процессами.
            </p>
            <button className="News__button">Подробнее</button>
          </div>
          <div className="News__block">
            <img src={img4} alt="" className="News__img" />
            <p className="News__text">
              Не следует, однако, забывать, что сложившаяся структура
              организации, а также свежий взгляд на привычные вещи — безусловно
              открывает новые горизонты для инновационных методов управления
              процессами.
            </p>
            <button className="News__button">Подробнее</button>
          </div>
        </div>
        <img src={s777} alt="" className="News__7" />
      </div>
    </>
  );
}
