import React from "react";

import "./_Contact.scss";

const Contact = () => (
  <main className="Contact">
    <div className="container">
      <div className="row py-5">
        <div className="col-12">
          {/* Heading */}
          <h1 className="display-3 display-md-1 mb-5 text-center">Kontakt</h1>

          <div className="row justify-content-center">
            {/* Contact details */}
            <div className="col-12 text-center justify-content-center align-items-center Contact__contact-details">
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
            <form className="Contact__contact-form col-12 col-md-8 col-lg-4 form text-center">
              {/* CTA */}
              <h3>Napisz do nas</h3>

              {/* Title */}
              <div className="form-group">
                <label htmlFor="title">Tytuł</label>
                <select
                  required
                  name="title"
                  id="title"
                  className="form-control"
                  autoComplete="honorific-prefix"
                >
                  <option value="Pan">Pan</option>
                  <option value="Pani">Pani</option>
                </select>
              </div>

              {/* First name */}
              <div className="form-group">
                <label htmlFor="name--first">Imię</label>
                <input
                  id="name--first"
                  name="name--first"
                  required
                  type="text"
                  className="form-control"
                  autoComplete="given-name"
                />
              </div>

              {/* Last name */}
              <div className="form-group">
                <label htmlFor="name--last">Nazwisko</label>
                <input
                  id="name--last"
                  name="name--last"
                  required
                  type="text"
                  className="form-control"
                  autoComplete="family-name"
                />
              </div>

              {/* Phone number */}
              <div className="form-group">
                <label htmlFor="tel">Telefon kontaktowy</label>
                <input
                  required
                  type="tel"
                  autoComplete="tel"
                  id="tel"
                  name="tel"
                  className="form-control"
                />
              </div>

              {/* Message */}
              <div className="form-group">
                <label htmlFor="message">Treść wiadomości</label>
                <textarea
                  className="form-control"
                  id="message"
                  name="message"
                  rows="10"
                />
              </div>

              {/* Submit button */}
              <input
                type="submit"
                value="WYŚLIJ"
                className="art-button w-100"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  </main>
);

export default Contact;
