require("./db/connect");
const express = require("express");
const tasks = require("./routes/tasks");
const connectDB = require("./db/connect");
const app = express();
require("dotenv").config();

app.use(express.json());

//routes

app.use("/api/v1/tasks", tasks);

//app.get("/api/v1/tasks")
//app.post("/api/v1/tasks")
//app.get("/api/v1/tasks/:id")
//app.patch("/api/v1/tasks/:id")
//app.delete("/api/v1/tasks/:id")

const port = 5000;
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, console.log(`server is running on port ${port}...🏃!!!`));
  } catch (error) {
    console.log(error);
  }
};

start();
