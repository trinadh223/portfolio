import React, { useState, useEffect, useCallback } from 'react';
import { ChevronRight, ExternalLink } from 'lucide-react';

const BlogCarousel = () => {
  const [blogPosts, setBlogPosts] = useState([]); 
  const [currentSlide, setCurrentSlide] = useState(0);
  const [autoScroll, setAutoScroll] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // Existing fetch logic remains the same as in the previous component

  const handleSlide = useCallback((direction) => {
    if (!blogPosts || blogPosts.length <= 1) return;
    
    const maxSlides = blogPosts.length;
    if (direction === 'right') {
      setCurrentSlide(prev => (prev >= maxSlides - 1) ? 0 : prev + 1);
    } else {
      setCurrentSlide(prev => (prev <= 0) ? maxSlides - 1 : prev - 1);
    }
  }, [blogPosts]);

  // Existing useEffect for auto-scrolling remains the same

  // Loading and error states remain the same

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
          {blogPosts.length > 1 && (
            <>
              {/* Left Arrow */}
              <button 
                onClick={() => handleSlide('left')}
                className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-gray-800/80 rounded-full border border-cyan-500/20 hover:border-cyan-500/50 transition-all duration-300 hidden md:block"
              >
                <ChevronRight size={24} className="text-cyan-400 rotate-180" />
              </button>

              {/* Right Arrow */}
              <button 
                onClick={() => handleSlide('right')}
                className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-gray-800/80 rounded-full border border-cyan-500/20 hover:border-cyan-500/50 transition-all duration-300 hidden md:block"
              >
                <ChevronRight size={24} className="text-cyan-400" />
              </button>
            </>
          )}

          {/* Blog Posts Container */}
          <div 
            className="relative overflow-hidden"
            onMouseEnter={() => setAutoScroll(false)}
            onMouseLeave={() => setAutoScroll(true)}
          >
            <div 
              className="flex flex-col md:flex-row gap-6 transition-transform duration-500 ease-out"
              style={{ 
                transform: `translateX(${window.innerWidth < 768 ? 0 : `-${currentSlide * (100/3)}%`})` 
              }}
            >
              {blogPosts.map((post, index) => (
                <div 
                  key={index}
                  className="w-full md:w-1/3 flex-shrink-0 bg-gray-800/50 rounded-xl overflow-hidden border border-cyan-500/20 hover:border-cyan-500/50 transition-all duration-300 group mb-6 md:mb-0"
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

            {/* Mobile Navigation Dots */}
            {blogPosts.length > 1 && (
              <div className="flex justify-center mt-4 md:hidden">
                {blogPosts.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentSlide(idx)}
                    className={`w-2 h-2 rounded-full mx-1 ${
                      currentSlide === idx ? 'bg-cyan-400' : 'bg-gray-600'
                    }`}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogCarousel;