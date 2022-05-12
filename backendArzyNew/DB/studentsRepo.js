//=================================not in used========================


// const sql = require('mssql');

// const getStudentByEmail=(req,email)=> 
// {
//   req.app.locals.db.query(`SELECT * FROM StudentForm WHERE email= ${email}`,
//    function(err, recordset) {
//     if (err) {
//       console.error(err)
//       return null
//     }
//     else{
//       console.log(recordset);
//       return recordset
//     }
//   })
// }
// module.exports.getStudentByEmail=getStudentByEmail
//===================================================================================
//===================================================================================
const User = require('../connctToData').studentusers;

const AddStudent = async (user) => {
    console.log("--", JSON.stringify(user));
    const newUser = new User(user);
    const x = await newUser.save();
    console.log(`addNewStudent ${JSON.stringify(x)}`);
    return (`welcom ${x.email} in Quiz wep`);
};
exports.AddStudent = AddStudent;
//------------------------------------------
const GetAllStudents = async () => {
    const x = await User.find();
    console.log(`GetAllStudents ${JSON.stringify(x)}`);
    return JSON.parse(JSON.stringify(x));
};
exports.GetAllStudents = GetAllStudents;
//------------------------------------------
const deleteStudeantAccountByEmail = async (theEmail) => {
    const x = await User.deleteOne({ email: theEmail });
    console.log(`deleteUserByID ${JSON.stringify(x)}`);
   return x.deletedCount;
};
exports.deleteStudeantAccountByEmail = deleteStudeantAccountByEmail;
// ============================================================

 const updateUserStudent = async (email, userInfo) => {
     const x = await User.updateOne({ email: email }, userInfo);
     console.log(`updateUserByID ${JSON.stringify(x)}`);
    //  return JSON.stringify(x);
    return x.modifiedCount;
 };
 exports.updateUserStudent = updateUserStudent;
//------------------------------------------


 const getStudentByEmail = async (theEmail) => {
     const x = await User.findOne({email: theEmail});
     console.log(`getStudentByEmail ${JSON.stringify(x)}`);
     return x;
  };
   exports.getStudentByEmail = getStudentByEmail;
  
//------------------------------------------
// Restaurant.updateOne({ id: theID}, restaurantInfo);
//      console.log(`updateRestaurantByID ${JSON.stringify(x)}`);
//      return JSON.stringify(x);
//    };
//    exports.updateRestaurant = updateRestaurant;
