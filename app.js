require("./db/connect");
const express = require("express");
const tasks = require("./routes/tasks");
const connectDB = require("./db/connect");
const app = express();
require("dotenv").config();
const notFound = require("./middleware/not-found")
const errorHandlerMiddleware = require("./middleware/error-handler")


// middleware
app.use(express.static("./public"))
app.use(express.json());



//routes

app.use("/api/v1/tasks", tasks);
app.use(notFound);
app.use(errorHandlerMiddleware)



const port = process.env.PORT || 4000;
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, console.log(`server is running on port ${port}...🏃!!!`));
  } catch (error) {
    console.log(error);
  }
};

start();
