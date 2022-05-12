
const connectionhelper = require('../connctToData')



// //add new user its completed  and don----


function addQuestionGame(req) {
    return new Promise(async (resolve, reject) => {
        let y = await connectionhelper.connectionfun()

        y.query('INSERT INTO thequestiongame (gameName,category) VALUES(?,?)', [req.gameName, req.category], (err, rows) => {
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
exports.addQuestionGame = addQuestionGame
//==================================================
function addQuestion(req) {
    return new Promise(async (resolve, reject) => {
        let y = await connectionhelper.connectionfun()

        y.query('INSERT INTO questions (iscorrect,thequestion,quizid) VALUES(?,?,?)', [req.iscorrect, req.thequestion, req.quizid], (err, rows) => {
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
exports.addQuestion = addQuestion


function getQuestionGame(gameName) {
    return new Promise(async (resolve, reject) => {
        let y = await connectionhelper.connectionfun()

        y.query(`SELECT  * FROM   thequestiongame WHERE gameName='${gameName}'`, (err, rows) => {
            if (!err) {
                console.log('The data from thequestiongame table are: \n', rows)
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
exports.getQuestionGame = getQuestionGame
//==================================================================
//==delet userTeacher by email===============
// function deletTeacherByEmail(email) {
//     return new Promise(async (resolve, reject) => {
//         let y = await connectionhelper.connectionfun()

//         y.query(`SELECT  * FROM   teachersusers WHERE email='${email}'`, (err, rows) => {
//             if (!err) {
//                 console.log('The data from users table are: \n', rows);
//                 resolve('your account deleted')
//                 y.release()
//             } else {
//                 console.log(err);
//                 y.release()
//                 reject(err);
//             }
//         })
//     })
// }
// exports.deletTeacherByEmail = deletTeacherByEmail
// //========================================================

// function updateTeacherByEmail(email) {
//     return new Promise(async (resolve, reject) => {
//         let y = await connectionhelper.connectionfun()

//         y.query(`SELECT  * FROM   teachersusers WHERE email='${email}'`, (err, rows) => {
//             if (!err) {
//                 console.log('The data from users table are: \n', rows);
//                 resolve('your acount deleted')
//                 y.release()
//             } else {
//                 console.log(err);
//                 y.release()
//                 reject(err);
//             }
//         })
//     })
// }
// exports.updateTeacherByEmail = updateTeacherByEmail