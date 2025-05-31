import ApiError from "../error/ApiError.js";
import { Review } from "../models/review.js";
import { User } from "../models/user.js";
import { adaptReviewToClient } from "../adapters/reviewAdapter.js";

const addReview = async (req, res, next) => {
    try{
        const {comment, rating} = req.body;
        const offerId = req.params.offerId;
        const userId = req.user.id;
        
        if(!comment || !rating || !offerId){
            return next(ApiError.badRequest('Не хватает данных для комметария'));
        }

        const review = await Review.create({
            text: comment,
            rating,
            authorId: userId,
            OfferId: offerId
        });
        res.status(201).json(review);
    } catch(error){
        console.error(error);
        next(ApiError.badRequest('Ошибка при добавлении комментария'));
    }
}

const getReviewsByOfferId = async (req, res, next) => {
    try {
        const offerId = req.params.offerId;
        
        const reviews = await Review.findAll({
            where: { OfferId: offerId },
            include: {
                model: User,
                as: 'author',
                attributes: ['id', 'username', 'avatar', 'userType']
            },
            order: [['publishDate', 'DESC']]
        });

        const adaptedReviews = reviews.map(adaptReviewToClient);
        res.status(200).json(adaptedReviews);
    } catch (error) {
        console.error(error);
        next(ApiError.internal('Ошибка при получении комментариев'));
    }
};

export default addReview;
export { getReviewsByOfferId };