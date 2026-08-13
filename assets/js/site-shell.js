"use strict";

(function buildSiteShell() {
  const page = document.body.dataset.page || "";
  const servicePages = new Set([
    "services",
    "landscape-design",
    "landscape-construction",
    "paving-limestone",
    "turf-irrigation",
    "garden-makeovers",
    "garden-maintenance",
  ]);
  const isActive = (key) =>
    key === "services" ? servicePages.has(page) : page === key;
  const navLink = (href, label, key) =>
    `<a href="${href}"${isActive(key) ? ' aria-current="page"' : ""}>${label}</a>`;

  const headerTarget = document.querySelector("[data-site-header]");
  if (headerTarget) {
    headerTarget.outerHTML = `
      <header class="site-header is-solid" data-header>
        <a class="brand" href="index.html" aria-label="Dawson Landscaping home">
          <img src="assets/images/dawson-icon.png" alt="" width="256" height="235">
          <span><strong>Dawson</strong><small>Landscaping &amp; Maintenance</small></span>
        </a>
        <nav id="primary-navigation" aria-label="Primary navigation">
          ${navLink("index.html", "Home", "home")}
          ${navLink("services.html", "Services", "services")}
          ${navLink("projects.html", "Projects", "projects")}
          ${navLink("about.html", "About", "about")}
          ${navLink("contact.html", "Contact", "contact")}
        </nav>
        <div class="header-actions">
          <a class="phone" data-phone-link href="tel:00000000">Call Dawson</a>
          <a class="quote-button" href="contact.html" data-track="quote_cta_click" data-location="header">Send project enquiry <span aria-hidden="true">↗</span></a>
          <button class="menu" type="button" aria-label="Open menu" aria-controls="primary-navigation" aria-expanded="false"><i></i><i></i></button>
        </div>
        <button class="menu-backdrop" type="button" aria-label="Close menu" tabindex="-1"></button>
      </header>`;
  }

  const footerTarget = document.querySelector("[data-site-footer]");
  if (footerTarget) {
    footerTarget.outerHTML = `
      <footer class="footer">
        <div class="footer-top">
          <div class="footer-brand"><img src="assets/images/dawson-logo-light.webp" alt="Dawson Landscaping and Maintenance" width="600" height="581" loading="lazy" decoding="async"></div>
          <p>Thoughtful landscape design, construction and garden care created for Perth properties and outdoor living.</p>
          <a class="footer-quote" href="contact.html" data-track="quote_cta_click" data-location="footer">Send project enquiry <span aria-hidden="true">↗</span></a>
        </div>
        <div class="footer-grid">
          <nav aria-label="Footer services">
            <span>Services</span>
            <a href="landscape-design.html">Landscape design</a>
            <a href="landscape-construction.html">Landscape construction</a>
            <a href="paving-limestone.html">Paving &amp; limestone</a>
            <a href="turf-irrigation.html">Turf &amp; irrigation</a>
            <a href="garden-makeovers.html">Garden makeovers</a>
            <a href="garden-maintenance.html">Garden maintenance</a>
          </nav>
          <nav aria-label="Footer navigation">
            <span>Explore</span>
            <a href="services.html">All services</a>
            <a href="projects.html">Projects</a>
            <a href="about.html">About Dawson</a>
            <a href="contact.html">Project enquiry</a>
          </nav>
          <div class="footer-contact">
            <span>Perth enquiries</span>
            <p>Perth, Western Australia</p>
            <a data-phone-link href="tel:00000000">Call Dawson</a>
            <a data-email-link hidden href="contact.html">Email Dawson</a>
            <small>Send your suburb to confirm service availability.</small>
            <div class="footer-social" data-social-group>
              <b>Follow our work</b>
              <div>
                <a data-social-link="instagram" href="contact.html" aria-label="Dawson Landscaping on Instagram"><svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><rect x="3.25" y="3.25" width="17.5" height="17.5" rx="5"></rect><circle cx="12" cy="12" r="4.1"></circle><circle class="icon-fill" cx="17.45" cy="6.65" r="1.05"></circle></svg></a>
                <a data-social-link="facebook" href="contact.html" aria-label="Dawson Landscaping on Facebook"><svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path class="icon-fill" d="M13.7 21v-8h2.75l.42-3.1H13.7V7.92c0-.9.25-1.51 1.59-1.51H17V3.64c-.3-.04-1.32-.13-2.5-.13-2.47 0-4.16 1.51-4.16 4.28V9.9H7.55V13h2.79v8h3.36Z"></path></svg></a>
                <a data-social-link="houzz" href="contact.html" aria-label="Dawson Landscaping on Houzz"><svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path class="icon-fill" d="M4.5 3.5 11 7.25v4.15L4.5 7.65V3.5Zm8.5 4.9 6.5 3.75v8.35L13 16.75V8.4ZM4.5 9.85l6.5 3.75v6.9l-6.5-3.75v-6.9Zm8.5-6.35 6.5 3.75v2.7L13 6.2V3.5Z"></path></svg></a>
              </div>
            </div>
          </div>
        </div>
        <div class="footer-bottom">
          <p>© <span id="year"></span> Dawson Landscaping &amp; Maintenance</p>
          <div><a href="privacy.html">Privacy</a><a href="terms.html">Website terms</a><a href="#main">Back to top ↑</a></div>
        </div>
      </footer>
      <a class="chat-button is-active" data-chat-link href="contact.html"><span class="chat-icon" aria-hidden="true"><svg viewBox="0 0 24 24" focusable="false"><path d="M5 5.5h14v10H9l-4 3v-13Z"></path><path d="M8 9h8M8 12h5"></path></svg><i></i></span><span>Message Dawson</span></a>
      <div class="mobile-bar has-phone"><a data-phone-link href="tel:00000000">Call Dawson</a><a href="contact.html" data-track="quote_cta_click" data-location="mobile_bar">Send project enquiry <span aria-hidden="true">↗</span></a></div>`;
  }
})();
