const dotenv = require('dotenv')
dotenv.config()

module.exports = {
  port: process.env.PORT,
  spotifyClientId: process.env.SPOTIFY_CLIENT_ID,
  spotifyClientSecret: process.env.SPOTIFY_CLIENT_SECRET,
  youtubeApiKey: process.env.YOUTUBE_API_KEY
}