import express from 'express';

export const app: express.Express = express();

// parse all json request body as object
app.use(express.json());

// import routes
app.use(require('./routes/root'));