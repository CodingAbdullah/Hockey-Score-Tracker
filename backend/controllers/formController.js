require("dotenv").config({ path: '.env'});
const axios = require("axios");
const btoa = require("btoa");
const https = require("https");

exports.formController = async (req, res) => {
    const { season, sD, awayTeam, seasonType, homeTeam } = req.body;
    const game = sD + "-" + awayTeam + "-" + homeTeam;
    const format = 'json';

    const URL = "https://api.mysportsfeeds.com/v2.1/pull/nhl/" + season + '-' + seasonType + "/games/" + game + "/boxscore." + format;

    const options = {
        method: 'GET',
        headers : {
            'content-type' : 'application/json',
                // ALERT
                // ALERT
                // ALERT
                // AUTHENTICATION can be found at www.mysportsfeed.com. YOU MUST subscribe and purchase 2.x versions in order to make this app work.
            "Authorization": "Basic " + btoa(process.env.API_KEY + ":" + process.env.API_PASSWORD)
        },
        httpsAgent : new https.Agent({ rejectUnauthorized: false })
    }

    const value = await axios.get(URL, options);

    res.json({
        data: value
    })
}