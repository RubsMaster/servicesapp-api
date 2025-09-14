import express from 'express'
import postRoutes from './routes/post.routes.js'
import userRoutes from './routes/user.routes.js'
import { connectDB } from './db/pg.config.js'

const app = express()
const port = 3000



app.use(express.json());

app.use(postRoutes)
app.use(userRoutes)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
