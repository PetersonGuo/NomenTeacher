const express = require('express');
const path = require('path');

const app = express();
app.use(express.static('../front/build'));
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../front', 'build', 'index.html'));
});

const PORT = process.env.PORT || 3001;
console.log('server started on port:', PORT);
app.listen(PORT);