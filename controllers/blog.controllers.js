import blogSchema from "../models/blog.model.js"

let getBlogs = async(req, res) => {
    let videos = await blogSchema.find()
    res.send(videos)
}

export {
    getBlogs, 

}