const express = require('express');
const path = require('path');
const app = express();

const PORT = 4567; // Explicitly set port

app.use(express.static(__dirname));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Listening at port ${PORT}`);
});
