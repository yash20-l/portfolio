import mongoose from "mongoose"

const connectToDB = handler => async (req, res) => {

  if (mongoose.connections[0].readyState) {
    return handler(req, res)
  }
  await mongoose.connect('mongodb://localhost:27017/blogwebsite');
  console.log('connected to DB');
  return handler(req, res)
}

export default connectToDB;