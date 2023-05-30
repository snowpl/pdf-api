module.exports = {
  apps: [
    {
      name: 'PDF API',
      script: 'dist/main.js',
      args: '',
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'development',
      },
      env_production: {
        NODE_ENV: 'production',
      },
    },
  ],
};
