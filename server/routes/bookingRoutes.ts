import { Router } from "express";
import { protect } from "../middlewares/auth.js";
import {
  cancelBooking,
  createBooking,
  getBookings,
} from "../controllers/bookingController.js";

const bookingRouter = Router();

bookingRouter.post("/", protect, createBooking);
bookingRouter.get("/my", protect, getBookings);
bookingRouter.get("/:id/cancel", protect, cancelBooking);

export default bookingRouter;
