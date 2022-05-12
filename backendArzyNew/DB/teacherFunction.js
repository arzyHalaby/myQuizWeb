
const connectionhelper = require('../connctToData')

// // let allGamsesArr = require('./games-data').myGameDataObj.gamesDataArr;
// // -----------------------------------
// function copyAllProperties(objFrom, objTo) {

//     objTo.email = objFrom.email;
//     objTo.username = objFrom.username;
//     objTo.password = objFrom.password;
// }

// // Update info of user by its email

// const updateUserStudent = (theEmail, theUserInfoObj) => {
//     let theObjToUpdate;
//     for (let i = 0; i < allUsersArr.length; i++) {
//         if (allUsersArr[i].email === theEmail) {
//             console.log(theEmail);
//             theObjToUpdate = allUsersArr[i];
//             copyAllProperties(theUserInfoObj, theObjToUpdate);
//             return true;
//         }
//     }
//     return false;
// }
// exports.updateUserStudent = updateUserStudent;

// //--------------------------------------
// // Get all users
// const getAllStudentFromDB = () => {
//     return allUsersArr;
// };
// exports.getAllStudentFromDB = getAllStudentFromDB;
// //--------------------------------------
// // find an student by he's Email:  
// const findUserByEmail = (userEmail) => {
//     let found = `Couldn't find user with Email = ${userEmail}`;
//     allUsersArr.forEach((current) => {
//         if (current.email === userEmail) {
//             found = current;
//             return found;
//         }
//     })
//     return found;
// }
// exports.findUserByEmail = findUserByEmail;


// /////////////////////////////////////////////////////////////////////////////
// // //--------------------------------------
// //add new user its completed  and don----


function addUser(req) {
    return new Promise(async (resolve, reject) => {
        let y = await connectionhelper.connectionfun()

        y.query('INSERT INTO teachersusers (firstname,lastname,email,userName,password) VALUES(?,?,?,?,?)', [req.firstname, req.lastname, req.email, req.userName, req.password], (err, rows) => {
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
exports.addUser = addUser

// //////////////////////////////////////////////////////////////////////////
// //-------------------------------------
// //Deleted student from the array:
// const deleteStudeantAccountByEmail = (userEmail) => {
//     for (let i = 0; i < allUsersArr.length; i++) {
//         console.log(userEmail);
//         console.log(allUsersArr[i].email);
//         if (allUsersArr[i].email === userEmail) {

//             allUsersArr.splice(i, 1);
//             return true;
//         }
//     }
//     return false;
// }
// exports.deleteStudeantAccountByEmail = deleteStudeantAccountByEmail

// const getGameDataById = (theIdOfTheGame) => {
//     let foundGame = `Couldn't find game with id = ${theIdOfTheGame}`;
//     allGamsesArr.forEach((current) => {
//         if (current.gameId === theIdOfTheGame) {
//             foundGame = current;
//             return foundGame;
//         }
//     })
//     return foundGame;
// }
// exports.getGameDataById = getGameDataById
//////////////////////////////////////////////////////////////////

//  const getTeacherByEmail = async (theEmail) => {
//     const x = await User.findOne({email: theEmail});
//     console.log(`getStudentByEmail ${JSON.stringify(x)}`);
//     return x;
//  };
//   exports.getTeacherByEmail = getTeacherByEmail;
//===================================================================
function getTeacherByEmail(email) {
    return new Promise(async (resolve, reject) => {
        let y = await connectionhelper.connectionfun()

        y.query(`SELECT  * FROM   teachersusers WHERE email='${email}'`, (err, rows) => {
            if (!err) {
                console.log('The data from teachersusers table are: \n', rows)
                resolve('your signup is sccsfully')
                y.release()
            } else {
                console.log(err);
                y.release()
                reject(err);
            }
            if (Object.keys(rows).length > 0) {
                resolve(true)
            }
            else {
                resolve(false)
            }
        })
    })
}
exports.getTeacherByEmail = getTeacherByEmail
//==================================================================
//==delet userTeacher by email===============
function deletTeacherByEmail(email) {
    return new Promise(async (resolve, reject) => {
        let y = await connectionhelper.connectionfun()

        y.query(`SELECT  * FROM   teachersusers WHERE email='${email}'`, (err, rows) => {
            if (!err) {
                console.log('The data from users table are: \n', rows);
                resolve('your account deleted')
                y.release()
            } else {
                console.log(err);
                y.release()
                reject(err);
            }
        })
    })
}
exports.deletTeacherByEmail = deletTeacherByEmail
//========================================================

function updateTeacherByEmail(email) {
    return new Promise(async (resolve, reject) => {
        let y = await connectionhelper.connectionfun()

        y.query(`SELECT  * FROM   teachersusers WHERE email='${email}'`, (err, rows) => {
            if (!err) {
                console.log('The data from users table are: \n', rows);
                resolve('your acount deleted')
                y.release()
            } else {
                console.log(err);
                y.release()
                reject(err);
            }
        })
    })
}
exports.updateTeacherByEmail = updateTeacherByEmail