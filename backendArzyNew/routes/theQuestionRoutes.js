
const express = require('express');
const router = express.Router();
const theQuestionFunction = require('../DB/theQuestionFunction');
const app = express();




// //=========== Add new teacher=====================

router.post("/addTheQuestion", async (req, res) => {
    try {
        const x = await theQuestionFunction.addQuestionGame(req.body);
        res.send(x);
    } catch (e) {
        console.log(e);

    }
});
//=======================================
router.post("/addQuestion", async (req, res) => {
    try {
        const x = await theQuestionFunction.addQuestion(req.body);
        res.send(x);
    } catch (e) {
        console.log(e);

    }
});
//==================================

router.get("/:gameName", async (req, res) => {
    try {
        const x = await theQuestionFunction.getQuestionGame(req.params.gameName);
        res.send(x);
    } catch (e) {
        console.log(e);
    }
});

// //delet account by email: 
// router.delete("/:email", async (req, res) => {
//     let result = await theQuestionFunction.deletTeacherByEmail(req.params.email)
//     if (parseInt(result) === 0) {
//         res.send("the account you try to delete its not find")
//     }
//     else {
//         res.send("this account deleted")
//     }
// })

// //update student account:
// router.put("/:email", async (req, res) => {
//     console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
//     console.log(req.body);
//     let result = await theQuestionFunction.updateTeacherByEmail(req.params.email, req.body)
//     console.log(req.body);
//     if (parseInt(result) === 0) {
//         res.send("the account you try to update its not find ")
//     }
//     else {
//         res.send("this account updated")
//     }
// })







module.exports = router;