# ASURAX Studios Portfolio

A futuristic, professional, interactive portfolio website built with Next.js, Tailwind CSS, and Framer Motion. Features a cyberpunk-inspired design with glassmorphism effects, smooth animations, and a fully responsive layout.

## 🚀 Features

- **Modern Design**: Cyberpunk-inspired UI with glassmorphism and neon accents
- **Fully Responsive**: Optimized for all devices and screen sizes
- **Smooth Animations**: Powered by Framer Motion for engaging user experience
- **Interactive Elements**: Hover effects, glow animations, and smooth transitions
- **Theme Toggle**: Dark/light theme support
- **Contact Form**: Working contact form with validation
- **Project Showcase**: 7 project cards with detailed information
- **Skills Display**: Interactive skills section with animated progress bars
- **Achievements**: Comprehensive achievements and accomplishments section

## 🛠️ Tech Stack

- **Framework**: Next.js 15 with App Router
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Language**: TypeScript
- **Deployment**: Netlify Ready

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/asurax1983/asurax-portfolio.git
cd asurax-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🚀 Deployment

### Netlify

1. Build the project:
```bash
npm run build
```

2. Deploy to Netlify:
   - Connect your GitHub repository to Netlify
   - Set build command: `npm run build`
   - Set publish directory: `.next`
   - Deploy!

### Manual Deployment

1. Build the project:
```bash
npm run build
```

2. Export static files:
```bash
npm run export
```

3. Upload the `out` folder to your hosting provider.

## 📁 Project Structure

```
src/
├── app/
│   ├── globals.css          # Global styles and CSS variables
│   ├── layout.tsx           # Root layout with metadata
│   └── page.tsx             # Main page component
├── components/
│   ├── AboutSection.tsx     # About section component
│   ├── AchievementsSection.tsx # Achievements section
│   ├── ContactSection.tsx   # Contact form and info
│   ├── Footer.tsx           # Footer component
│   ├── HeroSection.tsx      # Hero section with animations
│   ├── Navigation.tsx       # Navigation bar
│   ├── ProjectImage.tsx     # Project image placeholder
│   ├── ProjectsSection.tsx  # Projects showcase
│   ├── SkillsSection.tsx    # Skills and technologies
│   └── ThemeProvider.tsx    # Theme context provider
```

## 🎨 Customization

### Colors
Update the CSS variables in `src/app/globals.css`:
```css
:root {
  --primary: #00ff88;      /* Green accent */
  --secondary: #ff0080;    /* Pink accent */
  --accent: #00d4ff;       /* Blue accent */
}
```

### Content
- Update personal information in each component
- Modify project data in `ProjectsSection.tsx`
- Update skills in `SkillsSection.tsx`
- Change contact information in `ContactSection.tsx`

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints:
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🔧 Performance

- Optimized images and animations
- Lazy loading for better performance
- Minimal bundle size
- SEO optimized with proper metadata

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

**Habibi S** - ASURAX Studios
- Email: asurax1983@gmail.com
- GitHub: [@asurax1983](https://github.com/asurax1983)
- LinkedIn: [Habibi S](https://www.linkedin.com/in/habibi-s-4b7266377)

## 🙏 Acknowledgments

- Next.js team for the amazing framework
- Tailwind CSS for the utility-first CSS framework
- Framer Motion for smooth animations
- Lucide for beautiful icons

---

Made with ❤️ by ASURAX Studios