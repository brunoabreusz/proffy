import express from 'express';
import cors from 'cors';
import routes from './routes';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);



app.listen(3333);

// GET : Buscar ou listar uma informação ;
// POST : Criar uma informção ;
// PUT : Atualizar uma informação existente ;
// DELETE : Deletar uma informção existente ;

// Route Params: Identificar qual recuro eu quero utilizar ou deletar ;
// Query Params : Paginação, filtro ; 