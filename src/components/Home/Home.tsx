import React from 'react';
import './Home.css';

export const Home: React.FunctionComponent = () => {
  const homeURLs = {
    linkedin: "https://www.linkedin.com/in/stellaiemma/",
    github: "https://github.com/stehzitcha/"
  }

  return (
    <div className="container centered">
      <header id="header">
        <h1>Stella Iemma</h1>
        <p>Crazy human being and software developer on the spare time </p>
        <nav>
          <ul>
            <li><a href={homeURLs.github}><i className="nes-icon github is-large"></i><span className="label">Github</span></a></li>
            <li><a href={homeURLs.linkedin}><i className="nes-icon linkedin is-large"></i><span className="label">Linkedin</span></a></li>
            <li><a href="mailto:stella.iemma@gmail.com"><i className="nes-icon gmail is-large"></i><span className="label">Email me</span></a></li>
          </ul>
        </nav>
      </header>
    </div>
  );
}
