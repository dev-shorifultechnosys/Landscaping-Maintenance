# Dawson Landscaping — responsive multi-page website

A clean HTML, CSS and JavaScript multi-page lead-generation website for Dawson Landscaping & Maintenance. It has no framework, build step or third-party front-end dependency.

## Included pages

- Conversion-focused homepage
- Landscaping services overview
- Six individual service pages: landscape design, landscape construction, paving and limestone, turf and irrigation, garden makeovers and garden maintenance
- Detailed projects, about and contact/enquiry pages
- Interactive project stories with accessible image/content tabs and tracked detail views
- Privacy notice and website terms

All inner pages use the same responsive header, footer, hero system, floating message action and mobile lead bar. Service-page enquiry links open the dedicated contact page with the relevant service preselected.

The V17 Home-page refinement keeps the approved visual system while giving the three hero scenes a slow nine-second rhythm and a gentle forward-floating image motion. Six unique compact service-card images, the working demo click-to-call path and the enquiry next steps remain in place. Active-work imagery appears above the fold alongside completed-landscape and maintenance scenes, so the Home page communicates design, construction and care without adding autoplay video.

The six individual service pages use a shared light warm-olive surface for their three introductory proof points. Their dark scope cards remain text-led decision summaries: supporting photography is reserved for the hero, feature split and service-specific evidence modules so the pages do not become repetitive image grids.

Brand colour handling is intentional. The logo's bright gold/yellow is used on dark olive surfaces. On cream and other light surfaces, the darker `#725600` gold token carries the same warm brand character while maintaining readable contrast; it is an accessibility companion to the logo gold, not a claim that it is the logo's exact primary yellow.

The six individual service pages deliberately use different evidence modules so they do not feel like duplicated templates. These include a design-output board, build-stage sequence, paving finish comparison, a realistic demo irrigation-zoning plan, makeover before/after and maintenance care-plan framework. The irrigation plan shows lawn spray coverage, bed dripline, feature drippers, valves and controller routes; its visible caption keeps the concept clearly identified until Dawson approves a real site plan.

## Preview locally

Run a small local server from this folder:

```bash
python -m http.server 8080
```

Then open `http://localhost:8080`.

## Required business configuration

Open `assets/js/site-config.js` and add only verified details:

- `siteUrl`: final public domain, including `https://`
- `phoneDisplay`: call-action label or readable number shown to visitors
- `phoneHref`: demo value is `00000000`; replace it with the verified international-format number, for example `+61812345678`
- `email`: business enquiry email
- `formEndpoint`: secure form endpoint such as Formspree or a same-origin API
- `googleTagManagerId`: GTM container ID, for example `GTM-XXXXXXX`
- `chatUrl`: approved WhatsApp or chat URL; empty keeps the visible demo action linked to the enquiry form
- `instagramUrl`, `facebookUrl`, `houzzUrl`: verified HTTPS profile URLs; empty keeps the visible demo icons linked to the enquiry form
- `serviceAreaText`: approved Perth service-area wording
- `responsePromise`: an operationally accurate response-time promise
- `reviews`: one to three genuine, client-approved review objects; one replaces the About preview and two or more also replace the homepage previews

The static design keeps Call Dawson, Message Dawson and the social controls visible so reviewers can see every lead channel. Call Dawson opens the device dialler using the clearly documented demo number until the verified number is supplied; Message and unconfigured social controls return to the quote section. Email stays hidden until verified. The form never reports a successful lead unless its configured endpoint returns a successful response. If no endpoint exists but a verified email is configured, it uses a pre-filled email fallback.

## Form and lead tracking

The form includes field names, labels, native and custom validation, a honeypot, error handling, a compact optional panel for budget/timing/photos and a privacy notice. A live endpoint must accept multipart form data and still perform server-side validation, sanitisation, spam protection, file checks and notifications.

Data-layer events:

- `quote_cta_click`
- `service_enquiry_click`
- `project_detail_view`
- `click_to_call`
- `chat_start`
- `social_click`
- `email_click`
- `form_start`
- `form_validation_error`
- `generate_lead` — fires only after a successful endpoint response
- `form_submission_error`

Do not send names, phone numbers, email addresses, project text or other personal information into GA4.

