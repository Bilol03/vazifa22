import { mongoose } from "mongoose";

let blogSchema = new mongoose.Schema({
    title: {   
        type: String,
    },
    content: { 
        type: String,
    },
    author: {  
        type: String,
    },
    image: {   
        type: String,
        required: false
    },
    createdAt: {   
        type: Date,
        required: false,
        default: Date.now 
    },
})
let blogs = mongoose.model("blogs", blogSchema)

export default  blogs

