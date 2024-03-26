"use strict";

var _middlewares = require("./common/middlewares");
var _servers = require("./core/servers");
var _constants = require("./core/constants");
var _house = require("./pods/house");
const restApiServer = (0, _servers.createRestApiServer)();
restApiServer.use(_middlewares.logRequestMiddleware);
restApiServer.use("/api/houses", _house.houseApi);
restApiServer.use(_middlewares.logErrorRequestMiddleware);
restApiServer.use(async (error, req, res, next) => {
  console.error(error);
  res.sendStatus(500);
});
restApiServer.listen(_constants.envConstants.PORT, async () => {
  if (!_constants.envConstants.isApiMock) {
    await (0, _servers.connectToDBServer)(_constants.envConstants.MONGODB_URI);
    console.log("Connect to DB");
  } else {
    console.log("Running API mock");
  }
  console.log(`Server ready at port ${_constants.envConstants.PORT}`);
});