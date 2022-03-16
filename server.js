const express = require("express");
const app = express();
const connectDb = require("./config/connectDb");
const publisher = require("./routes/publisher");
const user = require("./routes/user");

// var cors = require("cors");
// const fileUpload = require("express-fileupload");
// const morgan = require("morgan");

const offers = require("./routes/offers");
app.use(express.json());
app.use("/user", user);
app.use("/publisher", publisher);
app.use("/offers", offers);
// app.use("/UserFile", files);
// app.use(morgan("dev"));
// app.use(
//     fileUpload({
//         createParentPath: true,
//     })
// );

// app.use(express.urlencoded({ extended: true }));
// app.use(cors());

// app.post("/upload", (req, res) => {
//     // use modules such as express-fileupload, Multer, Busboy

//     setTimeout(() => {
//         console.log("file uploaded");
//         return res.status(200).json({ result: true, msg: "file uploaded" });
//     }, 3000);
// });

// app.post("/file", async (req, res) => {
//     try {
//         if (!req.files) {
//             res.send({
//                 status: false,
//                 message: "No files",
//             });
//         } else {
//             const { file } = req.files;

//             file.mv("./uploads/" + file.name);

//             res.send({
//                 status: true,
//                 message: "File is sended",
//             });
//         }
//     } catch (e) {
//         res.status(500).send(e);
//     }
// });

connectDb();

const PORT = process.env.PORT || 5000;
app.listen(PORT, (err) =>
    err ? console.log(err) : console.log(`server is running on port ${PORT}`)
);
