module.exports = ({ env }) => ({
  connection: {
    client: 'mysql',
    connection: {
      host: env('DATABASE_HOST', 'sql.freedb.tech'),
      port: env.int('DATABASE_PORT', 3306),
      database: env('DATABASE_NAME', 'freedb_rp-site'),
      user: env('DATABASE_USERNAME', 'freedb_Waskelum'),
      password: env('DATABASE_PASSWORD', 'Yq#%c5RZ24w97m&'),
      ssl: env.bool('DATABASE_SSL', false),
    },
  },
});
