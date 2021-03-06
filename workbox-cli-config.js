module.exports = {
  modifyUrlPrefix: {
    '/': ''
  },
  maximumFileSizeToCacheInBytes:5000000,
  'globDirectory': 'www/',
  'globPatterns': [
    '**/*.{eot,scss,svg,ttf,woff,woff2,ico,png,js,css,html,json}'
  ],
  'swDest': './www/service-worker.js',
  'globIgnores': [
    '../workbox-cli-config.js'
  ]
};
