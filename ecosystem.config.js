module.exports = {
  apps: [{
    name: 'vite-nuxt3',
    exec_mode: 'cluster',
    instances: 'max',
    script: './.output/server/index.mjs',
    env: {
      PORT: 3001,
    },
  }],
}
