
const express = require('express');
const router = express.Router();
const teacherFunction = require('../DB/teacherFunction');
const app = express();




// //=========== Add new teacher=====================

router.post("/addTeacher", async (req, res) => {
    try {
        const x = await teacherFunction.addUser(req.body);
        res.send(x);
    } catch (e) {
        console.log(e);

    }
});

router.get("/:email", async (req, res) => {
    try {
        const x = await teacherFunction.getTeacherByEmail(req.params.email);
        res.send(x);
    } catch (e) {
        console.log(e);


    }
});

//delet account by email: 
router.delete("/:email", async (req, res) => {
    let result = await teacherFunction.deletTeacherByEmail(req.params.email)
    if (parseInt(result) === 0) {
        res.send("the account you try to delete its not find")
    }
    else {
        res.send("this account deleted")
    }
})

//update student account:
router.put("/:email", async (req, res) => {
    console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
    console.log(req.body);
    let result = await teacherFunction.updateTeacherByEmail(req.params.email, req.body)
    console.log(req.body);
    if (parseInt(result) === 0) {
        res.send("the account you try to update its not find ")
    }
    else {
        res.send("this account updated")
    }
})





// //===========================================================================================
// // see me all the Teachers card at mu brawser:
// router.get("/",isDevelopment ? cors() : nothing(),(req,res)=>{
//     let allTeachersArr= teacherFunction.getAllTeachersFromDB();
//     res.json(allTeachersArr);

// });
// ////========================
// router.get("/games/:gameId",isDevelopment ? cors() : nothing(),(req,res)=>{
//    let theWorldGameArr=teacherFunction.getGameDataById(req.param.gameId);
//    res.json(theWorldGameArr);
// });

// //find Teacher by here own email: 
// router.get("/:Email",(req,res)=>{
//     res.send( teacherFunction.findTeacherByEmail(req.params.Email));
// });

// //delet account by email: 
// router.delete("/:Email",(req,res)=>{
//    let result=  teacherFunction.deleteTacherAccountByEmail(req.params.Email)
//    if(result===true){
//        res.send("this account deleted")
//    }
//    else{
//        res.send("the account you try to delete its not find ")
//    }
// })

// //update Teacher account:
// router.put("/:Email",(req,res)=>{
//     let result=  teacherFunction.updateTeacher(req.params.Email,req.body)
//     console.log(req.body);
//     if(result===true){
//         res.send("this account updated")
//     }
//     else{
//         res.send("the account you try to update its not find ")
//     }
// })

module.exports = router;