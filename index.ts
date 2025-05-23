// ======================
//  App initialization 
// ======================

require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const middlewares = require("./middlewares")
let port = process.env.PORT || 4000;
// const AppError = require("./utils/appError");
// const errorHandler = require("./utils/errorHandler");

// =====================
//  Use Middlewares
// =====================

middlewares(app);

// =====================
//  DB Sync 
// =====================


// =====================
//  Initialize & Use Routes
// =====================

const routes = require('./routes/index.routes.ts');
app.use('/api/v1', routes)

// =====================
//  Start Server
// =====================

app.listen(port, () => {
  console.log("Aplikasi kita Tersambung di http://localhost:" + port);
});