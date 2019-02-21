import React, { Component } from "react";
import Gallery from "../../../components/Gallery/Gallery";

const examplePhotos = [
  {
    title: "Photo title",
    description: "Photo description",
    src: {
      thumb: "https://dummyimage.com/600x600/000/fff&text=Thumb",
      full: "https://dummyimage.com/600x600/000/fff&text=Full"
    },
    alt: "Photo alt text"
  },
  {
    title: "Photo title",
    description: "Photo description",
    src: {
      thumb: "https://dummyimage.com/600x600/000/fff&text=Thumb",
      full: "https://dummyimage.com/600x600/000/fff&text=Full"
    },
    alt: "Photo alt text"
  },
  {
    title: "Photo title",
    description: "Photo description",
    src: {
      thumb: "https://dummyimage.com/800x200/000/fff&text=Thumb",
      full: "https://dummyimage.com/800x200/000/fff&text=Full"
    },
    alt: "Photo alt text"
  },
  {
    title: "Photo title",
    description: "Photo description",
    src: {
      thumb: "https://dummyimage.com/600x600/000/fff&text=Thumb",
      full: "https://dummyimage.com/600x600/000/fff&text=Full"
    },
    alt: "Photo alt text"
  },
  {
    title: "Photo title",
    description: "Photo description",
    src: {
      thumb: "https://dummyimage.com/600x600/000/fff&text=Thumb",
      full: "https://dummyimage.com/600x600/000/fff&text=Full"
    },
    alt: "Photo alt text"
  },
  {
    title: "Photo title",
    description: "Photo description",
    src: {
      thumb: "https://dummyimage.com/600x600/000/fff&text=Thumb",
      full: "https://dummyimage.com/600x600/000/fff&text=Full"
    },
    alt: "Photo alt text"
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
