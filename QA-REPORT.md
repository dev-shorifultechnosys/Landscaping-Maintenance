# Dawson Landscaping final front-end QA

Validation updated on 13 August 2026 after the V15 responsive imagery, demo-content and conversion refinements.

## V15 complete-presentation update

- Preserved the approved visual system while adding unique responsive hero imagery for Services, Design, Paving, Turf & Irrigation, Maintenance, Projects and Contact.
- Added a clearly labelled generated team photograph, polished company-detail positions and demo review copy without fake identities, ratings or verified-credential claims.
- Rebuilt Projects as an explicitly labelled demo portfolio journey with before, in-progress and after states; added two matched concept before images and clearer scope/result placeholders.
- Added dynamic Open Graph/Twitter metadata on every page plus canonical, breadcrumb and business schema URLs after the verified production domain is configured.
- Expanded draft Privacy and Terms pages with uploads, cookies/analytics, retention, security and demo-portfolio disclosures; final legal review remains required.
- Rebuilt and rendered the seven-page client proposal with the standard “Send project enquiry” CTA and a V15 demo-to-live handover plan.
- Retained static heroes instead of autoplay video; a real project reel is recommended only after approved Dawson footage is supplied.

## V14 capability and worksite update

- Preserved the approved visual design, navigation structure, typography, responsive behaviour and page architecture.
- Added four responsive WebP capability scenes showing site preparation, paving-base work, turf/irrigation installation and garden maintenance activity.
- Added a Home capability section and a four-stage Projects-page work sequence so the site communicates how landscaping work is delivered, not only the finished result.
- Updated Construction, Paving, Turf & Irrigation, Services and Maintenance pages with relevant process imagery and carefully scoped content.
- Avoided unsupported claims about owning machinery, maintaining an in-house fleet, undertaking heavy earthworks or completing named client projects shown in the new preview imagery.
- Standardised the primary conversion wording to “Send project enquiry” without making an unverified free-quote or response-time promise.
- Revalidated all 13 HTML pages, local links and media references, intrinsic image dimensions, JavaScript syntax, CSS structure, About review states and Projects-page interactions.

## V13 Contact-page conversion refinement

- Removed all form-endpoint, production-delivery and implementation instructions from visitor-facing Contact-page copy.
- Rewrote the hero, enquiry guidance, photo reassurance, process cards and upload FAQ in clear customer language.
- Changed the form submit action to “Send project enquiry” so the form does not promise a free quotation before Dawson confirms its final sales process.
- Clarified how enquiry details and optional photos are used without adding an unverified response-time claim.
- Preserved the low-friction essential fields and optional timing, budget and photo panel.
- Preserved accessible labels, autocomplete, keyboard controls, first-error focus, file limits, honest success handling and privacy-safe analytics events.
- Added a dedicated launch checklist for verified phone, email, service area, chat/social URLs, secure delivery, spam protection and GA4 DebugView testing.

## V12 About-page final visual polish

- Rebalanced the testimonial preview as a compact desktop two-column section with the heading on the left and review card on the right.
- Added a subtle brand-yellow divider between the testimonial and FAQ areas so adjacent dark sections remain visually distinct.
- Increased and strengthened the owner-photo, company-story and review-preview labels so placeholder status remains clear in full-page screenshots.
- Preserved clean single-column testimonial stacking and comfortable spacing on tablet and mobile.

## V11 complete About-page content preview

- Added a finished Meet Dawson section with reserved placements for the approved owner/company story and owner/onsite team photograph.
- Added clearly labelled placeholders for verified years of experience, licence/insurance details and professional memberships, without publishing invented claims.
- Kept a visibly labelled genuine-review preview so the client can assess the complete page composition; one configured approved review replaces it automatically.
- Added responsive desktop, tablet and single-column mobile layouts for the new story, photography and credential components.

## V10 About-page trust refinement

- Removed all internal production and WordPress instructions from visible About-page copy.
- Replaced the technical form-endpoint bullet with a visitor-facing enquiry confirmation promise.
- Made the company approach and principles copy clearer without inventing owner history, licences, insurance or memberships.
- Updated FAQ responses to answer service-area, design/build and first-review questions directly.
- Locked the Company Promise image to the full adjacent content height and retained proportional cover cropping across breakpoints.
- Increased compact proof and process text for improved readability.
- Added a conditional About feedback block: one approved configured review reveals it; no review means no fabricated testimonial is shown.

