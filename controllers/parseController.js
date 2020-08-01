const express = require('express')
const router = express.Router()

const {parse} = require('../services')

router.get('/', async (req, res) => {
    let url = req.body.url
    let service = req.body.service
    try{
        let data = await parse(url, service)
        res.status(200).json(data)
    }catch(err){
        res.status(400).json(err)
        console.error(err)
    }

})

module.exports = router