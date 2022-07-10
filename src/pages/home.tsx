import React, {useEffect, useRef,useContext,createContext} from 'react';
import './home.scss';
import headerBg from '../images/header.png';
import footerBg from '../images/footer.png';
import {Chart1} from "../components/chart1";
import {Chart2} from "../components/chart2";
import {Chart3} from "../components/chart3";
import {Chart4} from "../components/chart4";
import {Chart5} from "../components/chart5";
import {ChartX} from "../components/chartX";
import {Chart6} from "../components/chart6";

export const Home = () => {

  return (
   <div className='home'>
      <div className='header' style={{backgroundImage: `url(${headerBg})`}}></div>
      <main className='main'>
        <section  className="section1">
            <Chart1/>
            <Chart2/>
        </section>
        <section  className="section2">
            <Chart3/>
            <Chart4/>
        </section>
        <section  className="section3 setBorder">
            <Chart5/>
        </section>
        <section  className="section4">
            <Chart6/>
        </section>
        <section  className="section5 setBorder"></section>
      </main>
      <footer>
          <div className="footer" style={{backgroundImage: `url(${footerBg})`}}></div>
      </footer>
   </div>
);
};
