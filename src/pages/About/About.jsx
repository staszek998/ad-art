import React from "react";

import "./_About.scss";

const About = () => (
  <main className="About">
    <div className="container">
      <div className="row">
        <div className="col-12 text-center">
          {/* Heading */}
          <h1 className="display-3 display-md-1 mb-5">O nas</h1>

          {/* Copy text */}
          <p>
            Nasza firma powstała z zamiłowania do niepowtarzalnych wnętrz,
            pięknych mebli i eleganckich detali.
          </p>
          <p>
            Profesjonalnie zaaranżujemy dla Ciebie Twój dom, Twoje mieszkanie,
            Twoje miejsce pracy. Zaspokoimy Twoje potrzeby estetyczne i
            funkcjonalne, dopasujemy wystrój wnętrza do Twojego charakteru i
            stylu życia. Trzymając się wyznaczonego przez Ciebie budżetu i
            terminu realizacji inwestycji.
          </p>
          <p>
            Do każdego projektu podchodzimy indywidualnie. Kreatywnie odpowiemy
            na Twoje potrzeby.
          </p>
          <p>Naszą dewizą jest komfort i zadowolenie klienta.</p>
        </div>
      </div>
    </div>
  </main>
);

export default About;
