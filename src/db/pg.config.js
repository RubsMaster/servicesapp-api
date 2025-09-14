import { Client } from 'pg';

const client = new Client({
  user: 'postgres',
  host: 'localhost',
  database: 'ServiciosApp',
  password: 'admin',
  port: 5432,
});

export const connectDB = async () => {
  try {
    await client.connect();
    console.log('Conexión a la base de datos exitosa.');
  } catch (error) {
    console.error('Error al conectar o consultar la base de datos:', error);
  } finally {
    await client.end();
  }
};

connectDB();