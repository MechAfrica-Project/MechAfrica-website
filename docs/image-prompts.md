# MechAfrica Website — Image Prompts & Asset Checklist

Use this document to generate **high-quality, authentic** visuals that match the MechAfrica brand: premium, warm, practical, and Africa-first (Ghana focus). After generating assets, place them in the `public/` paths listed below.

## Style guidance (use for all prompts)

- **Look & feel:** premium documentary photography; warm natural light; real farming environments; respectful, modern, practical.
- **Context:** Ghana / West Africa (villages, fields, mechanization, rural commerce).
- **Crops (IMPORTANT):** only show MechAfrica focus crops — **maize, soya, rice, cowpea, sorghum, groundnut, cassava, tomato, chillies, green pepper, carrot, onions**. **Never wheat**, barley, or other temperate crops. Avoid American/European farm cues (red barns, grain silos, plaid-and-overalls farmers).
- **Avoid:** stereotypes, exaggerated “NGO poster” looks, heavy HDR, overly staged models, neon SaaS style, fake logos.
- **No text / no watermarks / no UI text baked into photos.**
- Prefer **realism** and **authentic clothing/equipment**.

## Required folders

- Marketing photos: `public/images/marketing/`
- App screenshots: `public/images/screenshots/`

> Tip: The site already contains placeholders. When you add screenshots to `public/images/screenshots/`, the Download page carousel will automatically show them.

---

## 1) Home hero background (optional, decorative)

- **File:** `public/images/marketing/home-hero.png`
- **Where used:** Home hero background (auto-hides if missing)
- **Recommended:** 2400×1600 or larger (3:2 or 16:9)

**Prompt**
> Premium documentary photo in Ghana: a smallholder farmer standing near a mechanized service operation, holding a phone while looking toward the field; a tractor or mechanized equipment visible in the distance; warm morning light; natural colors; realistic skin tones; shallow depth of field; high-end editorial photography; no logos; no text; no watermark.

**Negative prompt**
> cartoon, illustration, CGI, text, watermark, logo, over-sharpened, HDR, neon, dystopian, staged studio background

---

## 2) Farmers page image (recommended)

- **File:** `public/images/marketing/farmers.png`
- **Where used:** For Farmers page hero
- **Recommended:** 2000×1333 (3:2)

**Prompt**
> Documentary photo in rural Ghana: a farmer in a field using a basic phone and a smartphone in separate hands (to suggest USSD + app access), with crops and field activity behind; warm natural light; authentic environment; premium editorial look; no text; no logos; no watermark.

---

## 3) Providers page image (recommended)

- **File:** `public/images/marketing/providers.png`
- **Where used:** For Service Providers page hero
- **Recommended:** 2000×1333 (3:2)

**Prompt**
> Premium documentary photo in Ghana: mechanization service provider team with a tractor and operator preparing for a job; one person checking a phone and another inspecting equipment; dust, field roads, and farms visible; warm light; realistic; no logos; no text; no watermark.

---

## 4) Agents / field coordination image (recommended)

- **File:** `public/images/marketing/agents.png`
- **Where used:** For Agents page hero
- **Recommended:** 2000×1333 (3:2)

**Prompt**
> Documentary photo in Ghana: field agent supporting onboarding/coordination—standing with a farmer and a provider, referencing a phone and a simple checklist/clipboard; rural community setting; warm natural light; premium editorial look; no text; no logos; no watermark.

---

## 5) Impact page image (recommended)

- **File:** `public/images/marketing/impact.png`
- **Where used:** Impact page hero
- **Recommended:** 2400×1350 (16:9)

**Prompt**
> Premium documentary photo in Ghana: mechanized services improving delivery—tractor or harvester working in the background, farmers observing progress, sense of productivity and coordination; warm light; realistic; no text; no logos; no watermark.

---

## 6) App screenshots (now supported on Download page)

These are referenced by default in `src/content/site-config.ts` (`downloadScreenshots`). Add files here:

- `public/images/screenshots/farmers-01.png`
- `public/images/screenshots/providers-01.png`
- `public/images/screenshots/agents-01.png` (can remain a mock until the Agents App ships)

**Screenshot guidance**
- Use real app screenshots if available, otherwise create clean UI mock screens with:
  - neutral backgrounds
  - clear hierarchy
  - no sensitive personal data
  - minimal text
- Keep them portrait-oriented (phone aspect ratio ~ 9:16 to 9:20).

---

## Optional additions (now used on Home)

These images power the Home “In the field” photo section.

### 7) Community onboarding moment

- **File:** `public/images/marketing/onboarding.png`
- **Where used:** Home → In the field
- **Recommended:** 2400×1600 or larger (3:2)

**Prompt**
> Premium documentary photo in Ghana: community onboarding session near farms; a field agent demonstrating a phone-based workflow to a small group of farmers and/or service providers; warm natural light; authentic clothing; realistic environment; premium editorial look; no text; no logos; no watermark.

