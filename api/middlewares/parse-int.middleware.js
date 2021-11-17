const { query } = require("express");

module.exports = function(req, res, next) {
    const queryStrings = req.query;
    for (const key in queryStrings) {
      const length = queryStrings[key].length;
      //const isValid = length > 20 ? false : !isNaN(parseInt(queryStrings[key]));
      const isValid = !isNaN(parseInt(queryStrings[key]));
      console.log(isValid);
      if (isValid) {
        console.log(typeof(queryStrings[key]));
        queryStrings[key] = parseInt(queryStrings[key]);
        console.log(typeof(queryStrings[key]));
        console.log(queryStrings[key]);
      }
    }
  
    req.query = queryStrings;
    next();
  };
  