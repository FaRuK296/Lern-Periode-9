const express = require('express');
const {getRandomChoice} = require('../game/rps');

const router = express.Router();
router.post('/play', (req, res) => {
    const playerChoice = req.body.choice;

    const enemyChoice = getRandomChoice();
    res.json({ playerChoice, enemyChoice });    
});

module.exports = router;










