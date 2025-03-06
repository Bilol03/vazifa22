import blogSchema from "../models/blog.model.js"

let getBlogs = async(req, res) => {
    let blogs = await blogSchema.find()
    res.send(blogs)
}

let postData = async (req, res) => {
    let body = req.body
    let blog = await blogSchema.create(body)
    res.status(201).json({message: "Succes", data: blog})    
}

export {
    getBlogs, 
    postData
}