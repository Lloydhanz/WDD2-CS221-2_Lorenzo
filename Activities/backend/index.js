import express from "express";

const app = express();
const PORT = 3000;
app.use(express.json());

app.get("/getName", (req, res) => {
  var name = "Lloyd";
  res.status(200).json(name);
});

app.post("/logIn", (req, res) => {
  const { username, password } = req.body;

  if (username == "Lloyd" && password == "Pass123") {
    res.status(200).json({
      message: "Log in Succesfully.",
      status: "success",
    });
  } else {
    res.status(403).json({
      message: "Invalid Username or password.",
      status: "failed",
    });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on PORT: ${PORT}`);
});
