# Dawson Landscaping content and launch guide

This website is plain HTML, CSS and JavaScript. Staff can update text, images and verified business details without a build tool. Keep a backup before editing and test the result on a phone, tablet and desktop browser.

## 1. Add the real business details

Open `assets/js/site-config.js` and complete only verified values:

- `siteUrl`: the final HTTPS domain, without a trailing slash.
- `phoneDisplay`: the visitor-facing phone number.
- `phoneHref`: the same number in international format, such as `+61812345678`.
- `email`: the monitored enquiry address.
- `formEndpoint`: the secure form receiver or same-origin API.
- `googleTagManagerId`: the GTM container, such as `GTM-XXXXXXX`.
- `chatUrl`: an approved WhatsApp, HubSpot, Crisp or other chat URL. Empty keeps the demo action linked to the enquiry form.
- `instagramUrl`, `facebookUrl`, `houzzUrl`: verified HTTPS profiles. Empty keeps the visible demo icons linked to the enquiry form.
- `serviceAreaText`: the approved Perth suburbs or service-area wording.
- `responsePromise`: an operationally accurate response time. Do not promise a time the team cannot meet.

The static review build keeps Call Dawson, Message Dawson and the three social controls visible, but sends unconfigured demo actions back to the quote section. Adding verified values automatically upgrades them to telephone or external links. Email remains hidden until configured. Do not publish the final production site with demo destinations.

## 2. Add approved client reviews

In `assets/js/site-config.js`, add approved review objects inside `reviews`. One approved review automatically replaces the visible About-page review preview; two or more also replace the homepage testimonial previews. Use the exact client-approved wording and identify the review source.

```js
reviews: [
  {
    quote: "Approved review text",
    name: "Client first name and initial",
    suburb: "Perth suburb",
    service: "Landscape construction",
    source: "Google review",
    rating: 5,
  },
];
```

Until at least two verified reviews are supplied, the page shows clearly labelled demo review-layout previews without rating stars or real client identities. Once approved reviews are added, the cards automatically switch to the real testimonial content and verified rating. Never remove the demo labels while preview content remains, and never invent, paraphrase or publish an unapproved testimonial.

## Hero motion

The hero automatically crossfades between three compressed images every nine seconds, with a very slow CSS forward-float motion. There is no visible Pause/Play control. Visitors who enable reduced-motion preferences receive a static first image. Keep this behaviour in the WordPress theme and avoid autoplay video.

## 3. Replace project photography

Project images are in `assets/images`. For each new photograph:

1. Obtain client/photographer permission.
2. Export AVIF and WebP versions at the same pixel sizes and filenames as the image being replaced.
3. Keep the existing width and height attributes unless the aspect ratio changes.
4. Update the image `alt` text in `index.html` so it describes the real project accurately.
5. Keep the before and after photographs aligned to the same viewpoint where possible.

Do not upscale small photos. Use an original at least twice the rendered CSS size for retina screens.

### Projects-page interactive story images

The three expanded stories in `projects.html` each contain three clickable detail buttons. Every button stores its matching heading, description, responsive image sources, alt text and service link in `data-*` attributes. Replace all nine tab views with approved project photography and accurate copy before presenting them as completed Dawson work. Keep both AVIF and WebP files, retain the two responsive widths, and update `data-avif`, `data-webp`, `data-src`, `data-alt`, `data-width` and `data-height` together.

In WordPress, these values should become an ACF repeater inside each Project entry rather than requiring staff to edit HTML. Keep at least one detail per project; the first item is the default active tab.

### About-page trust content

The About page visibly reserves the complete layout for the owner story, team/onsite photograph, years of experience, licences/insurance and professional memberships. These fields and the generated team image are clearly labelled as demo content, so the reviewer can see the final composition without the site making unsupported claims. Replace the preview story and labels only with information the business has verified. Replace the demo team image with approved owner/team photography and update its responsive sources, dimensions and alt text accurately.

The About review-layout preview remains visible so the client can review the complete page. One approved review in `assets/js/site-config.js` automatically replaces that preview; two or more approved reviews also replace the homepage testimonial previews. Do not remove the preview label while prompt content remains, and never publish a fabricated quote.

## 4. Update page text

Most visitor-facing copy is in `index.html`. Search for the existing sentence, edit only the text between HTML tags, and preserve surrounding tags, classes and attributes. The main heading should continue to include the phrase “landscapers in Perth” or a natural close variant in visible body copy.

Global conversion buttons use the safer “Send project enquiry” wording. Keep that wording unless Dawson confirms a different sales promise across every page. A quotation may still be discussed after the site and scope are reviewed, but the website does not promise an immediate or automatically free quotation.

## 5. Connect and test the project-enquiry form

The endpoint must accept `multipart/form-data` because visitors can optionally attach project photos. The server must provide:

- server-side validation and sanitisation;
- spam protection and rate limiting;
- file type, file size and malware checks;
- secure storage or immediate forwarding of files;
- notification to the monitored business inbox;
- a success HTTP status only after the enquiry is accepted;
- a privacy-compliant retention and deletion process.

The browser limits project photos to four files and 8 MB per file. The server must enforce its own limits as well.

