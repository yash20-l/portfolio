import mongoose from 'mongoose';
const { Schema } = mongoose;

const BlogSchema = new Schema({
    title: String, // String is shorthand for {type: String}
    content : String,
    likes : Number,
    comments : [{
        name : String,
        comment : String
    }],
    image : String,
    keywords : [String],
    category : String,
    slug : String,
    readtime : Number
  });
  

module.exports = {BlogSchema};