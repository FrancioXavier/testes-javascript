import express from 'express';
import { routes } from './routes.js';
const app = express();

//Settigns
    app.use(express.json());
    app.use(express.urlencoded({extended: true}));

//Routes
    app.use(routes);

//Listen
    app.listen(8080, () => {
        console.log('Servidor online na porta 8080');
    });