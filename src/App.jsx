import { useRef, useEffect, useState } from 'react'
import './App.css'

function App() {
  const videoRef = useRef(null)
  const [isMuted, setIsMuted] = useState(false)
  const phoneNumber = '91975270319'
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent('Hello! I want to connect my ID.')}`

  const enableSound = () => {
    if (videoRef.current) {
      videoRef.current.muted = false
      videoRef.current.volume = 1.0
      videoRef.current.play().catch(() => {})
      setIsMuted(false)
    }
  }

  const toggleSound = (e) => {
    e.stopPropagation()
    if (!videoRef.current) return
    const nextState = !videoRef.current.muted
    videoRef.current.muted = nextState
    setIsMuted(nextState)
    if (!nextState) {
      videoRef.current.volume = 1.0
      videoRef.current.play().catch(() => {})
    }
  }

  // When clicking on the video, immediately open WhatsApp!
  const handleVideoClick = (e) => {
    if (e.target.closest('.sound-toggle-badge')) {
      return
    }
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer')
  }

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    // Attempt to play with SOUND first
    video.muted = false
    video.volume = 1.0
    video.play().then(() => {
      setIsMuted(false)
    }).catch(() => {
      // If browser blocked unmuted autoplay, play muted until first click
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
    <div className="ad-container">
      {/* Background Watermark Typography */}
      <div className="bg-watermark-container" aria-hidden="true">
        <span className="watermark-line text-top">CONNECT YOUR ID</span>
        <span className="watermark-line text-bottom">INSTANT VERIFICATION • 24/7 ACTIVE</span>
      </div>

      {/* Decorative Floating Creative Accent Glows */}
      <div className="accent-shape shape-1"></div>
      <div className="accent-shape shape-2"></div>

      {/* Desktop Left Creative Ad Banner Card */}
      <div className="side-banner side-banner-left">
        <div className="banner-tag">
          <span className="tag-dot"></span> DIRECT ACCESS
        </div>
        <h2 className="banner-title">Connect Your ID</h2>
        <p className="banner-desc">Tap the button to verify and activate your official ID in seconds.</p>
        <div className="banner-perks">
          <div className="perk-item">
            <span className="perk-icon">⚡</span>
            <span>1-Minute Fast Activation</span>
          </div>
          <div className="perk-item">
            <span className="perk-icon">🔒</span>
            <span>100% Safe & Verified</span>
          </div>
          <div className="perk-item">
            <span className="perk-icon">💬</span>
            <span>Direct WhatsApp Support</span>
          </div>
        </div>
      </div>

      {/* Center Showcase Column (Top Header + Video + WhatsApp Button) */}
      <div className="center-stage">
        
        {/* Creative Top Headline / Callout */}
        <div className="ad-headline-bar">
          <div className="headline-badge">
            <span className="live-spark">🔥</span>
            <span className="headline-text">CLICK HERE TO CONNECT YOUR ID</span>
          </div>
        </div>

        {/* 9:16 Portrait Video Card - Clicking video opens WhatsApp! */}
        <div
          className="video-card"
          onClick={handleVideoClick}
          role="button"
          tabIndex={0}
          title="Click to Connect on WhatsApp"
        >
          {/* Floating Sound Controller Badge */}
          <button
            type="button"
            className={`sound-toggle-badge ${isMuted ? 'muted' : 'active'}`}
            onClick={toggleSound}
            title={isMuted ? "Click to Unmute Sound" : "Sound is ON"}
          >
            {isMuted ? (
              <>
              </>
            ) : (
              <>
              
              </>
            )}
          </button>

          <video
            ref={videoRef}
            className="ad-video"
            src="/img/lv_0_20261025113617.mp4"
            autoPlay
            loop
            playsInline
            disablePictureInPicture
          >
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Creative High-Converting WhatsApp CTA Button */}
        <div className="button-wrapper">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="creative-wa-btn"
            id="whatsapp-btn"
          >
            {/* Subtle button pulsing glow */}
            <span className="btn-glow-aura"></span>

            {/* Shimmer Light Reflection Sweep */}
            <span className="btn-shimmer-sweep"></span>

            {/* WhatsApp Icon */}
            <div className="wa-icon-container">
              <svg
                className="wa-icon"
                viewBox="0 0 32 32"
                fill="currentColor"
              >
                <path d="M16.01 2.01c-7.72 0-14 6.28-14 14 0 2.47.65 4.88 1.88 7.02l-2 7.31 7.48-1.96c2.07 1.13 4.41 1.73 6.64 1.73 7.72 0 14-6.28 14-14s-6.28-14-14-14zm0 25.59c-2.11 0-4.18-.57-6-1.65l-.43-.26-4.44 1.16 1.19-4.33-.28-.45c-1.19-1.89-1.82-4.08-1.82-6.31 0-6.49 5.28-11.77 11.77-11.77 6.49 0 11.77 5.28 11.77 11.77 0 6.49-5.28 11.77-11.77 11.77zm6.45-8.83c-.35-.18-2.09-1.03-2.42-1.15-.32-.12-.56-.18-.8.18-.23.35-.91 1.15-1.12 1.39-.2.24-.41.27-.76.09-.35-.18-1.49-.55-2.84-1.75-1.05-.94-1.76-2.1-1.96-2.45-.21-.35-.02-.54.15-.72.16-.16.35-.41.53-.62.18-.21.23-.35.35-.59.12-.24.06-.44-.03-.62-.09-.18-.8-1.92-1.09-2.63-.29-.69-.58-.6-.8-.61h-.68c-.24 0-.62.09-.94.44s-1.24 1.21-1.24 2.96c0 1.75 1.27 3.44 1.45 3.68.18.24 2.5 3.82 6.06 5.35.85.37 1.51.58 2.02.75.85.27 1.63.23 2.24.14.68-.1 2.09-.85 2.39-1.68.29-.82.29-1.53.21-1.68-.09-.15-.32-.24-.68-.41z"></path>
              </svg>
            </div>

            {/* CTA Text Group */}
            <div className="btn-content">
              <span className="btn-main-title">Click Here to Connect ID</span>
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

      {/* Desktop Right Creative Trust Card */}
      <div className="side-banner side-banner-right">
        <div className="banner-tag highlight">
          <span>⚡ INSTANT PROCESS</span>
        </div>
        <h2 className="banner-title">How It Works</h2>
        <div className="steps-list">
          <div className="step-card">
            <div className="step-num">1</div>
            <div className="step-text">Watch Video Preview</div>
          </div>
          <div className="step-card">
            <div className="step-num">2</div>
            <div className="step-text">Click WhatsApp Button</div>
          </div>
          <div className="step-card">
            <div className="step-num">3</div>
            <div className="step-text">Get Your ID Connected</div>
          </div>
        </div>
        <div className="trust-footer">
          <span className="trust-stars">★★★★★</span>
          <span className="trust-count">10,000+ IDs Connected</span>
        </div>
      </div>

    </div>
  )
}

export default App
