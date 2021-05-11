module.exports = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'pass123',
  database: 'postgres',
  entities: ['dist/**/*.entity.js'],
  migration: ['dist/migrations/*.js'],
  cli: {
    migrationsDir: 'src/migrations',
  },
};
