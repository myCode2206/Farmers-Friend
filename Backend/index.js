const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.status(200).send({ msg: "Hello From Server" });
});

const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Server Started At Port ${PORT}`);
});
