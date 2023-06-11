const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const cors = require("cors");

const errorHandling = require("./middleware/errorHandling");

const app = express();

/* Middleware  */
app.use(bodyParser.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));

/**
 *  Middleware level route
 */
const routesApiV1 = require("./routes/v1routes");

app.use("/api", routesApiV1);

/**
 * Midleware level aplication
 */

app
  .route("*")
  .get((req, res) => {
    res.send("you're inside fallback route");
  })
  .post((req, res) => {
    res.send("you're inside fallback route");
  })
  .put((req, res) => {
    res.send("you're inside fallback route");
  })
  .delete((req, res) => {
    res.send("you're inside fallback route");
  });
/**
 * error handling
 */
app.use(errorHandling);

app.listen(3000, () => {
  console.log("application listen on http://localhost:3000");
});
