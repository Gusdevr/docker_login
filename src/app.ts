// import express from 'express'
// import cors from 'cors'
// import authRoutes from './routes/auth.routes'

// const app = express()


// app.use(cors())


// app.use(express.json())


// app.use('/api/auth', authRoutes)

// export default app


import express from 'express';
import cors from 'cors';
import authRoutes from './routes/auth.routes';
import { sequelize } from './config/database';
import dotenv from 'dotenv';

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());
app.use('/api/auth', authRoutes);

// Conexão BD
(async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    console.log('Banco conectado e sincronizado.');
  } catch (err) {
    console.error('Erro ao conectar BD:', err);
  }
})();

export default app;

