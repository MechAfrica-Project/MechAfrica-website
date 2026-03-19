# MechAfrica Website — Copy Audit Summary

This audit tightened copy across the public site to make it feel more premium, credible, and conversion-focused.

## Major issues found

- Repeated “ecosystem/platform” phrasing and long explanations across multiple pages.
- Inconsistent CTA labels (e.g., “Download / access” vs “Download App”).
- Download page repeated the same “access by role” content twice.
- Legal pages read like internal placeholder instructions.
- Footer included developer-facing placeholder notes.

## Major improvements made

- **Sharper, more consistent terminology:** shifted from “ecosystem” repetition to **network / roles / service delivery** language.
- **Tighter shared copy:** improved `src/content/site-config.ts` highlights + FAQ answers to be more concise and practical.
- **Cleaner conversion paths:** standardized key CTA language to **“Download & access”** and reduced duplicated messaging.
- **Download page simplified:** removed duplicated role sections and made the page easier to scan (role cards → QR codes → screenshots).
- **More professional legal placeholders:** “coming soon” tone without internal “replace this” instructions.
- **Stronger trust in the footer:** added compact adoption highlights (farmers/providers/USSD) and removed dev notes.
- **Improved visual balance:** added an About hero image and increased screenshot carousel size to reduce “text-heavy” feel.

## Pages/components with significant edits

- `src/app/(client)/download/page.tsx` — restructure + clearer hierarchy + less redundancy.
- `src/content/site-config.ts` — rewritten platform highlights + global FAQ.
- `src/app/(client)/about/page.tsx` — tightened language + added hero image.
- `src/app/(client)/how-it-works/page.tsx` — clearer language + CTA consistency.
- `src/app/(client)/faq/page.tsx` — reduced repetition + CTA consistency.
- `src/app/(client)/legal/privacy/page.tsx`, `src/app/(client)/legal/terms/page.tsx` — professional “coming soon” copy.
- `src/components/site/Footer.tsx` — premium footer cleanup + highlights.
- `src/components/marketing/ScreenshotCarousel.tsx` — copy + sizing improvements.

## Items that still need human review before launch

- **App store links, phone, email, and address** in `src/content/site-config.ts` (still placeholders).
- **Testimonials** in `src/content/site-config.ts` are marked as samples (replace with real quotes).
- **Screenshots** referenced in `public/images/screenshots/` should be replaced with real product screenshots when ready.
- **Legal documents** should be replaced with official terms and privacy policy text.
- **Coverage map** sections are placeholders (optional future enhancement).

## Notes

- Image prompts are maintained in `docs/image-prompts.md`. Add generated assets into `public/images/marketing/` and `public/images/screenshots/`.

