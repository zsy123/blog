<template>
  <div>
    <div id="header" class="header-wrap clearfix ">
      <div class="logo"><img v-bind:src="header.logo" alt=""></div>
      <div class="header-text-box">{{header.text}}</div>
      <div class="author">{{header.author}}</div>
      <div class="background"><img v-bind:src="header.bg" alt=""></div>
    </div>
  </div>

</template>
<script>
  export default{
     data(){
        return{
        }
     },
    props:{
         header:{
             type:Object
         }
    },
  }
</script>
<style scoped>
  .clearfix{
    display: inline-block;
  }
  .clearfix:after{
    display: block;
    content: "";
    height: 0;
    line-height: 0;
    clear: both;
    visibility: hidden;
  }
  #header{
    position: relative;
    width:100%;
    height:200px;
  }
  .logo{
    position: absolute;
    top:0;
    right:0;
    height:200px;
    z-index: 2;
  }
  .logo>img{
    height:100%;
  }
  .header-text-box{
    position: absolute;
    top:70px;
    right: 200px;
    z-index: 2;
    font-size:20px;
    font-family:PingFang SC;
    color: #409EFF;
  }
  .author{
    position: absolute;
    top:100px;
    right: 200px;
    z-index: 2;
    color: #409EFF;
  }
.background{
  position: absolute;
  top:0;
  left:0;
  width: 1000px;
  height: 200px;
  z-index: 1;
  filter: blur(3px);
}
  .background>img{
    width:100%;
    height:100%;
  }
</style>