### 8) USSD moment (basic phone)

- **File:** `public/images/marketing/ussd.png`
- **Where used:** Home → In the field
- **Recommended:** 2400×1600 or larger (3:2)

**Prompt**
> Documentary photo in Ghana: close-up of hands dialing a USSD code on a basic phone (screen can be slightly out of focus to avoid readable text); farm field in the background; warm natural light; realistic skin tones; premium editorial photography; no logos; no watermark.

### 9) Logistics / transport support

- **File:** `public/images/marketing/logistics.png`
- **Where used:** Home → In the field
- **Recommended:** 2400×1600 or larger (3:2)

**Prompt**
> Premium documentary photo in Ghana: agricultural logistics moment—loaded produce or equipment transport on a rural road; a person checking a phone while coordinating movement; authentic rural commerce context; warm light; premium editorial look; no text; no logos; no watermark.

---

## Additional recommended images (generate later)

Use these to add more visual depth across Home, How It Works, and Impact.

### 10) Mechanization action (tractor ploughing)

- **File:** `public/images/marketing/mechanization-action.png`
- **Recommended:** 3000×1688 or larger (16:9)

**Prompt**
> Premium documentary photo in Ghana: tractor ploughing or land preparation in action with dust and texture; a farmer observing in the foreground; wide composition; warm natural light; realistic; no logos; no text; no watermark.

### 11) Spraying / input application

- **File:** `public/images/marketing/spraying.png`
- **Recommended:** 3000×1688 or larger (16:9)

**Prompt**
> Documentary photo in Ghana: spraying or input application activity with proper safety gear; farm rows visible; one person coordinating with a phone; warm natural light; premium editorial look; no logos; no text; no watermark.

### 12) Harvesting / post-harvest moment

- **File:** `public/images/marketing/harvesting.png`
- **Recommended:** 3000×1688 or larger (16:9)

**Prompt**
> Premium documentary photo in Ghana: harvesting or post-harvest handling in a field; coordinated activity between people; warm light; authentic environment; premium editorial photography; no logos; no text; no watermark.

### 13) Provider dispatch / scheduling

- **File:** `public/images/marketing/provider-dispatch.png`
- **Recommended:** 2400×1600 or larger (3:2)

**Prompt**
> Documentary photo in Ghana: mechanization service provider planning a day’s jobs—team around equipment or a small office/yard; one person reviewing routes or a checklist while another checks a phone; warm light; realistic; no logos; no text; no watermark.

### 14) Agent coordination in the field

- **File:** `public/images/marketing/agent-coordination.png`
- **Recommended:** 2400×1600 or larger (3:2)

**Prompt**
> Premium documentary photo in Ghana: a field agent coordinating between a farmer and a service provider; three people in conversation; phone in hand; rural backdrop; warm natural light; premium editorial look; no logos; no text; no watermark.

---

## Additional premium visuals (optional, recommended)

These are not required for launch, but they’ll add depth and reduce text-heavy sections over time.

### 15) Partnerships / credibility moment

- **File:** `public/images/marketing/partnerships.png`
- **Recommended:** 2400×1600 or larger (3:2)

**Prompt**
> Premium documentary photo in Ghana: a small meeting between agricultural stakeholders (a farmer leader, a service provider, and a coordinator) reviewing a simple paper form and a phone; respectful, modern, practical vibe; warm natural light; realistic; no logos; no text; no watermark.

### 16) Training / onboarding session (wide)

- **File:** `public/images/marketing/training-wide.png`
- **Recommended:** 3000×1688 or larger (16:9)

**Prompt**
> Wide premium documentary photo in Ghana: field training session near farms; a coordinator demonstrating a phone-based workflow to a group; authentic environment, warm natural light, premium editorial look; no logos; no text; no watermark.

### 17) District coverage map placeholder (visual only)

- **File:** `public/images/marketing/coverage-map.png`
- **Recommended:** 2400×1350 (16:9)

**Prompt**
> Minimal, premium map-style illustration inspired by Ghana district coverage: soft off-white background, subtle green lines and warm-gold highlights, simple abstract district shapes (not exact boundaries), a few highlighted zones and pins; clean, modern, no text, no labels, no logos, no watermark.

### 18) Mechanization services montage (multi-service)

- **File:** `public/images/marketing/services-montage.png`
- **Recommended:** 3000×1688 or larger (16:9)

**Prompt**
> Premium documentary montage in Ghana showing multiple mechanized services: ploughing, spraying, harvesting, and transport; cohesive color grading, warm natural light, realistic; no text; no logos; no watermark.

---

## PRIORITY (July 2026): new services + focus crops

The site now lists **Ploughing, Harrowing, Ripping, Planting, Spraying, Fertilization, Drone, Harvesting, Threshing, Bagging, Transportation** on Home → Available Services, and a new Home → “Crops we focus on” section with 12 crops. The assets below are wired into the code already — generate each image and drop it at the exact path (same filename) and it appears automatically.

