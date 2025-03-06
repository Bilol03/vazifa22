import express from 'express'
import { config } from "dotenv";
config()

let app = express()

import blogRoute from "../routes/blogs.routes.js"
app.use(blogRoute)

export {app}