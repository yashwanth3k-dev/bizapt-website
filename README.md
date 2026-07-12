# Bizdaptive PoC Website

Marketing site for the **Bizdaptive Proof of Concept** — Framer-style section layout, portal spiral brand mark, light/dark theme, copy aligned to what Sudarshan + Yashwanth are actually building.

## Honest PoC claims (matches `planning/POC-CAPABILITY-MAP.md`)

- WHO-first conversation onboarding → assimilation → Company Graph
- First-decision receipt
- Structure & Dynamics, epistemic badges, dual trails
- Belief + evidence substrate (not a truth oracle)
- Add-context with supersede
- Explicit about what’s still ahead (file/comms, full multi-user propose→approve)

## Run

```bash
cd bizapt-website
npm install
npm run dev
```

Theme toggle lives in the navbar (persists in `localStorage`, respects `prefers-color-scheme`).
