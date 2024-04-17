import React from "react";
import "./Main.css";
import Header from "../header/header";
import Footer from "../Footer/Footer";
import About from "./blocks/About/About";
import Case from "./blocks/Case/Case";
import Donations from "./blocks/Donations/Donations";
import Form from "./blocks/Form/Form";
import Progress from "./blocks/Progress/Progress";
import News from "./blocks/News/News";
import Galery from "./blocks/Galery/Galery";
import Map from "./blocks/Map/Map";
export default function Main() {
  return (
    <>
      <Header />
      <main className="main">
        <Map />
        <About />
        <Case />
        <Donations />
        <Form />
        <Progress />
        <News />
        <Galery />
      </main>
      <Footer />
    </>
  );
}
