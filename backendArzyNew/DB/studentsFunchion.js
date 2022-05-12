//==========================not in used==========================

let allUsersArr = require('./usersDB').Obj.allUsersArr;

// -----------------------------------
function copyAllProperties(objFrom, objTo) {

    objTo.email = objFrom.email;
    objTo.username = objFrom.username;
    objTo.password = objFrom.password;
}

// Update info of user by its email

const updateUsers = (theEmail, theUserInfoObj) => {
    let theObjToUpdate;
    for (let i = 0; i < allUsersArr.length; i++) {
        if (allUsersArr[i].email === theEmail) {
            console.log(theEmail);
            theObjToUpdate = allUsersArr[i];
            copyAllProperties(theUserInfoObj, theObjToUpdate);
            return true;
        }
    }
    return false;
}
exports.updateUsers = updateUsers;

//--------------------------------------
// Get all users
const GetAllStudents = () => {
    return allUsersArr;
};
exports.GetAllStudents = GetAllStudents;
//--------------------------------------
// find an student by he's Email:  
const getStudentByEmail = (userEmail) => {
    let found = `Couldn't find user with Email = ${userEmail}`;
    allUsersArr.forEach((current) => {
        if (current.email === userEmail) {
            found = current;
            return found;
        }
    })
    return found;
}
exports.getStudentByEmail = getStudentByEmail;



// //--------------------------------------
//add new user its completed  and don----
const addUser = (newUser) => {
    allUsersArr.push(newUser);
    return true;
}
exports.addUser = addUser;

//-------------------------------------
//Deleted student from the array:
const deleteStudeantAccountByEmail = (userEmail) => {
    for (let i = 0; i < allUsersArr.length; i++) {
        console.log(userEmail);
        console.log(allUsersArr[i].email);
        if (allUsersArr[i].email === userEmail) {

            allUsersArr.splice(i, 1);
            return true;
        }
    }
    return false;
}
exports.deleteStudeantAccountByEmail = deleteStudeantAccountByEmail