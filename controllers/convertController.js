const express = require('express')
const router = express.Router()

const {parse, convert} = require('../services')

router.post('/', async (req, res) => {
    let url = req.body.url
    let fromService = req.body.fromService
    let toService = req.body.toService
    try{
        let data = await parse(url, fromService)
        url = await convert(data, toService)
        res.status(200).json(url)
    }catch(err){
        res.status(400).json(err)
        console.error(err)
    }
})

module.exports = router