const express = require('express');
const router = express.Router();

const {getRandomChoice, getResult, isValidChoice } = require('../game/rps');


router.post('/play', (req, res) => {
    const playerChoice = req.body.playerChoice;

    if (!isValidChoice(playerChoice)) {
        return res.status(400).json({ error: 'Invalid choice. Must be rock, paper, or scissors.' });
    }
    const enemyChoice = getRandomChoice();
    const result = getResult(playerChoice, enemyChoice);
    res.json({ playerChoice, enemyChoice, result });    
});

module.exports = router;










