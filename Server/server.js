const express = require("express");
const app = express();
const port = 3000;
const userRouter = require("./routes/user");

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/auth", userRouter);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
