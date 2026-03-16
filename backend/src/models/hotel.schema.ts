import mongoose from 'mongoose'

const hotelSchema = new mongoose.Schema({
  ownerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  city: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  amenities: [{
    type: String,
    default: []
  }],
  rating: {
    type: Number,
    default: 0,
  },
  totalReviews: {
    type: Number,
    default: 0,
  }
}, { timestamps: true })

export default mongoose.model('Hotel', hotelSchema)