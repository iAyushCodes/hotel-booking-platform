import mongoose from "mongoose";
import envConfig from './env.js'

export const connectMongo = async () => {
  const MONGO_URI = envConfig.MONGO_URI
  try {
    const connection = await mongoose.connect(MONGO_URI)
    console.log(`Connected successfully to MongoDB.... ${connection.connection.host}`)
  } catch (error) {
    console.error(`Error occurred while connecting to MongoDB: `, error)
    process.exit(1)
  }
}