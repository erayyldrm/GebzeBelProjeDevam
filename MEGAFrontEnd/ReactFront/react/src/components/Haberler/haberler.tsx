import  { useEffect, useState } from 'react';

interface BlogPost {
    id: number;
    image: string;
    category: string;
    categoryColor: string;
    title: string;
    author: string;
    authorImage: string;
    date: string;
    comments: number;
}

export default function ModernBlogSlider() {
    // Main blog posts
    const blogPosts: BlogPost[] = [
        {
            id: 1,
            image: "/assets/images/hero-blog/1.jpg",
            category: "LIFESTYLE",
            categoryColor: "bg-pink-500",
            title: "Bosmogenic an designed for narita iourism in moon",
            author: "Jon Deo",
            authorImage: "/assets/images/authors/jon-deo.jpg",
            date: "March 29, 2022",
            comments: 99
        },
        {
            id: 2,
            image: "/assets/images/hero-blog/2.jpg",
            category: "POLITICS",
            categoryColor: "bg-green-600",
            title: "Dui fames tempora maiores dicta anim? Vel curae eaque ab eaque pharetra blandit",
            author: "Jon Deo",
            authorImage: "/assets/images/authors/jon-deo.jpg",
            date: "March 29, 2022",
            comments: 99
        },
        {
            id: 3,
            image: "/assets/images/hero-blog/3.jpg",
            category: "TECHNOLOGY",
            categoryColor: "bg-yellow-500",
            title: "Virtual reality is here!",
            author: "Jon Deo",
            authorImage: "/assets/images/authors/jon-deo.jpg",
            date: "March 29, 2022",
            comments: 0
        },
        {
            id: 4,
            image: "/assets/images/hero-blog/4.jpg",
            category: "TRAVEL",
            categoryColor: "bg-blue-500",
            title: "Running on the field.",
            author: "Jon Deo",
            authorImage: "/assets/images/authors/jon-deo.jpg",
            date: "March 29, 2022",
            comments: 0
        }
    ];

    // State for responsive design
    const [, setIsMobile] = useState(false);

    // Check window size for responsive design
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        handleResize(); // Initial check
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* First large blog post - Left side */}
                <div className="relative overflow-hidden rounded-lg group">
                    <div className="aspect-w-16 aspect-h-9 md:aspect-h-10">
                        <img
                            src={blogPosts[0].image}
                            alt={blogPosts[0].title}
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* Overlay content */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent flex flex-col justify-end p-6">
            <span className={`inline-block ${blogPosts[0].categoryColor} text-white px-6 py-1.5 rounded text-sm font-bold mb-4`}>
              {blogPosts[0].category}
            </span>
                        <h2 className="text-white text-3xl md:text-4xl font-bold mb-4 leading-tight">
                            {blogPosts[0].title}
                        </h2>
                        <div className="flex items-center text-white">
                            <div className="w-10 h-10 rounded-full overflow-hidden mr-3">
                                <img
                                    src={blogPosts[0].authorImage}
                                    alt={blogPosts[0].author}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="mr-5">by {blogPosts[0].author}</div>
                            <div className="flex items-center mr-5">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                {blogPosts[0].date}
                            </div>
                            <div className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                                </svg>
                                {blogPosts[0].comments} Comments
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right side column */}
                <div className="space-y-6">
                    {/* Second large blog post (Politics) */}
                    <div className="relative overflow-hidden rounded-lg group">
                        <div className="aspect-w-16 aspect-h-9">
                            <img
                                src={blogPosts[1].image}
                                alt={blogPosts[1].title}
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* Overlay content */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent flex flex-col justify-end p-6">
              <span className={`inline-block ${blogPosts[1].categoryColor} text-white px-6 py-1.5 rounded text-sm font-bold mb-4`}>
                {blogPosts[1].category}
              </span>
                            <h2 className="text-white text-2xl font-bold mb-4 leading-tight">
                                {blogPosts[1].title}
                            </h2>
                            <div className="flex items-center text-white">
                                <div className="w-8 h-8 rounded-full overflow-hidden mr-3">
                                    <img
                                        src={blogPosts[1].authorImage}
                                        alt={blogPosts[1].author}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="mr-5">by {blogPosts[1].author}</div>
                                <div className="flex items-center mr-5">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    {blogPosts[1].date}
                                </div>
                                <div className="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                                    </svg>
                                    {blogPosts[1].comments} Comments
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Two smaller blog posts in a row */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Technology post */}
                        <div className="relative overflow-hidden rounded-lg group">
                            <div className="aspect-w-4 aspect-h-5">
                                <img
                                    src={blogPosts[2].image}
                                    alt={blogPosts[2].title}
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* Overlay content */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent flex flex-col justify-end p-4">
                <span className={`inline-block ${blogPosts[2].categoryColor} text-white px-4 py-1 rounded text-xs font-bold mb-3`}>
                  {blogPosts[2].category}
                </span>
                                <h2 className="text-white text-xl font-bold mb-3 leading-tight">
                                    {blogPosts[2].title}
                                </h2>
                                <div className="flex items-center text-white">
                                    <div className="w-6 h-6 rounded-full overflow-hidden mr-2">
                                        <img
                                            src={blogPosts[2].authorImage}
                                            alt={blogPosts[2].author}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <div className="text-sm">by {blogPosts[2].author}</div>
                                </div>
                            </div>
                        </div>

                        {/* Travel post */}
                        <div className="relative overflow-hidden rounded-lg group">
                            <div className="aspect-w-4 aspect-h-5">
                                <img
                                    src={blogPosts[3].image}
                                    alt={blogPosts[3].title}
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* Overlay content */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent flex flex-col justify-end p-4">
                <span className={`inline-block ${blogPosts[3].categoryColor} text-white px-4 py-1 rounded text-xs font-bold mb-3`}>
                  {blogPosts[3].category}
                </span>
                                <h2 className="text-white text-xl font-bold mb-3 leading-tight">
                                    {blogPosts[3].title}
                                </h2>
                                <div className="flex items-center text-white">
                                    <div className="w-6 h-6 rounded-full overflow-hidden mr-2">
                                        <img
                                            src={blogPosts[3].authorImage}
                                            alt={blogPosts[3].author}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <div className="text-sm">by {blogPosts[3].author}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}