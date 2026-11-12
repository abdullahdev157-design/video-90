const express = require("express");
const app = express();
const port = 3000;

app.use((req, res, next) => {
  res.send("HelloMiddle War!");
  console.log("Middle Ware ho");
  next();
});
app.get("/", (req, res) => {
  res.send("Hello Worhhld!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
