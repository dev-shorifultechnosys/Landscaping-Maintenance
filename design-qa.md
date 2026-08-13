# Home page design QA — V18

## Comparison target

- Source visual truth: `/workspace/scratch/0d73366182d2/upload/Home(20260813-110219).jpg`
- Implementation: Home route rendered from `http://terminal.local:4173/`
- Source pixels: 1536 × 8192 (full-page supplied screenshot)
- Implementation viewport: 1363 × 936 CSS px, device scale 1
- State: Home loaded, hero rotating automatically on a nine-second interval
- Density normalization: the source is a downscaled full-page design reference, so overall composition was compared at full-view level and the changed hero/service/form areas were inspected at rendered CSS size.

## Full-view comparison evidence

The approved section order, Anton/Manrope typography, olive–cream–yellow palette, section rhythm, dark/light alternation, before/after story, process, review, form, FAQ, final CTA and footer remain intact. The intentional V18 differences are limited to the approved Home decisions: a slow automatic three-scene hero with forward-floating motion and no Pause/Play control, six compact service-card images, demo click-to-call, clearer enquiry next steps and visible demo-project disclosure.

## Focused-region evidence

- Hero: three real responsive image assets render behind the unchanged headline/CTA hierarchy. Only one slide carries `.is-active`; it floats gently forward for 10.8 seconds while the active scene changes automatically every nine seconds through a 1.65-second crossfade. The requested Pause/Play control is fully removed.
- Services: six cards render six different 700 px image sources at a consistent 145 px desktop slot; text, numbering and links retain the original card hierarchy. The Garden Makeovers card now uses a separate completed-project photograph instead of repeating the before/after asset.
- Capability heading: `Resolved above.` continues to use the accessible deep-gold token `#725600` on the light surface.
- Project proof: before/after and supporting images are fully loaded, while a visible demo-project note prevents preview imagery being mistaken for verified Dawson portfolio work.
- Enquiry: the streamlined form stays in the approved Home position after services, project proof, process and review content. Three concise next-step items and the no-obligation/privacy microcopy strengthen trust without adding an unverified response-time promise. The dedicated Contact page remains available for visitors who deliberately navigate there.

## Findings

- No actionable P0/P1/P2 mismatch remains in the inspected desktop implementation.
- Fonts and typography: the supplied local Anton and Manrope files remain unchanged; card imagery does not disturb title wrapping or hierarchy.
- Spacing and layout rhythm: the compact image band increases card height intentionally while preserving the 3-column desktop grid and equal card heights.
- Colors and tokens: no new palette was introduced; light-surface emphasis retains the contrast-safe deep gold.
- Image quality: all new slots use local responsive raster photography with intrinsic dimensions, lazy loading below the fold and no placeholder/CSS art. Hero scenes cover finished landscaping, active construction and ongoing care without reusing the same Home-section imagery.
- Copy and content: additions are visitor-facing and avoid unsupported licence, response-time, fleet or project-ownership claims.
- Interactions and accessibility: `tel:00000000` is applied consistently in demo mode; reduced-motion mode stops the interval and receives a static first slide without adding a visible control.
- Browser console: no application JavaScript errors were observed. The only logged error came from the cloud-browser extension, not the site.

## Comparison history

1. V16 exposed three HTML validation findings around the demo phone label and unnecessary ARIA labels; these were fixed and revalidated.
2. V17 slowed the image rhythm, added the forward-floating transform and removed repeated Home imagery.
3. V18 removed the Pause/Play HTML, CSS, JavaScript and tracking references while preserving automatic progression and reduced-motion fallback.
4. Added the demo-project disclosure and visually inspected the loaded hero, project proof and Home enquiry regions in the browser.
5. Revalidated all 13 HTML pages, JavaScript syntax, local references and CSS brace balance; all passed.

## Primary interactions tested

- Hero automatic slide progression at the new nine-second rhythm
- Automatic hero progression with no Pause/Play control in the DOM
- Call links resolve to `tel:00000000`
- Six unique service-card image sources present, including the replacement makeover image
- Enquiry next-step block present
- Demo-project disclosure present
- All 17 Home image elements load successfully
- Home desktop has no horizontal overflow at the captured viewport

