import About from './About';
import Skills from './Skills';

function Home() {
    const mySkills = ['HTML', 'CSS', 'JavaScript', 'PHP', 'React', 'Node.js', 'Python', 'SQL', 'Git', 'GitHub', 'Numpy', 'Pandas', 'Matplotlib', 'Seaborn', 'Scikit-learn', 'MongoDB'];
    
    return (
        <div>
            <section className="hero">
                <p className="hero-tag">Hi there, I'm</p>
                <h2>Yug Umrania</h2>
                <p className="hero-tagline">
                    Building thoughtful web experiences — and exploring AI &amp; Data Science along the way.
                </p>
                <div className="hero-links">
                    <a href="https://github.com/YugUmrania" target="_blank" rel="noopener noreferrer">GitHub</a>
                    <a href="https://www.linkedin.com/in/yug-umrania-368816331" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                </div>
            </section>
            <About />
            <Skills skillList={mySkills} />
        </div>
    );
}

export default Home;