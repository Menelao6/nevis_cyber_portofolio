🚀 Cybersecurity Portfolio & CTF Blog

A personal cybersecurity portfolio website built with Next.js, integrated with Sanity.io CMS, showcasing security write-ups, CTF challenges, and featured research.
This project highlights both frontend engineering and backend content management, designed to resemble a modern hacker-style terminal theme.

✨ Features

🖥️ Terminal-style UI with neon/cyber aesthetic

📚 Write-ups page – all blogs fetched from Sanity

🌟 Featured section – automatically populated via a "Featured" checkbox in Sanity

🏆 CTF Integration – support for competition name, points, and author metadata

🖼️ Dynamic OG Images for SEO & social sharing

⚡ Responsive Design (desktop, tablet, mobile)

🔒 Deployed on Vercel with Sanity Studio hosted separately

🛠️ Tech Stack

Framework: Next.js 14
 (App Router)

CMS: Sanity.io
 (headless CMS)

Styling: TailwindCSS + CSS Modules

Database: Sanity Dataset (Production)

Deployment: Vercel

📂 Project Structure
├── src
│   ├── app
│   │   ├── writeups/         # Writeups list + detail pages
│   │   ├── about/            # About page
│   │   ├── components/       # Reusable UI components
│   │   └── page.tsx          # Homepage
│   ├── sanity/               # Sanity schemas, client, queries
│   └── styles/               # CSS / Tailwind
├── sanity.config.ts          # Sanity Studio config
├── next.config.js            # Next.js config
├── package.json
└── README.md

⚙️ Getting Started
1. Clone the repo
git clone https://github.com/menelao6/nevis_cyber_portofolio.git
cd nevis_cyber_portofolio

2. Install dependencies
**npm install**

4. Setup environment variables

**Create a .env.local file in the root:

NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2023-05-03
SANITY_API_TOKEN=your_sanity_token**

4. Run the development servers

Next.js App

**npm run dev**

Sanity Studio

**sanity sart**

5. Open in browser

Frontend → http://localhost:3000

Studio → http://localhost:3333

🌍 Deployment

Frontend (Next.js): Hosted on Vercel

CMS (Sanity Studio): Deployed via Sanity Hosting
