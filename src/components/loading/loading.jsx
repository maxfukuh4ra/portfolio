import { useState, useEffect } from 'react';
import styles from './loading.module.css';

const Loading = ({ onComplete }) => {
    const [progress, setProgress] = useState(0);
    const [isVisible, setIsVisible] = useState(true);
    const [isFading, setIsFading] = useState(false);

    useEffect(() => {
        const duration = 5000; // 5 seconds
        const interval = 50; // Update every 50ms for smooth animation
        const increment = (interval / duration) * 100;

        const timer = setInterval(() => {
            setProgress(prev => {
                if (prev >= 100) {
                    clearInterval(timer);
                    // Start fade out animation
                    setIsFading(true);

                    // Wait for fade out animation to complete, then hide
                    setTimeout(() => {
                        setIsVisible(false);
                        onComplete();
                    }, 800); // Match the fadeOut animation duration
                    return 100;
                }
                return Math.min(prev + increment, 100);
            });
        }, interval);

        return () => clearInterval(timer);
    }, [onComplete]);

    if (!isVisible) return null;

    return (
        <div className={`${styles.loadingOverlay} ${isFading ? styles.fadeOut : ''}`}>
            <div className={styles.loadingContainer}>
                <div className={styles.progressCircle}>
                    <svg className={styles.svg} viewBox="0 0 120 120">
                        {/* Background circle */}
                        <circle
                            className={styles.backgroundCircle}
                            cx="60"
                            cy="60"
                            r="54"
                            strokeWidth="8"
                        />
                        {/* Progress circle */}
                        <circle
                            className={styles.progressFill}
                            cx="60"
                            cy="60"
                            r="54"
                            strokeWidth="8"
                            strokeDasharray={`${2 * Math.PI * 54}`}
                            strokeDashoffset={`${2 * Math.PI * 54 * (1 - progress / 100)}`}
                            transform="rotate(-90 60 60)"
                        />
                    </svg>
                    <div className={styles.percentage}>{Math.round(progress)}%</div>
                </div>
                <div className={styles.loadingText}>Loading...</div>
            </div>
        </div>
    );
};

export default Loading;
