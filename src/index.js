/*
 * @Author: zhouJun 
 * @Date: 2017-10-20 11:12:51 
 * @Last Modified by: zhouJun
 * @Last Modified time: 2017-12-07 15:48:41
 */
import Vue from 'vue'
import App from './index.vue'

import add from './add.js'
add('=113=')
console.log('====hello====')

 new Vue({
    el: '#root',
    components: {
        App,
    },
    render: h => h(App)
})
