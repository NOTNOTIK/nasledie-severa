import mapImg from "../../../../images/mapimg.svg";
export default function Map() {
  return (
    <>
      <section className="map">
        <button className="map__arrow prev"> &#8249;</button>
        <button className=" map__arrow next">&#8250; </button>
        <div className="map__container">
          <div className="map__left">
            <h1 className="map__title">
              Ново-Никольский собор Можайского Кремля, г. Можайск
            </h1>
            <div className="map__group">
              <div className="map__name">
                <h3 className="map__text">Собранная сумма:</h3>
                <p className="map__sum1">21 400 000 руб.</p>
              </div>
              <div className="map__name">
                <h3 className="map__text">Нужно собрать:</h3>
                <p className="map__sum2">32 100 000 руб.</p>
              </div>
              <button className="map__button">Пожертвовать средства</button>
            </div>
            <div class="control-group">
              <label class="control control-checkbox">
                <input type="checkbox" />
                <div class="control_indicator"></div>
              </label>
              <label class="control control-checkbox">
                <input type="checkbox" />
                <div class="control_indicator"></div>
              </label>
              <label class="control control-checkbox">
                <input type="checkbox" />
                <div class="control_indicator"></div>
              </label>
              <label class="control control-checkbox">
                <input type="checkbox" />
                <div class="control_indicator"></div>
              </label>
            </div>
          </div>
          <div className="map__right">
            <img src={mapImg} alt="" className="map__img" />
          </div>
        </div>
      </section>
    </>
  );
}