## Images and performance

- Hero and project assets include mobile/desktop WebP and AVIF variants.
- New service, team, lead-journey and project photographs use responsive 700 px and 1400 px WebP variants for mobile and retina/desktop displays.
- HTML images include intrinsic dimensions, `srcset`, `sizes`, lazy loading and async decoding where appropriate.
- The AVIF hero source is preloaded to match the preferred picture format and has high fetch priority.
- The Home hero crossfades automatically between three responsive scenes every nine seconds. Each active photo slowly floats forward through a GPU-friendly transform. Reduced-motion visitors receive a static first scene.
- All website imagery is hosted locally; there are no Pexels hotlinks.
- Anton and Manrope are self-hosted as local WOFF2 files for stable cross-device typography.

The portfolio and team photography is clearly labelled as demo/concept content wherever it could otherwise imply a real Dawson project, employee, testimonial or credential. Replace these assets and demo labels with approved Dawson photography and verified details during the WordPress conversion. Do not remove a demo label until its associated content has been approved.

Autoplay video is intentionally omitted. A real 20–35 second project reel can later be added to Projects only when Dawson supplies approved footage; the Home hero remains a fast image sequence with static messaging and enquiry actions.

## Symbolic Dawson tree motifs

- The existing transparent Dawson tree is reused as a restrained brand cue; no opaque rectangular logo artwork is placed over the page backgrounds.
- Services uses one compact full-colour seal beside the connected-approach introduction. Home, individual service pages, Projects, About, Contact, Privacy and Terms each use one subtle cream tree watermark in a selected dark section.
- Motifs are static, decorative, ignored by assistive technology and never placed over a form, CTA, heading or primary photograph. Desktop watermark opacity is limited to 4–6%; mobile sizing reduces to approximately 130–170 px.
- Keep the one-motif-per-content-page rule during WordPress conversion. Header and footer logo lockups do not count as decorative motifs.

## Card accents and hero dividers

- Every main hero now ends with one continuous logo-gold divider: 4 px on desktop/tablet and 3 px on mobile, with a narrow olive shadow directly beneath it. The light section spacing remains unchanged.
- Existing accented content cards use only the two approved logo colours: gold (`#E5B117`) and olive (`#859037`). Gold-led cards receive a subtle olive inset shadow; olive-led cards receive a restrained gold inset shadow.
- Project imagery remains clean; the accent is applied to its text panel rather than over the photograph. Forms, FAQs, CTA buttons, footer columns and image frames do not receive decorative top borders.
- Preserve this two-colour pairing during WordPress conversion rather than assigning random colours card by card.

## SEO launch checklist

1. Add the final `siteUrl` so canonical, Open Graph, breadcrumb schema and business schema URLs are created.
2. Add verified business contact details to the Local Business schema if appropriate.
3. Replace preview project imagery with approved Dawson work.
4. Add verified client testimonials when they are supplied.
5. Generate and submit the production XML sitemap.
6. Connect Google Search Console, GA4 and GTM.
7. Validate schema with Google's Rich Results Test.
8. Test the final hosted URL with PageSpeed Insights after caching and compression are active.
9. Remove or replace every visible demo label only after the underlying content has been approved.

## Included handover files

- `CONTENT-UPDATE-GUIDE.md`: staff editing, analytics and launch instructions.
- `CONTACT-PAGE-LAUNCH-CHECKLIST.md`: verified business inputs, form delivery and GA4 checks required before publishing.
- `docs/Dawson-Landscaping-Project-Proposal.pdf`: detailed approach, WordPress stack, milestones, lead capture, SEO and support proposal.
- `QA-REPORT.md`: source, interaction, responsive and accessibility test record.

## WordPress conversion

The static build now provides the complete front-end structure for a custom WordPress theme: Home, Services, individual Service, Projects, About and Contact/Quote templates. Recommended CMS entities are Services, Projects, Testimonials and FAQs, plus a global business-options page for contact details, social profiles and tracking IDs. Each Project entry should support editable detail tabs with a label, image, heading, description, alt text and related service link. Preserve the page-specific metadata, automatic Home hero rotation, mobile/reduced-motion fallback, project-tab keyboard controls, service preselection and immediate quote actions during conversion.
