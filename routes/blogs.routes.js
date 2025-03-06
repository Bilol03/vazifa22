import { Router } from "express";
import { getBlogs, postData} from '../controllers/blog.controllers.js'


let route = Router()

route
    .get('/blogs', getBlogs)
    .post('/blogs', postData)

export default route