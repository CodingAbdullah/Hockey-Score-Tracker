require("dotenv").config({ path: '.env'});
const axios = require("axios");
const btoa = require("btoa");
const https = require("https");

exports.formController = (req, res) => {
    const { season, seasonDate, awayTeam, seasonType, homeTeam } = req.body;
    const game = seasonDate + "-" + awayTeam + "-" + homeTeam;
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
            "Authorization":"Basic " + btoa(process.env.API_KEY + ":" + process.env.API_PASSWORD)
        },
        httpsAgent : new https.Agent({ rejectUnauthorized: false })
    }

    axios.get(URL, options)
    .then(res => {
        const { data } = res;
        console.log(data);
    })
    .catch(err => {
        console.log(err);
    });
}