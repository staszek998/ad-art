import React from "react";

const Contact = () => (
  <main className="Contact">
    <div className="container">
      <div className="row py-5">
        <div className="col-12">
          {/* Heading */}
          <h1 className="display-3 display-md-1 mb-5 text-center">Kontakt</h1>

          <div className="row">
            {/* Contact details */}
            <div className="col-12 col-md-6 text-center">
              <p>
                Działamy na terenie kraju, głównie: Zielona&nbsp;Góra
                i&nbsp;miasta okoliczne.
              </p>
              <p>
                DOROTA SUŁECKA
                <br />
                tel. <a href="tel:+48605630650">605 630 650</a>
              </p>
              <p>
                AGATA ŁUBIŃSKA - RZEMIENIECKA
                <br />
                tel. <a href="tel:+48660773793">660 773 793</a>
              </p>
              <p>
                <a href="mailto:adart.zielonagora@gmail.com">
                  adart.zielonagora@gmail.com
                </a>
                <br />
                <a href="http://adart.org.pl">adart.org.pl</a>
              </p>
            </div>

            {/* Contact form */}
            <div className="col-12 col-md-6 text-center">xxx</div>
          </div>
        </div>
      </div>
    </div>
  </main>
);

export default Contact;
