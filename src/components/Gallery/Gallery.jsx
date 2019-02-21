import React from "react";

import "./_Gallery.scss";

const Gallery = ({ photos }) => (
  <ul className="Gallery lb-album">
    {photos.map((photo, index) => (
      <li key={`image-${index}`}>
        <a href={`#image-${index}`}>
          <img src={photo.src.thumb} alt={photo.alt} />
          <span>{photo.title}</span>
        </a>
        <div className="lb-overlay" id={`image-${index}`}>
          <img src={photo.src.full} alt={photo.alt} />
          <div>
            <h3>{photo.title}</h3>
            <p>{photo.description}</p>
            <a
              href={`#image-${index === 0 ? photos.length - 1 : index - 1}`}
              className="lb-prev"
            >
              Poprzednie
            </a>
            <a
              href={`#image-${index === photos.length - 1 ? 0 : index + 1}`}
              className="lb-next"
            >
              Następne
            </a>
          </div>
          <a href="#page" className="lb-close">
            x Zamknij
          </a>
        </div>
      </li>
    ))}
  </ul>
);

export default Gallery;
