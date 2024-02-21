const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const tarefasRouter = require('./src/routes/tarefaRoutes');

const app = express();

app.use(cors());

if(process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}

app.use(express.json());

app.use((req, res, next) => {
    req.requestTime = new Date().toISOString();
    next();
});

app.use('/api/v1/tarefas', tarefasRouter);

module.exports = app;