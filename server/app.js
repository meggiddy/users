const cookieSession = require("cookie-session");
const express = require("express");
const cookieParser = require("cookie-parser");
const { v4: uuidv4 } = require("uuid");
const cors = require("cors");

const app = express();
const port = 4000;

// Mock database
const db = {
  sessions: {},
};

app.use(cookieParser());

app.use(cors());

app.get("/user", (req, res) => {
    res.json({ role: 'admin' });

});

app.use(async (req, res, next) => {
  let sessionId = req.cookies.sessionId;

  // Check if session exists
  if (!sessionId || !db.sessions[sessionId]) {
    sessionId = uuidv4();
    res.cookie("sessionId", sessionId);
    db.sessions[sessionId] = {
      role: "no role",
    };
  }

  req.session = db.sessions[sessionId];
  next();
});

app.post("/set-role/:role", (req, res) => {
  if (req.session) {
    req.session.role = req.params.role;
  }
  res.send("Role set");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
