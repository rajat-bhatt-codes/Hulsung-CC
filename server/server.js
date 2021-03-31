const express = require("express");
const cors = require("cors");
const connectDB = require("./db");

const app = express();
app.use(cors());

//connect to DB
connectDB();

//intialize middleware
app.use(express.json({ extended: false }));

app.get("/", (req, res) => res.send("API RUNNING..."));

//Define routes
app.use("/product", require("./routes/product"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
