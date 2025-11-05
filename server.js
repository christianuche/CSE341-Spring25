const express = require("express");
const mongodb = require("./data/database");
require("dotenv").config(); // ✅ Make sure environment variables load

const app = express();
const port = process.env.PORT || 3000; // ✅ Define the port

app.use("/", require("./routes")); // ✅ Route handling

mongodb.initDb((err) => {
  if (err) {
    console.log(err);
  } else {
    // ✅ Use lowercase `port` here
    app.listen(port, () => {
      console.log(`Database is listening and Node is running on port ${port}`);
    });
  }
});
