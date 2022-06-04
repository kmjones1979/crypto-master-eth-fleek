import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram,
  faGithub,
  faMedium,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faUser, faEnvelope } from "@fortawesome/fontawesome-svg-core";
import "animate.css";

export default function Social() {
  return (
    <div class="social-container">
      <h1>🥷</h1>
      <p>Stay Connected</p>
      <a
        href="https://www.youtube.com/channel/UC0oh5rRMumIrBJBfJLH-Mvw"
        className="youtube social"
        target="_blank"
      >
        <FontAwesomeIcon icon={faYoutube} size="3x" />
      </a>
      <a
        href="https://www.twitter.com/cryptomastery_"
        target="_blank"
        className="twitter social"
      >
        <FontAwesomeIcon icon={faTwitter} size="3x" />
      </a>
      <a
        href="https://medium.com/@cryptomastery.eth"
        target="_blank"
        className="medium social"
      >
        <FontAwesomeIcon icon={faMedium} size="3x" />
      </a>
      <a
        href="https://www.facebook.com/cryptomastery.eth"
        target="_blank"
        className="facebook social"
      >
        <FontAwesomeIcon icon={faFacebook} size="3x" />
      </a>
      <a
        href="https://www.instagram.com/kevinjonescreates"
        target="_blank"
        className="instagram social"
      >
        <FontAwesomeIcon icon={faInstagram} size="3x" />
      </a>
      <a
        href="https://github.com/kmjones1979"
        target="_blank"
        className="github social"
      >
        <FontAwesomeIcon icon={faGithub} size="3x" />
      </a>
      <a
        href="https://www.linkedin.com/in/kevinjones-crypto/"
        target="_blank"
        className="linkedin social"
      >
        <FontAwesomeIcon icon={faLinkedin} size="3x" />
      </a>
    </div>
  );
}
