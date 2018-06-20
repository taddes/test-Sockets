const express = require('express')

// App setup
const app = express();

const PORT = process.env.PORT || 3000;

const server = app.listen(PORT, () => {
  console.log(`server listening on http://localhost:${PORT}`)
});