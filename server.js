const express = require("express");
const app = express();
const connectDb = require("./config/connectDb");
const publisher = require("./routes/publisher");
const user = require("./routes/user");
const post = require("./routes/post");

const offers = require("./routes/offers");

app.use(express.json());
app.use("/user", user);
app.use("/publisher", publisher);
app.use("/offers", offers);
app.use("/public", express.static("public"));
app.use("/posts", post);

app.set("view engine", "ejs");
const path = require("path");
const multer = require("multer");
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "uploads");
    },
    filename: (req, file, cb) => {
        console.log(file);
        cb(null, Date.now() + path.extname(file.originalname));
    },
});
const upload = multer({ storage: storage });
app.get("/getUpload", (req, res) => {
    res.render(" Upload");
});

app.post("/upload", upload.single("image"), (req, res) => {
    res.send("Image Uploaded");
});

connectDb();

const PORT = process.env.PORT || 5000;
app.listen(PORT, (err) =>
    err ? console.log(err) : console.log(`server is running on port ${PORT}`)
);