## Residual test gap

The cloud browser exposes a fixed desktop viewport in this session. Tablet/mobile layout remains covered by the existing responsive CSS breakpoints and prior V15 multi-viewport QA, and the changed card/hero rules include explicit compact-screen overrides; a fresh physical-device check is still required after the verified phone number and production domain are supplied.

## Final result

final result: passed

# Contact and Home enquiry form design QA — V23

## Comparison target

- Contact page source: `/workspace/scratch/0d73366182d2/upload/screencapture-file-C-Users-Nudar-Nuraz-Desktop-Cont-Modern-Landscaping-Website-for-Lead-Generation-Final-Dawson-Landscaping-Multi-Page-Website-v22-abo.jpg`
- Routes inspected: `contact.html` and the Home `#contact` enquiry section
- Inspected desktop viewport: 1363 × 936 CSS px

## Decision and implementation

- Removed the internal-facing `Demo lead-flow preview` label and its implementation note from the Contact page.
- Added the visitor-facing heading `Start with the essentials` to both forms.
- Added concise supporting copy asking for suburb, preferred service and the required change, while keeping photos, timing and budget clearly optional.
- Changed both form-card surfaces from warm white to the shared light warm-olive `#f2f2d8`.
- The inset guidance strip remains slightly lighter, with the existing yellow left rule preserving visual focus.

## Verification

- Both routes show identical approved heading and supporting copy.
- `Demo lead-flow preview` no longer appears in either route.
- Browser-computed form-card colour: `rgb(242, 242, 216)` on Contact and Home.
- Empty form submission still focuses the first required field and displays the validation status; six required controls are marked invalid.
- Both routes have no broken loaded images or horizontal overflow at the inspected viewport.
- HTML, JavaScript syntax, local references and CSS brace balance pass across the full package.

## Evidence limit

Frontend validation and the demo fallback were tested. Production delivery, verified contact data and analytics still require the final WordPress/domain configuration described in the handover notes.

## Final result

final result: passed

---

# About page and site favicon design QA — V22

## Comparison target

- Full-page source: `/workspace/scratch/0d73366182d2/upload/screencapture-file-C-Users-Nudar-Nuraz-Desktop-Cont-Modern-Landscaping-Website-for-Lead-Generation-Final-Dawson-Landscaping-Multi-Page-Website-v20-ser(1).jpg`
- Focused proof-box reference: `/workspace/scratch/0d73366182d2/upload/0022ac96-4c67-47cb-b5a2-4ae1132c68e3.png`
- Implementation: About route plus all 13 HTML routes rendered from the local preview
- Inspected desktop viewport: 1363 × 936 CSS px

## Focused comparison

- `Perth Focus`, `Whole-site View` and `Clear Handover` now use the shared light warm-olive `#f2f2d8` surface instead of warm white.
- The section's grid, border, typography, copy and spacing remain unchanged.
- The existing Dawson tree icon is now declared as the favicon on every HTML page, matching the Home-page tab identity.

## Verification

- Browser-computed proof-box colour: `rgb(242, 242, 216)`.
- All 13 routes expose `assets/images/dawson-icon.png` as their favicon.
- About page has no broken loaded images or horizontal overflow at the inspected viewport.
- The colour-only change preserves the established tablet/mobile grid collapse.
- HTML, JavaScript syntax, local references and CSS brace balance pass across the full package.

## Evidence limit

The browser confirms every route declares and resolves the favicon. Individual browsers may keep an old tab icon in cache until refresh or cache clear.

## Final result

final result: passed

---

# Individual service pages design QA — V20

## Comparison target

- Source visual truth: `/workspace/scratch/0d73366182d2/upload/Landscape design.jpg`
- Focused proof-box reference: `/workspace/scratch/0d73366182d2/upload/655e1c30-8ca1-4863-bc53-56f97036e6ad.png`
- Routes inspected: Landscape Design, Landscape Construction, Paving & Limestone, Turf & Irrigation, Garden Makeovers and Garden Maintenance
- Browser viewport: 1363 × 936 CSS px

## Decisions and implementation

