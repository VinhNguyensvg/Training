const express = require("express");
const app = express();
const calculate = require("./router/calculate");
const port = 3000;

app.use(express.json());
app.use("/calculate", calculate);

app.listen(port, () => {
  console.log(`server is running on http://localhost:${port}`);
});
