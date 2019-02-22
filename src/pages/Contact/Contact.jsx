import React from "react";

import "./_Contact.scss";

const Contact = () => (
  <main className="Contact">
    <div className="container">
      <div className="row py-5">
        <div className="col-12">
          {/* Heading */}
          <h1 className="display-3 display-md-1 mb-5 text-center">Kontakt</h1>

          <div className="row">
            {/* Contact details */}
            <div className="col-12 col-md-6 text-center Contact__contact-details">
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

              <div className="row">
                <div className="col-12 text-center">
                  <a
                    className="d-block"
                    href="mailto:adart.zielonagora@gmail.com"
                  >
                    adart.zielonagora@gmail.com
                  </a>
                  <a className="d-block" href="http://adart.org.pl">
                    adart.org.pl
                  </a>
                  <a className="d-block mt-4" href="http://facebook.com">
                    <i className="icon-facebook" />
                  </a>
                </div>
              </div>
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
