# AkashKumar9508-Akash-Portfolio

## Overview

This is the codebase for my personal portfolio website built using **Next.js** and **TypeScript** with **Tailwind CSS** for styling. The portfolio showcases my skills, projects, and resume, providing an interactive and smooth user experience with animations and real-time elements.

### Features:
- **Responsive Design**: Mobile-friendly and optimized for various screen sizes.
- **Dark/Light Theme**: Users can switch between light and dark themes seamlessly.
- **Interactive Animations**: Includes animated components for an engaging user experience (cursor trail, wobble cards, floating dock, etc.).
- **Resume**: Downloadable resume section with relevant details.
- **Project Section**: Highlights my projects with descriptions and links.
- **About Me Section**: Includes a timeline of my professional journey.
- **Technologies Used**: 
  - **Next.js** for server-side rendering and routing.
  - **TypeScript** for static type checking.
  - **Tailwind CSS** for fast and flexible styling.
  - **Framer Motion** for animations.

## Directory Structure

```bash
akashkumar9508-akash-portfolio/
├── README.md
├── next.config.ts              # Next.js configuration file
├── package.json                # Node.js package dependencies
├── postcss.config.mjs          # PostCSS configuration for Tailwind
├── tailwind.config.ts          # Tailwind CSS configuration file
├── tsconfig.json               # TypeScript configuration
├── public/
│   └── pdf.worker.mjs          # Public assets (PDF worker for resume download)
└── src/
    ├── app/
    │   ├── global.ts           # Global configuration
    │   ├── globals.css         # Global CSS styles
    │   ├── layout.tsx          # Layout for all pages
    │   ├── page.tsx            # Main page (Home)
    │   ├── about/              # About section
    │   ├── project/            # Projects section
    │   ├── resume/             # Resume section
    │   └── skill/              # Skills section
    ├── assets/
    │   └── svg/                # SVG assets
    ├── components/             # Reusable components
    │   ├── about/              # Components for about section
    │   ├── resume/             # Resume components
    │   ├── ui/                 # UI components (theme switch, animations)
    │   └── utility/            # Utility components (Navbar, Social Links, etc.)
    ├── data/
    │   ├── navLinks.ts         # Navigation links data
    │   └── timeline.tsx        # Data for the timeline
    ├── hooks/                  # Custom hooks
    └── lib/   add                  # Utility functions
