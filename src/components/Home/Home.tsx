import React from 'react';
import './Home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons';

export const Home: React.FunctionComponent = () => {
  const homeURLs = {
    linkedin: "https://www.linkedin.com/in/stellaiemma/",
    github: "https://github.com/stehzitcha/"
  }

  return (
    <div className="container">
      <header id="header">
        <h1>Stella Iemma</h1>
        <p>Crazy human being and software developer on the spare time 😌</p>
        <nav>
          <ul>
            <li><a href={homeURLs.github}><FontAwesomeIcon icon={faGithub} /><span className="label">Github</span></a></li>
            <li><a href={homeURLs.linkedin}><FontAwesomeIcon icon={faLinkedin} /><span className="label">Linkedin</span></a></li>
            <li><a href="#"><FontAwesomeIcon icon={faEnvelopeSquare} /><span className="label">Email</span></a></li>
          </ul>
        </nav>
      </header>
    </div>
  );
}
