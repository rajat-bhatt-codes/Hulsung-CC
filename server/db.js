const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    });
    console.log("MongoDb is Successfully Connected");
  } catch (err) {
    console.error(err.message);
    //exit from the process with failure
    process.exit(1);
  }
};

module.exports = connectDB;
