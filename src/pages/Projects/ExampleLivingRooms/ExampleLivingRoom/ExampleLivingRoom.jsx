import React, { Component } from "react";
import Gallery from "../../../../components/Gallery/Gallery";

const examplePhotos = [
  {
    title: "Photo title",
    description: "Photo description",
    src: {
      thumb:
        "https://static1.squarespace.com/static/5b93e7f596e76fc3f7a8a12d/t/5b94100b88251b7b9689ce9b/1536430102320/01.jpg?format=1500w",
      full:
        "https://static1.squarespace.com/static/5b93e7f596e76fc3f7a8a12d/t/5b94100b88251b7b9689ce9b/1536430102320/01.jpg?format=1500w"
    },
    alt: "Photo alt text"
  },
  {
    title: "Photo title",
    description: "Photo description",
    src: {
      thumb:
        "https://static1.squarespace.com/static/5b93e7f596e76fc3f7a8a12d/t/5b94106740ec9a30c74489a1/1536430197524/02.jpg?format=1500w",
      full:
        "https://static1.squarespace.com/static/5b93e7f596e76fc3f7a8a12d/t/5b94106740ec9a30c74489a1/1536430197524/02.jpg?format=1500w"
    },
    alt: "Photo alt text"
  },
  {
    title: "Photo title",
    description: "Photo description",
    src: {
      thumb:
        "https://static1.squarespace.com/static/5b93e7f596e76fc3f7a8a12d/t/5b9410e12b6a28d4f72dc3f6/1536430373683/03.jpg?format=1500w",
      full:
        "https://static1.squarespace.com/static/5b93e7f596e76fc3f7a8a12d/t/5b9410e12b6a28d4f72dc3f6/1536430373683/03.jpg?format=1500w"
    },
    alt: "Photo alt text"
  },
  {
    title: "Photo title",
    description: "Photo description",
    src: {
      thumb:
        "https://static1.squarespace.com/static/5b93e7f596e76fc3f7a8a12d/t/5b941130c2241b07790ca359/1536430444659/04.jpg?format=1500w",
      full:
        "https://static1.squarespace.com/static/5b93e7f596e76fc3f7a8a12d/t/5b941130c2241b07790ca359/1536430444659/04.jpg?format=1500w"
    },
    alt: "Photo alt text"
  },
  {
    title: "Photo title",
    description: "Photo description",
    src: {
      thumb:
        "https://cdnb.artstation.com/p/assets/images/images/011/732/007/large/jaka-kosec-mozno4-1.jpg?1531129471",
      full:
        "https://cdnb.artstation.com/p/assets/images/images/011/732/007/large/jaka-kosec-mozno4-1.jpg?1531129471"
    },
    alt: "Photo alt text"
  },
  {
    title: "Photo title",
    description: "Photo description",
    src: {
      thumb:
        "https://cdna.artstation.com/p/assets/images/images/011/732/010/large/jaka-kosec-mozno6-1.jpg?1531129485",
      full:
        "https://cdna.artstation.com/p/assets/images/images/011/732/010/large/jaka-kosec-mozno6-1.jpg?1531129485"
    },
    alt: "Photo alt text"
  },
  {
    title: "Photo title",
    description: "Photo description",
    src: {
      thumb:
        "https://cdna.artstation.com/p/assets/images/images/011/732/008/large/jaka-kosec-mozno5-1.jpg?1531129483",
      full:
        "https://cdna.artstation.com/p/assets/images/images/011/732/008/large/jaka-kosec-mozno5-1.jpg?1531129483"
    },
    alt: "Photo alt text"
  }
];

class ExampleLivingRoom extends Component {
  state = {};
  render() {
    return (
      <main className="Project Project--ExampleLivingRoom">
        <div className="container">
          <div className="row">
            <div className="col-12">
              {/* Heading */}
              <p className="mb-0 text-center">Projekty / Salony</p>
              <h1 className="display-3 display-md-1 mb-5 mt-0 text-center">Salon 1</h1>

              {/* Gallery */}
              <Gallery photos={examplePhotos} />
            </div>
          </div>
        </div>
      </main>
    );
  }
}

export default ExampleLivingRoom;
