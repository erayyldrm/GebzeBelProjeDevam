import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Haberler.css';

// Interface for article data
interface Article {
    id: number;
    title: string;
    category: string;
    image: string;
    author: string;
    authorImage: string;
    date: string;
    comments: number;
}

const Haberler: React.FC = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [articles, setArticles] = useState<Article[]>([]);

    // Sample data - in a real app, you would fetch this from an API
    useEffect(() => {
        // Mock data based on the image
        const mockArticles: Article[] = [
            {
                id: 1,
                title: "Bosmogenic an designed for narita tourism in moon",
                category: "LIFESTYLE",
                image: "https://source.unsplash.com/random/800x600/?yoga",
                author: "Jon Deo",
                authorImage: "/assets/avatars/avatar1.jpg",
                date: "March 29, 2022",
                comments: 99
            },
            {
                id: 2,
                title: "Dui fermes tempora maiores dicta anim? Vel curae eaque ab eaque pharetra blandit",
                category: "POLITICS",
                image: "https://source.unsplash.com/random/800x600/?newspaper",
                author: "Jon Deo",
                authorImage: "/assets/avatars/avatar2.jpg",
                date: "March 29, 2022",
                comments: 99
            },
            {
                id: 3,
                title: "Virtual reality is here!",
                category: "TECHNOLOGY",
                image: "https://source.unsplash.com/random/800x600/?vr",
                author: "Jon Deo",
                authorImage: "/assets/avatars/avatar3.jpg",
                date: "March 29, 2022",
                comments: 45
            },
            {
                id: 4,
                title: "Running on the field.",
                category: "TRAVEL",
                image: "https://source.unsplash.com/random/800x600/?running",
                author: "Jon Deo",
                authorImage: "/assets/avatars/avatar4.jpg",
                date: "March 29, 2022",
                comments: 32
            },
            {
                id: 5,
                title: "Beautiful lady hookup",
                category: "DESIGN",
                image: "https://source.unsplash.com/random/800x600/?design",
                author: "Anonymous",
                authorImage: "/assets/avatars/avatar5.jpg",
                date: "March 22, 2022",
                comments: 15
            },
            {
                id: 6,
                title: "Need some fresh air",
                category: "TRAVEL",
                image: "https://source.unsplash.com/random/800x600/?nature",
                author: "Anonymous",
                authorImage: "/assets/avatars/avatar6.jpg",
                date: "April 20, 2022",
                comments: 8
            },
            {
                id: 7,
                title: "Art is creative minds",
                category: "TECHNOLOGY",
                image: "https://source.unsplash.com/random/800x600/?art",
                author: "Anonymous",
                authorImage: "/assets/avatars/avatar7.jpg",
                date: "May 20, 2022",
                comments: 12
            }
        ];
        setArticles(mockArticles);
    }, []);

    // Main featured articles (first 4)
    const featuredArticles = articles.slice(0, 4);
    // Bottom articles (rest)
    const bottomArticles = articles.slice(4);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev === featuredArticles.length - 1 ? 0 : prev + 1));
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev === 0 ? featuredArticles.length - 1 : prev - 1));
    };

    return (
        <div className="haberler-container">
            <header className="haberler-header">
                <div className="logo">
                    <Link to="/">
                        <img src="/assets/logo/neoton-logo.png" alt="Neoton" />
                    </Link>
                </div>
                <nav className="main-nav">
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/pages">Pages</Link></li>
                        <li><Link to="/categories">Categories</Link></li>
                        <li><Link to="/blog">Blog</Link></li>
                        <li><Link to="/posts">Posts</Link></li>
                    </ul>
                </nav>
                <div className="nav-actions">
                    <button className="theme-toggle">
                        <span className="toggle-icon">🌓</span>
                    </button>
                    <button className="search-button">
                        <span className="search-icon">🔍</span>
                    </button>
                    <button className="sign-in-button">Sign In</button>
                    <button className="menu-toggle">
                        <span className="menu-icon">☰</span>
                    </button>
                </div>
            </header>

            <section className="featured-articles">
                <div className="featured-slider">
                    {featuredArticles.map((article, index) => (
                        <div
                            key={article.id}
                            className={`slide ${index === currentSlide ? 'active' : ''}`}
                            style={{
                                backgroundImage: `url(${article.image})`,
                                transform: `translateX(${(index - currentSlide) * 100}%)`
                            }}
                        >
                            <div className="slide-content">
                                <span className="category-badge">{article.category}</span>
                                <h2 className="article-title">{article.title}</h2>
                                <div className="article-meta">
                                    <div className="author-info">
                                        <img src={article.authorImage} alt={article.author} className="author-avatar" />
                                        <span className="author-name">by {article.author}</span>
                                    </div>
                                    <div className="article-date">
                                        <span className="date-icon">📅</span>
                                        <span>{article.date}</span>
                                    </div>
                                    <div className="article-comments">
                                        <span className="comments-icon">💬</span>
                                        <span>{article.comments} Comments</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}

                    <div className="slider-controls">
                        <button className="prev-button" onClick={prevSlide}>←</button>
                        <button className="next-button" onClick={nextSlide}>→</button>
                    </div>
                </div>
            </section>

            <section className="bottom-articles">
                <div className="article-grid">
                    {bottomArticles.map(article => (
                        <div key={article.id} className="article-card">
                            <div className="article-image">
                                <img src={article.image} alt={article.title} />
                                <span className="category-badge">{article.category}</span>
                            </div>
                            <div className="article-details">
                                <h3 className="article-title">{article.title}</h3>
                                <div className="article-meta">
                                    <span className="date-icon">📅</span>
                                    <span>{article.date}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Haberler;