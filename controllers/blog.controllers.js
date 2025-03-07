import blogSchema from "../models/blog.model.js"

let getBlogs = async(req, res) => {
    let blogs = await blogSchema.find()
    res.send(blogs)
}

let getBlogById = async (req, res) => {
    let data = await blogSchema.findById(req.params.id).exec()
    res.status(200).json({message: "Success", data})    
}

let postData = async (req, res) => {
    let body = req.body
    let blog = await blogSchema.create(body)
    res.status(201).json({message: "Succes", data: blog})    
}

let updateData = async(req, res) => {
    let id = req.params.id
    await blogSchema.findByIdAndUpdate(id, req.body)
    res.status(201).json({ message: "Success", data: await blogSchema.findById(id).exec()})
}


export {
    getBlogs, 
    getBlogById,
    postData,
    updateData,
    
}