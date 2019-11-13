const express = require("express");
const parser = require("body-parser");
const router = require("./routes/index");
const app = express();
app.use(parser.json());
app.use(router);

app.listen(3000, () => console.log("Listening on port 3000"));
