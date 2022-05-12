const express = require('express');
const router = express.Router();
const memoryFunction = require('../DB/memoryFunction');
const app = express();


router.post("/addImages", async (req, res) => {
    console.log("!!!!!!!!!!!!!!!!!!!!!", req.body);
    try {
        const x = await memoryFunction.addImages(req.body);
        res.send(x);
    } catch (e) {
        console.log(e);

    }
});

router.get("/:memory", async (req, res) => {
    console.log("88888888888888888", req.params.gameName);
    try {
        const x = await memoryFunction.getMemoryGame();

        res.send(x);
    } catch (e) {
        console.log(e);


    }
});

module.exports = router;