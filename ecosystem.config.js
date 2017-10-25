module.exports = {
    apps: [
        // WEB STATIC
        {
          name: 'web',
          script: '../im-eventapi/service/web.js',
          merge_logs: true,
          log_date_format: 'YYYY-MM-DD HH:mm',
          watch: ["../im-broker/service/web.js"],
          ignore_watch: ["node_modules"],
          watch_options: {
            "followSymlinks": true
          },
          env: {AVAHI_COMPAT_NOWARN:'1'},
          env_production: {AVAHI_COMPAT_NOWARN:'1'}
        },
        // MQTT BROKER
        {
          name: 'broker',
          script: '../im-broker/service/broker.js',
          merge_logs: true,
          log_date_format: 'YYYY-MM-DD HH:mm',
          watch: ["../im-broker/service/broker.js"],
          watch_options: {
            "followSymlinks": true
          },
          env: {AVAHI_COMPAT_NOWARN:'1'},
          env_production: {AVAHI_COMPAT_NOWARN:'1'}
        },
  
        // DDD agregate: im brain
        {
          name: 'brain',
          script: '../im-broker/service/brain.js',
          merge_logs: true,
          log_date_format: 'YYYY-MM-DD HH:mm',
          watch: ["../im-broker/service/brains.js", "../im-broker/domain/*"],
          watch_options: {
            "followSymlinks": true
          },
          env: {},
          env_production: {}
        }
        ,
        // firebase gateway
        {
          name: 'cloud',
          script: '../im-broker/service/cloud.js',
          merge_logs: true,
          log_date_format: 'YYYY-MM-DD HH:mm',
          watch: ["../im-broker/service/cloud.js"],
          watch_options: {
            "followSymlinks": true
          },
          env: {},
          env_production: {}
        }
        ,
        // python hardware-gateway
        {
          name: 'pwmhat',
          //interpreter:'/usr/bin/python'
          interpreter_args: '-u',
          script: '../im-broker/python/pwmhat.py',
          restart_delay: 1000,
          merge_logs: true,
          log_date_format: 'YYYY-MM-DD HH:mm',
          watch: ["python/pwmhat.py"],
          watch_options: {
            "followSymlinks": true
          },
          max_restarts: 20,
          restart_delay: 2000,
          env: {
            IM_PWMHAT_MOCK: 'True'
          },
          // Environment variables injected when starting with --env production
          env_production: {
            IM_PWMHAT_MOCK: 'False'
          }
        }
        ,
        // python hardware-gateway
        {
          name: 'neopixel',
          //interpreter:'/usr/bin/python'
          interpreter_args: '-u',
          script: '../im-broker/python/neopixel.py',
          restart_delay: 1000,
          merge_logs: true,
          log_date_format: 'YYYY-MM-DD HH:mm',
          watch: ["../im-broker/python/neopixel.py"],
          watch_options: {
            "followSymlinks": true
          },
          max_restarts: 20,
          restart_delay: 2000,
          env: {
            IM_NEOPIXEL_MOCK: 'True'
          },
          // Environment variables injected when starting with --env production
          env_production: {
            IM_NEOPIXEL_MOCK: 'False'
          }
        },   
        {
          name: 'camera',
          interpreter:'python3',
          interpreter_args: '-u',
          script: './src/main.py',
          cwd: '/home/pi/dev/im-camera/',
          args:'-d',
          restart_delay: 1000,
          merge_logs: true,
          log_date_format: 'YYYY-MM-DD HH:mm',
          max_restarts: 20,
          restart_delay: 2000,
          env: {
            IM_CAMERA_MOCK: 'True'
          },
          env_production: {
            IM_CAMERA_MOCK: 'False'
          },
        },
        //CAMERA Streaming out
        {
          name: 'camera-stream',
          exec_interpreter:'none',
          script: '/usr/local/bin/mjpg_streamer',
          args: ['-i','/usr/local/lib/mjpg-streamer/input_file.so -f /tmp/ -n camera-out.jpg -d 0,1','-o','/usr/local/lib/mjpg-streamer/output_http.so -w /usr/local/www -p 8090'],
          restart_delay: 1000,
          merge_logs: true,
          log_date_format: 'YYYY-MM-DD HH:mm',
          max_restarts: 20,
          restart_delay: 2000,
          env: {
            IM_CAMERA_MOCK: 'True'
          },
          env_production: {
            IM_CAMERA_MOCK: 'False'
          },
        }
    ]
  };