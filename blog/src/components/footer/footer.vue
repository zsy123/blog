<template>
  <div class="footer">
    <div class="footer-box">{{footer}}</div>
  </div>

</template>
<script>
  export default{
    data(){
      return{
          footer:"Design by 1234567890-"
      }
    },
  }
</script>
<style scoped>
.footer{
  background-color: #6cc;
  color: #fff;
  width:1000px;
  margin: 0 auto;
  height: 40px;
  line-height: 40px;
  border-radius: 5px;
}
.footer-box{
  text-align: center;
}
</style>
