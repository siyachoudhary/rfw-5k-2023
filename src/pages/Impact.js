import React from 'react'
import "./AllPages.css"
import "./Impact.css"
import "bootstrap/dist/css/bootstrap.min.css";

export const Impact = () => {
  
  return (
      <div>
          <div className='impactStats moneyRaised'>
              <h1>$7200</h1>
              <h3>RAISED</h3>
          </div>

          <div className='bottomStats'>
            <div className='impactStats '>
                <h1>160</h1>
                <h3>RUNNERS.</h3>
            </div>

            <div className="vl1"></div>

            <div className='impactStats '>
              <h1>25</h1>
              <h3>VOLUNTEERS.</h3>
            </div>

            <div className="vl2"></div>

            <div className='impactStats '>
                <h1>700+</h1>
                <h3>PEOPLE SERVED.</h3>
            </div>
          </div>

          <div className='impactStats cause'>
                <h1>1</h1>
                <h3>CAUSE.</h3>
          </div>
      </div>
  )

}
