const express = require("express");

const firstRoute = express.Router();

const dow = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
firstRoute.get("/", (req, res) => {
  res.json({
    slack_name: req.query.slack_name || "",
    current_day: dow[new Date().getDay()],
    // utc_time: new Date(new Date().getTime() + 60 * 60 * 1000),
    utc_time: new Date(new Date()),
    track: req.query.track || "",
    github_file_url:
      "https://github.com/preciousBlessed/hngStage-1/blob/master/app.js",
    github_repo_url: "https://github.com/preciousBlessed/hngStage-1",
    status_code: res.statusCode,
  });
});

module.exports = firstRoute;
