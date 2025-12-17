import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./side.module.css";
import { getImageUrl } from "../../../utils";
import tennisData from "../../../data/tennis.json";

const Side = () => {
  const navigate = useNavigate();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [progress, setProgress] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const [imageLoading, setImageLoading] = useState(true);
  const carouselRef = useRef(null);

  const { tennisImages, tennisExperience } = tennisData;

  const sideHustles = [
    {
      title: "us open tennis coordinator",
      organization: "usta",
      duration: "3 years (2021-2023)",
      description: "coordinated player interviews, managed tournament logistics, and ensured smooth operations during one of tennis's biggest events.",
      highlights: [
        "managed player interview schedules and logistics",
        "coordinated with media teams and tournament officials",
        "ensured smooth player movement and tournament flow",
        "worked directly with top-ranked atp and wta players"
      ],
      icon: "🎾"
    },
    {
      title: "multimedia producer",
      organization: "samahang modern",
      duration: "2023-2024",
      description: "curating digital identity for #1 collegiate dance team on instagram and youtube",
      highlights: [
        "produced professional quality multimedia content with adobe creative suite",
        "grew instagram to 2200+ followers and 440k+ views with flyers and concept videos"
      ],
      icon: "💻"
    },
    {
      title: "soccer coaching",
      organization: "lezele fc",
      duration: "2018-2022",
      description: "teaching soccer fundamentals to beginners and intermediate players of all ages.",
      highlights: [
        "individual and group lesson instruction",
        "technique development and match strategy",
        "junior development program coordination",
        "tournament preparation and mental game coaching"
      ],
      icon: "🏆"
    }
  ];

  const nextImage = () => {
    setCurrentImageIndex((prev) =>
      prev === tennisImages.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? tennisImages.length - 1 : prev - 1
    );
  };

  const goToImage = (index) => {
    setCurrentImageIndex(index);
    setIsAutoPlaying(false); // Pause auto-play when manually navigating
  };

  // Auto-advance carousel
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentImageIndex((prev) =>
        prev === tennisImages.length - 1 ? 0 : prev + 1
      );
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(interval);
  }, [isAutoPlaying, tennisImages.length]);

  // Progress bar for auto-advance
  useEffect(() => {
    if (!isAutoPlaying) {
      setProgress(0);
      return;
    }

    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          return 0;
        }
        return prev + (100 / 40); // 40 steps over 4 seconds
      });
    }, 100);

    return () => clearInterval(progressInterval);
  }, [isAutoPlaying, currentImageIndex]);

  // Removed hover pause functionality for smoother auto-advance

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') {
        prevImage();
        setIsAutoPlaying(false);
      } else if (e.key === 'ArrowRight') {
        nextImage();
        setIsAutoPlaying(false);
      } else if (e.key === ' ') {
        e.preventDefault();
        setIsAutoPlaying(!isAutoPlaying);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isAutoPlaying]);

  // Touch/swipe support
  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      nextImage();
    } else if (isRightSwipe) {
      prevImage();
    }

    setIsAutoPlaying(false);
    setTouchStart(null);
    setTouchEnd(null);
  };

  return (
    <div className={styles.container}>
      <button className={styles.backButton} onClick={() => navigate("/portfolio/personal")}>
        ← back
      </button>
      <h1 className={styles.title}>side hustles & adventures</h1>
      <p className={styles.subtitle}>
        beyond my main work revolving tech, i've had some incredible opportunities gain unique experiences.
      </p>

      {/* Tennis Section */}
      <section className={styles.tennisSection}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>us open tennis experience</h2>
          <p className={styles.sectionDescription}>
            for three consecutive years, i had the incredible opportunity to work as a coordinator at the us open tennis championships.
            this experience gave me a behind-the-scenes look at one of tennis's most prestigious tournaments, where i got to work directly
            with top-ranked players, coordinate media operations, and ensure the smooth flow of one of the world's biggest sporting events.
          </p>
        </div>

        {/* Image Carousel */}
        <div className={styles.carouselContainer}>
          <div
            className={styles.carousel}
            ref={carouselRef}
          >
            <button
              className={`${styles.carouselButton} ${styles.prevButton}`}
              onClick={prevImage}
              aria-label="Previous image"
            >
              ‹
            </button>

            <div
              className={styles.carouselContent}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              {imageLoading && (
                <div className={styles.imageLoader}>
                  <div className={styles.spinner}></div>
                  <p>loading image...</p>
                </div>
              )}
              <img
                src={getImageUrl(tennisImages[currentImageIndex].src)}
                alt={tennisImages[currentImageIndex].alt}
                className={`${styles.carouselImage} ${!imageLoading ? styles.loaded : ''}`}
                onLoad={() => setImageLoading(false)}
                onError={() => setImageLoading(false)}
              />
              <div className={styles.carouselCaption}>
                {tennisImages[currentImageIndex].caption}
              </div>
              {/* Progress Bar */}
              {isAutoPlaying && (
                <div className={styles.progressBar}>
                  <div
                    className={styles.progressFill}
                    style={{ width: `${progress}%` }}
                  />
                </div>
              )}
            </div>

            <button
              className={`${styles.carouselButton} ${styles.nextButton}`}
              onClick={nextImage}
              aria-label="Next image"
            >
              ›
            </button>
          </div>

          {/* Carousel Controls */}
          <div className={styles.carouselControls}>
            <button
              className={styles.playPauseButton}
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              aria-label={isAutoPlaying ? "Pause carousel" : "Play carousel"}
            >
              <img
                src={getImageUrl(isAutoPlaying ? "misc/stop_button.png" : "misc/play_button.png")}
                alt={isAutoPlaying ? "Pause" : "Play"}
                className={styles.playPauseIcon}
              />
            </button>

            {/* Carousel Indicators */}
            <div className={styles.carouselIndicators}>
              {tennisImages.map((_, index) => (
                <button
                  key={index}
                  className={`${styles.indicator} ${index === currentImageIndex ? styles.activeIndicator : ''}`}
                  onClick={() => goToImage(index)}
                  aria-label={`Go to image ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Tennis Experience Details */}
        <div className={styles.tennisDetails}>
          <h3>what i did as an assistant producer:</h3>
          <ul className={styles.experienceList}>
            {tennisExperience.highlights.map((highlight, index) => (
              <li key={index}>{highlight}</li>
            ))}
          </ul>

          <div className={styles.tennisStats}>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>3</span>
              <span className={styles.statLabel}>years</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>60+</span>
              <span className={styles.statLabel}>player interviews</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>24/7</span>
              <span className={styles.statLabel}>tournament coverage</span>
            </div>
          </div>
        </div>
      </section>

      {/* Other Side Hustles */}
      <section className={styles.otherHustles}>
        <h2 className={styles.sectionTitle}>other side ventures</h2>
        <div className={styles.hustlesGrid}>
          {sideHustles.slice(1).map((hustle, index) => (
            <div key={index} className={styles.hustleCard}>
              <div className={styles.hustleIcon}>{hustle.icon}</div>
              <h3 className={styles.hustleTitle}>{hustle.title}</h3>
              <p className={styles.hustleOrg}>{hustle.organization}</p>
              <p className={styles.hustleDuration}>{hustle.duration}</p>
              <p className={styles.hustleDescription}>{hustle.description}</p>
              <ul className={styles.hustleHighlights}>
                {hustle.highlights.map((highlight, idx) => (
                  <li key={idx}>{highlight}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className={styles.ctaSection}>
        <h2 className={styles.ctaTitle}>interested in working together?</h2>
        <p className={styles.ctaDescription}>
          whether it's web development, event coordination, or media production,
          i'm always open to new opportunities and exciting projects!
        </p>
        <a href="/portfolio/contact" className={styles.ctaButton}>
          get in touch
        </a>
      </section>
    </div>
  );
};

export default Side;
