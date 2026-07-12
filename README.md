# Bizdaptive Website

Standalone Vite + React + Tailwind marketing site for Bizdaptive.

## Local

```bash
cd ~/Desktop/bizapt-website
npm install
npm run dev
```

## Deploy to Vercel

1. Create a new GitHub repo (empty).
2. From this folder:

```bash
cd ~/Desktop/bizapt-website
git remote add origin https://github.com/YOUR_USER/bizapt-website.git
git push -u origin main
```

3. In [Vercel](https://vercel.com) → **Add New Project** → import that repo.
4. Framework preset: **Vite** (auto-detected). Build: `npm run build`, output: `dist`.
5. Deploy.

Or from CLI:

```bash
npx vercel
```

## Stack

- Vite + React 19 + TypeScript  
- Tailwind CSS v4  
- Framer Motion + Lucide  
- Light / dark theme + portal spiral brand mark  
