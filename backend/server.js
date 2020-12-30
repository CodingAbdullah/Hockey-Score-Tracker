require("dotenv").config({ path: '.env'});
const express = require("express");
const formRoute = require("../backend/routes/formRoute");

const app = express();

app.listen(process.env.PORT, () => {
    console.log("Listening to PORT " + process.env.PORT);
});

app.use("/form", formRoute);


