module.exports = function() {
    this.dbConnections = [];

    this.dbConnections["DBByIndunil"] = {
        host: process.env.EndPoint_rdsDBByIndunil,
        port: process.env.Port_rdsDBByIndunil,
        user: process.env.User_rdsDBByIndunil,
        password: process.env.Password_rdsDBByIndunil,
        database: "indunilDB"
    };
};