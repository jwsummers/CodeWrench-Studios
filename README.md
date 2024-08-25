# CodeWrench Studios

Welcome to CodeWrench Studios, where the precision and craftsmanship of automotive mechanics meet the creativity and innovation of web development. This project is a personal portfolio website showcasing the services and expertise offered by CodeWrench Studios, a web development freelance business.

## Project Overview

CodeWrench Studios is a modern, sleek, and responsive website built using React, Next.js, and Tailwind CSS. The site features an eye-catching design with dynamic elements like particle effects and parallax backgrounds, emphasizing a tech-savvy and professional aesthetic.

### Live Demo

You can view the live demo of this project [here](#).

## Features

- **Responsive Design**: The website is fully responsive, ensuring a seamless user experience across all devices.
- **Dark Mode Styling**: The site features a dark mode theme with bold color palettes that align with the company’s branding.
- **Interactive Elements**: The site includes dynamic particle effects and parallax backgrounds, adding depth and interaction to the user experience.
- **Sticky Navigation**: The navbar is sticky, ensuring easy navigation throughout the site.
- **Contact Form**: A fully functional contact form is integrated with SendGrid for email submissions.

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **Next.js**: A React framework for server-side rendering and generating static websites.
- **Tailwind CSS**: A utility-first CSS framework for styling.
- **TypeScript**: A typed superset of JavaScript that adds static types.
- **SendGrid**: An email delivery service used for handling contact form submissions.
- **Netlify**: A platform used for deploying and hosting the website.

## Project Structure

```bash
├── src
│   ├── app
│   │   ├── layout.tsx            # Layout component for the entire application
│   │   ├── page.tsx              # Home page component
│   ├── components
│   │   ├── NavBar.tsx            # Navigation bar component
│   │   ├── HeroSection.tsx       # Hero section component with background image and particle effect
│   │   ├── AboutSection.tsx      # About section component
│   │   ├── ServicesSection.tsx   # Services section component
│   │   ├── ContactSection.tsx    # Contact section component with form
│   │   ├── Particles.tsx         # Particle effects component
│   ├── styles
│   │   ├── globals.css           # Global CSS and Tailwind imports
│   │   ├── fonts.css             # Font import for Orbitron font
├── public
│   ├── images
│   │   ├── hero-background.png   # Background image used in the hero section
│   ├── favicon.ico               # Favicon for the website
├── .env.local                    # Environment variables for SendGrid API key
├── next.config.js                # Next.js configuration file
├── postcss.config.js             # PostCSS configuration file
├── tailwind.config.js            # Tailwind CSS configuration file
├── tsconfig.json                 # TypeScript configuration file
└── README.md                     # Project documentation
