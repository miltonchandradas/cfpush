const express = require("express");

const app = express();

const PORT = process.env.PORT || 5000;
console.log("PORT: ", PORT);


app.get("/hello", (req, res) => res.send("Hello from express..."));

app.listen(PORT, console.log(`Listening on ${PORT}`));
