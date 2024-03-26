"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.dbRepository = void 0;
var _mongodb = require("mongodb");
var _house = require("../house.context");
var _house2 = require("../../../pods/house/house.mappers");
const dbRepository = {
  getHouseList: async (page, pageSize, country) => {
    const skip = Boolean(page) ? (page - 1) * pageSize : 0;
    const limit = Boolean(pageSize) ? pageSize : 0;
    const countryName = country != "undefined" ? country : "";
    const result = countryName != "" ? await _house.houseContext.find({
      "address.country": country
    }).skip(skip).limit(limit).lean() : await _house.houseContext.find().skip(skip).limit(limit).lean();
    return result;
  },
  getHouse: async id => {
    return await _house.houseContext.findOne({
      _id: new _mongodb.ObjectId(id)
    }).lean();
  },
  saveHouse: async house => {
    return await _house.houseContext.findOneAndUpdate({
      _id: house._id
    }, {
      $set: house
    }, {
      upsert: true,
      returnDocument: "after"
    }).lean();
  },
  deleteHouse: async id => {
    const {
      deletedCount
    } = await _house.houseContext.deleteOne({
      _id: new _mongodb.ObjectId(id)
    }).lean();
    return deletedCount === 1;
  },
  getReviews: async id => {
    const {
      reviews
    } = await _house.houseContext.findOne({
      _id: new _mongodb.ObjectId(id)
    }).select({
      _id: 0,
      reviews: 1
    }).lean();
    return reviews;
  },
  saveReview: async (id, review) => {
    try {
      const house = await _house.houseContext.findById(id);
      if (!house) {
        throw new Error(`La casa con ID ${id} no fue encontrada.`);
      }
      const newReview = {
        _id: new _mongodb.ObjectId().toHexString(),
        date: new Date(),
        comments: review.comments
      };
      house.reviews.push(newReview);
      await house.save();
      return (0, _house2.mapReviewsFromModelToApi)(house.reviews);
    } catch (error) {
      throw new Error(`Error al guardar la revisión: ${error.message}`);
    }
  }
};
exports.dbRepository = dbRepository;