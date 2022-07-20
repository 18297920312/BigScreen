import React, {useEffect, useRef,useContext,createContext} from 'react';
import './home.scss';
import headerBg from '../images/header.png';
import footerBg from '../images/footer.png';
import {Chart1} from "../components/chart1";
import {Chart2} from "../components/chart2";
import {Chart3} from "../components/chart3";
import {Chart4} from "../components/chart4";
import {Chart5} from "../components/chart5";
import {Chart6} from "../components/chart6";
import {Chart7} from '../components/chart7';
import {Chart8} from '../components/chart8';
import {Chart9} from '../components/chart9';
import {Chart10} from "../components/chart10";
import {Chart11} from '../components/chart11';
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
            <div className='分布 setBorder'>
                <h1>犯罪人员年龄分布</h1>
                <div className="box">
                    <div className='first'>
                        <Chart7/>
                    </div>
                    <div className='second'>
                        <Chart8/>
                    </div>
                    <div className='third'>
                        <Chart9/>
                    </div>
                </div>
            </div>
        </section>
        <section  className="section5">
            <Chart10/>
            <Chart11/>
        </section>
      </main>
      <footer>
          <div className="footer" style={{backgroundImage: `url(${footerBg})`}}></div>
      </footer>
   </div>
);
};
