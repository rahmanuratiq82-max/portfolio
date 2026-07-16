# Muhammad Atiq — Portfolio

Plain HTML/CSS/JS portfolio. No build step, no dependencies — just open `index.html`.

## Before you push

1. **Contact form**: In `index.html`, replace `YOUR_FORM_ID` in the form's `action`
   attribute with your real Formspree endpoint (formspree.io → create a form → copy the ID).
2. **CV download button**: Already wired to `Muhammad_Atiq_CV.pdf` in this folder. If you
   update your CV, keep the filename the same (or update the `href` in `index.html`).
3. **Photo**: Add a profile photo if you want one in the hero section — not included yet.

## Push to GitHub Pages

If this is a brand-new repo:

```bash
cd portfolio
git init
git add .
git commit -m "Initial portfolio"
git branch -M main
git remote add origin https://github.com/<your-username>/<repo-name>.git
git push -u origin main
```

Then in the GitHub repo: **Settings → Pages → Source → Deploy from branch → main**.
Site will be live at `https://<your-username>.github.io/<repo-name>/`.

If you already have the `rahmanuratiq82-max.github.io/portfolio` repo and want to
replace its contents with this version instead:

```bash
cd path/to/existing/portfolio/repo
# copy index.html, style.css, script.js into this folder, overwriting old ones
git add .
git commit -m "Redesign portfolio"
git push
```
