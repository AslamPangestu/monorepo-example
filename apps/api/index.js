const express = require("express");
const app = express();
const { blogData, profileData } = require("./data");

const PORT = process.env.PORT || 8080;

app.get("/api/v1/blogs", (req, res) => {
  res.json({
    status: true,
    message: "Berhasil mendapat data blog",
    data: blogData,
  });
});

app.get("/api/v1/profile", (req, res) => {
  res.json({
    status: true,
    message: "Berhasil mendapat data profile",
    data: profileData,
  });
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