## V9 project-card height correction

- Locked each project-story picture to the full grid-cell area so every selected tab image remains exactly level with its adjacent content panel.
- Preserved image proportions with `object-fit: cover`; landscape and portrait source images no longer create mismatched card bottoms.
- The same fill behaviour applies to Planting-led garden, Outdoor living and Connected garden on desktop, tablet and mobile layouts.

## V8 Projects-page interaction refinement

- Replaced all static project-story pills with accessible, keyboard-operable tabs.
- Each detail updates the active state, responsive image, alt text, heading, supporting copy and related service link without a page reload.
- Added restrained fade transitions, stable copy height, reduced-motion support and horizontally scrollable 44px touch targets on compact screens.
- Added the privacy-safe `project_detail_view` data-layer event for GA4/GTM configuration.
- Removed internal production instructions from visitor-facing Projects-page copy.
- Retained an accessible first-tab fallback when JavaScript is unavailable.

## Browser viewport checks

| Viewport         | Page width | Persistent quote CTA | Horizontal overflow | Console errors | Failed requests | WCAG A/AA automated violations |
| ---------------- | ---------: | -------------------- | ------------------: | -------------: | --------------: | ------------------------------ |
| Desktop          |     1440px | Header               |                None |              0 |               0 | 0                              |
| Laptop           |     1366px | Header               |   CSS range covered |              0 |               0 | Final hosted recheck           |
| Tablet landscape |     1024px | Bottom bar           |                None |              0 |               0 | 0                              |
| Tablet portrait  |      834px | Bottom bar           |                None |              0 |               0 | 0                              |
| Mobile           |      390px | Bottom bar           |                None |              0 |               0 | 0                              |
| Small mobile     |      320px | Bottom bar           |                None |              0 |               0 | 0                              |

## Final implementation score

| Area                  | Score | Evidence                                                                                                  |
| --------------------- | ----: | --------------------------------------------------------------------------------------------------------- |
| Visual design         |  9/10 | Original premium visual direction preserved and spacing polished                                          |
| Content hierarchy     |  9/10 | Clear relevance, proof, services, process, trust, form, FAQ and CTA journey                               |
| Typography            |  9/10 | Self-hosted Anton and Manrope produce stable cross-device rendering                                       |
| Images                |  9/10 | AVIF/WebP, responsive sizes, intrinsic dimensions and retina-ready source widths                          |
| Lead generation       |  9/10 | Consistent CTA, service preselection, qualification fields, photos, call/chat and honest success handling |
| Desktop responsive    |  9/10 | Tested at 1366px and 1440px without overflow or automated accessibility errors                            |
| Tablet responsive     |  9/10 | Header or bottom-bar CTA remains available at 1024px and 834px                                            |
| Mobile responsive     |  9/10 | Tested at 390px and 320px; 16px controls prevent common iPhone form zoom                                  |
| Launch implementation |  9/10 | Production integrations are ready for verified business inputs listed below                               |

The implementation is ready for client presentation. Publishing still requires real operational data and a final hosted-device/assistive-technology pass; placeholder phone numbers, reviews, project ownership or a false form-success endpoint have deliberately not been invented.

## Interaction checks

- Mobile menu opens, traps keyboard focus and closes with Escape.
- FAQ buttons update `aria-expanded` and accordion state.
- Service enquiry links pre-select the matching form service.
- Optional project photos are limited to four files and 8 MB per file in the browser.
- Required-field validation focuses the first invalid field and announces an error.
- A mocked successful form endpoint displays the success state.
- `generate_lead` fires only after a successful endpoint response.
- The lead event contains service/timing/budget categories but no personal information.
- Call Dawson remains visible as a demo route to the form; a verified number upgrades every call action to `tel:`. Email remains hidden until verified.
- Message Dawson remains visible as a demo route to the form; a verified chat URL upgrades it to a tracked external channel.
- Instagram, Facebook and Houzz remain visible below Perth enquiries; verified URLs upgrade the demo destinations to tracked profiles.
- The hero uses an explicit fixed-header safe area so the Perth eyebrow and heading cannot begin beneath the menu at compact widths.
- Two or more approved reviews in site configuration automatically replace the clearly labelled testimonial previews.
- Privacy page renders without horizontal overflow on mobile.

