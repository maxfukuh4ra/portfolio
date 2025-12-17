import React, { useState, useEffect } from "react";
import styles from "./statBox.module.css";
import { sidebarConfig } from "../../../config/sidebarConfig";

const MusicListening = () => {
  const [track, setTrack] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const username = sidebarConfig.music.lastfm.username;
    const apiKey = sidebarConfig.music.lastfm.apiKey;
    
    // Skip if not configured
    if (!username || username === "your-lastfm-username" || !apiKey || apiKey === "your-lastfm-api-key") {
      setLoading(false);
      setError("Please configure Last.fm in src/config/sidebarConfig.js");
      return;
    }
    
    const fetchNowPlaying = async () => {
      try {
        const response = await fetch(
          `https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=${username}&api_key=${apiKey}&format=json&limit=1`
        );

        if (!response.ok) {
          throw new Error("Failed to fetch music data");
        }

        const data = await response.json();
        
        if (data.recenttracks?.track) {
          const recentTrack = Array.isArray(data.recenttracks.track) 
            ? data.recenttracks.track[0] 
            : data.recenttracks.track;
          
          // Check if currently playing (has @attr.nowplaying)
          if (recentTrack["@attr"]?.nowplaying === "true") {
            setTrack({
              artist: recentTrack.artist["#text"] || recentTrack.artist,
              name: recentTrack.name,
              isPlaying: true,
            });
          } else {
            // Show most recent track
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
        console.error("Error fetching music data:", err);
        setError(err.message);
        // Set fallback for development
        setTrack({
          artist: "not scrobbling",
          name: "enable last.fm scrobbling",
          isPlaying: false,
        });
      } finally {
        setLoading(false);
      }
    };

    fetchNowPlaying();
    
    // Poll every 30 seconds for updates
    const interval = setInterval(fetchNowPlaying, 30000);
    
    return () => clearInterval(interval);
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

