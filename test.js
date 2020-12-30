require("dotenv").config({ path: '.env'});
const btoa = require("btoa");
const axios = require("axios");
const express = require("express");
const https = require("https");

const app = express();

app.listen(process.env.PORT, () => {
    console.log("Listening to PORT " + process.env.PORT); 
});

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

const season = '2019-2020-regular';
const game = '20200310-TBL-TOR';
const format = 'json';

const URL = "https://api.mysportsfeeds.com/v2.1/pull/nhl/" + season + "/games/" + game + "/boxscore." + format;

axios.get(URL, options)
.then(res => {
    const { data } = res;
    console.log(data);
})
.catch(err => {
    console.log(err);
})