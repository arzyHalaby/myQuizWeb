const connectionhelper = require('../connctToData')

function addImages(req) {
    return new Promise(async (resolve, reject) => {
        let y = await connectionhelper.connectionfun()

        y.query('INSERT INTO memorygame (gameName,imageUrl1,imageUrl2,imageUrl3,imageUrl4,imageUrl5,imageUrl6) VALUES(?,?,?,?,?,?,?)', [req.gameName, req.imageUrl1, req.imageUrl2, req.imageUrl3, req.imageUrl4, req.imageUrl5, req.imageUrl6], (err, rows) => {
            if (!err) {
                console.log('The data from users table are: \n', rows);
                resolve('your signup is sccsfully')
                y.release()
            } else {
                console.log(err);
                y.release()
                reject(err);
            }
        })
    })
}
exports.addImages = addImages



function getMemoryGame(gameName) {
    return new Promise(async (resolve, reject) => {
        let y = await connectionhelper.connectionfun()

        y.query(`SELECT  * FROM   memorygame`, (err, rows) => {
            if (!err) {
                console.log('The data from memorygame table are: \n', rows)
                resolve(rows)
                console.log(rows, "-----------------------------------")
                y.release()

            } else {
                console.log(err);
                y.release()
                reject(err);
            }
            // if (Object.keys(rows).length > 0) {
            //     resolve(true)
            // }
            // else {
            //     resolve(false)
            // }
        })
    })
}
exports.getMemoryGame = getMemoryGame