module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'docker',
  database: 'skeleton',
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
