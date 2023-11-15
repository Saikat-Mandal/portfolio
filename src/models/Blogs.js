import mongoose from "mongoose"

const blogsSchema = new mongoose.Schema({
    type:{
        type:String,
        required:true
    },
    title:{
        type:String,
        required:true
    },
    content:{
        type:String,
        required:true
    },
    owner:{
        type:mongoose.Types.ObjectId,
        ref:"user"
    },
    published: new Date()

})

const BlogsModel = mongoose.model("blogs" , blogsSchema )

export default BlogsModel