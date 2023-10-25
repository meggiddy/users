const express = require("express");
const app = express();
const port = 4000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/assignRole", (req, res) => {
  const role = req.body.role;

  // Storing role in the session
  req.session.role = role;

  res.sendStatus(200);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