- All six individual service pages now use the same light warm-olive `#f2f2d8` surface for their three introductory proof boxes.
- Scope cards remain text-led. They communicate six closely related planning or delivery decisions rather than six separate visual service categories; adding six images would duplicate the hero and feature photography and make the dark sections unnecessarily heavy.
- The existing photographic hierarchy remains: service-specific hero, major feature image and page-specific evidence module.
- `#725600` remains the light-surface gold token. The supplied logo's primary gold is brighter, but that bright gold measures too little contrast against the cream/light-card surfaces; the dark gold preserves the brand's warm hue while keeping small numbers, labels and emphasized words legible. Bright logo gold remains on dark olive areas.

## Verification

- Every route renders three light proof boxes and six text-only dark scope cards.
- All six routes have no horizontal overflow at the inspected desktop viewport.
- Page identity, headings, CTAs, images and section order remain unchanged.
- HTML, JavaScript syntax, local references and CSS brace balance pass across the package.

## Final result

final result: passed

---

# Services overview design QA — V19

## Comparison target

- Source visual truth: `/workspace/scratch/0d73366182d2/upload/service.jpg`
- Focused color reference: `/workspace/scratch/0d73366182d2/upload/f9d71cce-c935-4f18-936d-1ac56aa0a7f7.png`
- Implementation: Services route rendered from `http://terminal.local:4173/services.html`
- Inspected viewport: 1363 × 936 CSS px

## Focused comparison

- The `Site-led`, `Perth-aware` and `Clear scope` proof boxes retain their compact text-only role and now use a light warm olive surface (`#f2f2d8`) instead of white.
- `Choose your starting point` retains the approved three-column desktop hierarchy and light cards, with one compact 16:9 responsive photograph added above each service.
- All six photographs are unique and map directly to Design, Construction, Paving, Turf & Irrigation, Garden Makeovers and Garden Maintenance.
- The content body remains light and readable; image height stays compact so photography helps recognition without turning the section into a project gallery.

## Verification

- Six cards and six unique image sources render.
- All six images load successfully with intrinsic dimensions, `srcset`, lazy loading and descriptive alt text.
- The first service link navigates successfully to the Landscape Design detail page.
- Desktop has no horizontal overflow at the inspected viewport.
- Existing two-column tablet and one-column mobile breakpoints are preserved; compact-screen image height uses a bounded responsive rule.
- HTML, JavaScript syntax, local references and CSS brace balance pass across the package.

## Final result

final result: passed

---

# Projects page design QA — V21

## Comparison target

- Full-page source: `/workspace/scratch/0d73366182d2/upload/screencapture-file-C-Users-Nudar-Nuraz-Desktop-Cont-Modern-Landscaping-Website-for-Lead-Generation-Final-Dawson-Landscaping-Multi-Page-Website-v20-ser.jpg`
- Focused proof-box reference: `/workspace/scratch/0d73366182d2/upload/20d78b17-0476-47d2-b12c-ee7afd51df4f.png`
- Implementation: Projects route rendered from `http://terminal.local:4173/projects.html`
- Inspected viewport: 1363 × 936 CSS px

## Focused comparison

- The `Before`, `Response` and `After` proof boxes now use the shared light warm-olive surface `#f2f2d8` instead of warm white.
- All three `Demo project stories` text panels use the same `#f2f2d8` surface; the dark olive section background and project photography remain unchanged.
- The softer surface still maintains strong legibility for the dark display headings, body copy, tabs and text CTAs while making the Projects page consistent with the approved Services and individual service pages.
- No section order, content, image crop, typography, interaction or responsive layout was changed.

## Verification

- Browser-computed colors confirm `rgb(242, 242, 216)` for both the proof boxes and project-story copy panels.
- Project-story stage tabs still update the title, copy and image; the first story was tested from `Before` to `In progress`.
- No broken loaded images or horizontal overflow were observed at the inspected desktop viewport.
- Existing single-column tablet/mobile behavior is preserved because the change is surface-color only.
- HTML, JavaScript syntax, local references and CSS brace balance pass across the package.

## Evidence limit

Visual inspection confirms hierarchy, surface color and the tested interactive state. A screenshot alone cannot establish complete accessibility compliance; keyboard-only and assistive-technology testing should still be repeated on the production domain.

