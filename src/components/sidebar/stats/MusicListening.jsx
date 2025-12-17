import React, { useState, useEffect } from "react";
import styles from "./statBox.module.css";
import { sidebarConfig } from "../../../config/sidebarConfig";

const MusicListening = () => {
    const [track, setTrack] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const appleMusicEnabled = sidebarConfig.music.appleMusic?.enabled;
        const appleMusicEndpoint = sidebarConfig.music.appleMusic?.apiEndpoint;
        const lastfmUsername = sidebarConfig.music.lastfm?.username;
        const lastfmApiKey = sidebarConfig.music.lastfm?.apiKey;

        // Try Apple Music first if enabled
        if (appleMusicEnabled && appleMusicEndpoint) {
            const fetchAppleMusic = async () => {
                try {
                    const response = await fetch(appleMusicEndpoint);

                    if (!response.ok) {
                        throw new Error("Failed to fetch Apple Music data");
                    }

                    const data = await response.json();

                    if (data.attributes) {
                        // Apple Music API response format
                        setTrack({
                            artist: data.attributes.artistName || "Unknown Artist",
                            name: data.attributes.name || "Unknown Track",
                            isPlaying: data.attributes.playParams?.isLibrary || false,
                        });
                    } else if (data.data?.[0]) {
                        // Alternative response format
                        const trackData = data.data[0];
                        setTrack({
                            artist: trackData.attributes?.artistName || "Unknown Artist",
                            name: trackData.attributes?.name || "Unknown Track",
                            isPlaying: true, // Recent tracks are typically playing
                        });
                    } else {
                        throw new Error("No track data in response");
                    }
                } catch (err) {
                    console.error("Error fetching Apple Music:", err);
                    setError("Unable to load Apple Music");
                } finally {
                    setLoading(false);
                }
            };

            fetchAppleMusic();
            const interval = setInterval(fetchAppleMusic, 30000);
            return () => clearInterval(interval);
        }
        // Fallback to Last.fm if configured
        else if (lastfmUsername && lastfmApiKey && 
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

                        if (recentTrack["@attr"]?.nowplaying === "true") {
                            setTrack({
                                artist: recentTrack.artist["#text"] || recentTrack.artist,
                                name: recentTrack.name,
                                isPlaying: true,
                            });
                        } else {
                            setTrack({
                                artist: recentTrack.artist["#text"] || recentTrack.artist,
                                name: recentTrack.name,
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
                        {track.isPlaying && (
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

