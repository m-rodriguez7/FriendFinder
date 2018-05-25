// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on table-data, waitinglist, etc.
// ===============================================================================

var friendData = require("../data/friends");


// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
  app.get("/api/friends", function(req, res) {
    res.json(friendData);
  });

  

  app.post("/api/friends", function(req, res) {
    // This is where I attempted to send back the "best match"
    friendData.push(req.body);
    postScore = req.body.scores.reduce(function(acc, val) { return parseInt(acc) + parseInt(val); });
    differences = [];
    // loop through array, log differences between the currently posted score and the scores that are already in the friends array.
    for (i in friendArray) {// "friend" is a number the index basically
        differences.push(Math.abs(friendArray[i].scores.reduce(function(acc, val) { return parseInt(acc) + parseInt(val); }) - postScore)) // this gives me an array of values for the current listed values.
    };
    console.log(differences);
    // now, I need to return the name of the friend that has the lowest difference.
    for (i in differences) {
        if (differences[i] === 0) {
            index = i;
            return;
        } else if (differences[i] === 1) {
            index = i;
            return;
        } /// etc, didn't get to figure out a clean algorithm. 
    }
    
    res.send(friendData[index]); // sends all data for best match

  });
};
