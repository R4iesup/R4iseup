const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.static('public'));

app.get('/api/accounts', (req, res) => {
  res.json([
    { id: 1, name: "ROV Diamond", price: 500, description: "ไอดีแรงค์ Diamond มีสกินหายาก" },
    { id: 2, name: "Free Fire", price: 300, description: "ไอดี LV30 มีตัวละครครบ" }
  ]);
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
