import React from "react";
import SocialMedia from "../layout/HomePage/socialMedia";
import { Link } from "react-router-dom";
import caerus from "../images/updatedlogo.png";

function Footer() {
  let currentYear = new Date().getFullYear();
  return (
    <footer>
      <div className="row">
        <div
          className="col-lg-6 animate__animated animate__lightSpeedInRight"
          style={{ textAlign: "left" }}
        >
          <h2>MD. Azmir Hossen (Naeem)</h2>
          <p style={{ fontSize: "15px" }}>
            Excellent focus, communication, and ability to learn rapidly. Excels
            working in a team environment. Strong critical analysis and problem
            solving.
          </p>
        </div>
        <div className="col-lg-6 footerColumn animate__animated animate__lightSpeedInLeft">
          {/* <h4>TrailBlazer</h4> */}
          <ul>
            <li>Quick Link :-</li>
            {/* <li>
              <a href="#">Privacy Policy</a>
            </li> */}
            <SocialMedia
              // facebook="https://www.facebook.com/caerusinfotech/"
              linkedin="https://www.linkedin.com/company/caerusinfotech/"
              // instagram="https://www.instagram.com/caerusinfotech"
              medium="https://medium.com/@caerusinfotech"
              // twitter="https://twitter.com/CaerusInfotech"
              // youtube="https://www.youtube.com/channel/UCaWmYob43P1S463-fWAQZHw?view_as=subscriber"
              github="https://github.com/Trailblazer-Together"
            />
          </ul>
        </div>
      </div>
      <hr />

      <p className="copyRight">
        Copyright © {currentYear} All rights reserved by MD. Azmir Hossen
        <Link className="" to="/">
          {/* <h5
            style={{
              fontFamily: " 'Dr Sugiyama', cursive",
              fontSize: "35px",
              textDecoration: "none"
            }}
          >
            <img src={caerus} height="60px" width="200px" />
          </h5> */}
        </Link>
      </p>
    </footer>
  );
}

export default Footer;