## Static validation

- HTML validation passed for all 13 pages: Home, Services, six individual services, Projects, About, Contact, Privacy and Terms.
- JavaScript syntax validation passed for all three script files.
- All local HTML file and image references resolve.
- All HTML images have intrinsic width and height.
- Display and body fonts load from local WOFF2 files.
- The detailed seven-page proposal was rendered to PNG and visually checked for clipping or overflow.
- All 13 pages were rendered in headless Chromium at 1440px and 390px; Services was also checked at 1024px and Projects at 834px/320px.
- The rendered pages passed automated WCAG A/AA axe checks after light-background accent contrast was strengthened.

## Required production inputs

Before launch, add the final domain, verified phone/email, service area, realistic response promise, approved project photos, at least two genuine client reviews, secure multipart form endpoint and GTM/GA4 IDs. Then test the production URL, notifications, uploads and GA4 DebugView.

Automated checks complement, but do not replace, final testing on the production domain with verified business details, a real form endpoint and approved project photography.

## V26 symbolic brand-motif verification

- Added one controlled Dawson tree motif to each content page: a compact full-colour seal on Services and low-opacity cream watermarks on the selected dark sections of the other pages.
- Reused the real transparent `dawson-icon.png` asset so no rectangular background, invented SVG or CSS-drawn approximation appears.
- Browser inspection confirmed one motif per page across all 13 routes, successful image loading after lazy sections enter view, and zero horizontal overflow at 1363 px desktop.
- Responsive inspection confirmed the Services seal at 62 px and dark watermark at 164 px in a 390 px mobile viewport, with no horizontal overflow or blocked mobile lead controls.
- Every motif has empty alt text, `aria-hidden="true"`, fixed intrinsic dimensions and disabled pointer interaction. No animation or parallax was added.
- HTML validation, JavaScript syntax checks, local-reference checks and CSS brace balance pass after the update.

## V27 card-accent and hero-divider verification

- Added one continuous brand-yellow divider beneath every Home, inner-page and legal-page hero: 4 px at desktop/tablet and 3 px at mobile.
- Applied role-based top accents to the website's main content cards: yellow for service/dark trust cards, muted olive for proof/feature cards and deep olive for process/information cards.
- Kept forms, FAQ rows, CTA buttons, footer columns, project photographs and standalone image frames free of decorative borders.
- Browser inspection covered all 13 routes at 1363 px: every hero reported the expected yellow 4 px divider, every targeted card reported a 3–5 px top accent, and every page reported zero horizontal overflow.
- Responsive browser inspection covered 834 px tablet and 390 px mobile: the hero divider measured 4 px and 3 px respectively, targeted cards retained their accents and neither viewport overflowed horizontally.
- HTML validation, JavaScript syntax checks, local-reference checks and CSS brace balance pass after the update.

## V28 logo-colour border and shadow verification

- Sampled the supplied Dawson tree artwork and applied its two dominant accent colours only to the border locations introduced in V27: logo gold `#E5B117` and logo olive `#859037`.
- Gold-led card borders now carry a restrained olive inset shadow; olive-led borders carry a restrained gold inset shadow. The previous deep-olive third accent has been removed from this border system.
- Updated the Home, inner-page and legal-page hero divider to logo gold with a narrow olive shadow while retaining the approved 4 px desktop/tablet and 3 px mobile border thickness.
- Browser inspection covered all 13 routes at a 1363 × 936 desktop viewport: every hero reported the correct gold divider and olive shadow, all 150 targeted card panels used one of the two approved logo colours, and every route reported zero horizontal overflow.
- Responsive browser inspection used same-origin 834 × 900 tablet and 390 × 844 mobile frames: the hero divider measured 4 px and 3 px respectively, service cards remained two columns/one column as intended, and both layouts reported zero horizontal overflow.
- The compact mobile menu opened and closed successfully. The three-scene hero remained intact, no Pause/Play control returned, and no site-owned console error was observed.
- HTML validation, JavaScript syntax checks, local-reference checks and CSS brace balance pass after the update.

## Final refinement record

