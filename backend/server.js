require("dotenv").config({ path: '.env'});
const express = require("express");
const formRoute = require("../backend/routes/formRoute");

const cors = require("cors");

const app = express();

app.listen(process.env.PORT, () => {
    console.log("Listening to PORT " + process.env.PORT);
});

app.use(express.json());
app.use(cors());
app.use("/form", formRoute);


