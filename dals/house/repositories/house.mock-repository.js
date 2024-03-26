"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mockRepository = void 0;
var _mongodb = require("mongodb");
var _mockData = require("../../mock-data");
const insertHouse = house => {
  const _id = new _mongodb.ObjectId();
  const newHouse = {
    ...house,
    _id
  };
  _mockData.db.houses = [..._mockData.db.houses, newHouse];
  return newHouse;
};
const updateHouse = house => {
  _mockData.db.houses = _mockData.db.houses.map(b => b._id.toHexString() === house._id.toHexString() ? {
    ...b,
    ...house
  } : b);
  return house;
};
const paginateHouseList = (houseList, page, pageSize, country) => {
  let filteredHouseList = [...houseList];
  if (country) {
    filteredHouseList = filteredHouseList.filter(house => house.address.some(address => address.country === country));
  }
  let paginatedHouseList = [...filteredHouseList];
  if (page && pageSize) {
    const startIndex = (page - 1) * pageSize;
    const endIndex = Math.min(startIndex + pageSize, filteredHouseList.length);
    paginatedHouseList = filteredHouseList.slice(startIndex, endIndex);
  }
  return paginatedHouseList;
};
const mockRepository = {
  getHouseList: async (page, pageSize, country) => paginateHouseList(_mockData.db.houses, page, pageSize, country),
  getHouse: async id => _mockData.db.houses.find(b => b._id.toHexString() === id),
  saveHouse: async house => {
    return Boolean(house._id) ? updateHouse(house) : insertHouse(house);
  },
  deleteHouse: async id => {
    _mockData.db.houses = _mockData.db.houses.filter(b => b._id.toHexString() !== id);
    return true;
  },
  getReviews: async id => {
    const house = _mockData.db.houses.find(house => house._id.toHexString() === id);
    if (house) {
      return house.reviews;
    } else {
      return [];
    }
  },
  saveReview: async (id, review) => {
    const houseIndex = _mockData.db.houses.findIndex(h => h._id.toHexString() === id);
    if (houseIndex !== -1) {
      const newReview = {
        _id: new _mongodb.ObjectId().toHexString(),
        date: new Date(),
        comments: review.comments
      };
      _mockData.db.houses[houseIndex].reviews.push(newReview);
      return _mockData.db.houses[houseIndex].reviews;
    } else {
      return [];
    }
  }
};
exports.mockRepository = mockRepository;