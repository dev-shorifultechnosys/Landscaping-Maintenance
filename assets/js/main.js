"use strict";

const config = window.DAWSON_CONFIG || {};

function track(event, parameters = {}) {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event, ...parameters });
}

function normaliseSiteUrl(value) {
  return String(value || "")
    .trim()
    .replace(/\/$/, "");
}

function isSafeExternalUrl(value) {
  try {
    const url = new URL(String(value || "").trim());
    return url.protocol === "https:";
  } catch (_) {
    return false;
  }
}

function installTagManager(containerId) {
  if (!/^GTM-[A-Z0-9]+$/i.test(containerId || "")) return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ "gtm.start": Date.now(), event: "gtm.js" });
  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtm.js?id=${encodeURIComponent(containerId)}`;
  document.head.appendChild(script);
}

function configureMetadata() {
  const siteUrl = normaliseSiteUrl(config.siteUrl);
  const description =
    document.querySelector('meta[name="description"]')?.content || "";
  const title = document.title;
  const shareImage = siteUrl
    ? `${siteUrl}/assets/images/dawson-og.webp`
    : "assets/images/dawson-og.webp";

  const ensureMeta = (attribute, key, content) => {
    let meta = document.querySelector(`meta[${attribute}="${key}"]`);
    if (!meta) {
      meta = document.createElement("meta");
      meta.setAttribute(attribute, key);
      document.head.appendChild(meta);
    }
    meta.content = content;
    return meta;
  };

  ensureMeta("property", "og:type", "website");
  ensureMeta("property", "og:locale", "en_AU");
  ensureMeta("property", "og:site_name", "Dawson Landscaping & Maintenance");
  ensureMeta("property", "og:title", title);
  if (description) ensureMeta("property", "og:description", description);
  ensureMeta("property", "og:image", shareImage);
  ensureMeta("name", "twitter:card", "summary_large_image");
  ensureMeta("name", "twitter:title", title);
  if (description) ensureMeta("name", "twitter:description", description);
  ensureMeta("name", "twitter:image", shareImage);

  if (!siteUrl) return;

  const canonicalUrl = `${siteUrl}${location.pathname === "/index.html" ? "/" : location.pathname}`;
  let canonical = document.querySelector('link[rel="canonical"]');
  if (!canonical) {
    canonical = document.createElement("link");
    canonical.rel = "canonical";
    document.head.appendChild(canonical);
  }
  canonical.href = canonicalUrl;

  ensureMeta("property", "og:url", canonicalUrl);

  ensureMeta("property", "og:image", shareImage);
  ensureMeta("name", "twitter:image", shareImage);

  const schema = document.querySelector('script[type="application/ld+json"]');
  if (schema) {
    try {
      const data = JSON.parse(schema.textContent);
      data.url = canonicalUrl;
      data.image = `${siteUrl}/assets/images/dawson-og.webp`;
      const business =
        data["@type"] === "HomeAndConstructionBusiness"
          ? data
          : [data.provider, data.about, data.publisher].find(
              (item) => item?.["@type"] === "HomeAndConstructionBusiness",
            );
      if (business) {
        business.url = siteUrl;
        business.logo = `${siteUrl}/assets/images/dawson-logo-color.webp`;
        if (config.phoneHref) business.telephone = config.phoneHref;
        if (config.email) business.email = config.email;
      }
      const sameAs = [
        config.instagramUrl,
        config.facebookUrl,
        config.houzzUrl,
      ].filter(isSafeExternalUrl);
      if (sameAs.length && business) business.sameAs = sameAs;
      schema.textContent = JSON.stringify(data);
    } catch (_) {
      // Keep the valid static schema if a future manual edit contains an error.
    }
  }

  const breadcrumbs = document.querySelector(".breadcrumbs");
  if (breadcrumbs && !document.querySelector("[data-breadcrumb-schema]")) {
    const items = [...breadcrumbs.children]
      .filter((node) => node.tagName === "A" || node.tagName === "SPAN")
      .filter((node) => node.textContent.trim() !== "/")
      .map((node, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: node.textContent.trim(),
        item:
          node.tagName === "A"
            ? new URL(node.getAttribute("href"), canonicalUrl).href
            : canonicalUrl,
      }));
    if (items.length > 1) {
      const breadcrumbSchema = document.createElement("script");
      breadcrumbSchema.type = "application/ld+json";
      breadcrumbSchema.dataset.breadcrumbSchema = "";
      breadcrumbSchema.textContent = JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: items,
      });
      document.head.appendChild(breadcrumbSchema);
    }
  }
}

function configureContactDetails() {
  const phoneHref = String(config.phoneHref || "").trim();
  const phoneDisplay = String(config.phoneDisplay || phoneHref).trim();
  const email = String(config.email || "").trim();

  if (phoneHref && phoneDisplay) {
    document.querySelectorAll("[data-phone-link]").forEach((link) => {
      link.href = `tel:${phoneHref.replace(/[^+\d]/g, "")}`;
      link.textContent = phoneDisplay;
      link.hidden = false;
      link.addEventListener("click", () =>
        track("click_to_call", {
          link_location: link.closest("header")
            ? "header"
            : link.closest("footer")
              ? "footer"
              : link.closest(".mobile-bar")
                ? "mobile_bar"
                : "page",
        }),
      );
    });
    document.querySelectorAll("[data-phone-row]").forEach((row) => {
      row.hidden = false;
    });
    document.querySelector(".mobile-bar")?.classList.add("has-phone");
  }

  if (email && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    document.querySelectorAll("[data-email-link]").forEach((link) => {
      link.href = `mailto:${email}`;
      link.textContent = email;
      link.hidden = false;
      link.addEventListener("click", () =>
        track("email_click", {
          link_location: link.closest("footer") ? "footer" : "contact",
        }),
      );
    });
    document.querySelectorAll("[data-email-row]").forEach((row) => {
      row.hidden = false;
    });
  }
}

function setupHeroSlider() {
  const slider = document.querySelector("[data-hero-slider]");
  const slides = slider ? [...slider.querySelectorAll(".hero-slide")] : [];
  const progress = [...document.querySelectorAll(".hero-progress i")];
  if (!slider || slides.length < 2) return;

  const reducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;
  let active = 0;
  let paused = reducedMotion;
  let timer = 0;

  const render = () => {
    slides.forEach((slide, index) =>
      slide.classList.toggle("is-active", index === active),
    );
    progress.forEach((item, index) =>
      item.classList.toggle("is-active", index === active),
    );
    slider.dataset.activeSlide = String(active);
  };
  const stop = () => window.clearInterval(timer);
  const start = () => {
    stop();
    if (paused) return;
    timer = window.setInterval(() => {
      active = (active + 1) % slides.length;
      render();
    }, 9000);
  };
  document.addEventListener("visibilitychange", () => {
    if (document.hidden) stop();
    else start();
  });
  render();
  start();
}

function configureLeadChannels() {
  const chatUrl = String(config.chatUrl || "").trim();
  const contactFallback = document.querySelector("#contact")
    ? "#contact"
    : "contact.html";
  const chatLink = document.querySelector("[data-chat-link]");
  if (chatLink) {
    chatLink.hidden = false;
    chatLink.classList.add("is-active");
    document.body.classList.add("has-chat");
    if (isSafeExternalUrl(chatUrl)) {
      chatLink.href = chatUrl;
      chatLink.target = "_blank";
      chatLink.rel = "noopener noreferrer";
    } else {
      chatLink.href = contactFallback;
      chatLink.removeAttribute("target");
      chatLink.removeAttribute("rel");
    }
    chatLink.addEventListener("click", () =>
      track("chat_start", { link_location: "floating_button" }),
    );
  }

  const serviceArea = String(config.serviceAreaText || "").trim();
  const responsePromise = String(config.responsePromise || "").trim();
  if (serviceArea)
    document.querySelectorAll("[data-service-area]").forEach((item) => {
      item.textContent = serviceArea;
    });
  if (responsePromise)
    document.querySelectorAll("[data-response-promise]").forEach((item) => {
      item.textContent = responsePromise;
    });
}

function configureSocialLinks() {
  const contactFallback = document.querySelector("#contact")
    ? "#contact"
    : "contact.html";
  const socialUrls = {
    instagram: config.instagramUrl,
    facebook: config.facebookUrl,
    houzz: config.houzzUrl,
  };
  document.querySelectorAll("[data-social-link]").forEach((link) => {
    const network = link.dataset.socialLink;
    const url = String(socialUrls[network] || "").trim();
    link.hidden = false;
    if (isSafeExternalUrl(url)) {
      link.href = url;
      link.target = "_blank";
      link.rel = "noopener noreferrer";
      link.classList.remove("is-demo-link");
    } else {
      link.href = contactFallback;
      link.removeAttribute("target");
      link.removeAttribute("rel");
      link.classList.add("is-demo-link");
    }
    link.addEventListener("click", () =>
      track("social_click", {
        social_network: network,
        link_location: "footer",
      }),
    );
  });
  document.querySelectorAll("[data-social-group]").forEach((group) => {
    group.hidden = false;
  });
}

function configureReviews() {
  const reviews = Array.isArray(config.reviews)
    ? config.reviews
        .filter((review) => {
          return (
            review &&
            String(review.quote || "").trim() &&
            String(review.name || "").trim()
          );
        })
        .slice(0, 3)
    : [];

  const createReviewCard = (review) => {
    const article = document.createElement("article");
    article.className = "is-review";

    const rating = Math.max(1, Math.min(5, Number(review.rating) || 5));
    const stars = document.createElement("span");
    stars.setAttribute("role", "img");
    stars.setAttribute("aria-label", `${rating} out of 5 stars`);
    stars.textContent = "★".repeat(rating);

    const quote = document.createElement("h3");
    quote.textContent = `“${String(review.quote).trim()}”`;

    const meta = document.createElement("p");
    meta.className = "review-meta";
    meta.textContent = String(review.name).trim();
    const detail = [review.suburb, review.service, review.source]
      .map((value) => String(value || "").trim())
      .filter(Boolean)
      .join(" · ");
    if (detail) {
      const source = document.createElement("small");
      source.className = "review-source";
      source.textContent = detail;
      meta.appendChild(source);
    }
    article.append(stars, quote, meta);
    return article;
  };

  const aboutSection = document.querySelector("[data-about-review-section]");
  const aboutGrid = document.querySelector("[data-about-review-grid]");
  if (reviews.length && aboutSection && aboutGrid) {
    aboutGrid.replaceChildren(createReviewCard(reviews[0]));
    aboutSection.hidden = false;
    const aboutLabel = aboutSection.querySelector("[data-about-review-label]");
    const aboutTitle = aboutSection.querySelector("[data-about-review-title]");
    const aboutIntro = aboutSection.querySelector("[data-about-review-intro]");
    if (aboutLabel) aboutLabel.textContent = "Verified client feedback";
    if (aboutTitle)
      aboutTitle.innerHTML = "The experience<br>behind the outcome.";
    if (aboutIntro)
      aboutIntro.textContent =
        "Approved feedback from a completed Dawson Landscaping project, with its suburb, service and original review source.";
  }

  if (reviews.length < 2) return;

  const grid = document.querySelector("[data-review-grid]");
  if (!grid) return;
  grid.replaceChildren();
  reviews.forEach((review) => grid.appendChild(createReviewCard(review)));

  const label = document.querySelector("[data-experience-label]");
  const title = document.querySelector("[data-experience-title]");
  const intro = document.querySelector("[data-experience-intro]");
  if (label) label.textContent = "Verified client feedback";
  if (title) title.innerHTML = "Trusted by Perth<br>property owners.";
  if (intro)
    intro.textContent =
      "Approved feedback from completed Dawson Landscaping projects, including useful project and source context.";
}

function setupHeader() {
  const header = document.querySelector("[data-header]");
  const nav = header?.querySelector("nav");
  const menu = header?.querySelector(".menu");
  const backdrop = header?.querySelector(".menu-backdrop");
  if (!header || !nav || !menu || !backdrop) return;

  const focusable = () => [...nav.querySelectorAll("a[href]")];
  const updateHeader = () =>
    header.classList.toggle("is-solid", window.scrollY > 24);
  const closeMenu = (returnFocus = false) => {
    nav.classList.remove("open");
    menu.classList.remove("active");
    header.classList.remove("menu-visible");
    menu.setAttribute("aria-expanded", "false");
    menu.setAttribute("aria-label", "Open menu");
    document.body.classList.remove("menu-open");
    if (returnFocus) menu.focus();
  };
  const openMenu = () => {
    nav.classList.add("open");
    menu.classList.add("active");
    header.classList.add("menu-visible");
    menu.setAttribute("aria-expanded", "true");
    menu.setAttribute("aria-label", "Close menu");
    document.body.classList.add("menu-open");
    focusable()[0]?.focus();
  };

  updateHeader();
  window.addEventListener("scroll", updateHeader, { passive: true });
  window.addEventListener(
    "resize",
    () => {
      if (window.innerWidth > 1050) closeMenu();
    },
    { passive: true },
  );
  menu.addEventListener("click", () =>
    nav.classList.contains("open") ? closeMenu(true) : openMenu(),
  );
  backdrop.addEventListener("click", () => closeMenu(true));
  nav
    .querySelectorAll("a")
    .forEach((link) => link.addEventListener("click", () => closeMenu()));

  document.addEventListener("keydown", (event) => {
    if (!nav.classList.contains("open")) return;
    if (event.key === "Escape") {
      event.preventDefault();
      closeMenu(true);
      return;
    }
    if (event.key !== "Tab") return;
    const items = [...focusable(), menu];
    const first = items[0];
    const last = items[items.length - 1];
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  });
}

function setupFaq() {
  const list = document.querySelector(".faq-list");
  if (!list) return;
  if (list.closest(".inner-faq") && !list.querySelector("article.open")) {
    const first = list.querySelector("article");
    first?.classList.add("open");
    first?.querySelector("button")?.setAttribute("aria-expanded", "true");
  }
  list.addEventListener("click", (event) => {
    const button = event.target.closest("button");
    if (!button) return;
    const current = button.closest("article");
    const shouldOpen = !current.classList.contains("open");
    list.querySelectorAll("article").forEach((item) => {
      item.classList.remove("open");
      item.querySelector("button").setAttribute("aria-expanded", "false");
    });
    if (shouldOpen) {
      current.classList.add("open");
      button.setAttribute("aria-expanded", "true");
    }
  });
}

function setupServiceSelection() {
  const select = document.querySelector("#service-select");
  if (!select) return;
  const requestedFromUrl = new URLSearchParams(location.search).get("service");
  if (requestedFromUrl) {
    const initialMatch = [...select.options].find(
      (option) =>
        option.value === requestedFromUrl ||
        option.textContent.trim() === requestedFromUrl,
    );
    if (initialMatch) select.value = initialMatch.value;
  }
  document.querySelectorAll("[data-service]").forEach((link) => {
    link.addEventListener("click", () => {
      const requested = link.dataset.service;
      const match = [...select.options].find(
        (option) =>
          option.value === requested || option.textContent.trim() === requested,
      );
      if (match) {
        select.value = match.value;
        select.dispatchEvent(new Event("change", { bubbles: true }));
      }
      track("service_enquiry_click", {
        service_name: requested,
        link_location: link.closest("footer") ? "footer" : "service_grid",
      });
    });
  });
}

function setupProjectStories() {
  const stories = document.querySelectorAll("[data-project-story]");
  if (!stories.length) return;

  const reducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;

  stories.forEach((story) => {
    const tabs = [...story.querySelectorAll("[data-project-tab]")];
    const panel = story.querySelector('[role="tabpanel"]');
    const visual = story.querySelector("[data-project-visual]");
    const source = story.querySelector("[data-project-source]");
    const image = story.querySelector("[data-project-image]");
    const title = story.querySelector("[data-project-title]");
    const copy = story.querySelector("[data-project-copy]");
    const link = story.querySelector("[data-project-link]");
    const linkLabel = story.querySelector("[data-project-link-label]");
    if (
      !tabs.length ||
      !panel ||
      !visual ||
      !source ||
      !image ||
      !title ||
      !copy ||
      !link ||
      !linkLabel
    )
      return;

    let changeId = 0;
    const showTab = (tab, userInitiated = false) => {
      if (!tab || tab.getAttribute("aria-selected") === "true") return;

      tabs.forEach((item) => {
        const active = item === tab;
        item.setAttribute("aria-selected", String(active));
        item.tabIndex = active ? 0 : -1;
      });
      panel.setAttribute("aria-labelledby", tab.id);

      const currentChange = ++changeId;
      const updateContent = () => {
        if (currentChange !== changeId) return;
        source.srcset = tab.dataset.avif;
        image.srcset = tab.dataset.webp;
        image.src = tab.dataset.src;
        image.alt = tab.dataset.alt;
        image.width = Number(tab.dataset.width) || image.width;
        image.height = Number(tab.dataset.height) || image.height;
        title.textContent = tab.dataset.title;
        copy.textContent = tab.dataset.copy;
        link.href = tab.dataset.link;
        linkLabel.textContent = tab.dataset.linkLabel;

        const nextFrame =
          window.requestAnimationFrame ||
          ((callback) => window.setTimeout(callback, 0));
        nextFrame(() => {
          visual.classList.remove("is-changing");
          panel.classList.remove("is-changing");
        });
      };

      if (reducedMotion) {
        updateContent();
      } else {
        visual.classList.add("is-changing");
        panel.classList.add("is-changing");
        const preload = new Image();
        let completed = false;
        const finish = () => {
          if (completed) return;
          completed = true;
          window.setTimeout(updateContent, 110);
        };
        preload.srcset = tab.dataset.webp;
        preload.sizes = image.sizes || "100vw";
        preload.addEventListener("load", finish, { once: true });
        preload.addEventListener("error", finish, { once: true });
        preload.src = tab.dataset.src;
        if (preload.complete) finish();
        window.setTimeout(finish, 320);
      }

      if (userInitiated) {
        track("project_detail_view", {
          project_name: story.dataset.projectStory,
          detail_name: tab.textContent.trim(),
        });
      }
    };

    tabs.forEach((tab, index) => {
      tab.addEventListener("click", () => showTab(tab, true));
      tab.addEventListener("keydown", (event) => {
        let targetIndex = index;
        if (event.key === "ArrowRight") targetIndex = (index + 1) % tabs.length;
        else if (event.key === "ArrowLeft")
          targetIndex = (index - 1 + tabs.length) % tabs.length;
        else if (event.key === "Home") targetIndex = 0;
        else if (event.key === "End") targetIndex = tabs.length - 1;
        else return;
        event.preventDefault();
        tabs[targetIndex].focus();
        showTab(tabs[targetIndex], true);
      });
    });
  });
}

function setupTracking() {
  document.querySelectorAll("[data-track]").forEach((link) => {
    link.addEventListener("click", () =>
      track(link.dataset.track, {
        cta_location: link.dataset.location || "page",
        cta_text: link.textContent.trim(),
      }),
    );
  });
}

function validateForm(form) {
  let firstInvalid = null;
  form.querySelectorAll("input, select, textarea").forEach((field) => {
    const invalid = !field.checkValidity();
    field.classList.toggle("user-invalid", invalid);
    if (invalid && !firstInvalid) firstInvalid = field;
  });
  if (firstInvalid) firstInvalid.focus();
  return !firstInvalid;
}

function setupForm() {
  const form = document.querySelector("#quote-form");
  const success = document.querySelector(".success");
  const status = document.querySelector("#form-status");
  const submit = form?.querySelector('button[type="submit"]');
  if (!form || !success || !status || !submit) return;

  document.querySelector("#page-url").value = location.href;
  let started = false;
  form.addEventListener("focusin", (event) => {
    if (started || !event.target.matches("input, select, textarea")) return;
    started = true;
    track("form_start", {
      form_id: form.id,
      form_name: form.getAttribute("name"),
    });
  });
  form.addEventListener("input", (event) =>
    event.target.classList.remove("user-invalid"),
  );
  form.addEventListener("change", (event) =>
    event.target.classList.remove("user-invalid"),
  );

  const photoInput = document.querySelector("#project-photos");
  photoInput?.addEventListener("change", () => {
    const files = [...photoInput.files];
    const tooMany = files.length > 4;
    const tooLarge = files.some((file) => file.size > 8 * 1024 * 1024);
    photoInput.setCustomValidity(
      tooMany
        ? "Choose no more than 4 photos."
        : tooLarge
          ? "Each photo must be 8 MB or smaller."
          : "",
    );
  });

  const setBusy = (busy) => {
    submit.disabled = busy;
    submit.querySelector("span:first-child").textContent = busy
      ? "Sending enquiry…"
      : "Send project enquiry";
  };
  const showSuccess = () => {
    form.hidden = true;
    success.hidden = false;
    success.focus?.();
    success.scrollIntoView({
      behavior: matchMedia("(prefers-reduced-motion: reduce)").matches
        ? "auto"
        : "smooth",
      block: "center",
    });
  };

  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    status.textContent = "";
    if (!validateForm(form)) {
      status.textContent =
        "Please complete the required fields before sending your enquiry.";
      track("form_validation_error", { form_id: form.id });
      return;
    }

    const data = new FormData(form);
    if (data.get("company_website")) {
      showSuccess();
      return;
    }

    const endpoint = String(config.formEndpoint || "").trim();
    if (!endpoint) {
      const email = String(config.email || "").trim();
      if (email) {
        const subject = encodeURIComponent(
          `Landscaping enquiry — ${data.get("service")} — ${data.get("suburb")}`,
        );
        const body = encodeURIComponent(
          [
            `Name: ${data.get("name")}`,
            `Phone: ${data.get("phone")}`,
            `Email: ${data.get("email") || "Not provided"}`,
            `Suburb: ${data.get("suburb")}`,
            `Service: ${data.get("service")}`,
            `Timing: ${data.get("timing") || "Not provided"}`,
            `Budget: ${data.get("budget") || "Not provided"}`,
            "",
            "Project details:",
            data.get("project_details"),
          ].join("\n"),
        );
        location.href = `mailto:${email}?subject=${subject}&body=${body}`;
        status.textContent = data
          .getAll("project_photos")
          .some((file) => file && file.size)
          ? "Your email app has opened with the enquiry details. Attach your selected photos, then send the email to complete your request."
          : "Your email app has opened with the enquiry details. Send that email to complete your request.";
        track("lead_email_fallback", {
          form_id: form.id,
          service_name: data.get("service"),
        });
      } else {
        status.textContent =
          "Online delivery is not active yet. Please use Dawson's verified phone, email or messaging option once those details are available.";
      }
      return;
    }

    setBusy(true);
    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      });
      if (!response.ok)
        throw new Error(`Submission failed with status ${response.status}`);
      track("generate_lead", {
        form_id: form.id,
        form_name: form.getAttribute("name"),
        service_name: data.get("service"),
        budget_range: data.get("budget") || "not_provided",
        timing: data.get("timing") || "not_provided",
      });
      showSuccess();
    } catch (_) {
      status.textContent =
        "We could not send the enquiry just now. Please try again or use the contact details shown on this page.";
      track("form_submission_error", { form_id: form.id });
    } finally {
      setBusy(false);
    }
  });

  document.querySelector(".reset-form")?.addEventListener("click", () => {
    form.reset();
    form.hidden = false;
    success.hidden = true;
    status.textContent = "";
    form.querySelector('input:not([type="hidden"])')?.focus();
  });
}

document.addEventListener("DOMContentLoaded", () => {
  installTagManager(config.googleTagManagerId);
  configureMetadata();
  configureContactDetails();
  configureLeadChannels();
  configureSocialLinks();
  configureReviews();
  setupHeroSlider();
  setupHeader();
  setupFaq();
  setupServiceSelection();
  setupProjectStories();
  setupTracking();
  setupForm();
  const year = document.querySelector("#year");
  if (year) year.textContent = new Date().getFullYear();
});
