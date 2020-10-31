import React from 'react';
import './App.css';
import './index.css';

import { SocialIcon } from 'react-social-icons';


function AppFooter() {
  return (
    <div className="main-footer">
      <div className="container">
        <div  className="row">
          <div className="col">
            <h4> zacharo INC</h4>
            <ul className="list-unstyled">
              <li>088888888</li>
              <li>sofia,bg</li>
              <li>123 ul cherkovna</li>
            </ul>
          </div>
          <div className="col">
            <h4> zacharo INC</h4>
            <ul className="list-unstyled">
              <li>088888888</li>
              <li>sofia,bg</li>
              <li>123 ul cherkovna</li>
            </ul>
          </div>
          <div className="col">
            <h4> zacharo INC</h4>
            <ul className="list-unstyled">

            <li><SocialIcon url="http://facebook.com/jaketrent" /></li>
            <li><SocialIcon url="http://instagram.com/jaketrent" /></li>
            <li><SocialIcon url="http://linkedin.com/jaketrent" /></li>
            </ul>
          </div>
          
        </div>
      </div>
    </div>
 
  );
}

export default AppFooter;

