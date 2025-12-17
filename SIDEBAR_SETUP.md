# Sidebar Setup Instructions

The persistent sidebar has been added to your portfolio! Here's how to configure each stat box:

## 1. LeetCode Stats

1. Open `src/config/sidebarConfig.js`
2. Replace `"your-leetcode-username"` with your actual LeetCode username
3. The component will automatically fetch your stats from LeetCode's GraphQL API

## 2. GitHub Stats

1. Open `src/config/sidebarConfig.js`
2. Replace `"your-github-username"` with your actual GitHub username
3. The component uses GitHub's public API (no authentication needed for public repos)

## 3. Music Listening (Last.fm)

To show what you're currently listening to:

1. **Create a Last.fm account** (if you don't have one): https://www.last.fm/
2. **Get an API key**:
   - Go to https://www.last.fm/api/account/create
   - Fill out the form to create an API account
   - Copy your API key
3. **Set up scrobbling**:
   - Install a Last.fm scrobbler for your music player
   - For Apple Music on macOS: Use [Last.fm Scrobbler](https://apps.apple.com/app/lastfm-scrobbler/id1533803551) or [QuietScrob](https://github.com/quietbits/QuietScrob)
   - For iOS: Use [Marvis Pro](https://apps.apple.com/app/marvis-pro/id1447768809) or similar apps
4. **Configure in code**:
   - Open `src/config/sidebarConfig.js`
   - Replace `"your-lastfm-username"` with your Last.fm username
   - Replace `"your-lastfm-api-key"` with your API key

**Note**: The music box will show your most recent track. If you're currently playing music and scrobbling is active, it will show a "▶" indicator.

## 4. Google Calendar Integration

This requires more setup as it needs OAuth 2.0 authentication:

### Option A: Backend API Route (Recommended)

1. **Set up Google Cloud Project**:
   - Go to https://console.cloud.google.com/
   - Create a new project or select existing one
   - Enable Google Calendar API
   - Create OAuth 2.0 credentials (Web application)
   - Add your domain to authorized redirect URIs

2. **Create a backend endpoint** (e.g., using Vercel Serverless Functions, Netlify Functions, or Express):
   - This endpoint will handle OAuth flow and refresh tokens
   - Store refresh tokens securely
   - Expose an endpoint like `/api/calendar/current-event`

3. **Update the CalendarStatus component**:
   - Modify `src/components/sidebar/stats/CalendarStatus.jsx`
   - Replace the placeholder fetch with your API endpoint
   - Handle authentication flow

### Option B: Client-Side Only (Limited)

For a simpler approach, you could:
- Use Google Calendar's public iCal feed (if your calendar is public)
- Or manually update a JSON file with your current status

### Quick Start (Placeholder)

For now, the calendar box shows a placeholder. You can:
1. Set `enabled: true` in `sidebarConfig.js` when ready
2. Follow the setup above to implement the full integration

## Configuration File

All configuration is in: `src/config/sidebarConfig.js`

```javascript
export const sidebarConfig = {
  leetcode: {
    username: "your-username-here",
  },
  github: {
    username: "your-username-here",
  },
  music: {
    lastfm: {
      username: "your-username-here",
      apiKey: "your-api-key-here",
    },
  },
  calendar: {
    enabled: false,
  },
};
```

## Styling

The sidebar:
- Appears on the left side of all pages
- Has a fixed width of 20rem
- Is hidden on mobile/tablet (screens < 1024px)
- Uses your existing theme variables for colors
- Has a prominent blue border on the right edge

You can customize the styling in:
- `src/components/sidebar/sidebar.module.css` (sidebar container)
- `src/components/sidebar/stats/statBox.module.css` (individual stat boxes)

## Troubleshooting

- **LeetCode stats not loading**: Make sure your username is correct and your profile is public
- **GitHub stats not loading**: Check that your GitHub username is correct
- **Music not showing**: Ensure Last.fm scrobbling is active and you've played music recently
- **Calendar not working**: Follow the Google Calendar API setup instructions above

