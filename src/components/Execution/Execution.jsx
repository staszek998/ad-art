import React from "react";
import PropTypes from "prop-types";

import "./_Execution.scss";

const Execution = ({ photos, title }) => (
  <main className="Execution">
    <div className="container">
      <div className="row">
        <div className="col">
          {/* Execution title */}
          <h1 className="display-1">{title}</h1>

          {/* Photos grid */}
          <ul class="lb-album">
            {photos.map((photo, index) => {
              <li>
                <a href={`#image-${index}`}>
                  <img src={photo.thumbnail} alt="" />
                  <span>{photo.title}</span>
                </a>
                <div class="lb-overlay" id={`image-${index}`}>
                  <img src={photo.full} alt="" />
                  <div>
                    <h3>{photo.title}</h3>
                    <p>{photo.description}</p>
                    <a
                      href={`#image-${
                        index === 0 ? photos.length + 1 : index - 1
                      }`}
                      class="lb-prev"
                    >
                      Poprzedni
                    </a>
                    <a
                      href={`#image-${index > photos.length ? 0 : index + 1}`}
                      class="lb-next"
                    >
                      Następny
                    </a>
                  </div>
                  <a href="#page" class="lb-close">
                    X ZAMKNIJ
                  </a>
                </div>
              </li>;
            })}
          </ul>
        </div>
      </div>
    </div>
  </main>
);

Executions.propTypes = {
  photos: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string
};

export default Execution;
