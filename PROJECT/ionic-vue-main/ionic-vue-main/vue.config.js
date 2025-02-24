const { defineConfig } = require('@vue/cli-service')
defineConfig.exports = {
    devServer: {
        proxy: 'http://192.168.1.2:80/'
    }
}