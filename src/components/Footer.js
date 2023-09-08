import React from 'react'
import './Footer.css'
import '../pages/Team.css'
import { useEffect, useState } from 'react'
import { Nav } from 'react-bootstrap'
import { Link } from '../components/Link.js'

// this was made by ai. this shit dont work gang.
// supposed to look like this: https://codepen.io/z-/pen/zYxdRQy
export const Footer = () => {
  //   const [bubbles, setBubbles] = useState([]);

  // useEffect(() => {
  //   const generateBubbles = () => {
  //     const newBubbles = [];
  //     for (let i = 0; i < 10; i++) {
  //       const bubble = {
  //         x: Math.random() * window.innerWidth,
  //         y: window.innerHeight + 100,
  //         size: Math.random() * 100,
  //         opacity: Math.random() * 0.5,
  //       };
  //       newBubbles.push(bubble);
  //     }
  //     setBubbles(newBubbles);
  //   };
  //   generateBubbles();
  //   setInterval(generateBubbles, 1000);
  // }, []);

  return (
    <footer>
      <div className="container">
          <div className="row">
              <p className='footerTitle'>THANK YOU TO OUR SPONSORS!</p>
          </div>
          <div className='row sponsorsRow sponsors'>
            <div className='col'>
              <a href="#"><img src = {process.env.PUBLIC_URL + "/assets/rfw.png"} alt = "RFW" className = "sponsor" /></a>
            </div>
            <div className='col'>
            <a href="#"><img src = {process.env.PUBLIC_URL + "/assets/rfw.png"} alt = "RFW" className = "sponsor" /></a>
            </div>
            <div className='col'>
            <a href="#"><img src = {process.env.PUBLIC_URL + "/assets/rfw.png"} alt = "RFW" className = "sponsor" /></a>
            </div>
            <div className='col'>
            <a href="#"><img src = {process.env.PUBLIC_URL + "/assets/rfw.png"} alt = "RFW" className = "sponsor" /></a>
            </div>
            <div className='col'>
            <a href="#"><img src = {process.env.PUBLIC_URL + "/assets/rfw.png"} alt = "RFW" className = "sponsor" /></a>
            </div>
            <div className='col'>
            <a href="#"><img src = {process.env.PUBLIC_URL + "/assets/rfw.png"} alt = "RFW" className = "sponsor" /></a>
            </div>

            <p className='sponsorMessage'>
              We are currently looking for more sponsors.
              Please reach out to &nbsp;
              <a href = "https://mail.google.com/mail/u/0/?fs=1&to=runforwater5kteam@gmail.com&tf=cm"
                 target = "_blank"
                 rel = "noreferrer">runforwater5kteam@gmail.com</a>
               &nbsp;if interested!</p>
          </div>

        <div className='rowBottom'>
          <div className='mainFooter'>
            <p>CLEAN WATER, ONE STRIDE AT A TIME.</p>
            <img src = {process.env.PUBLIC_URL + "/assets/rfw.png"} alt = "RFW" className = "" />
          </div>
        </div>
        {/* <div className="gooey-bubbles">
          {bubbles.map((bubble) => (
            <div
              key={bubble.id}
              style={{
                x: bubble.x,
                y: bubble.y - Math.random() * 100,
                width: bubble.size,
                height: bubble.size,
                opacity: bubble.opacity,
                left: bubble.x,
              }}
            />
          ))}
        </div> */}
      </div>
    </footer>
  );

  function CustomLink({href, children, ...props}){
    const path = window.location.pathname
    return (
        path === href ?
        <Nav.Link href={href} {...props} className={"navItem active"}>{children}</Nav.Link>
        :
        <Nav.Link href={href} {...props} className = "navItem">{children}</Nav.Link>
    )

  }
};

export default Footer;