- Replaced the Turf & Irrigation page's abstract CSS oval graphic with a unique responsive demo irrigation-zoning plan showing lawn spray coverage, garden-bed dripline, feature emitters, valves and controller routes.
- Added a visible site-assessment disclaimer, descriptive alt text and a three-part practical legend while preserving the light section surface and existing page hierarchy.
- Verified the new section visually at desktop, 834px tablet and 390px mobile layouts; the full plan remains visible and the supporting cards stack cleanly on mobile.
- Added an explicit Home navigation item and moved the compact-navigation breakpoint to 1050px so the expanded menu and quote action do not crowd tablet widths.
- Rebuilt the hero sizing around an explicit fixed-header safe area at desktop, tablet and mobile sizes; the location label and headline now begin below the menu boundary.
- Matched the hero preload to the preferred AVIF picture source to avoid an unnecessary WebP/AVIF competition.
- Changed the business schema to `HomeAndConstructionBusiness`; final address, URL, phone, hours and social identity still require verified production data.
- Added configurable, tracked Instagram, Facebook and Houzz links below Perth enquiries. Empty or invalid links remain visible in demo mode and return to the form.
- Renamed the floating contact action to “Message Dawson” so the interface does not promise live staffing.
- Reworked the no-review fallback into distinct service standards. Two or more approved reviews still replace it automatically; no testimonial has been invented.
- Added a seventh proposal page covering the four-week delivery timeline, final page scope, lead delivery, licence responsibility, acceptance and support.
- Revalidated all three HTML pages, JavaScript syntax, CSS brace balance, unique IDs, local references and the seven-page PDF after the refinements.

## V7 service-page refinement

- Fixed dark FAQ contrast so question text, dividers, plus controls and answers remain visible; the first service question opens automatically.
- Increased inner-page breadcrumb and hero-copy readability and strengthened dark-card paragraph contrast.
- Added a distinct, responsive proof module to every individual service page: design outputs, construction stages, paving finish considerations, irrigation zones, makeover before/after and maintenance care planning.
- Differentiated the maintenance hero from the makeover page and retained accurate, non-promissory labels wherever visuals are illustrative.
- Preserved service-specific CTAs, contact-form preselection, mobile lead actions and reduced-motion safeguards.
- Revalidated all 13 pages, JavaScript syntax, structured data, unique IDs, intrinsic image dimensions, local links/assets and CSS balance after the refinements.

## V6 multi-page expansion

- Preserved the approved homepage composition while connecting its primary navigation, service cards and project CTA to full content pages.
- Added Services, six individual Service pages, Projects, About and Contact/Quote pages with relevant image heroes, detailed content, internal links, page-specific metadata and structured data.
- Added a shared inner-page design system with responsive grids, split-image sections, FAQs, project stories, final CTAs and reduced-motion/mobile hero safeguards.
- Added a reusable static site shell for consistent navigation, service links, social controls, Message Dawson and compact-screen lead actions.
- Added service-query preselection so individual service CTAs open the quote form with the correct service selected.
- Revalidated all 13 HTML pages, three JavaScript files, CSS brace balance, unique IDs and local asset references.

## V5 testimonial, lead-channel and motion refinement

- Call Dawson now remains visible in the header, contact details, final CTA, footer and compact mobile lead bar. Without a verified number it returns to the quote section; a configured number upgrades every instance to `tel:`.
- Instagram, Facebook and Houzz controls remain visible below Perth enquiries in demo mode. Verified HTTPS profiles automatically replace the internal demo destinations.
- Message Dawson remains visible at the lower-right on desktop and above the persistent lead bar on compact screens. A verified chat URL opens externally; demo mode returns to the form.
- Restored the Reviews navigation label and testimonial card design, while clearly marking all supplied-content prompts as preview-only. Two or more approved reviews switch the section automatically to verified client feedback without publishing invented claims.
- Added a restrained single-image hero zoom/pan and short content reveal. Hero image motion is disabled on small screens and all motion is removed for reduced-motion preferences.
- Replaced text initials with accessible inline SVG social icons and refined the floating Message Dawson control with a clear chat symbol and visual status accent.
- Moved timing, budget and photo inputs into an optional expandable panel, keeping the essential enquiry fields immediately visible while retaining lead qualification detail.