## 6. GA4 and conversion tracking

Install GA4 through Google Tag Manager, then map these data-layer events:

- `generate_lead`: primary conversion; fires only after a successful endpoint response.
- `click_to_call`: phone intent.
- `chat_start`: chat intent.
- `social_click`: an approved footer social-profile visit.
- `quote_cta_click`: project-enquiry CTA engagement (event name retained for analytics continuity).
- `service_enquiry_click`: selected-service intent.
- `project_detail_view`: project-story detail engagement; sends only the project slug and detail label.
- `form_start`: form engagement.
- `form_validation_error` and `form_submission_error`: form-friction diagnostics.

Never send name, phone, email, suburb, free-text project details or uploaded filenames to GA4.

## 7. Pre-launch checklist

- Confirm the production domain, phone, email, service area and response promise.
- Connect and test the real form endpoint, including photos and error cases.
- Replace or approve every project image.
- Add at least one verified client review for About and preferably two or three for the homepage.
- Add the approved owner story, team/onsite photograph and any verified licence, insurance or membership details to About.
- Test click-to-call, email, chat and every quote CTA.
- Test at 320, 390, 768, 834, 1024, 1366 and 1440 pixels wide.
- Confirm GA4 DebugView receives lead events without personal information.
- Add the final domain to `robots.txt` and create `sitemap.xml`.
- Validate HomeAndConstructionBusiness/LocalBusiness schema after the domain is live. Keep the FAQ interface for visitors; do not promise an FAQ rich result.
- Run PageSpeed Insights on the hosted URL.
- Check privacy wording and consent requirements with the business adviser.

## 8. WordPress custom theme map

The static build includes the complete hybrid multi-page structure: Home, Services, six individual service pages, Projects, About and Contact/Quote, plus Privacy and Terms. Convert these into reusable WordPress templates without changing the approved homepage visual system. Recommended editable content types are Services, Projects, Testimonials and FAQs, with an ACF options page for phone, email, service areas, chat, social profiles, form and analytics settings. Preserve the responsive image sizes, page-specific SEO fields, CTA wording, service-query preselection, accessible controls and data-layer event names during conversion.

Recommended production stack: a lean custom PHP/hybrid theme, ACF Pro, Gravity Forms or Fluent Forms Pro, Cloudflare Turnstile, a transactional mail service through WP Mail SMTP, one SEO plugin, GTM/GA4, page caching/image optimisation and host-level backups. Confirm paid-plugin ownership before development begins.

## 9. Service-page proof and imagery

Each individual service page now has a distinct proof module: design outputs, construction stages, paving finish considerations, a realistic demo irrigation-zoning plan, makeover before/after and a maintenance care framework. Keep these modules service-specific in WordPress instead of replacing them with one repeated generic layout.

The Turf & Irrigation plan uses `dawson-demo-irrigation-zoning-plan-v2-836.webp` and `dawson-demo-irrigation-zoning-plan-v2-1672.webp`. It is presentation content, not approved Dawson documentation. When a real plan is supplied, replace both responsive files, update the intrinsic dimensions and alt text, and remove the visible demo caption only after approval.

The V15 presentation includes responsive 700px/1400px service, team, lead-journey, project and capability previews. The following active-work scenes support service context:

- `dawson-worksite-construction-700.webp` / `-1400.webp`
- `dawson-paving-process-700.webp` / `-1400.webp`
- `dawson-irrigation-turf-700.webp` / `-1400.webp`
- `dawson-maintenance-action-700.webp` / `-1400.webp`

These scenes demonstrate the intended service-image direction and are not identified as named Dawson projects. Production photography should make the service immediately visible: drawings or plans for design, genuine build progress for construction, paving or limestone details, turf installation and irrigation components, paired makeover images, and real maintenance activity. Do not label concept, stock, supplied or unverified imagery as Dawson project work. Add a verified project suburb, scope and client review only after approval.

## 10. Decorative tree motif rules

- Reuse `assets/images/dawson-icon.png`; it has transparency and matches the tree inside the Dawson logo.
- Keep no more than one decorative tree inside each content page. Do not add another tree beside the header or footer logo.
- Light sections may use the full-colour seal at 56–96 px. Dark sections may use the cream-filtered watermark at 130–300 px and 4–6% opacity.
- Keep every motif static, with empty alternative text, `aria-hidden="true"` and no pointer interaction.
- Do not place motifs behind headings, project-enquiry forms, primary buttons, reviews or important project photography. Recheck all breakpoints after moving one.

## 11. Card-border and hero-divider rules

- Keep the hero divider directly against the bottom edge of every Home, inner-page and legal-page hero: 4 px desktop/tablet and 3 px mobile, using logo gold with a narrow olive shadow.
- Use only the approved logo gold (`#E5B117`) and logo olive (`#859037`) on existing card accents. Pair a gold line with a soft olive inset shadow, or an olive line with a soft gold inset shadow.
- Apply the accent to project or work-sequence text panels, not over the photographs.
- Do not add these borders to forms, FAQ rows, CTA buttons, footer columns, standalone images or navigation controls.
- If a card is moved onto a dark background, verify that its accent remains visible and that the card's text contrast still passes before publication.
