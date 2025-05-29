import React from "react";
import "./Footer.css";
import { assets } from "../../assets/frontend_assets/assets";
const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
            <h1 className="logo">KBT-FOOD.</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt
            veritatis rerum officiis ratione aliquam, eos sapiente aliquid
            nihil. Quaerat cupiditate harum officiis provident ipsum aliquid
            tenetur amet, corporis voluptatum reprehenderit?
          </p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>
        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+855-969634904</li>
            <li>brostouch@gmail.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">
        Copyriht 2025 kbtfood.com - All Right Reverved
      </p>
    </div>
  );
};

export default Footer;
