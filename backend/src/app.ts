import express, {type Request, type Response} from 'express'
import { connectMongo } from './config/mongo.js'
import routes from './routes/v1/index.js'

const app = express()

app.use(express.json())

app.get('/health', (req: Request, res: Response) => {
   res.send(`all good`)
})

app.use('/api/v1', routes)

export default app