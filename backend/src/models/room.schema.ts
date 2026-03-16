import mongoose from 'mongoose'

const roomSchema = new mongoose.Schema({
  hotelId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Hotel',
    required: true,
  },
  roomNumber: {
    type: String,
    required: true,
  },
  roomType: {
    type: String,
    required: true,
  },
  pricePerNight: {
    type: Number,
    required: true,
  },
  maxOccupancy: {
    type: Number,
    required: true,
  },
}, { timestamps: true })

export default mongoose.model('Room', roomSchema)