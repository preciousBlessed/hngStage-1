const express = require("express");

const firstRoute = express.Router();

firstRoute.get("/", (req, res) => {
  res.json({
    slack_name: req.query.slack_name,
    current_day: new Date().getDay(),
    utc_time: new Date() + 60 * 60 * 1000,
    track: req.query.track,
    github_file_url: "",
    github_repo_url: "",
    status_code: 200,
  });
});

module.exports = firstRoute;
