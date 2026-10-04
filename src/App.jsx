import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Footer from './components/Footer';

const Projects = lazy(() => import('./components/Projects'));
const Contact = lazy(() => import('./components/Contact'));

function App() {
  return (
    <div>
      <div className="site-header">
        <Header name="Yug Umrania" />
        <NavBar />
      </div>

      <Suspense fallback={
        <div className="spinner">
          <div className="spinner-ring"></div>
          <p>Loading page...</p>
        </div>
      }>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Suspense>

      <Footer />
    </div>
  );
}

export default App;