import React, { useState, useEffect, useRef } from 'react';

interface LazyImageProps {
    src: string;
    alt?: string;
    className?: string;
}

const LazyImage: React.FC<LazyImageProps> = ({ src, alt, className }) => {
    const [imageSrc, setImageSrc] = useState<string>('');
    const imageRef = useRef<HTMLImageElement | null>(null);
  
    const onLoadImage = () => {
      setImageSrc(src);
    };
  
    useEffect(() => {
      let observer: IntersectionObserver;
      let didCancel = false;
  
      if (imageRef.current && imageSrc === '') {
        observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
  
              if (!didCancel && (entry.intersectionRatio > 0 || entry.isIntersecting)) {
                onLoadImage();
                if (imageRef.current) {
                  observer.unobserve(imageRef.current);
                }
              }
            });
          },
          { rootMargin: '0px 0px 200px 0px', threshold: 0 }
        );
        if (imageRef.current) {
          observer.observe(imageRef.current);
        }
      }
      return () => {
        didCancel = true;
        if (observer && observer.unobserve && imageRef.current) {
          observer.unobserve(imageRef.current as Element);
        }
      };
    }, [imageSrc, src]);
  
    return <img ref={imageRef} src={imageSrc} alt={alt} className={className} />;
};

export default LazyImage;
