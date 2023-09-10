const express = require("express"); // importing express
const firstRoute = require("./routes/router"); //importing my router

const app = express();

const port = process.env.PORT || 3000; //set port

//middleware
app.use(express.json()); //enable parsing json
app.use("/", firstRoute);

//listen
app.listen(port, (err) => {
  if (err) {
    console.log(err);
  }
  console.log(`Web connection process set up and listening at port ${port}`);
});
