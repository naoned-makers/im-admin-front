module.exports = {
    apps: [
        // WEB STATIC
/*        {
          name: 'web',
          script: '../jarvis-eventapi/dist/app.js',
          merge_logs: true,
          log_date_format: 'YYYY-MM-DD HH:mm',
          watch: ["../jarvis-eventapi/service/web.js"],
          ignore_watch: ["node_modules"],
          watch_options: {
            "followSymlinks": true
          },
          env: {AVAHI_COMPAT_NOWARN:'1'},
          env_production: {AVAHI_COMPAT_NOWARN:'1'}
        }*/
        {
          name: 'twitter',
          script: '../jarvis-twitter/dist/app.js',
          merge_logs: true,
          log_date_format: 'YYYY-MM-DD HH:mm',
          watch: ["../jarvis-twitter/dist/app.js"],
          ignore_watch: ["node_modules"],
          watch_options: {
            "followSymlinks": true
          },
          env: {AVAHI_COMPAT_NOWARN:'1'},
          env_production: {AVAHI_COMPAT_NOWARN:'1'}
        }
    ]
  };