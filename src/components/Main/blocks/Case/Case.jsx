import img1 from "../../../../images/Rectangle1.svg";

export default function Case() {
  return (
    <>
      <div className="Case">
        <button className="map__arrow prev"> &#8249;</button>
        <button className=" map__arrow next">&#8250; </button>
        <h2 className="Case__title">Восстановленные храмы</h2>
        <div className="Case__container">
          <div className="Case__block">
            <div className="Case__img-container">
              <img src={img1} alt="" className="Case__img" />
              <img src={img1} alt="" className="Case__img" />
            </div>
            <div class="wrapper">
              <a href="#">
                <button className="Case__button">Подробнее о работе</button>
              </a>
              <div class="content">
                <h3 className="content__title">
                  Храм Петра и Павла в Новинках 1772 год
                </h3>
                <p className="content__text">
                  В рамках спецификации современных стандартов, некоторые
                  особенности внутренней политики ассоциативно распределены по
                  отраслям.
                </p>
              </div>
            </div>
          </div>
          <div className="Case__block">
            <div className="Case__img-container">
              <img src={img1} alt="" className="Case__img" />
              <img src={img1} alt="" className="Case__img" />
            </div>
            <div class="wrapper">
              <a href="#">
                <button className="Case__button">Подробнее о работе</button>
              </a>
              <div class="content">
                <h3 className="content__title">
                  Храм Петра и Павла в Новинках 1772 год
                </h3>
                <p className="content__text">
                  В рамках спецификации современных стандартов, некоторые
                  особенности внутренней политики ассоциативно распределены по
                  отраслям.
                </p>
              </div>
            </div>
          </div>
          <div className="Case__block">
            <div className="Case__img-container">
              <img src={img1} alt="" className="Case__img" />
              <img src={img1} alt="" className="Case__img" />
            </div>
            <div class="wrapper">
              <a href="#">
                <button className="Case__button">Подробнее о работе</button>
              </a>
              <div class="content">
                <h3 className="content__title">
                  Храм Петра и Павла в Новинках 1772 год
                </h3>
                <p className="content__text">
                  В рамках спецификации современных стандартов, некоторые
                  особенности внутренней политики ассоциативно распределены по
                  отраслям.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
