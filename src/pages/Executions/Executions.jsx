import React from "react";

import "./_Executions.scss";
import Thumbnail from "../../components/Thumbnail/Thumbnail";

const Executions = () => (
  <main className="Executions">
    <div className="container">
      <div className="row">
        <div className="col-12">
          {/* Heading */}
          <h1 className="display-3 display-md-1 mb-5 text-center">
            Realizacje
          </h1>

          {/* Cards */}
          <div className="grid-container">
            <div className="grid-item grid-item--top-left">
              <Thumbnail
                imgSrc="https://images.unsplash.com/photo-1495433324511-bf8e92934d90?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80"
                title="Dom"
                href="/realizacje/dom"
              />
            </div>
            <div className="grid-item grid-item--bottom-left">
              <Thumbnail
                imgSrc="https://images.unsplash.com/photo-1493809842364-78817add7ffb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80"
                title="Mieszkanie"
                href="/realizacje/dom"
              />
            </div>
            <div className="grid-item grid-item--center">
              <Thumbnail
                imgSrc="https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
                title="Apartament"
                href="/realizacje/dom"
              />
            </div>
            <div className="grid-item grid-item--top-right">
              <Thumbnail
                imgSrc="https://images.unsplash.com/photo-1542290504-2dc9a5811cd4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
                title="Mieszkanie"
                href="/realizacje/dom"
              />
            </div>
            <div className="grid-item grid-item--bottom-right">
              <Thumbnail
                imgSrc="https://images.unsplash.com/photo-1484154218962-a197022b5858?ixlib=rb-1.2.1&auto=format&fit=crop&w=1506&q=80"
                title="Dom"
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
