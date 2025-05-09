import { Offer } from "../models/offer.js";

async function getAllOffers(req, res, next){
    try{
        const offers = await Offer.findAll();
        res.send(offers);
    }catch (e){
        console.log("Не удалось получить список предложений: ", e);
    }
};

export {getAllOffers};