## Final result

final result: passed

---

# Landscape Design concept-plan design QA — V24

## Comparison target

- Full-page source: `/workspace/scratch/0d73366182d2/upload/screencapture-file-C-Users-Nudar-Nuraz-Desktop-Cont-Modern-Landscaping-Website-for-Lead-Generation-Final-Dawson-Landscaping-Multi-Page-Website-v22-abo(1).jpg`
- Focused source: `/workspace/scratch/0d73366182d2/upload/0a96f16f-c72d-467e-9d63-7cf0f28f1836.png`
- Implementation: Landscape Design `Design outputs` section
- Inspected desktop viewport: 1363 × 936 CSS px

## Decision and implementation

- Removed the abstract oval CSS graphic and the oversized `Site / Flow / Planting` text block.
- Added a unique, realistic top-down residential landscape concept plan showing the house footprint, terrace, lawn, pathway, waterwise planting and irrigation zones.
- Added three compact HTML callouts: `Site layout`, `Movement` and `Planting zones`.
- Added a visible disclosure that the concept plan is demo documentation and must be replaced with approved Dawson material before launch.
- Preserved the `Potential project outputs` content and the existing section order.

## Verification

- The old `.plan-lines` element is absent.
- The plan loads from responsive 768 px and 1536 px WebP sources with intrinsic dimensions and descriptive alt text.
- The plan uses `object-fit: contain` inside a 16:9 desktop frame, so the complete design remains visible rather than being heavily cropped.
- Desktop layout has no horizontal overflow; a 4:3 compact-screen frame is defined for mobile.
- HTML, JavaScript syntax, local references and CSS brace balance pass across the package.

## Evidence limit

The concept plan is a polished demonstration asset, not verified client work. It is explicitly labelled and should be replaced when Dawson supplies approved design documentation.

## Final result

final result: passed

---

# Turf & Irrigation zoning-plan design QA — V25

## Comparison target

- Full-page source: `/workspace/scratch/0d73366182d2/upload/screencapture-file-C-Users-Nudar-Nuraz-Desktop-Cont-Modern-Landscaping-Website-for-Lead-Generation-Final-Dawson-Landscaping-Multi-Page-Website-v22-abo(2).jpg`
- Focused source: `/workspace/scratch/0d73366182d2/upload/0f819899-ef4c-41e5-a330-d5a53d091766.png`
- Implementation: Turf & Irrigation `Illustrative irrigation zoning` section
- Inspected desktop viewport: 1347 × 936 CSS px
- Responsive evidence: 834 × 900 tablet iframe and 390 × 844 mobile iframe inside the cloud-browser viewport

## Decision and implementation

- Removed the abstract oval CSS illustration, which read as a Venn diagram rather than an irrigation plan.
- Added a unique top-down demo irrigation-zoning plan showing lawn spray heads and coverage, garden-bed dripline, feature-planting emitters, colour-coded routes, valves and a controller.
- Reworked the three supporting cards as a practical legend: `Lawn spray`, `Beds & feature planting` and `Controls & valves`.
- Added a visible disclosure that final layout, equipment and coverage are confirmed after site assessment.
- Kept the approved light section surface, Anton/Manrope typography, page order and CTA journey unchanged.

## Verification

- Responsive 836 px and 1672 px WebP sources load with intrinsic dimensions, descriptive alt text, lazy loading and async decoding.
- Desktop shows the full plan without clipping, with the disclosure over the image and the three legend cards aligned below.
- Tablet keeps the plan readable and the three supporting cards aligned without horizontal overflow.
- Mobile keeps the full plan visible, moves the disclosure into normal flow and stacks the three legend cards vertically.
- The section's image and content load successfully; no site-owned browser-console error was observed. The only logged error came from the cloud-browser extension.
- HTML validation, JavaScript syntax and responsive asset references pass.

## Accessibility and evidence limit

- The former shape-based `role="img"` has been replaced with a real image carrying useful alt text, while the visible legend and disclaimer repeat the essential meaning outside the bitmap.
- The generated plan is presentation content, not approved engineering documentation or verified Dawson project work. Its visible demo disclosure must remain until the client supplies an approved plan.

