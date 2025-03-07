import { Router } from "express";
import { getBlogs, getBlogById, postData, updateData, deleteData } from '../controllers/blog.controllers.js'


let route = Router()

route
    .get('/api/posts', getBlogs)
    .get("/api/posts/:id", getBlogById)
    .post('/api/posts', postData)
    .put("/api/posts/:id", updateData)
    .delete("/api/posts/:id", deleteData)


export default route