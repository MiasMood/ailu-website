import { useState } from "react";
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
import plotMapImage from "./assets/images/plot-map.jpg";

import floorPlanGroundImage from "./assets/images/ailu-floor-plan-ground.jpg";
import floorPlanLoftImage from "./assets/images/ailu-floor-plan-loft.jpg";

export default function App() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
const villas = [
  { number: 1, name: "Villa Vuosttaš", status: "Demo Villa" },
  { number: 2, name: "Villa Davás", status: "Reserved" },
  { number: 3, name: "Villa Eana", status: "Available" },
  { number: 4, name: "Villa Várri", status: "Available" },
  { number: 5, name: "Villa Jiekŋa", status: "Available" },
  { number: 6, name: "Villa Čuovga", status: "Available" },
  { number: 7, name: "Villa Guovssahas", status: "Available" },
  { number: 8, name: "Villa Násti", status: "Available" },
  { number: 9, name: "Villa Áigi", status: "Available" },
  { number: 10, name: "Villa Ráfi", status: "Available" },
];

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
<button
  className="mobileMenuButton"
  type="button"
  onClick={() => setMobileMenuOpen((open) => !open)}
  aria-label="Open navigation menu"
  aria-expanded={mobileMenuOpen}
>
  <span className="hamburgerIcon">
  {mobileMenuOpen ? "×" : "☰"}
</span>
</button>

        </header>

        <div className="heroContent">
          <p className="eyebrow">Suomutunturi, Finnish Lapland</p>
          <h1>Own a Arctic Villa in Lapland</h1>
          <p className="lead">
            Àilu offers private Arctic villas in Suomutunturi - a place for those who value space, silence, and lasting value in the heart of Lapland's unique wilderness.
          </p>
          <a href="#contact" className="button">
            Request information
          </a>
        </div>

{mobileMenuOpen && (
  <nav className="mobileNav">
    <button
      className="mobileMenuClose"
      onClick={() => setMobileMenuOpen(false)}
      aria-label="Close menu"
    >
      ×
    </button>

    <a href="#why" onClick={() => setMobileMenuOpen(false)}>Why Àilu</a>
    <a href="#villas" onClick={() => setMobileMenuOpen(false)}>Villas</a>
    <a href="#location" onClick={() => setMobileMenuOpen(false)}>Location</a>
    <a href="#available" onClick={() => setMobileMenuOpen(false)}>Available Villas</a>
    <a href="#contact" onClick={() => setMobileMenuOpen(false)}>Contact</a>
  </nav>
)}

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
            can influence the terrace and selected indoor living details.
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
                Designed for every season, from winter nights under the Northern Lights to summer days beneath the Midnight Sun.
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
      <li>East slope Ski Lift – approx. 400 m</li>
    </ul>
  </div>

<div className="locationCard">
  <h3>Services & travel</h3>

  <ul>
    <li>Kuusamo Airport – approx. 108 km</li>
    <li>Rovaniemi Airport – approx. 125 km</li>
    <li>Restaurant Takka – approx. 1 km</li>
    <li>Hotel Suomutunturi – approx. 1 km</li>
    <li>Local services – approx. 12 km</li>
    <li>Kemijärvi town centre – approx. 42 km</li>
    <li>Kemijärvi railway station – approx. 42 km</li>
  </ul>
</div>

  <div className="locationCard">
    <h3>National parks & attractions</h3>

    <ul>
      <li>Riisitunturi National Park – approx. 78 km</li>
      <li>Pieni Karhunkierros Trail – approx. 86 km</li>
      <li>Pyhä-Luosto National Park – approx. 95 km</li>
      <li>Salla Ski Resort – approx. 95 km</li>
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
      The villas are listed individually. Downloadable
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

<div className="floorPlanPreview">
  <h3>Villa floor plan</h3>

  <div className="floorPlanGrid">
    <div className="floorPlanImageCard">
  <p className="floorPlanLabel">Ground floor</p>
<img
  className="floorPlanImage"
  src={floorPlanGroundImage}
  alt="Ground floor plan of the Àilu villa"
/>
</div>

<div className="floorPlanImageCard">
  <p className="floorPlanLabel">Loft floor</p>
<img
  className="floorPlanImage"
  src={floorPlanLoftImage}
  alt="Loft floor plan of the Àilu villa"
/>
</div>
  </div>
</div>

<div className="villaList">
  {villas.map((villa) => (
    <div className="villaCard" key={villa.number}>
      <div className="villaCardTop">
 <span
  className={`villaStatus ${
    villa.status === "Demo Villa"
      ? "demoStatus"
      : villa.status === "Reserved"
      ? "reservedStatus"
      : villa.status === "Sold"
      ? "soldStatus"
      : "availableStatus"
  }`}
>
  {villa.status || "Available"}
</span>
</div>

<h3>
  {villa.number}. {villa.name}
</h3>

     <div className="villaMeta">
  <p className="plotSize">Plot size: {villa.plotSize || "TBD"}</p>
  <p className="villaSize">Villa size: {villa.villaSize || "TBD"}</p>
  <p className="villaPrice">Price: {villa.price || "TBD"}</p>

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
  <h3>Founders & Developers</h3>

  <p>
    In the Silence of the North Oy<br />
    Business ID: 3609849-2
  </p>

  <p>
    Sanna and Mikael Rönnkvist combine over 35 years of
    experience in hospitality, tourism, construction and
    property development. Their vision for ÁILU is to create
    high-quality Arctic holiday homes inspired by the unique
    nature of Finnish Lapland.
  </p>

  <a href="mailto:sanna.ronnkvist@picante.fi">
    sanna.ronnkvist@picante.fi
  </a>

  <a href="mailto:mikael@ronnkvist.fi">
    mikael@ronnkvist.fi
  </a>

  <p>
    +358 40 745 8784
  </p>
</div>

           <div className="contactCard">
  <h3>Sales by Habita</h3>

  <p>
    Contact our sales representative for pricing, availability
    and villa reservations.
  </p>

  <p>
    <strong>Henri Tuomi</strong><br />
    Sales Manager
  </p>

  <a href="tel:+358504200787">
    +358 50 420 0787
  </a>

  <a href="mailto:henri.tuomi@habita.com">
    henri.tuomi@habita.com
  </a>

  <p>
    Habita Rovaniemi
  </p>
</div>
          </div>
        </div>
      </section>

    <footer className="footer">
  <div className="footerSocial">
    <p className="footerSocialTitle">Follow Àilu</p>

    <a
      href="https://www.instagram.com/in_the_silence_of_the_north/"
      target="_blank"
      rel="noopener noreferrer"
    >
      @in_the_silence_of_the_north
    </a>
  </div>

  <p className="footerCredit">
    Website designed & developed by <strong>Studio Sumell</strong>
  </p>
</footer>
    </main>
  );
}