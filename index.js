const express = require('express');
const dataRoutes = require('./router/router');

const app = express();
const PORT = 6000;

app.use('/api/data', dataRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
