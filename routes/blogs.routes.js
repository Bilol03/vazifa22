import { Router } from "express";
import { getBlogs, } from '../controllers/blog.controllers.js'


let route = Router()

route
    .get('/blogs', getBlogs)

export default route