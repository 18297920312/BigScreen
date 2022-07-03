import React from 'react';
import './home.scss';
import headerBg from '../images/header.png';
import {Redirect} from "react-router-dom";
export const Home = () => {
  return (
   <div className='home'>
      <div className='header' style={{backgroundImage: `url(${headerBg})`}}></div>
      <main className='main'>
        <section  className="section1"></section>
        <section  className="section2"></section>
        <section  className="section3"></section>
        <section  className="section4"></section>
        <section  className="section5"></section>
      </main>
   </div>
);
};
