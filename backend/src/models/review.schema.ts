import mongoose from 'mongoose' 

const reviewSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  hotelId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Hotel',
    required: true,
  },
  bookingId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Booking',
    required: true,
  },
  rating: {
    type: Number,
    min: 1,
    max: 5,
  },
  comment: {
    type: String,
  }
}, { timestamps: true })

export default mongoose.model('Review', reviewSchema)