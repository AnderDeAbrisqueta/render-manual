"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.houseApi = void 0;
var _express = require("express");
var _dals = require("../../dals");
var _house = require("./house.mappers");
const houseApi = (0, _express.Router)();
exports.houseApi = houseApi;
houseApi.get("/", async (req, res, next) => {
  try {
    const page = Number(req.query.page);
    const pageSize = Number(req.query.pageSize);
    const country = String(req.query.country);
    let houseList = await _dals.houseRepository.getHouseList(page, pageSize, country);
    res.send((0, _house.mapHouseListFromModelToApi)(houseList));
  } catch (error) {
    next(error);
  }
});
houseApi.get("/:id", async (req, res, next) => {
  try {
    const {
      id
    } = req.params;
    const house = await _dals.houseRepository.getHouse(id);
    if (house) {
      res.send((0, _house.mapHouseFromModelToApi)(house));
    } else {
      res.sendStatus(404);
    }
  } catch (error) {
    next(error);
  }
});
houseApi.post("/", async (req, res, next) => {
  try {
    const house = (0, _house.mapHouseFromApiToModel)(req.body);
    const newhouse = await _dals.houseRepository.saveHouse(house);
    res.status(201).send((0, _house.mapHouseFromModelToApi)(newhouse));
  } catch (error) {
    next(error);
  }
});
houseApi.put("/:id", async (req, res, next) => {
  try {
    const {
      id
    } = req.params;
    if (await _dals.houseRepository.getHouse(id)) {
      const house = (0, _house.mapHouseFromApiToModel)({
        ...req.body,
        id
      });
      await _dals.houseRepository.saveHouse(house);
      res.sendStatus(204);
    } else {
      res.sendStatus(404);
    }
  } catch (error) {
    next(error);
  }
});
houseApi.delete("/:id", async (req, res, next) => {
  try {
    const {
      id
    } = req.params;
    const isDeleted = await _dals.houseRepository.deleteHouse(id);
    res.sendStatus(isDeleted ? 204 : 404);
  } catch (error) {
    next(error);
  }
});
houseApi.get("/:id/reviews", async (req, res, next) => {
  try {
    const {
      id
    } = req.params;
    const reviewList = await _dals.houseRepository.getReviews(id);
    if (reviewList) {
      res.send((0, _house.mapReviewsFromModelToApi)(reviewList));
    } else {
      res.sendStatus(404);
    }
  } catch (error) {
    next(error);
  }
});
houseApi.post("/:id/reviews", async (req, res, next) => {
  try {
    const {
      id
    } = req.params;
    const newReviewData = req.body;
    const savedReview = await _dals.houseRepository.saveReview(id, newReviewData);
    res.send(savedReview);
  } catch (error) {
    next(error);
  }
});