import React, { Component } from "react";
import Gallery from "../../../components/Gallery/Gallery";

const examplePhotos = [
  {
    src: "https://dummyimage.com/600x400/000/fff&text=Example+photo",
    w: 600,
    h: 400
  },
  {
    src: "https://dummyimage.com/400x600/000/fff&text=Example+photo",
    w: 400,
    h: 600
  },
  {
    src: "https://dummyimage.com/800x200/000/fff&text=Example+photo",
    w: 800,
    h: 200
  }
];

class House extends Component {
  state = {};
  render() {
    return (
      <main className="Execution Execution--House">
        <div className="container">
          <div className="row">
            <div className="col-12">
              {/* Heading */}
              <h1 className="display-1 mb-5 text-center">Dom</h1>

              {/* Gallery */}
              <Gallery photos={examplePhotos} />
            </div>
          </div>
        </div>
      </main>
    );
  }
}

export default House;
