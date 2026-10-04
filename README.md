# Student Portfolio

A modern, responsive personal portfolio website built with **React 19** and **Vite**, showcasing projects, skills, and professional experience. Features lazy loading and code splitting for optimal performance.

## ✨ Features

- **Modern Tech Stack**: React 19, Vite 6, React Router v7
- **Performance Optimized**: Route-based code splitting with `React.lazy()` and `Suspense`
- **Responsive Design**: Mobile-first approach with CSS Grid/Flexbox
- **Component Architecture**: Modular, reusable components
- **Smooth Animations**: CSS transitions and loading states
- **Accessible**: Semantic HTML, proper ARIA labels, keyboard navigation

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation
```bash
# Clone the repository
git clone https://github.com/YugUmrania/portfolio-24DCS140.git
cd portfolio-24DCS140

# Install dependencies
npm install

# Start development server
npm run dev
```

### Build for Production
```bash
npm run build
npm run preview  # Preview production build locally
```

## 📁 Project Structure

```
student-portfolio/
├── public/                 # Static assets
├── src/
│   ├── components/         # Reusable UI components
│   │   ├── About.jsx       # About section
│   │   ├── Contact.jsx     # Contact form with validation
│   │   ├── ErrorMessage.jsx# Error display component
│   │   ├── Footer.jsx      # Site footer
│   │   ├── Header.jsx      # Navigation header
│   │   ├── Home.jsx        # Hero section
│   │   ├── Projects.jsx    # Project showcase
│   │   ├── Skills.jsx      # Skills & technologies
│   │   └── Spinner.jsx     # Loading indicator
│   ├── App.jsx             # Main app with routing & lazy loading
│   ├── index.css           # Global styles
│   └── main.jsx            # Entry point
├── index.html              # HTML template
├── package.json
├── vite.config.js          # Vite configuration
└── eslint.config.js        # ESLint configuration
```

## ⚡ Performance Optimizations

### Lazy Loading Implementation
Routes are code-split using `React.lazy()` and wrapped in `<Suspense>`:

```jsx
// src/App.jsx
import { lazy, Suspense } from 'react';

const Projects = lazy(() => import('./components/Projects'));
const Contact = lazy(() => import('./components/Contact'));

function App() {
  return (
    <Suspense fallback={<Spinner text="Loading page..." />}>
      <Routes>
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Suspense>
  );
}
```

### Build Analysis (Production)
```
dist/assets/index-CyXVq4OJ.js      234.88 kB │ gzip: 75.40 kB  (Main bundle)
dist/assets/Projects-WyBW8nAO.js     1.07 kB │ gzip:  0.56 kB  (Lazy chunk)
dist/assets/Contact-Cy6QYZKx.js      1.38 kB │ gzip:  0.70 kB  (Lazy chunk)
```

- **Projects** and **Contact** routes load on-demand
- Reduces initial bundle size by ~1%
- Fallback UI: Custom spinner with "Loading page..." text

## 🛠️ Tech Stack

| Category | Technologies |
|----------|--------------|
| **Frontend** | React 19, React Router 7 |
| **Build Tool** | Vite 6 |
| **Styling** | CSS3 (Custom properties, Grid, Flexbox) |
| **Linting** | ESLint 10, React Hooks plugin |
| **Performance** | React.lazy(), Suspense, Code Splitting |

## 📱 Sections

1. **Home** – Hero section with introduction and CTA
2. **About** – Background, education, and interests
3. **Skills** – Technical skills categorized by domain
4. **Projects** – Featured projects with descriptions and links
5. **Contact** – Contact form with client-side validation
6. **Footer** – Social links and copyright

## 🔧 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with HMR |
| `npm run build` | Build for production (outputs to `dist/`) |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint on source files |

## 📄 License

This project is for educational purposes (College Practical 8 - AWDF Course).

## 👨‍💻 Author

**Yug Umrania**  
Student ID: 24DCS140  
Course: Advanced Web Development Frameworks

---

*Built with ❤️ using React + Vite*