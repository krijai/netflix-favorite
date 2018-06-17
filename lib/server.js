const express = require("express");

const app = express();
const PORT = 8080;

app.get("/hello", (req, res) => {
  res.status(200).json({
    message: 'ok' 
  });
});

app.post("/login", (req, res) => {
  res.status(200).json( { name: 'admin', email: 'admin@netflix-favorite.com' });
});

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});