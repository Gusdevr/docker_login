// import { Sequelize } from 'sequelize';
// import dotenv from 'dotenv';

// dotenv.config();

// const dbHost = process.env.DB_HOST as string;
// const dbUser = process.env.DB_USER as string;
// const dbPass = process.env.DB_PASS as string;
// const dbName = process.env.DB_NAME as string;
// const dbPort = process.env.DB_PORT as string;

// export const sequelize = new Sequelize(dbName, dbUser, dbPass, {
//   host: dbHost,
//   port: Number(dbPort),
//   dialect: 'mysql',
//   define: { timestamps: true },
// });

// export const connectDB = async () => {
//   try {
//     await sequelize.authenticate();
//     console.log('Conexão estabelecida com sucesso.');
//   } catch (error) {
//     console.error('Não foi possível conectar ao banco de dados:', error);
//   }
// };


import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';
dotenv.config();

const dbHost = process.env.DB_HOST as string;       // Exemplo: hopper.proxy.rlwy.net
const dbPort = process.env.DB_PORT as string;         // Exemplo: 28133
const dbUser = process.env.DB_USER as string;         // Exemplo: root
const dbPass = process.env.DB_PASS as string;         // Exemplo: sua senha
const dbName = process.env.DB_NAME as string;         // Exemplo: railway

export const sequelize = new Sequelize(dbName, dbUser, dbPass, {
  host: dbHost,
  port: Number(dbPort),
  dialect: 'mysql',
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
    connectTimeout: 10000, // 10 segundos, por exemplo
  },
  define: {
    timestamps: true,
  },
});



