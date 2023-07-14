import React from 'react'
import './Footer.css'
import '../pages/Team.css'
import { useEffect, useState } from 'react'
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
          <div className="col-md-6">
            <p>Copyright © 2023 Zed Dash</p>
          </div>
          <div className="col-md-6">
            <ul className="list-inline">
              <li><a href="#">About</a></li>
              <li><a href="#">Contact</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms of Service</a></li>
            </ul>
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
};

export default Footer;