const express = require("express");

const port = 3000;

const app = express();

app.get("/", (req, res) => {
  res(console.log("title"));
});

app.listen(port, () => {
  console.log(`Server has been started on port ${port}`);
});
