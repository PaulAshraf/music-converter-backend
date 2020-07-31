const {spotifyParse} = require('./spotifyService')
const {getYoutubeUrl} = require('./youtubeService')

const parse = async (url, service) => {
    switch(service){
        case 'spotify':
            let data = await spotifyParse(url)
            return data
        default:
            throw {error: 'Invalid Service'}
    }
} 

const convert = async (data, service) => {
    switch(service){
        case 'youtube':
            let url = await getYoutubeUrl(data)
            return url
        default:
            throw {error: 'Invalid Service'}
    }
}

module.exports = {
    parse, 
    convert
}