import img1 from "../../../../images/Rectangle1.svg";

export default function Case() {
  return (
    <>
      <div className="Case">
        <h2 className="Case__title">Восстановленные храмы</h2>
        <div className="Case__container">
          <div className="Case__block">
            <div className="Case__img-container">
              <img src={img1} alt="" className="Case__img" />
              <img src={img1} alt="" className="Case__img" />
            </div>
            <button className="Case__button">Подробнее о работе</button>
          </div>
          <div className="Case__block">
            <div className="Case__img-container">
              <img src={img1} alt="" className="Case__img" />
              <img src={img1} alt="" className="Case__img" />
            </div>
            <button className="Case__button">Подробнее о работе</button>
          </div>
          <div className="Case__block">
            <div className="Case__img-container">
              <img src={img1} alt="" className="Case__img" />
              <img src={img1} alt="" className="Case__img" />
            </div>
            <button className="Case__button">Подробнее о работе</button>
          </div>
        </div>
      </div>
    </>
  );
}
