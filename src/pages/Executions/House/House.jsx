import React, { Component } from "react";
import Gallery from "../../../components/Gallery/Gallery";

const examplePhotos = [
  {
    title: "Photo title",
    description: "Photo description",
    src: {
      thumb:
        "https://images.unsplash.com/photo-1495433324511-bf8e92934d90?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
      full:
        "https://images.unsplash.com/photo-1495433324511-bf8e92934d90?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80"
    },
    alt: "Photo alt text"
  },
  {
    title: "Photo title",
    description: "Photo description",
    src: {
      thumb:
        "https://images.unsplash.com/photo-1493809842364-78817add7ffb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
      full:
        "https://images.unsplash.com/photo-1493809842364-78817add7ffb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80"
    },
    alt: "Photo alt text"
  },
  {
    title: "Photo title",
    description: "Photo description",
    src: {
      thumb:
        "https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
      full:
        "https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
    },
    alt: "Photo alt text"
  },
  {
    title: "Photo title",
    description: "Photo description",
    src: {
      thumb:
        "https://images.unsplash.com/photo-1542290504-2dc9a5811cd4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
      full:
        "https://images.unsplash.com/photo-1542290504-2dc9a5811cd4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
    },
    alt: "Photo alt text"
  },
  {
    title: "Photo title",
    description: "Photo description",
    src: {
      thumb:
        "https://images.unsplash.com/photo-1484154218962-a197022b5858?ixlib=rb-1.2.1&auto=format&fit=crop&w=1506&q=80",
      full:
        "https://images.unsplash.com/photo-1484154218962-a197022b5858?ixlib=rb-1.2.1&auto=format&fit=crop&w=1506&q=80"
    },
    alt: "Photo alt text"
  },
  {
    title: "Photo title",
    description: "Photo description",
    src: {
      thumb:
        "https://images.unsplash.com/photo-1523755231516-e43fd2e8dca5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
      full:
        "https://images.unsplash.com/photo-1523755231516-e43fd2e8dca5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
    },
    alt: "Photo alt text"
  },
  {
    title: "Photo title",
    description: "Photo description",
    src: {
      thumb:
        "https://images.unsplash.com/photo-1467987506553-8f3916508521?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
      full:
        "https://images.unsplash.com/photo-1467987506553-8f3916508521?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80"
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
            <div className="col-12 py-5">
              {/* Heading */}
              <p className="mb-0 text-center">Realizacje</p>
              <h1 className="display-1 mb-5 mt-0 text-center">Dom</h1>

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
