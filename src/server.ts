import express from 'express';
import dotenv from 'dotenv';
import mustache from 'mustache-express';
import path from 'path';
import mainRoutes from './routes/index';

dotenv.config();  // Carrega as variáveis de ambiente do arquivo .env para o process.env



const server = express();


server.set('view engine', 'mustache');  // Define Mustache como o motor de templates
server.set('views', path.join(__dirname, 'views'));  // Define o diretório de views
server.engine('mustache', mustache());  // Define a engine do Mustache


server.use(express.static(path.join(__dirname, '../public')));


server.use(mainRoutes);
server.use((req, res)=>{
  res.send('Página não encontrada!');
});




server.listen(process.env.PORT);
