import mongoose from "mongoose";
import { MONGODB_URI } from "./config";

(async () => {
  try {
    const db = await mongoose.connect(MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Database is connected to:", db.connection.name);
  } catch (error) {
    console.error(error.message);
  }
})();
