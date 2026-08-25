module.exports = {
  apps: [
    {
      name: "goldsky-frontend",
      cwd: __dirname + "/frontend",
      script: "node_modules/.bin/next",
      args: "start -p 3002",
      env: {
        NODE_ENV: "production",
        PORT: 3002,
        NEXT_PUBLIC_API_URL: "https://api.goldsky.jaan.lk/api/v1",
      },
      instances: 1,
      exec_mode: "fork",
      autorestart: true,
      max_restarts: 10,
    },
  ],
};
