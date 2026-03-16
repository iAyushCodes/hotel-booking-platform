import { Router } from "express";
import userRoutes from './user.route.js'
import hotelRoutes from './hotel.route.js'
import bookingRoutes from './booking.route.js'
import reviewRoutes from './review.route.js'

const router = Router()

router.use('/auth', userRoutes)
router.use('/hotels', hotelRoutes)
router.use('/bookings', bookingRoutes)
router.use('/reviews', reviewRoutes)

export default router

