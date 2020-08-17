const express = require("express");
const cors = require('cors');
const path = require("path");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
app.use(cors());
const PORT = process.env.PORT || 8000;

// Configure body parsing for AJAX requests
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use([
  express.urlencoded({ extended: true }),
  express.json()
]);


// Add routes, both API and view
app.use(routes);

// Connect to the Mongo DB
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/AddedDB",
  {
    useCreateIndex: true,
    useNewUrlParser: true
  }
);


app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});


app.listen(PORT, () => {
  console.log("Server server now on port", PORT, "React App on Port 3000");
});