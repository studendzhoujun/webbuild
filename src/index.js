/*
 * @Author: zhouJun 
 * @Date: 2017-10-20 11:12:51 
 * @Last Modified by: zhouJun
 * @Last Modified time: 2017-10-20 15:20:02
 */
import Vue from 'vue'
import App from './index.vue'


console.log('====hello====')

 new Vue({
    el: '#root',
    components: {
        App,
    },
    render: h => h(App)
})