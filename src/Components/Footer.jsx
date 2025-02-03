import React from "react";
import logo from "../Logo/NEWCREATED.png";
import "../Styles/Footer.css";
import facebook from "../Assets/icons/facebookicon.png";
import linkedin from "../Assets/icons/linkedinicon.png";
import instagram from "../Assets/icons/instagramicon.png";
import playstore from "../Assets/icons/playstoreicon.png";
import discord from "../Assets/icons/discordicon.png";
import youtube from "../Assets/icons/youtubeicon.png";

import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="fluid-container footer-container">
        <div className="logo-container">
          <img src={logo} alt="" />
        </div>
        <div className="links-box">
          <p>company</p>
          <Link to="/">Home</Link>
          <Link to="/AboutPage">About</Link>
          <a href="/TeamPage">Team</a>
          <a href="/ProductPage">Products</a>
          <a href="/ServicesPage">Services</a>
          <a href="/contactPage">Contact</a>
        </div>
        <div>
          <div className="queries-box">
            <p>Reach us out</p>
            <small>
              For Job related,
              <br />
              General queries &
              <br />
              Support...
            </small>
            <a href="https://fordnine.com">Fordnine.com</a>
          </div>
        </div>
        <div className="social-media-box">
          <p>follow us on social media</p>
          <div className="social-media-icons">
            <a href="https://discord.com/users/.asfandyarkhan">
              <img src={discord} alt="discord" />
            </a>
            <a href="https://www.facebook.com/ford9institute">
              <img src={facebook} alt="facebook" />
            </a>
            <a href="https://www.youtube.com/@Ford9Solutions">
              <img src={youtube} alt="youtube" />
            </a>
            <a href="https://play.google.com/store/search?q=fordnine&c=apps&hl=en">
              <img src={playstore} alt="playstore" />
            </a>
            <a href="https://www.instagram.com/ford9institute">
              <img src={instagram} alt="instagram" />
            </a>
            <a href="https://www.linkedin.com/company/ford9solutions/posts/?feedView=all">
              <img src={linkedin} alt="linkedin" />
            </a>
          </div>
        </div>
      </div>
      <div className="copy-right">
        <p className="text-white mb-4">
          &copy;All rights reserved{" -- "} Designed & developed by {" - "}
          <a href="https://kaleem.vercel.app" style={{ fontWeight: "Bold" }}>
            Kaleem ullah 💻
          </a>
        </p>
      </div>
    </>
  );
};

export default Footer;
