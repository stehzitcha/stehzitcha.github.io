import React from 'react';
import { useState, useEffect } from 'react';
import './Home.css';
import FadeIn from "react-fade-in";
import "bootstrap/dist/css/bootstrap.css";
import stella from './../Home/euzinha.jpg'

export const Home: React.FunctionComponent = () => {
  const homeURLs = {
    linkedin: "https://www.linkedin.com/in/stellaiemma/",
    github: "https://github.com/stehzitcha/"
  }

  const skills = [
    {
      item: "html"
    },
    {
      item: "css"
    },
    {
      item: "css-in-js",
    },
    {
      item: "vanilla js",
    },
    {
      item: "react js",
    },
    {
      item: "redux",
    },
    {
      item: "responsive",
    },
    {
      item: "git",
    },
    {
      item: "github",
    },
    {
      item: "api",
    }
  ];

  const [loading, setLoading] = useState(true);

  useEffect(() => {
      setTimeout(() => {
        const el = document.querySelector(".loader-container");
        if (el) {
          el.remove();
          setLoading(!loading);
        }
      }, 2500)
      
  }, []);

  if (loading) {
    return null;
  }

  return (
    <FadeIn>
      <div className="container">
        <main id="main">

          <section className="description">
            <h1 className="column">Stella Iemma</h1>
            <img src={stella} alt="Avatar" className="avatar column" />
            <p className="column"><span>👽</span> & software developer on spare time </p>
          </section>

        </main>
        <header id="header">
          <nav>
            <ul>
              <li><a href={homeURLs.github}><i className="nes-icon github is-large"></i><span className="label">Github</span></a></li>
              <li><a href={homeURLs.linkedin}><i className="nes-icon linkedin is-large"></i><span className="label">Linkedin</span></a></li>
              <li><a href="mailto:stella.iemma@gmail.com"><i className="nes-icon gmail is-large"></i><span className="label">Email me</span></a></li>
            </ul>
          </nav>
        </header>
      </div>
    </FadeIn>
    );
}