**Shared negative prompt for everything below**
> wheat, barley, red barn, grain silo, American farm, European farm, cartoon, illustration, CGI, text, watermark, logo, over-sharpened, HDR, neon

### A) New service circle images (Home → Available Services)

Square **1:1, ≥1200×1200**, subject centered (displayed inside a circular crop). The files currently in place are **temporary copies of other photos** — overwrite them.

#### A1. Harrowing
- **File:** `public/images/marketing/harrowing.png` (placeholder today: copy of `impact.png`)
- **Prompt**
> Premium documentary photo in Ghana: tractor pulling a disc harrow across a freshly ploughed field, breaking soil clods into fine tilth, light dust rising; warm natural light; red-brown laterite soil; realistic; square composition with the harrow centered; no people looking at camera; no text; no logos; no watermark.

#### A2. Fertilization
- **File:** `public/images/marketing/fertilization.png` (placeholder today: copy of `farmField.png`)
- **Prompt**
> Documentary photo in Ghana: fertilizer application in young green maize rows — a farmer in simple work clothes applying granular fertilizer from a bucket/spreader beside the rows, or a tractor-mounted spreader working the field; warm morning light; realistic; square composition; no text; no logos; no watermark.

#### A3. Bagging
- **File:** `public/images/marketing/bagging.png` (placeholder today: copy of `logistics.png`)
- **Prompt**
> Premium documentary photo in Ghana: post-harvest bagging — workers filling and stitching woven polypropylene sacks with dried maize grain beside a thresher in a field, full sacks stacked nearby; warm late-afternoon light; realistic; square composition; no text; no logos; no watermark.

### B) Regenerate — currently show wheat / non-Ghana setting

#### B1. Transportation (currently: wheat field + American red barn and silo)
- **File:** `public/images/marketing/transportation.png`
- **Recommended:** 1:1, ≥1200×1200 (used in a circle on Home)
- **Prompt**
> Documentary photo in Ghana: a blue cargo motor tricycle (“aboboyaa”) loaded with sacks of maize on a red laterite rural road, green maize and cassava fields and palm trees in the background; warm natural light; realistic; square composition; no text; no logos; no watermark.

#### B2. Harvesting (currently: wheat-straw stubble in frame)
- **File:** `public/images/marketing/harvesting.png`
- **Recommended:** 1:1, ≥1200×1200 (used in a circle on Home)
- **Prompt**
> Premium documentary photo in Ghana: maize harvest in progress — a combine or workers hand-harvesting mature brown maize, cobs visible, tractor and trailer nearby; warm golden-hour light; realistic; square composition; no text; no logos; no watermark.

#### B3. Home farmer portrait (optional — currently reads as a US farmer in plaid shirt and overalls)
- **File:** `public/images/marketing/homeFarmer.png`
- **Where used:** Home → What We Do (cutout on transparent background)
- **Prompt**
> Studio-style portrait of a Ghanaian smallholder farmer, arms crossed and smiling with quiet confidence, simple work shirt and sun hat, realistic skin tones, soft even lighting, isolated on a plain/transparent background; photorealistic; no text; no logos; no watermark.

### C) Focus-crop images (Home → “Crops we focus on”)

Folder: `public/images/marketing/crops/` — **exact filenames below**. Square **1:1, ≥800×800**, displayed in small circles. Until a file exists the site shows a neutral leaf icon, so add these in any order.

Keep the set visually consistent: **close-up of the crop growing or freshly harvested, Ghana/West Africa farm context, warm natural light, shallow depth of field, photorealistic, premium editorial look, square composition, no hands holding products toward camera, no text, no logos, no watermark.** Append this to each prompt below.

| File | Subject prompt (prepend to shared style above) |
| --- | --- |
| `crops/maize.png` | Mature maize cobs with golden kernels partially husked on the stalk in a maize field |
| `crops/soya.png` | Green soybean pods clustered on a soya plant, field rows blurred behind |
| `crops/rice.png` | Ripening golden rice panicles in a lowland paddy field |
| `crops/cowpea.png` | Cowpea plant with long green pods, some dried black-eyed cowpea beans visible |
| `crops/sorghum.png` | Reddish-brown sorghum grain heads against green leaves in a sorghum field |
| `crops/groundnut.png` | Freshly uprooted groundnut plant with pods and soil, laid on the earth |
| `crops/cassava.png` | Freshly harvested cassava roots with red-brown soil beside a cassava plant |
| `crops/tomato.png` | Ripe red tomatoes on the vine in an open vegetable farm |
| `crops/chillies.png` | Bright red chilli peppers on a chilli plant, some green fruits behind |
| `crops/green-pepper.png` | Glossy green bell peppers on a plant in a vegetable garden |
| `crops/carrot.png` | Freshly pulled carrots with green tops and soil, resting on a farm bed |
| `crops/onions.png` | Red onion bulbs at harvest, some in a woven basket in an onion field |
