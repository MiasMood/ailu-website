import "./App.css";

import logo from "./assets/logo/ailu-logo-light.png";

import livingRoomImage from "./assets/images/Sisäkuva_Tupa2.jpg";
import villaExteriorImage from "./assets/images/villa-exterior.jpg";
import villaInteriorImage from "./assets/images/villa-interior.jpg";
import arcticLandscapeImage from "./assets/images/arctic_landscape.png";

import kitchenImage from "./assets/images/Sisäkuva_Kylpyhuone.jpg";
import loftImage from "./assets/images/Sisäkuva_Parvi.jpg";
import livingRoomOneImage from "./assets/images/Sisäkuva_Tupa1.jpg";
import bathroomImage from "./assets/images/Sisäkuva_WC.jpg";
import plotMapImage from "./assets/images/plot-map.png";

export default function App() {
  return (
    <main className="site">
      <section className="hero">
        <div className="heroOverlay" />

        <header className="heroHeader">
          <img src={logo} alt="Àilu Arctic Circle Suomutunturi" className="logo" />
          <nav className="nav">
            <a href="#why">Why Àilu</a>
            <a href="#villas">Villas</a>
            <a href="#location">Location</a>
            <a href="#available">Available Villas</a>
            <a href="#contact">Contact</a>
          </nav>
        </header>

        <div className="heroContent">
          <p className="eyebrow">Suomutunturi, Finnish Lapland</p>
          <h1>Own a private retreat in Finnish Lapland</h1>
          <p className="lead">
            Àilu is a collection of private Arctic villas in Finnish Lapland,
            created for those seeking space, stillness and long-term value in
            the North.
          </p>
          <a href="#contact" className="button">
            Request information
          </a>
        </div>
      </section>

      <section className="introSection" id="why">
        <div className="introText">
          <p className="eyebrow">Why Àilu</p>
          <h2>A rare ownership opportunity in Lapland</h2>
          <p>
            Àilu combines private villa living, large plots and the quiet luxury
            of Finnish Lapland. Each villa has its own plot, its own connections
            and direct access to the peaceful Arctic surroundings.
          </p>
        </div>

        <div className="introImageWrap">
          <img
            src={livingRoomImage}
            alt="Warm villa interior in Finnish Lapland"
            className="introImage"
          />
        </div>
      </section>

      <section className="pillars">
        <div className="pillar">
          <h3>Private plots</h3>
          <p>
            Each villa has its own plot, ranging from approximately 1200 m² to
            1700 m².
          </p>
        </div>

        <div className="pillar">
          <h3>Lapland lifestyle</h3>
          <p>
            Northern lights, snow-covered forests, skiing, hiking and year-round
            nature experiences.
          </p>
        </div>

        <div className="pillar">
          <h3>Investment potential</h3>
          <p>
            A growing destination with strong long-term value and rental
            potential in Finnish Lapland.
          </p>
        </div>
      </section>

      <section className="villasSection" id="villas">
        <div className="sectionInner wide">
          <p className="eyebrow">The villas</p>
          <h2>Ten private villas designed for Arctic living</h2>
          <p>
            The villas share a refined architectural identity with a fixed
            exterior form, window placement, doors and colour palette. Owners
            can influence the terrace and selected outdoor living details.
          </p>

          <div className="villaHighlights">
            <div className="highlightCard">
              <span className="highlightNumber">01</span>
              <h3>Defined architecture</h3>
              <p>
                A consistent villa design creates a calm and elegant visual
                identity for the whole area.
              </p>
            </div>

            <div className="highlightCard">
              <span className="highlightNumber">02</span>
              <h3>Private ownership</h3>
              <p>
                Each villa has its own plot and its own connections, creating a
                clear and independent ownership structure.
              </p>
            </div>

            <div className="highlightCard">
  <span className="highlightNumber">03</span>
  <h3>Personalized finishes</h3>
  <p>
    Owners can influence selected interior finishes and details while the overall
    villa concept remains carefully designed and cohesive.
  </p>
</div>

            <div className="highlightCard">
              <span className="highlightNumber">04</span>
              <h3>Year-round use</h3>
              <p>
                Designed for every season, from winter nights under the northern
                lights to quiet summer days in nature.
              </p>
            </div>
          </div>

          <div className="imageGallery">
            <div className="galleryItem">
              <img src={villaExteriorImage} alt="Àilu villa exterior in Lapland" />
            </div>

            <div className="galleryItem">
              <img src={villaInteriorImage} alt="Bedroom interior in an Àilu villa" />
            </div>

            <div className="galleryItem">
              <img src={arcticLandscapeImage} alt="Aerial view of the villa area in Lapland" />
            </div>
          </div>

          <div className="interiorGallery">
            <div className="interiorGalleryText">
              <p className="eyebrow">Interior & personalization</p>
              <h2>Warm spaces for slow Arctic days</h2>
              <p>
                The interior layout is fixed, but owners can influence selected
                surface materials and atmosphere. A complete furniture package
                is also available as an additional service.
              </p>
            </div>

            <div className="interiorImages">
              <img src={livingRoomOneImage} alt="Villa living area" />
              <img src={kitchenImage} alt="Villa bathroom and interior details" />
              <img src={loftImage} alt="Villa loft sleeping area" />
              <img src={bathroomImage} alt="Villa bathroom detail" />
            </div>
          </div>
        </div>
      </section>

      <section className="hawoSection">
        <div className="sectionInner twoColumn">
          <div>
            <p className="eyebrow">Built by Hawo</p>
            <h2>Built indoors. Delivered complete.</h2>
          </div>

          <div>
            <p>
              The villas are built by Hawo fully indoors, protected from weather
              throughout the construction process. The completed buildings are
              then transported to Suomutunturi as finished units.
            </p>

            <a
              href="https://hawo.fi"
              target="_blank"
              rel="noreferrer"
              className="button darkButton"
            >
              Visit Hawo
            </a>
          </div>
        </div>
      </section>

      <section className="locationSection" id="location">
        <div className="sectionInner">
          <p className="eyebrow">Location</p>
          <h2>Suomutunturi, Finnish Lapland</h2>
          <p>
            Àilu is located in the peaceful surroundings of Suomutunturi in
            Finnish Lapland. The area offers privacy and nature, while still
            keeping essential services and activities within easy reach.
          </p>

          <div className="locationCards">
  <div className="locationCard">
    <h3>Outdoor activities</h3>

    <ul>
      <li>Suomutunturi Ski Resort – approx. 1 km</li>
      <li>Ski lifts – approx. 1 km</li>
      <li>Cross-country ski tracks – direct access</li>
      <li>Snowmobile routes – direct access</li>
      <li>Hiking trails – direct access</li>
    </ul>
  </div>

  <div className="locationCard">
    <h3>Services & travel</h3>

    <ul>
      <li>Restaurant Takka – approx. 1 km</li>
      <li>Local services – approx. 12 km</li>
      <li>Kemijärvi town centre – approx. 42 km</li>
      <li>Kemijärvi railway station – approx. 42 km</li>
    </ul>
  </div>

  <div className="locationCard">
    <h3>National parks & attractions</h3>

    <ul>
      <li>Pyhä-Luosto National Park – approx. 95 km</li>
      <li>Salla Ski Resort – approx. 95 km</li>
      <li>Riisitunturi National Park – approx. 105 km</li>
      <li>Ranua Wildlife Park – approx. 145 km</li>
      <li>Ruka Ski Resort – approx. 145 km</li>
    </ul>
  </div>
</div>

          <a
  className="mapImageLink"
  href="https://maps.app.goo.gl/B8AjGYKLAbYH1trQ7"
  target="_blank"
  rel="noopener noreferrer"
>
  <img
    src={arcticLandscapeImage}
    alt="Aerial view of Àilu villas in Suomutunturi, Finnish Lapland"
  />
</a>


    <a
      className="mapLink"
      href="https://maps.app.goo.gl/B8AjGYKLAbYH1trQ7"
      target="_blank"
      rel="noopener noreferrer"
    >
      Open location in Google Maps →
    </a>

        </div>
      </section>

     <section className="availableSection" id="available">
  <div className="sectionInner wide">
    <p className="eyebrow">Available villas</p>
    <h2>Choose your place in Lapland</h2>
    <p>
      The villas are listed individually. Names, details and downloadable
      brochures can be updated as the sales material is finalized.
    </p>

  <div className="plotMap">
  <img src={plotMapImage} alt="Àilu villa plot map in Suomutunturi" />

  <div className="plotLegend">
    <span><i className="availableDot"></i> Available</span>
    <span><i className="reservedDot"></i> Reserved</span>
    <span><i className="soldDot"></i> Sold</span>
    <span><i className="demoDot"></i> Demo villa</span>
  </div>
</div>

    <div className="villaList">
      {Array.from({ length: 10 }, (_, i) => i + 1).map((villa) => (
        <div className="villaCard" key={villa}>
          <div className="villaCardTop">
            <span>Villa {String(villa).padStart(2, "0")}</span>
            <span className="villaStatus">Available</span>
          </div>

          <h3>Àilu Villa {String(villa).padStart(2, "0")}</h3>

          <div className="villaMeta">
  <p className="plotSize">Plot size: TBD</p>

  <p>
    Private plot · Own connections · Finnish Lapland
  </p>
</div>
          <button>Download brochure</button>
        </div>
      ))}
    </div>
  </div>
</section>

      <section className="investmentSection">
        <div className="sectionInner">
          <p className="eyebrow">Investment potential</p>
          <h2>Why invest in Àilu?</h2>
          <p>
            Àilu offers private villa ownership in a growing Lapland destination.
            The combination of nature, privacy, year-round travel and limited
            high-quality accommodation creates a strong foundation for long-term
            value.
          </p>
        </div>
      </section>

      <section className="contactSection" id="contact">
        <div className="sectionInner wide">
          <p className="eyebrow">Contact</p>
          <h2>Begin your Arctic villa journey</h2>

          <div className="contactGrid">
            <div className="contactCard">
              <h3>Developer</h3>
              <p>
                For questions about the project, development and villa concept.
              </p>
              <a href="mailto:sanna.ronnkvist@picante.fi">
                sanna.ronnkvist@picante.fi
              </a>
            </div>

            <div className="contactCard">
              <h3>Sales by Habita</h3>
              <p>
                For pricing, availability, reservations and property sales.
              </p>
              <a href="#">Habita contact details coming soon</a>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <p>© Àilu Arctic Circle Suomutunturi</p>

        <div className="shareButtons">
          <button>Share</button>
          <button>Facebook</button>
          <button>LinkedIn</button>
          <button>Email</button>
        </div>
      </footer>
    </main>
  );
}