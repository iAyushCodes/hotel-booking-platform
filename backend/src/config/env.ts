import dotenv from 'dotenv'
dotenv.config()

interface Config {
  PORT: number;
  MONGO_URI: string;
}

const config = {
  PORT: process.env.PORT ? parseInt(process.env.PORT) : 5000,
  MONGO_URI: process.env.MONGO_URI || 'mongodb://localhost:27017/hotelBooking'
}

export default config