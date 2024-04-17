import s1 from "../../../../images/1.svg";
import s2 from "../../../../images/2.svg";
import s3 from "../../../../images/3.svg";
import s4 from "../../../../images/4.svg";
import s5 from "../../../../images/5.svg";
import aboutborder from "../../../../images/About111.png";
export default function Galery() {
  return (
    <>
      <div className="Galery">
        <div className="s">
          <h2 className="Galery__title">Галерея</h2>
          <div className="con">
            <a href="#" className="Galery__link">
              Смотреть все
            </a>
            <span className="span">&#8250;</span>
          </div>
        </div>
        <div className="Galery__container">
          <div className="Galery__block">
            <div className="overlay">
              {" "}
              <h3 className="overlay__text">
                Разнообразный и богатый опыт говорит нам, что курс
              </h3>
            </div>
            <img src={s2} alt="" className="div1" />
          </div>

          <div className="Galery__block">
            <div className="overlay">
              {" "}
              <h3 className="overlay__text">
                Разнообразный и богатый опыт говорит нам, что курс
              </h3>
            </div>
            <img src={s3} alt="" className="div2" />
          </div>

          <div className="Galery__block">
            <div className="overlay">
              {" "}
              <h3 className="overlay__text">
                Разнообразный и богатый опыт говорит нам, что курс
              </h3>
            </div>
            <img src={s5} alt="" className="div3" />
          </div>

          <div className="Galery__block">
            <a href="#">
              <div className="overlay">
                <h3 className="overlay__text">
                  Разнообразный и богатый опыт говорит нам, что курс
                </h3>
              </div>
            </a>
            <img src={s4} alt="" className="div4" />
          </div>
          <img src={s1} alt="" className="Galery__block div5" />
        </div>
        <img src={aboutborder} alt="" className="Galery__border" />
      </div>
    </>
  );
}
