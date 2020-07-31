const axios = require('axios')
const qs = require('qs')
const {spotifyClientId, spotifyClientSecret} = require('../config')

const getClientToken = () => {
    let string = `${spotifyClientId}:${spotifyClientSecret}`
    let base64 = `Basic ${Buffer.from(string).toString('base64')}`
    return base64
}

const getAccessToken =  async () => {
    try{
        let res = await axios.post('https://accounts.spotify.com/api/token',qs.stringify({
            'grant_type':'client_credentials',
        }),{
            headers: {
                Authorization: getClientToken(),
                'Content-Type':'application/x-www-form-urlencoded',
            }
        })
        return res.data.access_token
    }
    catch(err){
        return
    }

}

const parseUrl = (url) => {
    return url.split('/')[4]
}

const spotifyServices = {

    spotifyParse: async (url) => {
        let accessToken = await getAccessToken()
        if(!accessToken){
            throw {error: 'Error getting acces token'}
        }
        
        let id = parseUrl(url)

        try{
            let res = await axios.get(`https://api.spotify.com/v1/tracks/${id}`,{
                headers: {
                    Authorization: `Bearer ${accessToken}`
                }
            })
            let track = {
                name: res.data.name,
                artist: res.data.artists[0].name,
                album: res.data.album.name,
            }
            return track
        }
        catch(err){
            throw {error: 'Error getting track'}
        }
    }

}

module.exports = spotifyServices