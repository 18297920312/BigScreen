import React, {useEffect, useRef,useContext,createContext} from 'react';
import './home.scss';
import headerBg from '../images/header.png';
import {Chart1} from "../components/chart1";
export const Home = () => {
    const getPx = (n) => {
        return  n / 2420 * (window as any).pageWidth
    }
    const theme = createContext(null)
  return (
   <div className='home'>
      <theme.Provider value={getPx}>
      <div className='header' style={{backgroundImage: `url(${headerBg})`}}></div>
      <main className='main'>
        <section  className="section1">
            <Chart1 />
        </section>
        <section  className="section2 setBorder"></section>
        <section  className="section3 setBorder"></section>
        <section  className="section4 setBorder"></section>
        <section  className="section5 setBorder"></section>
      </main>
      </theme.Provider>
   </div>
);
};
