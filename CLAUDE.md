# 100cargo.kz — Instagram posts

The user is not a programmer: explain things simply, in Russian. Don't ask them to re-explain the project.
Before scheduling any post, show the slides and wait for a «да».

## Metricool
- Brand id 7208883, timezone Asia/Almaty, weekdays at 10:00.
- Images go to Metricool like this: commit the PNGs to this repo (main) and pass
  `https://raw.githubusercontent.com/astanakitapbaspasy-cmd/100cargo-posts/main/<file>.png` as media.
  Metricool copies them into its own storage.

## Slide style
- 1080×1350. Fonts are in `tools/`: SamsungSharpSans (headings/numbers), Carlito (body text).
- White slides: blue bar plus a blue label (#2563EB), a big dark number or heading (#131A2A), grey text,
  source at the bottom, footer "100cargo.kz" and "N/7".
- Photo slides: photo with a dark gradient, white heading, yellow accent (#FFD21F).
- At least 7 slides per post, at least 3 of them photos. Photos: Pexels
  (`images.pexels.com/photos/ID/pexels-photo-ID.jpeg?w=1400`) or ones the user sends. Prefer Kazakh/Asian faces.
- Generator: `node tools/gen.js post.json outdir && node tools/shot.js outdir/s*.html` (needs playwright).

## Content
- Old series: offline businesses in Almaty with risk figures. Caption ending: «ВБ-де бәсекелестік көп, ақша жоқ деп ойласаң — профильдегі «Біз кімбіз?» актуалдысын қарап көр. Дереккөздер слайдтарда көрсетілген.»
- New series: big purchases (iPhone, той, Дубай, курсы...) vs. stocking up for WB with 100cargo. The offer:
  free hands-on training (no set number of calls; we help with real tasks as long as the relationship is good),
  OZON as a bonus for purchases from 5 mn ₸ (promo: from 3 mn ₸). CTA: «Профильдегі сілтеме арқылы анкетаны толтыр немесе директке WhatsApp нөміріңді жаз».
- Hashtags: #wildberries #вб #бизнес #алматы #қазақстан #100cargo
- Never make up numbers: every figure needs a source on the slide.

## Schedule (alternate old/new)
Oct 5 car wash · 6 iPhone ✅ · 7 coffee shop · 8 infobusiness · 9 fitness · 12 той · 13 barbershop · 14 Dubai · 15 tyre shop ·
16 car loan · 19 cakes · 20 deposit · 21 flowers · 22 PS5 · 23 salons · 26 brand clothes · 27 kids rooms · 28 rims/tuning · 29 той gifts.
Oct 30: test draft «ТЕСТ GitHub — удалить» — the user deletes it by hand.
