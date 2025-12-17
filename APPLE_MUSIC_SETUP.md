# Apple Music API Setup Guide

The Apple Music API requires a backend service because it needs:
1. **Developer Token** - Generated from your Apple Developer account
2. **User Token** - Requires user authorization (your authorization as the portfolio owner)

## Why a Backend is Needed

The Apple Music API endpoint `GET /v1/me/recent/played/tracks` requires both tokens in the request headers. For security reasons, you cannot store these tokens in your frontend code. You need a backend endpoint that:
- Stores your developer token securely
- Stores your user token (obtained through authorization)
- Makes the API calls to Apple Music
- Returns the current track to your frontend

## Setup Steps

### 1. Apple Developer Account Setup

1. **Create a Media Identifier:**
   - Go to [Apple Developer Portal](https://developer.apple.com/account/)
   - Navigate to Certificates, Identifiers & Profiles
   - Create a new Media Identifier
   - Note the Team ID and Key ID

2. **Generate a Private Key:**
   - In the same section, create a private key
   - Download the `.p8` file (you can only download it once!)
   - Note the Key ID

3. **Generate Developer Token:**
   - Use a tool like [this one](https://github.com/mikebrady/shazam-auth) or write a script
   - You'll need: Team ID, Key ID, and the private key file
   - This token expires, so you'll need to regenerate it periodically (or automate it)

### 2. Get User Token

The user token requires authorization. You have a few options:

**Option A: Use MusicKit JS (Browser-based)**
- Users can authorize in the browser
- But this shows the visitor's music, not yours

**Option B: Native App Authorization (Recommended for Portfolio)**
- Create a simple macOS/iOS app or script
- Use `SKCloudServiceController` to get your user token
- Store this token on your backend

**Option C: Use a Service**
- Some services provide Apple Music integration
- Or use a script that runs periodically to get your token

### 3. Create Backend Endpoint

Create an API endpoint (e.g., using Vercel Serverless Functions, Netlify Functions, or Express):

**Example (Vercel Serverless Function):**

```javascript
// api/apple-music/now-playing.js
export default async function handler(req, res) {
  const developerToken = process.env.APPLE_MUSIC_DEV_TOKEN;
  const userToken = process.env.APPLE_MUSIC_USER_TOKEN;

  if (!developerToken || !userToken) {
    return res.status(500).json({ error: 'Tokens not configured' });
  }

  try {
    const response = await fetch(
      'https://api.music.apple.com/v1/me/recent/played/tracks?limit=1',
      {
        headers: {
          'Authorization': `Bearer ${developerToken}`,
          'Music-User-Token': userToken,
        },
      }
    );

    if (!response.ok) {
      throw new Error(`Apple Music API error: ${response.status}`);
    }

    const data = await response.json();
    
    // Return the most recent track
    if (data.data && data.data.length > 0) {
      const track = data.data[0];
      return res.json({
        name: track.attributes.name,
        artist: track.attributes.artistName,
        album: track.attributes.albumName,
        artwork: track.attributes.artwork?.url,
      });
    }

    return res.json({ error: 'No recent tracks' });
  } catch (error) {
    console.error('Apple Music API error:', error);
    return res.status(500).json({ error: error.message });
  }
}
```

**Environment Variables:**
- `APPLE_MUSIC_DEV_TOKEN` - Your developer token
- `APPLE_MUSIC_USER_TOKEN` - Your user token

### 4. Update Frontend Config

In `src/config/sidebarConfig.js`:

```javascript
music: {
  appleMusic: {
    enabled: true,
    apiEndpoint: "/api/apple-music/now-playing", // Your backend endpoint
  },
}
```

## Alternative: Simpler Solutions

If setting up the full Apple Music API is too complex, consider:

1. **Last.fm** - Much simpler, just requires username and API key
2. **Spotify Web API** - Also simpler, uses OAuth but can be done client-side
3. **Manual Updates** - Update a JSON file periodically with your current track

## References

- [Apple Music API Documentation](https://developer.apple.com/documentation/applemusicapi)
- [Get Recent Played Tracks Endpoint](https://developer.apple.com/documentation/applemusicapi/get-v1-me-recent-played-tracks)
- [MusicKit JS Documentation](https://developer.apple.com/documentation/musickitjs)

