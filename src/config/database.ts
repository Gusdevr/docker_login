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
//   define: {
//     timestamps: true,
//   },
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

const dbHost = process.env.DB_HOST as string;     // mysql.railway.internal
const dbUser = process.env.DB_USER as string;     // root
const dbPass = process.env.DB_PASS as string;     // WshldAwkovCGLbkmrLbjGXNZbcIiClJW
const dbName = process.env.DB_NAME as string;     // railway
const dbPort = Number(process.env.DB_PORT) || 3306;

export const sequelize = new Sequelize(dbName, dbUser, dbPass, {
  host: dbHost,
  port: dbPort,
  dialect: 'mysql',
});

