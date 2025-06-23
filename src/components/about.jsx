import React from "react";
import "./AboutUs.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
import handshake from '../data/handshake.avif'
import { useEffect } from "react";




export const About = (props) => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    
    <div id='about'>
       <div className='container'>
      
      <div className='row'>
        <div className='col-xs-12 col-md-6'>
          {' '}
          <img src={handshake} className='img-responsive' alt='' />{' '}
        </div>
        <div className='col-xs-12 col-md-6'>
          <div className='about-text'>
            <h2>About Us</h2>
            <p>{props.data ? props.data.paragraph : 'loading...'}</p>
            <h3>Why Choose Us?</h3>
            <div className='list-style'>
              <div className='col-lg-6 col-sm-6 col-xs-12'>
                <ul>
                  {props.data
                    ? props.data.Why.map((d, i) => (
                        <li key={`${d}-${i}`}>{d}</li>
                      ))
                    : 'loading'}
                </ul>
              </div>
              <div className='col-lg-6 col-sm-6 col-xs-12'>
                <ul>
                  {props.data
                    ? props.data.Why2.map((d, i) => (
                        <li key={`${d}-${i}`}> {d}</li>
                      ))
                    : 'loading'}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
      <div className="about-us">
     


      <section className="values">
        <h2>About Our Values</h2>
        <div className="value-grid">
          <div className="value-card">
            <h3>Consistency</h3>
            <p>We value consistent quality in every service we deliver.</p>
          </div>
          <div className="value-card">
            <h3>Innovation</h3>
            <p>Innovation is our driving force for new solutions.</p>
          </div>
          <div className="value-card">
            <h3>Commitment</h3>
            <p>We commit to client success through excellence.</p>
          </div>
          <div className="value-card">
            <h3>Goal Statement</h3>
            <p>A workplace to explore, progress, and inspire growth globally.</p>
          </div>
        </div>
      </section>


      <section className="">
        <h2>Meet our Inspiring <span>Executives</span></h2>
        
        
      </section>
      <div className="about-button" data-aos="fade-up">
      <a href="#profile" className="hero-button">LEARN MORE</a>
</div>
    </div>
    
     
    </div>
  )
}
