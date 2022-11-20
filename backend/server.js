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


