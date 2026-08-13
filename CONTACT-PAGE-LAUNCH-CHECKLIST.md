# Contact page launch checklist

The contact page is ready for review and presentation. Before publishing it on the final domain, add only client-verified business details in `assets/js/site-config.js`.

## Required launch details

- Verified Dawson phone number and display format
- Monitored enquiry email address or secure form endpoint
- Final website domain in `siteUrl`
- Google Tag Manager container ID connected to GA4
- Confirmed Perth service-area wording or suburb list
- Confirmed response-time promise, if the business wants one displayed
- Verified Instagram, Facebook and Houzz profile URLs
- Approved live-chat or messaging URL

## Form and tracking tests

- Submit a successful enquiry on desktop and mobile
- Confirm the enquiry arrives at the approved inbox or CRM
- Test required-field and invalid-email messages
- Test JPG, PNG, WebP and HEIC uploads, including the four-file and 8 MB limits
- Confirm the success message appears only after a successful submission
- Confirm `form_start`, `generate_lead`, validation-error and submission-error events in GA4 DebugView
- Confirm click-to-call, email, project-enquiry CTA and chat events
- Add server-side spam protection, rate limiting and file validation to the production endpoint

## Content confirmation

- Keep the current “project enquiry” wording unless Dawson later verifies that every initial quotation is free
- Confirm the optional budget ranges reflect Dawson's preferred project sizes
- Replace broad service-area wording with verified suburbs only when supplied by the client
- Add a response time only after Dawson confirms it can be met consistently
