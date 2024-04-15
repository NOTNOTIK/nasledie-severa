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
        <h2 className="Galery__title">Галерея</h2>
        <div className="Galery__container">
          <img src={s2} alt="" className="Galery__block div1" />
          <img src={s3} alt="" className="Galery__block div2" />
          <img src={s5} alt="" className="Galery__block div3" />
          <img src={s4} alt="" className="Galery__block div4" />
          <img src={s1} alt="" className="Galery__block div5" />
        </div>
        <img src={aboutborder} alt="" className="Galery__border" />
      </div>
    </>
  );
}
