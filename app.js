const express = require('express');
const app = express();
const port = 3000;

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    next();
});

app.get('/api/hello', (req, res) => {
    res.json({
        message: "Hello from Express backend!"
    });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});



