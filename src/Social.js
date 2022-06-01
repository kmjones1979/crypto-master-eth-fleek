import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

export default function Social() {
  return (
    <div class="social-container">
      <h3>Socials</h3>
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
    </div>
  );
}
