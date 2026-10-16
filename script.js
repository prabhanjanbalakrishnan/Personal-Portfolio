(function () {
  const S = window.SITE;
  if (!S) return;

  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];
  const el = (tag, attrs = {}, ...children) => {
    const node = document.createElement(tag);
    for (const [k, v] of Object.entries(attrs)) {
      if (k === "class") node.className = v;
      else node.setAttribute(k, v);
    }
    for (const c of children) node.append(c);
    return node;
  };
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // ---- Simple text bindings ----
  $$("[data-bind]").forEach((n) => {
    const v = S[n.dataset.bind];
    if (v) n.textContent = v;
  });
  document.title = `${S.name} — Portfolio`;
  $("#year").textContent = new Date().getFullYear();

  // ---- Links (hide any that are empty) ----
  $$("[data-link]").forEach((a) => {
    const key = a.dataset.link;
    const v = S.links[key];
    if (!v) { (a.closest("li") || a).remove(); return; }
    a.href = key === "email" ? `mailto:${v}` : v;
  });

  // ---- Email address + copy button (mailto links don't open everywhere) ----
  const emailText = $("#email-text");
  const copyBtn = $("#copy-email");
  if (S.links.email) {
    emailText.textContent = S.links.email;
    copyBtn.addEventListener("click", () => {
      const done = () => {
        copyBtn.textContent = "Copied";
        setTimeout(() => (copyBtn.textContent = "Copy"), 2000);
      };
      const selectText = () => {
        const range = document.createRange();
        range.selectNodeContents(emailText);
        const sel = window.getSelection();
        sel.removeAllRanges();
        sel.addRange(range);
        copyBtn.textContent = "Press ⌘C to copy";
      };
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(S.links.email).then(done, selectText);
      } else {
        selectText();
      }
    });
  } else {
    $(".email-row").remove();
  }

  // ---- About ----
  S.about.forEach((p) => $("#about-text").append(el("p", {}, p)));
  const cur = $("#currently");
  for (const [label, val] of Object.entries(S.currently)) {
    cur.append(el("div", {}, el("span", { class: "label" }, `// currently ${label}`), val));
  }

  // ---- Skills ----
  const sg = $("#skills-grid");
  for (const [group, items] of Object.entries(S.skills)) {
    const ul = el("ul", { class: "chips" });
    items.forEach((s) => ul.append(el("li", { class: "chip" }, s)));
    sg.append(el("div", { class: "skill-group" }, el("h3", {}, group), ul));
  }

  // ---- Projects ----
  const pg = $("#projects-grid");
  const projects = [...S.projects].sort((a, b) => (b.featured === true) - (a.featured === true));
  projects.forEach((p) => {
    const card = el("article", { class: "project", "data-tags": p.tags.join("|") });
    if (p.image) {
      card.append(el("div", { class: "project-thumb" }, el("img", { src: p.image, alt: `${p.title} screenshot`, loading: "lazy" })));
    }
    const head = el("div", { class: "project-head" }, el("h3", {}, p.title));
    if (p.featured) head.append(el("span", { class: "badge" }, "★ featured"));
    const tags = el("ul", { class: "tags" });
    p.tags.forEach((t) => tags.append(el("li", {}, t)));
    const links = el("div", { class: "project-links" });
    if (p.github) links.append(el("a", { href: p.github, target: "_blank", rel: "noopener" }, "</> code"));
    if (p.demo) links.append(el("a", { href: p.demo, target: "_blank", rel: "noopener" }, "↗ live demo"));
    card.append(el("div", { class: "project-body" }, head, el("p", {}, p.description), tags, links));
    pg.append(card);
  });

  // ---- Filters ----
  const allTags = [...new Set(S.projects.flatMap((p) => p.tags))];
  const filters = $("#filters");
  const setFilter = (tag) => {
    $$(".filter-btn", filters).forEach((b) => b.setAttribute("aria-pressed", String(b.dataset.tag === tag)));
    $$(".project", pg).forEach((c) => {
      c.classList.toggle("hidden", tag !== "all" && !c.dataset.tags.split("|").includes(tag));
    });
  };
  ["all", ...allTags].forEach((t) => {
    const b = el("button", { class: "filter-btn", type: "button", "data-tag": t, "aria-pressed": "false" }, t);
    b.addEventListener("click", () => setFilter(t));
    filters.append(b);
  });
  setFilter("all");

  // ---- Interests ----
  const ig = $("#interests-grid");
  // A list item is either "plain text" or { label: "Heading", items: [...] } for sub-bullets.
  const buildList = (items, cls) => {
    const ul = el("ul", { class: cls });
    items.forEach((item) => {
      if (typeof item === "string") { ul.append(el("li", {}, item)); return; }
      const li = el("li", { class: "has-sub" }, el("span", { class: "sub-label" }, item.label));
      if (item.items && item.items.length) li.append(buildList(item.items, "interest-sublist"));
      ul.append(li);
    });
    return ul;
  };
  if (ig) S.interests.forEach((i) => {
    const card = el("div", { class: "interest" },
      el("span", { class: "emoji", "aria-hidden": "true" }, i.emoji),
      el("h3", {}, i.title));
    if (i.text) card.append(el("p", {}, i.text));
    if (i.list) card.append(buildList(i.list, "interest-list"));
    ig.append(card);
  });

  // ---- Experience (most recent first, in the order listed in data.js) ----
  const tl = $("#timeline");
  if (tl) (S.experience || []).forEach((job) => {
    const meta = el("div", { class: "job-meta" }, el("span", { class: "job-dates" }, job.dates || ""));
    if (job.location) meta.append(el("span", { class: "job-loc" }, job.location));
    const head = el("h3", {}, job.role || "");
    if (job.company) head.append(el("span", { class: "job-company" }, ` @ ${job.company}`));
    const body = el("div", { class: "job-body" }, head);
    if (job.bullets && job.bullets.length) body.append(buildList(job.bullets, "job-list"));
    tl.append(el("li", { class: "job" }, meta, body));
  });

  // ---- Typing effect ----
  const typed = $("#typed");
  const lines = S.typedLines || [];
  if (reducedMotion || !lines.length) {
    typed.textContent = lines[0] || "";
  } else {
    let li = 0, ci = 0, deleting = false;
    const tick = () => {
      const line = lines[li];
      typed.textContent = line.slice(0, ci);
      if (!deleting && ci < line.length) { ci++; setTimeout(tick, 55); }
      else if (!deleting) { deleting = true; setTimeout(tick, 1800); }
      else if (ci > 0) { ci--; setTimeout(tick, 25); }
      else { deleting = false; li = (li + 1) % lines.length; setTimeout(tick, 400); }
    };
    tick();
  }

  // ---- Mobile nav ----
  const nav = $(".nav");
  const toggle = $(".nav-toggle");
  toggle.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(open));
    toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
  });
  $$(".nav-links a").forEach((a) => a.addEventListener("click", () => {
    nav.classList.remove("open");
    toggle.setAttribute("aria-expanded", "false");
  }));

  // ---- Scroll reveal ----
  const reveals = $$(".reveal");
  if (reducedMotion || !("IntersectionObserver" in window)) {
    reveals.forEach((r) => r.classList.add("visible"));
  } else {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) { e.target.classList.add("visible"); io.unobserve(e.target); }
      });
    }, { threshold: 0.12 });
    reveals.forEach((r) => io.observe(r));
  }
})();
