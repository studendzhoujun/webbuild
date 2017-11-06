/*
 * @Author: zhouJun 
 * @Date: 2017-10-20 15:18:45 
 * @Last Modified by: zhouJun
 * @Last Modified time: 2017-11-06 17:50:20
 */
<template>
  <div class="box">
      <home></home>
      <div class="hh">敬请期待</div>
  </div>
</template>
<script>
import home from './comps/home.vue'
export default {
    data () {
        return {
        }
    },
    components:{
        home
    }
}
</script>
<style lang="less" scoped>
 .box{
     width:100%;
     .hh{
         height:300px;
         text-align: center;
         line-height:300px;
     }
 }
</style>
