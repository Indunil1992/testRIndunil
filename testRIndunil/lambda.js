let SL_AWS = require('slappforge-sdk-aws');
let connectionManager = require('./ConnectionManager');
const rds = new SL_AWS.RDS(connectionManager);

exports.handler = function (event, context, callback) {

    // You must always end/destroy the DB connection after it's used
    rds.beginTransaction({
        instanceIdentifier: 'DBByIndunil'
    }, function (error, connection) {
         console.log("passss");
          console.log(connection);
        if (error) {
            console.log("Error");
            console.log(error);
            throw error;
        }
    });

    callback(null, { "message": "Successfully executed" });
}