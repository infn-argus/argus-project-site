# ARGUS project site

Static, responsive project site in Italian and English. Open `index.html` in a browser or publish the repository root to any static web host.

The language switch translates all page sections and updates the shareable `?lang=it` / `?lang=en` URL. The browser's language is used on first visit; a visitor's choice is remembered locally.

The graph and AI panels are illustrative presentations of ARGUS Knowledge Hub concepts. The two demo scenarios use synthetic examples. Text is based on the current ARGUS Knowledge Hub repository documentation.

## Files

- `index.html` — content and page structure
- `styles.css` — responsive design and animations
- `script.js` — translations, language preference and graph illustration interaction
- `assets/argus-field-icon.png` — the icon used by the Android application
- `assets/qr-web-app.png` — QR for the configured production web address
- `assets/qr-android-test.png` — QR for the ARGUS Field Google Play listing supplied by the project owner

The Android QR uses `https://play.google.com/store/apps/details?id=it.infn.argus.field`, supplied by the project owner. The page explains that access requires tester approval and links to a prefilled request email for Andrea Michelotti.

No build step or runtime service is required. Google Fonts are optional; system font fallbacks are included.

The site is part of the ARGUS project and uses the same EUPL-1.2 licence as ARGUS Knowledge Hub. The ARGUS Field icon is copied from the Android application in that repository.

To publish with GitHub Pages, configure this repository's Pages source to the `main` branch and the repository root. The public site and its audience should be reviewed before enabling Pages.
