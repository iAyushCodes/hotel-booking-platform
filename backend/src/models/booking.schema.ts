import mongoose from 'mongoose'

const bookingSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  roomId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Room',
    required: true,
  },
  hotelId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Hotel',
    required: true,
  },
  checkInDate: {
    type: Date,
    required: true,
  },
  checkOutDate: {
    type: Date,
    required: true,
    validate: {
      validator: function (value: Date): boolean {
        return value > this.checkInDate
      },
      message: "Check out should be greater than check In"
    }
  },
  guests: {
    type: Number,
    required: true,
  },
  totalPrice: {
    type: Number,
    required: true,
  },
  status: {
    type: String,
    enum: ['confirmed', 'cancelled'],
    required: true,
  },
  bookingDate: {
    type: Date,
    default: Date.now
  },
  cancelledAt: {
    type: Date,
    default: null,
  }
}, { timestamps: true })

export default mongoose.model('Booking', bookingSchema)