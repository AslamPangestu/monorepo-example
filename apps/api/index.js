const express = require("express");
const app = express();
const port = process.env.PORT || 8080;

app.get("/api/v1/blogs", (req, res) => {
  res.send("Ini Blog");
});

app.get("/api/v1/profile", (req, res) => {
  res.send("Ini Profile");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
