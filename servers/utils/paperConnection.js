import mongoose from "mongoose";

const paperConnect = async () => {
  try {
    const { connection } = await mongoose.connect(process.env.MONGO_URI);
    if (connection.readyState == 1) {
      console.log("Database is Run");
    }
  } catch (error) {
    console.log(`error for database${error.message}`);
  }
};

export default paperConnect;
