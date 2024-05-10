const express = require("express");
const userRoutes = require("./routes/userRoutes");
const authRouter = require("./routes/authRoutes");

const app = express();

app.use(express.static('public'));
app.use(express.json());

app.use("/user", userRoutes);
app.use("/auth", authRouter);

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});

