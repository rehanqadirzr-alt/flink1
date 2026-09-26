const express = require('express');
const app = express();

const TARGET_URL = 'https://holy-mouse-27c0.funazjaanzr.workers.dev';

app.use((req, res) => {
  res.redirect(301, TARGET_URL);
});

const PORT = process.env.PORT || 10000;
app.listen(PORT, () => console.log(Server running on port ${PORT}));