/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/design-desk.jpeg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Motion",
    description:
      "SIH 2022 Finalist, Developed a ML based app to translate SIGN (ASL) to text/audio in live time. Used Machine Learning algorithms like HOG and SVM.",
    url: "https://github.com/krishna050702",
  },
  {
    title: "Sarkari",
    description:
      "A hackathon project on Sustainable Urban Transport System, in this project the system gives the realtime information forthe transport system available on the route and suggest the best option.",
    url: "https://github.com/krishna050702/Tester_Sarkari.github.io",
  },
  {
    title: "My Resume Site",
    description:
      "Created from Microsoft's resume workshop and deployed to GitHub pages. Includes my experience and design abilities.",
    url: "https://krishna050702.github.io/Portfolio-React/",
  },
  {
    title: "BPRD | Website designing",
    description:
      "Secured rank under Top 5th Position all overIndia for designing website for BPRD in 2022. Tech used Figma",
    url: "https://drive.google.com/file/d/10wUtjs0Ai7YkmzY3KhxRxDGDzG6STrwj/view",
  },
];

const Portfolio = () => {
  return (
    <section className="light" id="portfolio">
      <h2>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
