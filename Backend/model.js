import mongoose from "mongoose";

const schema = mongoose.Schema({
  title: String,
  content: String,
  img_url: String,
});

const BlogModel = mongoose.model("blog",schema);
export default BlogModel;