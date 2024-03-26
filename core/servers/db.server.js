"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.connectToDBServer = void 0;
var _mongoose = require("mongoose");
const connectToDBServer = async connectionURI => {
  await (0, _mongoose.connect)(connectionURI);
};
exports.connectToDBServer = connectToDBServer;