require("dotenv").config({ path: '.env' });
const express = require("express");
const formRoute = require("../backend/routes/formRoute");

const cors = require("cors");
const app = express();

app.listen(process.env.PORT, () => {
    console.log("Listening to PORT " + process.env.PORT);
});

// Set up req-res structure
app.use(express.json({ extended: false }));
app.use(express.urlencoded({ extended: false }));

app.use(cors());
app.use("/", formRoute);


/*
const express = require("express");
const request = require("request");
const bodyParser = require("body-parser");
const btoa = require('btoa');

const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
app.set('view engine', 'ejs'); // Use EJS to render HTML elements with Javascript.

app.listen(3000, () => {
    console.log("Listening to port 3000"); // Set up a command line log to make sure the server is up and running
});

app.get("/", (req, res) => {
    res.render(__dirname + "/nhl"); // Routing the nhl form displat page
});

app.get("/result", (req, res) => {
    const awayAbbreviated = req.query.away.substring(0, 3);
    const homeAbbreviated = req.query.home.substring(0, 3);

    const game = req.query.year + "" + req.query.month + "" + req.query.day + "-" + awayAbbreviated + "-" + homeAbbreviated; 
    let season = req.query.startYear + "-" + req.query.endYear + "-" + req.query.season;

    if (req.query.season === "playoff"){
        season = req.query.endYear + "-" + req.query.season;
    }
    
    // Api call for retrieving game information
    const options = {
        url: "https://api.mysportsfeeds.com/v2.0/pull/nhl/" + season + "/games/" + game + "/boxscore.json",
        method: "GET",
        headers : {
            // ALERT
            // ALERT
            // ALERT
            // AUTHENTICATION can be found at www.mysportsfeed.com. YOU MUST subscribe and purchase 2.x versions in order to make this app work.
            "Authorization":"Basic " + btoa("API KEY:PASSWORD") 
        }
    };

    request(options, (error, response, body) => {
            const bodyObject = JSON.parse(body); // Convert the JSON response into a JavaScript object

            const month = ["January", "February", "March", "April", "May", "June", "July", "August", 
        "September", "October", "November", "December"]; // Set date values using this months array

            // Set values as variables to be rendered in the results HTML page, as a response by the server 

            const date = month[req.query.month - 1] + " " + req.query.day + ", " + req.query.year; // Set date heading
            const away = req.query.away.substring(6); // Set the away team heading
            const home = req.query.home.substring(6); // Set the home team heading

            const aScore = bodyObject.scoring.awayScoreTotal; // The total score of the away team
            const hScore = bodyObject.scoring.homeScoreTotal; // The total score of the home team
            const periodsOfPlay = bodyObject.scoring.periods; // The number of periods played in the game
            const aImage = awayAbbreviated.toLowerCase(); // Away team image to be rendered on the response page
            const hImage = homeAbbreviated.toLowerCase(); // Home team image to be rendered on the response page

            res.render("result", {completeDate: date, awayTeam: away, homeTeam: home, awayScore: aScore
            , homeScore: hScore, periods: periodsOfPlay, awayTeamImage: aImage, homeTeamImage: hImage, typeOfSeason: req.query.season}); // Pass all the variable values using the render() method and pass as a parameter, an object
    });
});
*/