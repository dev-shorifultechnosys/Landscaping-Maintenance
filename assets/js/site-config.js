/*
  V15 demo configuration — add verified business details before publishing.
  The static review build uses 00000000 for click-to-call. Replace it before
  publishing. Unconfigured chat/social actions remain visible and return to the
  project-enquiry section. Email remains hidden until set.

  formEndpoint examples:
  - Formspree: "https://formspree.io/f/your-id"
  - A same-origin handler: "/api/quote"

  Social links:
  - Add only verified HTTPS Instagram, Facebook or Houzz profile URLs.
  - Empty social values keep the visible demo controls linked to the enquiry form.

  reviews:
  - One client-approved review replaces the visible About-page review preview.
  - Add at least 2 to replace the homepage testimonial previews.
  - Never publish draft, invented or unapproved testimonials.
*/
window.DAWSON_CONFIG = Object.freeze({
  siteUrl: "",
  phoneDisplay: "Call Dawson",
  phoneHref: "00000000",
  email: "",
  formEndpoint: "",
  googleTagManagerId: "",
  chatUrl: "",
  instagramUrl: "",
  facebookUrl: "",
  houzzUrl: "",
  serviceAreaText: "",
  responsePromise: "",
  reviews: [
    /*
    {
      quote: "Paste the client-approved review here.",
      name: "Client first name and initial",
      suburb: "Perth suburb",
      service: "Landscape construction",
      source: "Google review",
      rating: 5
    }
    */
  ],
});
