import { connect } from "mongoose";

const mongoose = require("mongoose");

const connection = {};
export const connectToDb = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
  } catch (e) {
    console.log(e);
  }
};
