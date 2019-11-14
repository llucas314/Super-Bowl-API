const express = require("express");
const parser = require("body-parser");
const router = require("./lib/routes/index");
const app = express();
const cors = require("cors");
app.use(cors());
app.use(parser.json());
app.use(router);

app.set("port", process.env.PORT || 8080);

app.listen(app.get("port"), () => {
  console.log(`✅ PORT: ${app.get("port")} 🌟`);
});
