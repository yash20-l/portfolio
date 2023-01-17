import mongoose from "mongoose";
const {BlogSchema} = require('./Schemas')
import ConnectToDB from "./Connection";


const BlogModel = mongoose.model('posts', BlogSchema);
mongoose.models = {}

module.exports = {BlogModel};