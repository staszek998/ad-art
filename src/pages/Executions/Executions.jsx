import React from "react";

import "./_Executions.scss";
import Thumbnail from "../../components/Thumbnail/Thumbnail";

import exampleImage1 from "../../assets/images/executions/example-images/1.jpg";
import exampleImage2 from "../../assets/images/executions/example-images/2.jpg";
import exampleImage3 from "../../assets/images/executions/example-images/3.jpg";
import exampleImage4 from "../../assets/images/executions/example-images/4.jpg";
import exampleImage5 from "../../assets/images/executions/example-images/5.jpg";
import exampleImage6 from "../../assets/images/executions/example-images/6.jpg";

const Executions = () => (
  <main className="Executions">
    <div className="container">
      <div className="row">
        <div className="col-12">
          {/* Heading */}
          <h1 className="display-2 display-md-1 mb-5 text-center">
            Realizacje
          </h1>

          {/* Cards */}
          <div className="grid-container">
            <div className="grid-item--top-left">
              <Thumbnail
                imgSrc={exampleImage1}
                title="Some title"
                subtitle="Some subtitle"
                href="/realizacje/dom"
              />
            </div>
            <div className="grid-item--bottom-left">
              <Thumbnail
                imgSrc={exampleImage2}
                title="Some title"
                subtitle="Some subtitle"
                href="/realizacje/dom"
              />
            </div>
            <div className="grid-item--center">
              <Thumbnail
                imgSrc={exampleImage3}
                title="Some title"
                subtitle="Some subtitle"
                href="/realizacje/dom"
              />
            </div>
            <div className="grid-item--top-right">
              <Thumbnail
                imgSrc={exampleImage4}
                title="Some title"
                subtitle="Some subtitle"
                href="/realizacje/dom"
              />
            </div>
            <div className="grid-item--bottom-right">
              <Thumbnail
                imgSrc={exampleImage5}
                title="Some title"
                subtitle="Some subtitle"
                href="/realizacje/dom"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
);

export default Executions;
