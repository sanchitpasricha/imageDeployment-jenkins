const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.status(200).json({
    status: "Success",
    message: "You hit the server",
  });
});

app.listen(3000, () => {
  console.log("Server listening at 3000 port");
});