## Final result

final result: passed

---

# Symbolic tree motif design QA — V26

## Comparison target

- Full-colour tree reference: `/workspace/scratch/0d73366182d2/upload/jake logo-03(1).png`
- Reverse tree reference: `/workspace/scratch/0d73366182d2/upload/jake logo-04(1).png`
- Implementation: all 13 website routes, using the existing transparent `assets/images/dawson-icon.png`
- Inspected desktop viewport: 1363 × 936 CSS px
- Responsive evidence: 390 × 844 mobile iframe inside the cloud-browser viewport

## Decision and implementation

- Reused the exact transparent Dawson tree already present in the brand lockup instead of introducing the opaque backgrounds from the supplied PNG exports.
- Added a 72–96 px full-colour seal to the Services connected-approach section.
- Added one cream-filtered, 4–6% opacity watermark to a selected dark section on Home, all individual service pages, Projects, About, Contact, Privacy and Terms.
- Varied edge placement by context while keeping the asset outside primary headings, forms, CTA buttons and project photography.
- Kept every motif static and decorative; no motion, hover effect, rotation or parallax was introduced.

## Verification

- Browser-computed inspection confirms exactly one motif per route, correct desktop sizes/opacities and zero horizontal overflow at 1363 px.
- Home's lazy watermark loads when its review section enters view.
- The Services colour seal renders at 95 px desktop and 62 px mobile; the inspected mobile watermark renders at 164 px and 4.5% opacity.
- Mobile navigation, fixed lead bar and Message Dawson action remain unobstructed.
- All decorative images use empty alt text, `aria-hidden="true"`, intrinsic dimensions, disabled pointer events and the real transparent source asset.
- HTML validation, JavaScript syntax, local references and CSS brace balance pass.

## Evidence limit

Visual inspection confirms placement, hierarchy and responsive behaviour at the tested states. Final production review should still be repeated after WordPress templates, approved client photography and the live header/footer configuration are connected.

## Final result

final result: passed

---

# Card accents and hero dividers design QA — V27

## Comparison target

- Card-border source visual: `/workspace/scratch/0d73366182d2/upload/d57b9d5d-1b98-45cf-94b9-02d822b7c3cc.png` (1900 × 32 px)
- Hero-transition source visual: `/workspace/scratch/0d73366182d2/upload/f56dd6b1-b24b-4c84-bc2a-fb214abd78c7.png` (1900 × 40 px)
- Browser-rendered implementation: cloud-browser captures of Home and Services at `1363 × 936` CSS px, plus Services inside `834 × 844` and `390 × 844` responsive frames.
- Density normalization: source strips were reviewed at original pixel density; implementation line widths were verified by browser-computed CSS rather than scaled-image estimation.
- State: default page state with fixed header and compact-screen lead controls visible.

## Full-view and focused comparison evidence

- Full-view Home and Services captures confirm the new line reads as a narrow transition accent rather than a coloured banner; the cream spacing below remains intact.
- Focused Services capture confirms the proof row uses the reference's muted-olive top accent and the six image-led service cards use the approved yellow service accent.
- Existing irrigation legend remains the closest exact three-colour reference: yellow, olive and deep-olive top borders on a light surface.
- Focused mobile/tablet capture confirms the divider remains thin, the card accents do not change card width and fixed lead controls remain unobstructed.

## Required fidelity surfaces

- Fonts and typography: Anton/Manrope hierarchy, weights, wrapping and text sizes are unchanged.
- Spacing and layout rhythm: card dimensions, gaps, radii and section padding remain unchanged; only the approved top-border thickness was added.
- Colours and visual tokens: yellow `#edb817`, muted olive `#7d8142` and deep olive `#303217` match the existing Dawson palette and supplied line reference.
- Image quality and asset fidelity: no image, crop, logo, motif or photo treatment was changed; borders never overlay photography.
- Copy and content: all headings, body copy, demo disclosures, CTA labels and form text remain unchanged.

## Findings and comparison history

