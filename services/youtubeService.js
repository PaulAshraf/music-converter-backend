const axios = require('axios')
const {youtubeApiKey} = require('../config')

const buildUrl = (search) => {
    let url = `https://www.googleapis.com/youtube/v3/search?part=snippet&key=${youtubeApiKey}&q=${search}&order=viewCount`
    return url
}

const youtubeServices = {

    getYoutubeUrl: async (data) => {
        let apiUrl = buildUrl(data.name)
        try{
            let res = await axios.get(apiUrl)
            let id = res.data.items[0].id.videoId
            let url = `https://www.youtube.com/watch?v=${id}`
            return {track: data, url: url}
        }
        catch(err){
            console.error(err)
        }

    }
}

module.exports = youtubeServices