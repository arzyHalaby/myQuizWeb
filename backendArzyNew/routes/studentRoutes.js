// const usersFunchion = require('../DB/students-funchion');
const express = require('express');
const router = express.Router();
const studentsRepo = require('../DB/studentsRepo')
const cors= require('cors');

const isDevelopment = true; 

if(isDevelopment){
    router.use(cors({origin: "http://localhost:3000", optionsSuccessStatus: 200}));
}
function nothing(){

}


// Add new student to the array:
// router.post("/addStudent",isDevelopment ? cors() : nothing(),(req,res)=>{
//     let result= usersFunchion.addUser(req.body);
//     res.json(result);
// });
// Add new reservation
router.post("/addStudent" ,isDevelopment ? cors() : nothing(), async (req,res)=>{

    console.log("The req.body from path new reservation: ");
    console.log(req.body);
 
    let isAllOk =await studentsRepo.AddStudent(req.body);
   res.send(isAllOk);
    // if(isAllOk === true)
    // {
    //    res.send("added new user");
    // }
    // else{
    //    res.send(" UNSECCESS!!")
    // }
 });
 

// see me all the users card at mu brawser:
router.get("/",isDevelopment ? cors() : nothing(),async (req,res)=>{
    const x =await studentsRepo.GetAllStudents();
    res.send(x);

});
// Get all reservations
// router.get("/", isDevelopment ? cors() : nothing(), function (req, res) {

//     let myJson = myRepository.getAllReservationsFromDB();
//     res.json(myJson);
//  });
 


// שייך לsql
//find student by here own email: its working in backend only right now.
//

// router.get("/:email", async (req,res)=>{
//          const x= await studentsRepo.getStudentByEmail(req.params.email);
//          res.send(x);
//      });

//delet account by email: 
router.delete("/:email",async(req,res)=>{
   let result= await studentsRepo.deleteStudeantAccountByEmail(req.params.email)
   if(parseInt(result)===0){
       res.send("the account you try to delete its not find")
   }
   else{
       res.send("this account deleted")
   }
})

//update student account:
router.put("/:email",async (req,res)=>{
    console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
    console.log(req.body);
    let result= await studentsRepo.updateUserStudent(req.params.email,req.body)
    console.log(req.body);
    if(parseInt(result) ===0){
        res.send("the account you try to update its not find ")
    }
    else{
        res.send("this account updated")
    }
})

module.exports = router;


//================================
// const myRepository = require('./myRepository')
// const express = require('express');
// const router = express.Router();
// const app = express();


// //--------------------------------------
// // Get all people
// router.get("/", async (req, res) => {
//     const x = await myRepository.GetAllUsers()
//     res.send(x);
// }

// );

// //--------------------------------------
// // Get a person by id
// router.get("/:id", async (req, res) => {
//     const x = await myRepository.getUserById(req.params.id)

//     res.send(x);
// });
// //--------------------------------------
// // Add new person

// router.post("/", async (req, res) => {
//     let isAllOK = await myRepository.AddUser(req.body);
//     if (isAllOK === true) {
//         res.send("added new user");
//     }
//     else {
//         res.send("unsuccessful adding new user");
//     }
// });


// //--------------------------------------
// // update person
// router.put("/:id", async (req, res) => {

//     let isAllOK = await myRepository.updateUser(req.params.id, req.body);
//     if (isAllOK === true) {
//         res.send("Successfully updated")
//     }
//     else {
//         res.send("unsuccessful update")
//     }


// });
// //--------------------------------------
// // delete person by id
// router.delete("/:id", async (req, res) => {
//     let isAllOK = await myRepository.deleteUser(req.params.id);
//     if (isAllOK === true) {
//         res.send("deleted user");
//     }
//     else {
//         res.send("user with the provided id doesn't exist");
//     }


// });


module.exports = router;