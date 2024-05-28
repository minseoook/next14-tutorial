import { connect } from "mongoose";

const mongoose = require("mongoose");

const connection = {};
export const connectToDb = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log("디비연결성공");
  } catch (e) {
    console.log(e);
  }
};
