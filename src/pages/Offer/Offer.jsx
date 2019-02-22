import React from "react";

import "./_Offer.scss";

const Offer = () => (
  <main className="Offer">
    <div className="container">
      <div className="row">
        <div className="col-12">
          {/* Heading */}
          <h1 className="display-3 display-md-1 mb-5 text-center">Oferta</h1>

          {/* Offer items */}
          <div className="row">
            <div className="col-12 col-md-6 col-lg-4 text-center py-4">
              <i className="icon-blueprint" />
              <h2 className="h6 mt-2">
                Profesjonalne wykonanie projektu z wizualizacją wnętrza
              </h2>
            </div>
            <div className="col-12 col-md-6 col-lg-4 text-center py-4">
              <i className="icon-paint-brush" />
              <h2 className="h6 mt-2">Dobór kolorystyki we wnętrzach</h2>
            </div>
            <div className="col-12 col-md-6 col-lg-4 text-center py-4">
              <i className="icon-lamp" />
              <h2 className="h6 mt-2">
                Dobór elementów wyposażenia
                <br />
                <small>(meble, tkaniny, tapety, oświetlenie, dekory)</small>
              </h2>
            </div>
            <div className="col-12 col-md-6 col-lg-4 text-center py-4">
              <i className="icon-bags" />
              <h2 className="h6 mt-2">
                Pomoc w zakupie materiałów i elementów wykończeniowych
              </h2>
            </div>
            <div className="col-12 col-md-6 col-lg-4 text-center py-4">
              <i className="icon-tools" />
              <h2 className="h6 mt-2">Pomoc w wyborze firmy wykonawczej</h2>
            </div>
            <div className="col-12 col-md-6 col-lg-4 text-center py-4">
              <i className="icon-helmet" />
              <h2 className="h6 mt-2">
                Nadzór nad projektem na wszystkich etapach jego realizacji
              </h2>
            </div>
            <div className="col-12 col-md-12 text-center py-4">
              <i className="icon-hammer" />
              <h2 className="h6 mt-2">
                Współpracujemy z plastykami i konserwatorami mebli
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
);

export default Offer;
