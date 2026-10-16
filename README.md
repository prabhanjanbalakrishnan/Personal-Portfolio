# Personal Portfolio

A single-page portfolio site in plain HTML, CSS and JS, with no build step.

## Editing content
**Almost everything you'll want to change is in `data.js`.** After editing, check that every item in a list ends with a comma. A missing comma makes the site fall back to default text.

- **Name, role, tagline, location**: at the top of the file.
- **Projects**: add an object to `projects`. Set `featured: true` to pin a project to the top. Filter buttons are generated from the `tags` automatically.
- **Screenshots**: drop images in `assets/projects/` and point `image` at them. 16:9 works best.
- **Photo**: replace `assets/avatar.jpg` with a new square photo, keeping the same filename.
- **About me**: each quoted string in `about` is one paragraph.
- **Interests**: a card can have `text`, a bullet `list`, or both. A bullet can be `"text"` or `{ label: "Heading", items: [...] }` for sub-bullets.
- **Contact text**: `contactText` sets the opening line of the "say hello" section.
- **Resume**: put `resume.pdf` in `assets/` and set `links.resume: "assets/resume.pdf"`. Empty links are hidden.
- **Colors**: change `--accent` and `--accent-2` at the top of `styles.css`.

## Preview locally
Open `index.html` in a browser, or run:

    python3 -m http.server 8000

## Deploy (when you're ready)
**GitHub Pages (free):**
1. Create a repo named `<your-username>.github.io`.
2. Push these files to it (`index.html` at the root).
3. Open Settings → Pages and deploy from the `main` branch.
4. Your site is live at `https://<your-username>.github.io`.

**Netlify / Vercel:** drag the folder onto app.netlify.com/drop, or import the GitHub repo. No build command is needed.

**Custom domain:** buy one (around $10–15/yr), then add it under GitHub Pages or Netlify settings.