- Initial browser audit found Privacy and Terms had no hero divider because the legal hero used a separate selector. Added the same 4 px yellow rule to `.simple-hero` and rechecked both pages; each then reported `4px solid rgb(237, 184, 23)` with zero horizontal overflow.
- No actionable P0, P1 or P2 differences remain after the legal-page fix.
- P3 residual: production WordPress QA should recheck card borders after CMS content changes card heights or moves cards between light and dark sections.

## Primary interactions and console

- Navigation, responsive menu layout, fixed Call Dawson / Send project enquiry controls and Message Dawson placement remain unchanged and unobstructed in inspected states.
- No site-owned console error was observed during the route and responsive checks.

## Final result

final result: passed

---

# Logo-colour borders and shadow design QA — V28

## Comparison target and evidence

- Source visual truth: `/workspace/scratch/0d73366182d2/upload/jake logo-03(2).png` (1624 × 1536 px).
- Browser-rendered full view: `/workspace/scratch/0d73366182d2/Dawson-Landscaping-Multi-Page-Website-v15/Dawson-Landscaping-Website-Final/qa-v28-home-desktop.jpg` (1348 × 926 px capture from a 1363 × 936 CSS viewport).
- Focused card evidence: `/workspace/scratch/0d73366182d2/Dawson-Landscaping-Multi-Page-Website-v15/Dawson-Landscaping-Website-Final/qa-v28-services-cards.jpg` (1348 × 926 px).
- Focused hero-divider evidence: `/workspace/scratch/0d73366182d2/Dawson-Landscaping-Multi-Page-Website-v15/Dawson-Landscaping-Website-Final/qa-v28-hero-divider.jpg` (1348 × 926 px).
- Responsive states: same-origin browser frames at 834 × 900 CSS px and 390 × 844 CSS px; device scale factor 1. Source and implementation colours were compared by exact pixel sampling and browser-computed CSS, so no density scaling was used for colour judgment.
- State: default desktop page, responsive Home states and the Services card section. One desktop service card may show its existing hover outline in the focused capture; this is an interaction state, not a border-token mismatch.

## Full-view and focused comparison evidence

- The source logo and the two focused browser captures were opened together before judgment.
- Full-view Home preserves the approved hierarchy, imagery, typography, section rhythm and existing conversion controls; no nearby design element changed.
- The hero transition now ends with a narrow logo-gold line and olive depth cue. It reads as a branded divider rather than a coloured banner.
- Services cards and light proof boxes use the same gold/olive pairing visible in the supplied tree. The shadow remains directly under the top accent and does not create a heavy floating-card effect.
- Focused regions were necessary because the accent is intentionally only 3–5 px and cannot be judged reliably from a full-page screenshot alone.

## Required fidelity surfaces

- Fonts and typography: Anton/Manrope families, weights, sizes, line heights, wrapping and hierarchy are unchanged.
- Spacing and layout rhythm: card dimensions, gaps, radii, section padding and hero height are unchanged; the inset shadow does not alter box dimensions.
- Colours and visual tokens: supplied artwork samples resolve to gold `#E5B117`, olive `#859037` and dark outline `#363815`. Only gold and olive are used as visible border accents; the outline colour is limited to low-opacity shadow depth.
- Image quality and asset fidelity: all existing real photographs and logo assets remain unchanged; borders and shadows never overlay project imagery.
- Copy and content: headings, service descriptions, demo disclosures, form text, CTA labels and navigation remain unchanged.

## Findings and comparison history

- Initial comparison showed the V27 three-colour system was broader than the user's requested two-colour logo pairing. Replaced deep-olive accent borders with olive, added the reciprocal gold/olive inset shadows and changed all hero dividers to logo gold with olive depth.
- Post-fix browser evidence across all 13 routes found no invalid third-colour accent, no horizontal overflow and no actionable P0, P1 or P2 mismatch.
- P3 residual: recheck the shadow opacity after future WordPress editors move a card between light and dark sections.

## Primary interactions and console

- Mobile menu open/close was tested successfully inside the 390 px browser frame.
- Header navigation, fixed Call Dawson / Send project enquiry controls, three-scene hero and Message Dawson control remain present and unobstructed.
- No `terminal.local` site-owned console error was observed; unrelated browser-extension metadata errors were excluded from site QA.

## Final result

final result: passed
