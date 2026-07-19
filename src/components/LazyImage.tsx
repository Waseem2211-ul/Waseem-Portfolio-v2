import React, { useState, useEffect, useRef } from "react";
import { ImageOff, Loader2 } from "lucide-react";

interface LazyImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  className?: string;
  placeholderClassName?: string;
  rootMargin?: string;
}

export default function LazyImage({
  src,
  alt,
  className = "",
  placeholderClassName = "",
  rootMargin = "200px",
  ...props
}: LazyImageProps) {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const imgRef = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    // If IntersectionObserver is not supported, load immediately
    if (typeof window === "undefined" || !("IntersectionObserver" in window)) {
      setIsIntersecting(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true);
          if (imgRef.current) {
            observer.unobserve(imgRef.current);
          }
        }
      },
      { rootMargin }
    );

    const currentRef = imgRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [src, rootMargin]);

  return (
    <div
      ref={imgRef}
      className={`relative overflow-hidden bg-slate-950/80 w-full h-full flex items-center justify-center ${placeholderClassName}`}
    >
      {/* Loading Shimmer / Skeleton */}
      {!isLoaded && !hasError && (
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-850 to-slate-900 bg-[length:200%_100%] animate-pulse flex flex-col items-center justify-center space-y-2">
          <Loader2 className="animate-spin text-indigo-500/50" size={24} />
          <span className="text-[10px] font-mono text-slate-600 uppercase tracking-widest select-none">
            Loading preview...
          </span>
        </div>
      )}

      {/* Error Fallback */}
      {hasError && (
        <div className="absolute inset-0 bg-slate-950 border border-rose-900/20 flex flex-col items-center justify-center space-y-2 p-4 text-center">
          <ImageOff className="text-rose-500/40" size={24} />
          <p className="text-[11px] font-mono text-slate-500 max-w-[200px]">
            Preview failed to load
          </p>
        </div>
      )}

      {/* Real Image */}
      {isIntersecting && !hasError && (
        <img
          src={src}
          alt={alt}
          onLoad={() => setIsLoaded(true)}
          onError={() => setHasError(true)}
          className={`object-cover w-full h-full transition-all duration-700 ease-out ${
            isLoaded 
              ? "opacity-100 scale-100 blur-0" 
              : "opacity-0 scale-105 blur-md"
          } ${className}`}
          referrerPolicy="no-referrer"
          {...props}
        />
      )}
    </div>
  );
}
