import React from "react";
import Thumbnail from "../../components/Thumbnail/Thumbnail";
import "./_Projects.scss";

const Projects = () => (
  <main className="Projects">
    <div className="container">
      <div className="row">
        <div className="col-12">
          {/* Heading */}
          <h1 className="display-3 display-md-1 mb-5 text-center">Projekty</h1>

          {/* Cards */}
          <div className="grid-container">
            <div className="grid-item">
              <Thumbnail
                imgSrc="https://static1.squarespace.com/static/530d0ec3e4b0c6bf51953c94/582af8df9f7456fa1e190b27/582af8dfbe65945f3875b5f9/1479211436853/Voyager_Interior_01.jpg"
                title="Salony"
                href="/projekty/salony"
              />
            </div>
            <div className="grid-item">
              <Thumbnail
                imgSrc="http://www.cgarchitect.com/content/portfolioitems/2012/05/52026/bathroom01_large.jpg"
                title="Łazienki"
                href="/projekty/salony"
              />
            </div>
            <div className="grid-item">
              <Thumbnail
                imgSrc="https://i.pinimg.com/originals/0f/ca/70/0fca70236427c415904ca7a422f839e1.jpg"
                title="Sypialnie"
                href="/projekty/salony"
              />
            </div>
            <div className="grid-item">
              <Thumbnail
                imgSrc="https://qph.fs.quoracdn.net/main-qimg-48319a780119001781a8e69affb2c5e3"
                title="Dla najmłodszych"
                href="/projekty/salony"
              />
            </div>
            <div className="grid-item">
              <Thumbnail
                imgSrc="http://www.mightyemu.co.uk/wp-content/uploads/2015/11/Residential-3D-Architectural-Visualisation-Sussex.png"
                title="Jadalnie"
                href="/projekty/salony"
              />
            </div>
            <div className="grid-item">
              <Thumbnail
                imgSrc="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/eb00f647697245.5881f4030416f.jpg"
                title="Kuchnie"
                href="/projekty/salony"
              />
            </div>
            <div className="grid-item">
              <Thumbnail
                imgSrc="https://i.pinimg.com/originals/0d/f7/d7/0df7d7d18f3b4473338aff3af589893b.jpg"
                title="Pozostałe"
                href="/projekty/salony"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
);

export default Projects;
