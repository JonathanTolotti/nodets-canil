import express from 'express';
import dotenv from 'dotenv';
import mustache from 'mustache-express';
import path from 'path';
import routes from './routes/index';

dotenv.config();

const server = express();

// Define o template engine do projeto
server.set('view engine', 'mustache');

// Define caminho das views
server.set('views', path.join(__dirname, 'views'));

// Define a engine
server.engine('mustache', mustache());


// Define pasta publica
server.use(express.static(path.join(__dirname, '../public')));

// Rotas
server.use(routes);

// Página 404
server.use((req, res) => {
    res.render('pages/notfound');
});

// Inicia o servidor
server.listen(process.env.PORT);