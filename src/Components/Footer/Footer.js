import React from 'react';
import './Footer.css';
const Footer = props => {

  return (
    <React.Fragment>
      <a href="tesla.com" className="footer-item">
        {`Tesla link`}
      </a>
      <a href="apple.com" className="footer-item">
        {`Some Other link`}
      </a>
    </React.Fragment>
  )
}
export default Footer;
