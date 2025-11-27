# Portfolio Website

A modern, responsive portfolio website built with Next.js, React, TypeScript, and Tailwind CSS.

## Features

- 🎨 Modern and beautiful UI design
- 📱 Fully responsive layout
- ⚡ Fast and optimized with Next.js
- 🎭 Smooth animations with Framer Motion
- 🌙 Dark theme with gradient accents
- 📧 Contact form
- 🚀 Easy to customize

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Customization

### Update Personal Information

1. **Hero Section** (`components/Hero.tsx`):
   - Change "Your Name" to your actual name
   - Update social media links (GitHub, LinkedIn, Email)
   - Modify the description

2. **About Section** (`components/About.tsx`):
   - Update the bio text
   - Modify statistics (years of experience, projects, etc.)

3. **Skills Section** (`components/Skills.tsx`):
   - Update the skills array with your technologies
   - Adjust skill levels (percentages)
   - Modify tech stack list

4. **Projects Section** (`components/Projects.tsx`):
   - Replace project data with your actual projects
   - Update GitHub and demo links
   - Change project descriptions and tech stacks

5. **Contact Section** (`components/Contact.tsx`):
   - Update email, phone, and location
   - Connect the form to your email service (e.g., EmailJS, Formspree, or your backend)

6. **Metadata** (`app/layout.tsx`):
   - Update the title and description for SEO

### Styling

The project uses Tailwind CSS. You can customize colors, fonts, and spacing in:
- `tailwind.config.ts` - Theme configuration
- `app/globals.css` - Global styles

## Build for Production

```bash
npm run build
npm start
```

## Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React

## License

MIT

