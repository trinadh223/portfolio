import React, { useState, useEffect, useCallback } from 'react';
import { ChevronRight, ExternalLink } from 'lucide-react';

const BlogCarousel = () => {
  const [blogPosts, setBlogPosts] = useState([]); // Initialize with empty array
  const [currentSlide, setCurrentSlide] = useState(0);
  const [autoScroll, setAutoScroll] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch Medium posts
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setIsLoading(true);
        const mediumRssFeed = 'https://medium.com/feed/@trinadhdivvela';
        const rssToJsonApi = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(mediumRssFeed)}`;
        
        const response = await fetch(rssToJsonApi);
        const data = await response.json();
        
        if (data.status === 'ok' && data.items) {
          const posts = data.items.map(item => ({
            title: item.title,
            excerpt: item.description
              .replace(/<[^>]*>/g, '')
              .split('.')[0] + '.',
            image: item.thumbnail || `https://placehold.co/600x400/1a1a1a/666666?text=${encodeURIComponent(item.title)}`,
            link: item.link,
            pubDate: new Date(item.pubDate).toLocaleDateString(),
            tags: item.categories || []
          }));
          setBlogPosts(posts);
        } else {
          setError('Failed to fetch blog posts');
        }
      } catch (error) {
        console.error('Error fetching blog posts:', error);
        setError('Failed to load blog posts');
      } finally {
        setIsLoading(false);
      }
    };

    fetchPosts();
  }, []);

  const handleSlide = useCallback((direction) => {
    if (!blogPosts || blogPosts.length <= 3) return;
    
    const maxSlides = blogPosts.length - 2;
    if (direction === 'right') {
      setCurrentSlide(prev => (prev >= maxSlides - 1) ? 0 : prev + 1);
    } else {
      setCurrentSlide(prev => (prev <= 0) ? maxSlides - 1 : prev - 1);
    }
  }, [blogPosts]);

  useEffect(() => {
    let intervalId;
    
    if (autoScroll && blogPosts.length > 3) {
      intervalId = setInterval(() => {
        handleSlide('right');
      }, 5000);
    }

    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [autoScroll, handleSlide, blogPosts.length]);

  if (isLoading) {
    return (
      <section id="blog" className="py-20 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-400 to-purple-400 text-transparent bg-clip-text">
            Latest Blog Posts
          </h2>
          <div className="flex justify-center text-cyan-400">
            Loading posts...
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section id="blog" className="py-20 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-400 to-purple-400 text-transparent bg-clip-text">
            Latest Blog Posts
          </h2>
          <div className="text-center text-gray-300">
            {error}
          </div>
        </div>
      </section>
    );
  }

  if (!blogPosts || blogPosts.length === 0) {
    return null;
  }

  return (
    <section id="blog" className="py-20 bg-gray-900/50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-400 to-purple-400 text-transparent bg-clip-text">
          Latest Blog Posts
        </h2>
        
        <div className="relative">
          {blogPosts.length > 3 && (
            <>
              {/* Left Arrow */}
              <button 
                onClick={() => handleSlide('left')}
                className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-gray-800/80 rounded-full border border-cyan-500/20 hover:border-cyan-500/50 transition-all duration-300"
              >
                <ChevronRight size={24} className="text-cyan-400 rotate-180" />
              </button>

              {/* Right Arrow */}
              <button 
                onClick={() => handleSlide('right')}
                className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-gray-800/80 rounded-full border border-cyan-500/20 hover:border-cyan-500/50 transition-all duration-300"
              >
                <ChevronRight size={24} className="text-cyan-400" />
              </button>
            </>
          )}

          {/* Blog Posts Container */}
          <div 
            className="relative overflow-hidden mx-12"
            onMouseEnter={() => setAutoScroll(false)}
            onMouseLeave={() => setAutoScroll(true)}
          >
            <div 
              className="flex gap-6 transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentSlide * (100/3)}%)` }}
            >
              {blogPosts.map((post, index) => (
                <div 
                  key={index}
                  className="w-1/3 flex-shrink-0 bg-gray-800/50 rounded-xl overflow-hidden border border-cyan-500/20 hover:border-cyan-500/50 transition-all duration-300 group"
                >
                  <div className="aspect-video relative overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent"></div>
                  </div>
                  <div className="p-6">
                    <div className="text-sm text-gray-400 mb-2">{post.pubDate}</div>
                    <h3 className="text-xl font-bold text-cyan-400 mb-2 group-hover:text-cyan-300 transition-colors duration-300">
                      {post.title}
                    </h3>
                    <p className="text-gray-300 mb-4 line-clamp-2">
                      {post.excerpt}
                    </p>
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags && post.tags.map((tag, idx) => (
                        <span 
                          key={idx}
                          className="px-2 py-1 text-xs bg-cyan-500/10 text-cyan-400 rounded-full border border-cyan-500/20"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <a 
                      href={post.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors duration-300"
                    >
                      Read on Medium <ExternalLink size={16} />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogCarousel;