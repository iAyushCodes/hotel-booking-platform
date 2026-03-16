import app from './app.js'
import envConfig from './config/env.js'
import { connectMongo } from './config/mongo.js'

const PORT = envConfig.PORT

const startServer = async () => {
  try {
    app.listen(PORT, () => {
      console.log(`Listening on Port: ${PORT}`)
    })
    await connectMongo()
  } catch (error) {
    console.error(`Critical error during server startup: `, error)
  }
}

startServer()