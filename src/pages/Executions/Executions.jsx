import React from "react";

import "./_Executions.scss";
import Thumbnail from "../../components/Thumbnail/Thumbnail";

const Executions = () => (
  <main className="Executions">
    <div className="container">
      <div className="row">
        <div className="col-12">
          {/* Heading */}
          <h1 className="display-2 display-md-1 mb-5 text-center">Realizacje</h1>

          {/* Cards */}
          <div className="grid-container">
            <div className="grid-item--top-left">
              <Thumbnail
                imgSrc="https://dummyimage.com/600x400/000/fff"
                title="Some title"
                subtitle="Some subtitle"
                href="/realizacje/dom"
              />
            </div>
            <div className="grid-item--bottom-left">
              <Thumbnail
                imgSrc="https://dummyimage.com/600x400/000/fff"
                title="Some title"
                subtitle="Some subtitle"
                href="/realizacje/dom"
              />
            </div>
            <div className="grid-item--center">
              <Thumbnail
                imgSrc="https://dummyimage.com/600x400/000/fff"
                title="Some title"
                subtitle="Some subtitle"
                href="/realizacje/dom"
              />
            </div>
            <div className="grid-item--top-right">
              <Thumbnail
                imgSrc="https://dummyimage.com/600x400/000/fff"
                title="Some title"
                subtitle="Some subtitle"
                href="/realizacje/dom"
              />
            </div>
            <div className="grid-item--bottom-right">
              <Thumbnail
                imgSrc="https://dummyimage.com/600x400/000/fff"
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
