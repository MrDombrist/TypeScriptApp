import { Router } from "express";
import addReview, { getReviewsByOfferId } from '../controllers/reviewController.js';
import { authenticateToken } from "../middleware/authMiddleware.js";

const reviewRouter = new Router();

reviewRouter.post('/:offerId', authenticateToken, addReview);

reviewRouter.get('/:offerId', getReviewsByOfferId);

export default reviewRouter;