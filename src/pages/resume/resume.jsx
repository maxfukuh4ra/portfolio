import { useState } from "react";
import styles from "./resume.module.css";

const Resume = () => {
    const [zoom, setZoom] = useState(100);

    const handleDownload = () => {
        const link = document.createElement("a");
        link.href = "/portfolio/resume.pdf";
        link.download = "Max_Fukuhara_Resume.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const handleZoomIn = () => {
        setZoom((prev) => Math.min(prev + 25, 200));
    };

    const handleZoomOut = () => {
        setZoom((prev) => Math.max(prev - 25, 50));
    };

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <div className={styles.headerLeft}>
                    <h1 className={styles.title}>resume</h1>
                    <p className={styles.subtitle}>download or view my resume</p>
                </div>
                <div className={styles.headerRight}>
                    <div className={styles.zoomControls}>
                        <button
                            className={styles.zoomButton}
                            onClick={handleZoomOut}
                            disabled={zoom <= 50}
                        >
                            -
                        </button>
                        <span className={styles.zoomLevel}>{zoom}%</span>
                        <button
                            className={styles.zoomButton}
                            onClick={handleZoomIn}
                            disabled={zoom >= 200}
                        >
                            +
                        </button>
                    </div>
                </div>
            </div>

            <div className={styles.viewerContainer}>
                <div className={styles.pdfWrapper} style={{ zoom: `${zoom}%` }}>
                    <iframe
                        src="/portfolio/resume.pdf"
                        className={styles.pdfViewer}
                        title="Resume PDF"
                        type="application/pdf"
                    />
                </div>
            </div>

            <div className={styles.footer}>
                <button className={styles.downloadButton} onClick={handleDownload}>
                    <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                        <polyline points="7 10 12 15 17 10"></polyline>
                        <line x1="12" y1="15" x2="12" y2="3"></line>
                    </svg>
                    download pdf
                </button>
            </div>
        </div>
    );
};

export default Resume;

