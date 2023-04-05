// app.js
const express = require("express");
const app = express();
const content = require("./route");

// Data to be fetched by the API

app.use("/v1/content",content);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
  });