import aboutborder from "../../../../images/About111.png";
export default function Progress() {
  return (
    <>
      <div className="Progress">
        <h2 className="Progress__title">Наши достижения</h2>
        <div className="Progress__container">
          <div className="Progress__block">
            <h3 className="Progress__num">329 192 394</h3>
            <p className="Progress__text">рублей собрано за 2021 год</p>
          </div>
          <div className="Progress__block">
            <h3 className="Progress__num">16 102 883</h3>
            <p className="Progress__text">пожертвовали в 2020 году</p>
          </div>
          <div className="Progress__block">
            <h3 className="Progress__num">16 102 883</h3>
            <p className="Progress__text">раз пожертвовали за 2021 год</p>
          </div>
        </div>
        <button className="Progress__button">Смотреть отчёты</button>
        <img src={aboutborder} alt="" className="Progress__border" />
      </div>
    </>
  );
}
