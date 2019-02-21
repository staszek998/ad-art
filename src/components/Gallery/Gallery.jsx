import React, { Component } from "react";
import PhotoSwipe from "photoswipe/dist/photoswipe";
import PhotoSwipeUI_Default from "photoswipe/dist/photoswipe-ui-default";

import "./_Gallery.scss";

class Gallery extends Component {
  state = {};

  render() {
    return (
      <section
        className="Gallery pswp"
        tabindex="-1"
        role="dialog"
        aria-hidden="true"
      >
        <div className="pswp__bg" />

        <div className="pswp__scroll-wrap">
          <div className="pswp__container">
            <div className="pswp__item" />
            <div className="pswp__item" />
            <div className="pswp__item" />
          </div>

          <div className="pswp__ui pswp__ui--hidden">
            <div className="pswp__top-bar">
              <div className="pswp__counter" />

              <button
                className="pswp__button pswp__button--close"
                title="Close (Esc)"
              />

              <button
                className="pswp__button pswp__button--share"
                title="Share"
              />

              <button
                className="pswp__button pswp__button--fs"
                title="Toggle fullscreen"
              />

              <button
                className="pswp__button pswp__button--zoom"
                title="Zoom in/out"
              />

              <div className="pswp__preloader">
                <div className="pswp__preloader__icn">
                  <div className="pswp__preloader__cut">
                    <div className="pswp__preloader__donut" />
                  </div>
                </div>
              </div>
            </div>

            <div className="pswp__share-modal pswp__share-modal--hidden pswp__single-tap">
              <div className="pswp__share-tooltip" />
            </div>

            <button
              className="pswp__button pswp__button--arrow--left"
              title="Previous (arrow left)"
            />

            <button
              className="pswp__button pswp__button--arrow--right"
              title="Next (arrow right)"
            />

            <div className="pswp__caption">
              <div className="pswp__caption__center" />
            </div>
          </div>
        </div>
      </section>
    );
  }

  componentDidMount = () => {
    const pswpElement = document.querySelector(".pswp");

    // build items array
    const items = this.props.photos.map(photo => {
      const { src, w, h } = photo;

      return {
        src,
        w,
        h
      };
    });

    // define options (if needed)
    const options = {
      // optionName: 'option value'
      // for example:
      index: 0 // start at first slide
    };

    // Initializes and opens PhotoSwipe
    const gallery = new PhotoSwipe(
      pswpElement,
      PhotoSwipeUI_Default,
      items,
      options
    );
    gallery.init();
  };
}

export default Gallery;
