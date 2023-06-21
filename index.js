const express = require("express");
const upload = require("./services/upload");
const bodyParser = require("body-parser");
const app = express();
const port = 8080;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.get("/", (req, res) => {
  res.send("Hello World");
});

app.post("/upload", upload.single("file"), (req, res) => {
  console.log(req);
  res.json({ message: "File Uploaded Successfully" });
});

app.post("/divide", (req, res) => {
  console.log(req.body);
  res.send("Gotcha");
});

app.listen(port, () => {
  console.log(`Server is running on localhost:${port}`);
});
