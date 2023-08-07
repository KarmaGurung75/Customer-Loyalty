const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const dotenv = require("dotenv").config();
const cors = require("cors");

const userRouter = require("./routes/users");

const addSalesRouter = require("./routes/addSales");
const purchaseRouter = require("./routes/purchase");
const uploadRouter = require("./routes/upload");
const auth = require("./middleware/auth");

const app = express();
app.use(morgan("tiny"));
app.use(express.json());
app.options("*", cors());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(__dirname + "/web"));

mongoose.set("strictQuery", true);
mongoose.connect(process.env.MONGO_URL).then(
  (db) => {
    console.log("Successfully connected to MongodB server");
  },
  (err) => console.log(err)
);
// ConnectDB();

app.use("/users", userRouter);
app.use("/upload", uploadRouter);

app.use("/addsales", addSalesRouter);
app.use("/purchases", purchaseRouter);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.statusCode = 500;
  res.json({ status: err.message });
});

// // Handle 404 - Keep this as a last route
// app.use(function(req, res, next) {
//     res.status(404);
//     res.send('404: File Not Found');
// });

app.listen(process.env.PORT, () => {
  console.log(`App is running at localhost:${process.env.PORT}`);
});
