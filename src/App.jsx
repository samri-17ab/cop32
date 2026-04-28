import React, { useEffect, useState } from 'react';
import './App.css';

const ImageDivider = ({ src }) => (
    <div 
        className="image-divider" 
        style={{ backgroundImage: `url('${src}')` }}>
    </div>
);

function App() {
    const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'light');

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
    };

    useEffect(() => {
        const handleScroll = () => {
            const header = document.getElementById('header-bar');
            if (header) {
                if (window.scrollY > 50) {
                    header.classList.add('is-scrolled');
                } else {
                    header.classList.remove('is-scrolled');
                }
            }
        };
        window.addEventListener('scroll', handleScroll);

        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                }
            });
        }, observerOptions);

        document.querySelectorAll('.anim-fade-up').forEach(el => {
            observer.observe(el);
        });

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="site-wrapper">
            <header className="site-header" id="site-header">
                <div className="header-bar" id="header-bar">
                    <div className="brand">
                        <a href="#home">
                            <img src="/cop32_logo.png" alt="COP 32" style={{ height: '50px' }} />
                        </a>
                    </div>
                    <nav className="nav">
                        <a href="#home">Home</a>
                        <a href="#about">Framework</a>
                        <a href="#initiatives">Initiatives</a>
                        <a href="#energy">Pillars</a>
                        <a href="#news">News</a>
                        <a href="#contact">Contact</a>
                    </nav>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <button onClick={toggleTheme} className="theme-toggle-btn" title="Toggle Theme" style={{ background: 'transparent', border: 'none', cursor: 'pointer', marginRight: '20px', transition: 'transform 0.3s' }}>
                            <img src={theme === 'light' ? '/coffee-dark.png' : '/coffee-light.png'} alt="Theme Toggle" style={{ height: theme === 'light' ? '35px' : '55px', transform: theme === 'light' ? 'rotate(-45deg)' : 'rotate(0deg)', filter: theme === 'light' ? 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))' : 'drop-shadow(0 2px 4px rgba(255,255,255,0.2))', transition: 'all 0.3s ease' }} />
                        </button>
                        <a href="#register" className="header-cta">REGISTER NOW</a>
                    </div>
                </div>
            </header>

            <main className="main-content">
                <section className="hero" id="home">
                    <div className="hero-copy">
                        <img src="/cop32_logo.png" alt="COP 32 Ethiopia" className="hero-logo" />
                        <div className="hero-message">
                            <h2>Unifying For Our Planet.</h2>
                            <p>Driving Ambition, Climate Action, and Sustainable Solutions.</p>
                        </div>
                        <div className="hero-actions">
                            <a href="#agenda" className="btn btn-primary">Explore The Agenda</a>
                            <a href="#live" className="btn btn-secondary">Watch Live</a>
                        </div>
                    </div>
                </section>

                <div className="page-frame">
                    <section id="about" className="section-padding">
                        <div className="container">
                            <h2 className="framework-heading">AGENDA FOR ACTION</h2>
                            <p className="framework-intro">Our comprehensive plan to unite the world through concrete climate solutions, innovation, and inclusive policy frameworks designed for lasting impact.</p>
                            
                            <div className="framework-grid">
                                <div className="framework-card">
                                    <div className="card-inner">
                                        <div className="card-front">
                                            <div className="card-image-wrapper">
                                                <img src="/ethiopia_mist_landscape.png" alt="Climate Finance" className="card-image" />
                                                <div className="card-content-overlay">
                                                    <h3 className="card-title-white">CLIMATE FINANCE</h3>
                                                </div>
                                                <div className="action-trigger">↗</div>
                                            </div>
                                        </div>
                                        <div className="card-back">
                                            <h3 className="card-back-title">Climate Finance</h3>
                                            <p className="card-back-text">Unifying global financial frameworks to redirect capital toward emerging green economies and resilient local communities.</p>
                                            <div className="card-back-arrow">↗</div>
                                        </div>
                                    </div>
                                    <h3 className="framework-card-title">Policy & Finance Reform</h3>
                                </div>

                                <div className="framework-card">
                                    <div className="card-inner">
                                        <div className="card-front">
                                            <div className="card-image-wrapper">
                                                <img src="/adey_abeba.png" alt="Adaptation" className="card-image" />
                                                <div className="card-content-overlay">
                                                    <h3 className="card-title-white">ADAPTATION & RESILIENCE</h3>
                                                </div>
                                                <div className="action-trigger">↗</div>
                                            </div>
                                        </div>
                                        <div className="card-back">
                                            <h3 className="card-back-title">Adaptation & Resilience</h3>
                                            <p className="card-back-text">Building agricultural and urban infrastructure that adapts to shifting climates, ensuring long-term food security.</p>
                                            <div className="card-back-arrow">↗</div>
                                        </div>
                                    </div>
                                    <h3 className="framework-card-title">Nature-Based Solutions</h3>
                                </div>

                                <div className="framework-card">
                                    <div className="card-inner">
                                        <div className="card-front">
                                            <div className="card-image-wrapper">
                                                <img src="/mount land.png" alt="Renewable Energy" className="card-image" />
                                                <div className="card-content-overlay">
                                                    <h3 className="card-title-white">EMERGING ENERGY</h3>
                                                </div>
                                                <div className="action-trigger">↗</div>
                                            </div>
                                        </div>
                                        <div className="card-back">
                                            <h3 className="card-back-title">Emerging Energy</h3>
                                            <p className="card-back-text">Harnessing Geothermal, Hydro, and Solar resources to eliminate energy poverty through carbon-free national grids.</p>
                                            <div className="card-back-arrow">↗</div>
                                        </div>
                                    </div>
                                    <h3 className="framework-card-title">Just Transition Pathways</h3>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Telf Divider 1 - Between Framework and Green Legacy */}
                    <ImageDivider src="/telet.jpeg" />

                    <section id="green-legacy" className="section-padding bg-main">
                        <div className="container">
                            <div className="green-legacy-split">
                                <div className="green-legacy-content">
                                    <h2>ETHIOPIA'S GREEN LEGACY INITIATIVE</h2>
                                    <p>Launched in 2019, the Green Legacy Initiative is Ethiopia's ambitious answer to the global climate crisis. By mobilizing millions of citizens to restore degraded landscapes, we are building a climate-resilient green economy for future generations.</p>
                                    <p>Our mission extends beyond planting trees; it is about restoring hope, ensuring food security, and positioning Ethiopia as a global leader in environmental stewardship.</p>
                                    <div className="stats-grid">
                                        <div className="stat-card">
                                            <span className="stat-value">47B+</span>
                                            <span className="stat-title">Seedlings Planted</span>
                                        </div>
                                        <div className="stat-card">
                                            <span className="stat-value">23.6%</span>
                                            <span className="stat-title">Forest Coverage</span>
                                        </div>
                                        <div className="stat-card">
                                            <span className="stat-value">20M+</span>
                                            <span className="stat-title">Active Participants</span>
                                        </div>
                                        <div className="stat-card">
                                            <span className="stat-value">2030 Goal</span>
                                            <span className="stat-title">22M Ha Restored</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="green-legacy-image">
                                    <img src="/green.jpeg" alt="Ethiopian Green Legacy" />
                                </div>
                            </div>
                        </div>
                    </section>

                    <section id="energy" className="section-padding bg-alt">
                        <div className="container">
                            <h2 className="framework-heading">KEY ENERGY PILLARS</h2>
                            <p className="framework-intro">Ethiopia's clean energy leadership is anchored in a diverse portfolio of renewable sources that power our national grid and support regional development.</p>
                            <div className="pillars-grid">
                                <div className="pillar-item">
                                    <div className="card-inner">
                                        <div className="card-front">
                                            <div className="pillar-image">
                                                <img src="/dam.jpg" alt="Hydropower" />
                                            </div>
                                            <h3>HYDROPOWER</h3>
                                        </div>
                                        <div className="card-back">
                                            <h3 className="card-back-title">Hydropower</h3>
                                            <p className="card-back-text">Leveraging our vast water resources to generate consistent, carbon-free energy while supporting water management and regional electricity security.</p>
                                            <div className="card-back-arrow">↗</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="pillar-item">
                                    <div className="card-inner">
                                        <div className="card-front">
                                            <div className="pillar-image">
                                                <img src="/wind.jpg" alt="Wind Energy" />
                                            </div>
                                            <h3>WIND ENERGY</h3>
                                        </div>
                                        <div className="card-back">
                                            <h3 className="card-back-title">Wind Energy</h3>
                                            <p className="card-back-text">Harnessing persistent winds across the Great Rift Valley with modern turbine farms to provide reliable additions to our energy mix.</p>
                                            <div className="card-back-arrow">↗</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="pillar-item">
                                    <div className="card-inner">
                                        <div className="card-front">
                                            <div className="pillar-image">
                                                <img src="/solar.jpg" alt="Solar Energy" />
                                            </div>
                                            <h3>SOLAR POWER</h3>
                                        </div>
                                        <div className="card-back">
                                            <h3 className="card-back-title">Solar Power</h3>
                                            <p className="card-back-text">Capitalizing on our exceptional year-round sunlight exposure to power communities through expansive photovoltaic fields and rural networks.</p>
                                            <div className="card-back-arrow">↗</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Telf Divider 2 - Between Energy and Agriculture/Teff */}
                    <ImageDivider src="/telet.jpeg" />

                    <section id="agriculture" className="section-padding bg-main" style={{ overflow: 'hidden' }}>
                        <div className="container">
                            <div className="green-legacy-split">
                                <div className="hanging-wrap">
                                    <div className="teff-hang-line"></div>
                                    <div className="teff-item">
                                        <video autoPlay loop muted playsInline className="teff-video" style={{ width: '100%', maxWidth: '550px', borderRadius: '20px', filter: 'drop-shadow(0 30px 60px rgba(0,0,0,0.12))' }}>
                                            <source src="/water-fall.mp4" type="video/mp4" />
                                            Your browser does not support the video tag.
                                        </video>
                                    </div>
                                </div>
                                <div className="green-legacy-content">
                                    <h2>CLIMATE-SMART AGRICULTURE</h2>
                                    <p>Teff is not only the foundation of Ethiopian nutrition but a resilient crop that represents our commitment to food security. Through climate-smart practices, we are ensuring that agriculture remains a sustainable engine of growth, adapting to new environmental realities while preserving our rich heritage.</p>
                                    <div className="stats-grid">
                                        <div className="stat-card">
                                            <span className="stat-value">Zero</span>
                                            <span className="stat-title">Carbon Tillage</span>
                                        </div>
                                        <div className="stat-card">
                                            <span className="stat-value">6.5M+</span>
                                            <span className="stat-title">Farmers Supported</span>
                                        </div>
                                        <div className="stat-card">
                                            <span className="stat-value">12.5%</span>
                                            <span className="stat-title">Yield Increase</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section id="contact" className="section-padding contact-section bg-alt">
                        <div className="container">
                            <div className="contact-grid">
                                <div className="contact-info-box anim-fade-up">
                                    <h2>GET IN TOUCH</h2>
                                    <p>Have questions about COP32 Ethiopia? Reach out to our dedicated team for information regarding registration, partnerships, or conference logistics.</p>

                                    <div className="info-detail">
                                        <div className="info-item">
                                            <i className="fas fa-map-marker-alt"></i>
                                            <span>Addis Ababa, Ethiopia</span>
                                        </div>
                                        <div className="info-item">
                                            <i className="fas fa-envelope"></i>
                                            <span>contact@cop32ethiopia.org</span>
                                        </div>
                                        <div className="info-item">
                                            <i className="fas fa-phone"></i>
                                            <span>+251 11 123 4567</span>
                                        </div>
                                    </div>

                                    <div className="social-links">
                                        <a href="#" className="social-icon" title="Facebook"><i className="fab fa-facebook-f"></i></a>
                                        <a href="#" className="social-icon" title="X (Twitter)"><i className="fab fa-x-twitter"></i></a>
                                        <a href="#" className="social-icon" title="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
                                        <a href="#" className="social-icon" title="Instagram"><i className="fab fa-instagram"></i></a>
                                    </div>
                                </div>

                                <div className="contact-form anim-fade-up">
                                    <form action="#" method="POST" onSubmit={(e) => { e.preventDefault(); alert('Message sent! (Demo Only)'); }}>
                                        <div className="form-group">
                                            <label htmlFor="name">Full Name</label>
                                            <input type="text" id="name" name="name" placeholder="Enter your name" required />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="email">Email Address</label>
                                            <input type="email" id="email" name="email" placeholder="example@domain.com" required />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="subject">Subject</label>
                                            <input type="text" id="subject" name="subject" placeholder="How can we help?" required />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="message">Message</label>
                                            <textarea id="message" name="message" rows="5" placeholder="Your message here..." required></textarea>
                                        </div>
                                        <button type="submit" className="btn-submit">Send Message</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </main>
        </div>
    );
}

export default App;
