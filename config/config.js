require('dotenv').config
module.exports = {
    development: {
      database: 'indigo_database_development',
    },
    test: {
      database: 'indigo_database_test',
    },
    production: {
      use_env_variable: 'DATABASE_URL',
    }
  }