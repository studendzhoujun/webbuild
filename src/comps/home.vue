/*
 * @Author: zhouJun 
 * @Date: 2017-10-20 15:18:45 
 * @Last Modified by: zhouJun
 * @Last Modified time: 2017-11-06 17:38:13
 */
<template>
  <div class="home" :style="objstyle">
      <div class="userinfo">
          <h1>zhouJun</h1>
          <p>FE / nodejs / FRONDEND</p>
      </div>
  </div>
</template>
<script>
export default {
    data () {
        return {
            objstyle:{
                height:'300px'
            },
        }
    },
    created(){
        console.log(window.screen.height)
        this.objstyle={
            height:window.screen.height+'px'
        }
    }

}
</script>
<style lang="less" scoped>
 .home{
     width:100%;
     background:url(../img/home.jpg) no-repeat;
     background-color:rgba(0,0,0,0.5);
     background-position-x: center;
     background-position-y: bottom;
     background-attachment: fixed;
     background-size:cover;
     position: relative;
     .userinfo{
       height: 200px;
       width:100%;
       margin-top:-100px;
       position: absolute;
       top:50%;
       text-align:center;
       color:#fff;
     }
 }
</style>
