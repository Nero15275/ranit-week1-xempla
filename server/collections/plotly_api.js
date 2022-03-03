const express = require('express')
const axios = require('axios')

const router = express.Router()
router.get(`/plotgenerate`, async (req, res) => {
    console.log("ese ge6i");
    const apiurl = "https://datausa.io/api/data?drilldowns=Nation&measures=Population"
    const apiurl2 = " https://data.cityofnewyork.us/resource/bqiq-cu78.json"

    try {
        const response = await axios.get(apiurl)
        res.status(200).json(response.data)
    } catch (error) {
        res.status(500).json("service unavalable")

    }
})
router.get(`/plotgenerate2`, async (req, res) => {
    console.log("ese ge6i");

    const apiurl = " https://data.cityofnewyork.us/resource/bqiq-cu78.json"

    try {
        const response = await axios.get(apiurl)
        res.status(200).json(response.data)
    } catch (error) {
        res.status(500).json("service unavalable")

    }
})

module.exports = router