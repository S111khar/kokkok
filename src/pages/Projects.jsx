import { useGSAP } from '@gsap/react'
import VideoCard from '../components/projects/VideoCard'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'

/**
 * Projects component - Now displays YouTube videos in a responsive grid
 * 
 * Key changes from original:
 * - Replaced image URLs with YouTube video IDs
 * - Updated layout to support 3-4 videos per row on desktop, 2 on tablet, 1 on mobile
 * - Removed "Voir le projet" overlay (not needed for videos)
 * - Added proper spacing and responsive design for video content
 * - Structured to easily support 31+ videos without layout issues
 */
const Projects = () => {

  // Updated projects array - now contains YouTube video IDs instead of image URLs
  // Easily extendable - just add more objects with videoId properties
  const projects = [
    {
      videoId: 'dQw4w9WgXcQ', // Rick Astley - Never Gonna Give You Up
      title: 'Project Alpha'
    },
    {
      videoId: 'kJQP7kiw5Fk', // Despacito
      title: 'Project Beta'
    },
    {
      videoId: 'fJ9rUzIMcZQ', // Bohemian Rhapsody
      title: 'Project Gamma'
    },
    {
      videoId: 'YQHsXMglC9A', // Adele - Hello
      title: 'Project Delta'
    },
    {
      videoId: 'hT_nvWreIhg', // Counting Stars
      title: 'Project Epsilon'
    },
    {
      videoId: 'CevxZvSJLk8', // Katy Perry - Roar
      title: 'Project Zeta'
    },
    {
      videoId: 'JGwWNGJdvx8', // Shape of You
      title: 'Project Eta'
    },
    {
      videoId: 'RgKAFK5djSk', // Wiz Khalifa - See You Again
      title: 'Project Theta'
    },
    {
      videoId: 'OPf0YbXqDm0', // Mark Ronson - Uptown Funk
      title: 'Project Iota'
    }
    // Easy to add more videos here - layout will automatically adapt
  ]

  gsap.registerPlugin(ScrollTrigger)

  useGSAP(function () {
    // Updated animation to work with video grid sections
    // Animates each video section as it comes into view
    gsap.from('.video-section', {
      y: 100,
      opacity: 0,
      duration: 1,
      stagger: {
        amount: 0.6
      },
      scrollTrigger: {
        trigger: '.video-grid-container',
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none reverse'
      }
    })

    // Animate individual video cards with a subtle stagger effect
    gsap.from('.video-card', {
      scale: 0.9,
      opacity: 0,
      duration: 0.8,
      stagger: {
        amount: 1.2
      },
      scrollTrigger: {
        trigger: '.video-grid-container',
        start: 'top 70%',
        end: 'bottom 30%',
        toggleActions: 'play none none reverse'
      }
    })
  })

  // Function to chunk videos into sections for better organization
  // This helps maintain clean layout even with 31+ videos
  const chunkVideos = (videos, chunkSize) => {
    const chunks = []
    for (let i = 0; i < videos.length; i += chunkSize) {
      chunks.push(videos.slice(i, i + chunkSize))
    }
    return chunks
  }

  // Create sections of videos (6 videos per section for optimal layout)
  const videoSections = chunkVideos(projects, 6)

  return (
    <div className='lg:p-6 p-4 mb-[100vh] bg-white'>
      {/* Header section - preserved from original */}
      <div className='pt-[45vh]'>
        <h2 className='font-[font2] lg:text-[9.5vw] text-7xl uppercase text-black'>Projets</h2>
      </div>

      {/* Video grid container - replaces the original project cards layout */}
      <div className='video-grid-container lg:mt-20 mt-10'>
        {videoSections.map((section, sectionIdx) => (
          <div key={sectionIdx} className='video-section mb-16'>
            {/* Optional section divider for large collections */}
            {sectionIdx > 0 && (
              <div className='w-full h-px bg-gray-200 mb-12'></div>
            )}
            
            {/* Responsive grid layout:
                - Desktop (lg): 3 columns with gap-6
                - Tablet (md): 2 columns with gap-4  
                - Mobile: 1 column with gap-4
                This ensures optimal viewing on all devices */}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6'>
              {section.map((project, idx) => (
                <div key={`${sectionIdx}-${idx}`} className='video-card'>
                  <VideoCard 
                    videoId={project.videoId} 
                    title={project.title}
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Spacer for scroll animations */}
      <div className='h-[50vh]'></div>
    </div>
  )
}

export default Projects