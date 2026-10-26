import { useRef, useEffect, useState } from 'react'
import './App.css'

function App() {
  const videoRef = useRef(null)
  const [isMuted, setIsMuted] = useState(false)
  const phoneNumber = '919662721224'
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent('Hello! I want to connect my ID.')}`

  const enableSound = () => {
    if (videoRef.current) {
      videoRef.current.muted = false
      videoRef.current.volume = 1.0
      videoRef.current.play().catch(() => {})
      setIsMuted(false)
    }
  }

  // When clicking on the video (outside the button), open WhatsApp directly!
  const handleVideoClick = () => {
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer')
  }

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    // Attempt to play with sound
    video.muted = false
    video.volume = 1.0
    video.play().then(() => {
      setIsMuted(false)
    }).catch(() => {
      // If browser blocked unmuted autoplay, play muted until first interaction
      video.muted = true
      setIsMuted(true)
      video.play().catch(() => {})
    })

    const handleFirstInteraction = () => {
      if (videoRef.current) {
        videoRef.current.muted = false
        videoRef.current.volume = 1.0
        videoRef.current.play().catch(() => {})
        setIsMuted(false)
      }
    }

    window.addEventListener('click', handleFirstInteraction, { passive: true })
    window.addEventListener('touchstart', handleFirstInteraction, { passive: true })

    return () => {
      window.removeEventListener('click', handleFirstInteraction)
      window.removeEventListener('touchstart', handleFirstInteraction)
    }
  }, [])

  return (
    <div className="fullscreen-ad-wrapper">
      {/* Background Watermark Typography */}
      <div className="bg-watermark-container" aria-hidden="true">
        <span className="watermark-line text-top">CONNECT YOUR ID</span>
        <span className="watermark-line text-bottom">INSTANT VERIFICATION • 24/7 ACTIVE</span>
      </div>

      {/* Background Glow Accents */}
      <div className="accent-shape shape-1"></div>
      <div className="accent-shape shape-2"></div>

      {/* Main Video Container - Length to Length */}
      <div
        className="full-video-card"
        onClick={handleVideoClick}
        role="button"
        tabIndex={0}
        title="Click anywhere to connect on WhatsApp"
      >
        {/* 9:16 Portrait Video Running Length-to-Length in Continuous Loop */}
        <video
          ref={videoRef}
          className="length-to-length-video"
          src="/img/lv_0_20261025113617.mp4"
          autoPlay
          loop
          playsInline
          disablePictureInPicture
        >
          Your browser does not support the video tag.
        </video>

        {/* Overlaid WhatsApp Button - Positioned Directly Over Elephant's Legs */}
        <div className="video-overlay-button-zone" onClick={(e) => e.stopPropagation()}>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="overlay-wa-btn"
            id="whatsapp-btn"
          >
            {/* Subtle button pulsing glow */}
            <span className="btn-glow-aura"></span>

            {/* Shimmer Light Reflection Sweep */}
            <span className="btn-shimmer-sweep"></span>

            {/* Official Sharp WhatsApp Icon */}
            <div className="wa-icon-container">
              <svg
                className="wa-icon"
                viewBox="0 0 24 24"
                fill="#25D366"
              >
                <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2ZM12.04 20.15C10.56 20.15 9.11 19.76 7.85 19L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 14.99 3.8 13.47 3.8 11.91C3.8 7.37 7.5 3.67 12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15ZM16.57 14.39C16.32 14.26 15.1 13.66 14.88 13.58C14.65 13.5 14.49 13.46 14.32 13.71C14.16 13.96 13.69 14.51 13.55 14.68C13.41 14.84 13.27 14.86 13.02 14.74C12.78 14.61 11.98 14.35 11.04 13.51C10.31 12.85 9.81 12.04 9.67 11.8C9.53 11.55 9.65 11.41 9.78 11.29C9.89 11.17 10.03 10.99 10.15 10.85C10.27 10.71 10.32 10.6 10.4 10.44C10.48 10.27 10.44 10.13 10.38 10.01C10.32 9.88 9.83 8.68 9.63 8.19C9.43 7.71 9.23 7.78 9.08 7.77H8.61C8.45 7.77 8.18 7.83 7.96 8.07C7.74 8.31 7.12 8.89 7.12 10.07C7.12 11.25 7.98 12.39 8.1 12.55C8.22 12.71 9.79 15.14 12.21 16.18C12.79 16.43 13.24 16.58 13.59 16.69C14.17 16.88 14.7 16.85 15.12 16.79C15.59 16.72 16.56 16.2 16.76 15.63C16.97 15.06 16.97 14.57 16.91 14.47C16.85 14.37 16.71 14.31 16.46 14.19L16.57 14.39Z" />
              </svg>
            </div>

            {/* CTA Text */}
            <div className="btn-content">
              <span className="btn-main-title">Click Here to Get ID</span>
            </div>

            {/* Action Arrow */}
            <div className="btn-action-arrow">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" width="18" height="18">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </div>
          </a>
        </div>
      </div>
    </div>
  )
}

export default App
