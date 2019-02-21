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
            <div className="control-buttons">
              <a
                href={`#image-${index === 0 ? photos.length - 1 : index - 1}`}
                className="art-button"
              >
                &lt; Poprzednie
              </a>
              <a
                href={`#image-${index === photos.length - 1 ? 0 : index + 1}`}
                className="art-button"
              >
                Następne &gt;
              </a>
            </div>
            <div className="caption">
              <h3>{photo.title}</h3>
              <p>{photo.description}</p>
            </div>
          </div>
          <a href="#page" className="lb-close art-button">
            Zamknij
          </a>
        </div>
      </li>
    ))}
  </ul>
);

export default Gallery;
