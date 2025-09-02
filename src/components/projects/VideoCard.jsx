import React from 'react'

/**
 * VideoCard component - Renders a responsive YouTube video embed
 * Replaces the original ProjectCard that displayed images with overlays
 * Now optimized for video presentation with 16:9 aspect ratio
 */
const VideoCard = ({ videoId, title }) => {
  return (
    <div className='group transition-all duration-300 hover:scale-105'>
      {/* Video container with 16:9 aspect ratio */}
      <div className='relative w-full aspect-video rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300'>
        <iframe
          className='absolute inset-0 w-full h-full'
          src={`https://www.youtube.com/embed/${videoId}?autoplay=0&mute=1&loop=1&playlist=${videoId}&rel=0&modestbranding=1`}
          title={title || `Video ${videoId}`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>
      
      {/* Optional title display - can be uncommented if needed */}
      {/* {title && (
        <div className='mt-3 px-2'>
          <h3 className='text-sm font-medium text-gray-800 truncate'>{title}</h3>
        </div>
      )} */}
    </div>
  )
}

export default VideoCard