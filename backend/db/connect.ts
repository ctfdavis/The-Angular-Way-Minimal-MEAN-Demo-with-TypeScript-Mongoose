import mongoose from "mongoose";

function connect() {

  return mongoose
    .connect("mongodb://localhost:27017/theangularway", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("Database connected");
    })
    .catch((error) => {
      console.log("db error", error);
      process.exit(1);
    });
}

export default connect;