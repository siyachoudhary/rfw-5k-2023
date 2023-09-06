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
          <div className="col-md-6 footerHeader">
            <img src = {process.env.PUBLIC_URL + "/assets/rfw.png"} alt = "RFW" className = "footerImg" />
            <p className='footerTitle'>RUN FOR WATER 5K</p>
          </div>
          <div className="col-md-6">
            <ul className="list-inline">
                <li><CustomLink href = {"#"}>Home</CustomLink></li>
                <li><CustomLink href = {"#about"}>About</CustomLink></li>
                <li><CustomLink href = {"#impact"}>Impact</CustomLink></li>
                <li><CustomLink href = {"#team"}>Team</CustomLink></li>
                <li><CustomLink href = {"#register"}>Register</CustomLink></li>
                {/* <li><Link link = "https://www.instagram.com/runforwater2023/" /></li> */}
            </ul>
          </div>
        </div>
        <div className='row sponsorsRow'>
          <div className='col-sm missionSection'>
            <p className='missionTitle'>MISSION STATEMENT</p>
            <p className='mission'> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mi bibendum neque egestas congue. Eu feugiat pretium nibh ipsum consequat nisl vel pretium lectus. Volutpat odio facilisis mauris sit amet massa vitae. A erat nam at lectus urna duis convallis. Nibh venenatis cras sed felis eget velit aliquet. Volutpat est velit egestas dui. Lacus vel facilisis volutpat est velit egestas dui id. Congue quisque egestas diam in arcu cursus euismod quis. Morbi tristique senectus et netus. Sit amet purus gravida quis blandit turpis cursus. In mollis nunc sed id semper risus.</p>
          </div>
          <div className='col-sm'>
          <div style={{"margin-top":15, "fontSize":25}}>
          <p>THANK YOU TO OUR PARTNERS</p>
        </div>
          <div className='row sponsorsRow'>
            <div className='col-sm'>
              <a href="#"><img src = {process.env.PUBLIC_URL + "/assets/sponsors/waterProj.png"} alt = "RFW" className = "sponsor" /></a>
            </div>
            <div className='col-sm'>
            <a href="#"><img src = {process.env.PUBLIC_URL + "/assets/sponsors/waterProject.png"} alt = "RFW" className = "sponsor" /></a>
            </div>
          </div>
          <div className='row sponsorsRow'>
            <div className='col-sm'>
            <a href="#"><img src = {process.env.PUBLIC_URL + "/assets/sponsors/waterProject.png"} alt = "RFW" className = "sponsor" /></a>
            </div>
            <div className='col-sm'>
            <a href="#"><img src = {process.env.PUBLIC_URL + "/assets/sponsors/waterProj.png"} alt = "RFW" className = "sponsor" /></a>
            </div>
          </div>
          </div>
        </div>
        {/* <div style={{"margin-top":15, "fontSize":25}}>
          <p>THANK YOU TO OUR PARTNERS</p>
        </div>
        <div className='row sponsorsRow'>
          <div className='col-sm'>
            <a href="#"><img src = {process.env.PUBLIC_URL + "/assets/sponsors/waterProject.png"} alt = "RFW" className = "sponsor" /></a>
          </div>
          <div className='col-sm'>
          <a href="#"><img src = {process.env.PUBLIC_URL + "/assets/sponsors/waterProj.png"} alt = "RFW" className = "sponsor" /></a>
          </div>
          <div className='col-sm'>
          <a href="#"><img src = {process.env.PUBLIC_URL + "/assets/sponsors/waterProject.png"} alt = "RFW" className = "sponsor" /></a>
          </div>
          <div className='col-sm'>
          <a href="#"><img src = {process.env.PUBLIC_URL + "/assets/sponsors/waterProj.png"} alt = "RFW" className = "sponsor" /></a>
          </div>
        </div> */}
        <div className='rowBottom'>
            <p>Copyright © 2023 Run For Water</p>
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