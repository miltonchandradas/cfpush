const express = require("express");
const xsenv = require("@sap/xsenv");
const hdbext = require("@sap/hdbext");

let services = xsenv.getServices({ hana: "myawesomehana-db" });

const app = express();
app.use("/hana", hdbext.middleware(services.hana));

const PORT = process.env.PORT || 5000;
console.log("PORT: ", PORT);

app.get("/hana", (req, res, next) => {
  let sql = "SELECT * FROM DUMMY";
  req.db.exec(sql, (err, rows) => {
    if (err) return next(err);

    res.send(rows);
  });
});

app.listen(PORT, console.log(`Listening on ${PORT}`));
