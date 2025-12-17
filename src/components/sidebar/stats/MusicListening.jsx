import React, { useState, useEffect } from "react";
import styles from "./statBox.module.css";
import { sidebarConfig } from "../../../config/sidebarConfig";

const MusicListening = () => {
    const [track, setTrack] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const lastfmUsername = sidebarConfig.music.lastfm?.username;
        const lastfmApiKey = sidebarConfig.music.lastfm?.apiKey;

        if (lastfmUsername && lastfmApiKey &&
            lastfmUsername !== "your-lastfm-username" &&
            lastfmApiKey !== "your-lastfm-api-key") {
            const fetchLastFm = async () => {
                try {
                    const response = await fetch(
                        `https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=${lastfmUsername}&api_key=${lastfmApiKey}&format=json&limit=1`
                    );

                    if (!response.ok) {
                        throw new Error("Failed to fetch music data");
                    }

                    const data = await response.json();

                    if (data.recenttracks?.track) {
                        const recentTrack = Array.isArray(data.recenttracks.track)
                            ? data.recenttracks.track[0]
                            : data.recenttracks.track;

                        // Get album artwork - Last.fm provides images in different sizes
                        // We want the largest one (extralarge or large)
                        const images = recentTrack.image || [];
                        let albumArt = null;

                        // Try to get extralarge first, then large, then medium
                        const extralarge = images.find(img => img.size === "extralarge");
                        const large = images.find(img => img.size === "large");
                        const medium = images.find(img => img.size === "medium");

                        albumArt = extralarge?.["#text"] || large?.["#text"] || medium?.["#text"] || null;

                        if (recentTrack["@attr"]?.nowplaying === "true") {
                            setTrack({
                                artist: recentTrack.artist["#text"] || recentTrack.artist,
                                name: recentTrack.name,
                                album: recentTrack.album?.["#text"] || recentTrack.album || null,
                                artwork: albumArt,
                                isPlaying: true,
                            });
                        } else {
                            setTrack({
                                artist: recentTrack.artist["#text"] || recentTrack.artist,
                                name: recentTrack.name,
                                album: recentTrack.album?.["#text"] || recentTrack.album || null,
                                artwork: albumArt,
                                isPlaying: false,
                            });
                        }
                    } else {
                        throw new Error("No track data found");
                    }
                } catch (err) {
                    console.error("Error fetching Last.fm data:", err);
                    setError("Unable to load");
                } finally {
                    setLoading(false);
                }
            };

            fetchLastFm();
            const interval = setInterval(fetchLastFm, 30000);
            return () => clearInterval(interval);
        } else {
            // No music service configured
            setLoading(false);
            setError("configure music api");
        }
    }, []);

    return (
        <div className={styles.statBox}>
            <h3 className={styles.statTitle}>listening</h3>
            {loading ? (
                <div className={styles.loading}>loading...</div>
            ) : error ? (
                <div className={styles.error}>unable to load</div>
            ) : track ? (
                <>
                    <div className={styles.musicInfo}>
                        {track.artwork && (
                            <div className={styles.albumArtContainer}>
                                <img
                                    src={track.artwork}
                                    alt={`${track.name} by ${track.artist}`}
                                    className={styles.albumArt}
                                />
                                {track.isPlaying && (
                                    <div className={styles.playingOverlay}>
                                        <div className={styles.playingIndicator}>▶</div>
                                    </div>
                                )}
                            </div>
                        )}
                        {track.isPlaying && !track.artwork && (
                            <div className={styles.playingIndicator}>▶</div>
                        )}
                        <div className={styles.trackName}>{track.name}</div>
                        <div className={styles.artistName}>{track.artist}</div>
                    </div>
                </>
            ) : null}
        </div>
    );
};

export default MusicListening;

