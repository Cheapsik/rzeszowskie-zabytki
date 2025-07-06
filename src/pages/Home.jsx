import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Home.module.scss";
import { monuments } from "../utils/consts";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const ANIMATION_TIME = 100; // ms
const SLIDE_WIDTH = 80; //vw
const SLIDE_GAP = 4; // vw

const Home = () => {
  const navigate = useNavigate();
  const [current, setCurrent] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const timeoutRef = useRef(null);
  const sliderRef = useRef(null);
  const [slideWidth, setSlideWidth] = useState(0);

  // SWIPE STATE
  const touchStartX = useRef(null);
  const touchEndX = useRef(null);

  useEffect(() => {
    const updateSlideWidth = () => {
      if (sliderRef.current) {
        const containerWidth = sliderRef.current.offsetWidth;
        setSlideWidth(containerWidth);
      }
    };

    updateSlideWidth();
    window.addEventListener("resize", updateSlideWidth);

    return () => {
      window.removeEventListener("resize", updateSlideWidth);
      clearTimeout(timeoutRef.current);
    };
  }, []);

  const handlePrev = () => {
    if (current > 0 && !isAnimating) {
      setCurrent(current - 1);
      setIsAnimating(true);
      clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => setIsAnimating(false), ANIMATION_TIME);
    }
  };

  const handleNext = () => {
    if (current < monuments.length - 1 && !isAnimating) {
      setCurrent(current + 1);
      setIsAnimating(true);
      clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => setIsAnimating(false), ANIMATION_TIME);
    }
  };

  const handleDotClick = (idx) => {
    if (idx !== current && !isAnimating) {
      setCurrent(idx);
      setIsAnimating(true);
      clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => setIsAnimating(false), ANIMATION_TIME);
    }
  };

  // SWIPE HANDLERS
  const onTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const onTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const onTouchEnd = () => {
    if (touchStartX.current !== null && touchEndX.current !== null) {
      const delta = touchStartX.current - touchEndX.current;
      if (Math.abs(delta) > 50 && !isAnimating) { // minimalny dystans do swipe
        if (delta > 0 && current < monuments.length - 1) {
          handleNext();
        } else if (delta < 0 && current > 0) {
          handlePrev();
        }
      }
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  return (
    <div className={styles.container}>
      <div className={styles.sliderWrapper}>
        <div className={styles.sliderOuter}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          <div
            className={styles.slider}
            style={{
              transform: `translateX(-${current * (SLIDE_WIDTH + SLIDE_GAP)}vw)`,
            }}
            ref={sliderRef}
          >
            {monuments.map((monument, idx) => (
              <div
                key={monument.id}
                className={`${styles.slide} ${idx === current ? styles.active : ""}`}
                style={{
                  width: `${SLIDE_WIDTH}vw`,
                  marginRight: `${SLIDE_GAP}vw`
                }}
              >
                <img
                  src={monument.image}
                  alt={monument.title}
                  className={`${styles.image} ${idx === current ? styles.active : ""}`}
                />
                {idx === current && (
                  <button
                    className={styles.sliderButton}
                    onClick={() => navigate(`/${monument.id}`, { state: monument })}
                  >
                    <FontAwesomeIcon icon={faArrowRight} />
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
        <div className={styles.dots}>
          {monuments.map((_, idx) => (
            <span
              key={idx}
              className={`${styles.dot} ${idx === current ? styles.activeDot : ""}`}
              onClick={() => handleDotClick(idx)}
            />
          ))}
        </div>
      </div>
      <div className={styles.sliderFooter}>
        <h2 className={styles.sliderHeader}>Poznaj najciekawsze miejsca miasta.</h2>
        <p className={styles.sliderSubtext}>
          Odkryj historię, lokalne ciekawostki i niezwykły klimat Rzeszowa.
        </p>
        <div className={styles.sliderControls}>
          <button
            className={styles.controlButton}
            onClick={handlePrev}
            disabled={current === 0}
          >
            <FontAwesomeIcon icon={faChevronLeft} /> Poprzednie
          </button>
          <button
            className={styles.controlButton}
            onClick={handleNext}
            disabled={current === monuments.length - 1}
          >
            Następne <FontAwesomeIcon icon={faChevronRight} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;