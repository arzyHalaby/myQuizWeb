var sql = require("mssql");

// config for your database
var config = {
    user: 'sa',
    password: 'arzy@123456',
    server: 'localhost',
    database: 'MYDB',
    //driver: 'msnodesqlv8',
    trustServerCertificate: true,
    port: 1401
};

// connect to your database
sql.connect(config, function (err) {

    if (err) console.log(err);

    // create Request object
    var request = new sql.Request();

    // query to the database and get the records
    request.query('select * from StudentForm ', function (err, recordset) {

        if (err) console.log(err)

        // send records as a response
        res.send(recordset);

    });
});