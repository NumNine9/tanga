import React, { useRef, useState } from 'react';

const VideoIntro = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [showControls, setShowControls] = useState(false);

  const togglePlay = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
        setIsPlaying(true);
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

  return (
    <div 
      className="relative w-full max-w-4xl mx-auto rounded-lg shadow-xl overflow-hidden bg-black"
      onMouseEnter={() => setShowControls(true)}
      onMouseLeave={() => setShowControls(false)}
    >
      <video
        ref={videoRef}
        autoPlay
        // muted
        loop
        playsInline
        className="w-full h-auto aspect-video object-cover"
        onClick={togglePlay}
        poster="/videos/poster.jpg" // Optional placeholder image
      >
        <source src="/demo.mp4" type="video/mp4" />
        {/* <source src="/videos/intro.webm" type="video/webm" /> */}
        Your browser does not support HTML5 video.
      </video>

      {/* Controls overlay */}
      {(showControls || !isPlaying) && (
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 transition-opacity duration-300">
          <button
            onClick={togglePlay}
            className="p-4 rounded-full bg-black bg-opacity-50 hover:bg-opacity-70 transition-all"
            aria-label={isPlaying ? 'Pause video' : 'Play video'}
          >
            {isPlaying ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            )}
          </button>
        </div>
      )}

      {/* Progress bar (optional) */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-700">
        <div 
          className="h-full bg-blue-500" 
          style={{ width: videoRef.current ? `${(videoRef.current.currentTime / videoRef.current.duration) * 100}%` : '0%' }}
        />
      </div>
    </div>
  );
};

export default VideoIntro;