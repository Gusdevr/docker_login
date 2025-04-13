// import dotenv from 'dotenv'
// dotenv.config()
// import app from './app'
// import { connectDB, sequelize } from './config/database'
// import { User } from './models/user.model'

// const PORT = process.env.PORT || 3000;


// (async () => {
//   try {
    
//     await connectDB()
//     // Sincroniza o modelo com o banco (cria a tabela se não existir)
//     await sequelize.sync({ alter: true })
//     // Inicia o servidor
//     app.listen(PORT, () => {
//       console.log(`Servidor rodando na porta ${PORT}`)
//     });
//   } catch (error) {
//     console.error('Erro ao iniciar servidor:', error)
//   }
// })()


// import dotenv from 'dotenv';
// dotenv.config();
// import app from './app';
// import { sequelize } from './config/database'; // Removido o connectDB aqui

// const PORT = process.env.PORT || 3000;

// (async () => {
//   try {
//     // Conecta direto no sequelize
//     await sequelize.authenticate();
//     console.log('Conexão estabelecida com sucesso.');

//     // Sincroniza o modelo com o banco
//     await sequelize.sync();

//     // Sobe o servidor
//     app.listen(PORT, () => {
//       console.log(`Servidor rodando na porta ${PORT}`);
//     });
//   } catch (error) {
//     console.error('Erro ao iniciar servidor:', error);
//   }
// })();



// import dotenv from 'dotenv';
// dotenv.config();
// import express from 'express';
// import { sequelize } from './config/database';

// const PORT = process.env.PORT || 3000;

// (async () => {
//   try {
//     // Conecta e sincroniza BD se quiser
//     await sequelize.authenticate();
//     await sequelize.sync();

//     const app = express();
//     app.use(express.json());

//     // Rotas
//     app.get('/', (req, res) => {
//       res.send('Hello Railway!');
//     });

//     app.listen(PORT, () => {
//       console.log(`Servidor rodando na porta ${PORT}`);
//     });
//   } catch (error) {
//     console.error('Erro ao iniciar servidor:', error);
//   }
// })();



import dotenv from 'dotenv';
dotenv.config();
import app from './app';

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});



