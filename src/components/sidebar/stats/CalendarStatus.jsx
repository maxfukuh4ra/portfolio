import React, { useState, useEffect } from "react";
import styles from "./statBox.module.css";

const CalendarStatus = () => {
    const [event, setEvent] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Note: This requires Google Calendar API setup
        // For now, this is a placeholder that you'll need to configure
        // with your Google Calendar API credentials

        const fetchCalendarEvent = async () => {
            try {
                // This is a placeholder - you'll need to implement OAuth and API calls
                // Example structure:
                // const response = await fetch('/api/calendar/current-event', {
                //   headers: { Authorization: `Bearer ${token}` }
                // });

                // For now, showing a placeholder
                setEvent({
                    title: "configure calendar api",
                    time: "see setup instructions",
                    isCurrent: false,
                });

                // Uncomment and configure when you have Google Calendar API set up:
                /*
                const now = new Date();
                const response = await fetch(
                  `https://www.googleapis.com/calendar/v3/calendars/primary/events?` +
                  `timeMin=${now.toISOString()}&maxResults=1&singleEvents=true&orderBy=startTime`,
                  {
                    headers: {
                      Authorization: `Bearer ${accessToken}`,
                    },
                  }
                );
                
                if (!response.ok) {
                  throw new Error("Failed to fetch calendar");
                }
                
                const data = await response.json();
                if (data.items && data.items.length > 0) {
                  const currentEvent = data.items[0];
                  const startTime = new Date(currentEvent.start.dateTime || currentEvent.start.date);
                  const endTime = new Date(currentEvent.end.dateTime || currentEvent.end.date);
                  const isCurrent = now >= startTime && now <= endTime;
                  
                  setEvent({
                    title: currentEvent.summary,
                    time: `${startTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })} - ${endTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`,
                    isCurrent,
                  });
                } else {
                  setEvent({
                    title: "no upcoming events",
                    time: "",
                    isCurrent: false,
                  });
                }
                */
            } catch (err) {
                console.error("Error fetching calendar:", err);
                setError(err.message);
                setEvent({
                    title: "unable to load",
                    time: "",
                    isCurrent: false,
                });
            } finally {
                setLoading(false);
            }
        };

        fetchCalendarEvent();

        // Poll every 5 minutes for updates
        const interval = setInterval(fetchCalendarEvent, 300000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className={styles.statBox}>
            <h3 className={styles.statTitle}>calendar</h3>
            {loading ? (
                <div className={styles.loading}>loading...</div>
            ) : error ? (
                <div className={styles.error}>unable to load</div>
            ) : event ? (
                <>
                    {event.isCurrent && (
                        <div className={styles.currentBadge}>now</div>
                    )}
                    <div className={styles.eventTitle}>{event.title}</div>
                    {event.time && (
                        <div className={styles.eventTime}>{event.time}</div>
                    )}
                </>
            ) : null}
        </div>
    );
};

export default CalendarStatus;

