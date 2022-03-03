const express = require("express");
const app = express();
const connectDb = require("./config/connectDb");
const publisher = require("./routes/publisher");
const user = require("./routes/user");
const offers = require("./routes/offers");
app.use(express.json());
app.use("/user", user);
app.use("/publisher", publisher);
app.use("/offers", offers);

connectDb();
const PORT = process.env.PORT || 5000;
app.listen(PORT, (err) =>
    err ? console.log(err) : console.log(`server is running on port ${PORT}`)
);
