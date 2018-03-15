<template>
    <div class="say clearfix" >
      <el-breadcrumb separator="/" class="article-header">
        <el-breadcrumb-item :to="{ path: '/say' }">留言</el-breadcrumb-item>
        <el-breadcrumb-item>留言板</el-breadcrumb-item>
      </el-breadcrumb>
      <div class="form">
        <el-input type="textarea" :rows="5" placeholder="请输入内容" v-model="text">
        </el-input>
        <el-button type="success" v-on:click="tabs">点击评论</el-button>
      </div>
      <div class="text">
        <div class="text-top">
          <div class="text-text">
            评论
          </div>
          <div class="text-top-line">

          </div>
        </div>
        <div class="text-child" v-for="(item,index) in arr">
          <div class="username">{{name}}</div>
          <div class="text-day">{{item.day}}</div>
          <div class="text-time">{{item.time}}</div>
          <div class="text-say">{{item.text}}</div>
          <div class="text-dele" v-on:click="dele(index)"><i class="el-icon-delete"></i></div>
        </div>
      </div>
    </div>
</template>
<script>
  export default{
    data(){
      return {
        text: '',
        day:'',
        time:'',
        arr:[
          {text:'哇哇哇哇哇哇哇哇哇哇哇哇哇哇',day:'2018-03-14 TUE',time:'12:00:00',}
        ],
        name:'不开心就吃冰棍'
      }
    },
    methods: {
      zeroPadding(num, digit) {
        var zero = '';
        for(var i = 0; i < digit; i++) {
          zero += '0';
        }
        return (zero + num).slice(-digit);
      },
      tabs:function(){
          if(this.text===""){
              alert("请输入")
          }else{
            var week = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
            var cd =new Date();
            this.day=this.zeroPadding(cd.getFullYear(), 4) + '-' +this.zeroPadding(cd.getMonth()+1, 2) + '-' + this.zeroPadding(cd.getDate(), 2) + ' ' + week[cd.getDay()];
            this.time=this.zeroPadding(cd.getHours(), 2) + ':' + this.zeroPadding(cd.getMinutes(), 2) + ':' + this.zeroPadding(cd.getSeconds(), 2);
            this.arr.push({text:this.text,day:this.day,time:this.time});
            this.text="";
          }
        },
      dele:function(index){
        this.arr.splice(index,1)
      }
    }
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
  .article-header{
    background: #fff;
    box-shadow: 5px 3px 10px #756f71;
    border-radius: 3px;
    width:110px;
    height:40px;
    line-height: 40px;
    padding: 0 10px;
    margin: 10px 0;
    border-radius:5px;
  }
 .say{
   width:100%;
   margin-top: 30px;
   position: relative;
 }
  .form button{
   margin:10px;
    float: right;
  }
  .text{
    margin-top: 80px;
    padding:0px 30px;
    background-color:#fff;
  }
  .text-top{
    width:100%;
    height:30px;
    padding-top: 10px;
  }
  .text-text{
    color: #409EFF;
    width: 66px;
    height: 29px;
    line-height: 29px;
    border-radius: 10px 10px 0 0;
    text-align: center;
    border: 1px solid #4398ed;
    border-bottom: none;
  }
  .text-top-line{
    height:1px;
    width:880px;
    background-color: #409EFF;
    margin-left: 68px;
  }
  .username{
    position: absolute;
    top: 20px;
    left: 100px;
    color: #409EFF;
    font-size:15px;
    cursor: pointer;
  }
  .username:hover{
    text-decoration: underline;
  }
  .text-child{
    position: relative;
    padding: 13px 0 11px;
    border-bottom: 1px dashed #e5e5e5;
    width:100%;
    height:100px;
  }
  .text-day{
    position: absolute;
    top:20px;
    right:10px;
    font-family: Arial;
    color: silver;
    font-size: 10px;
  }
  .text-time{
    position: absolute;
    top:35px;
    right:10px;
    font-family: Arial;
    color: silver;
  }
  .text-say{
    width:80%;
    height:70%;
     margin-top: 20px;
    padding:20px 100px;
  }
  .text-dele{
    position: absolute;
    bottom:0;
    right:10px;
    font-size: 20px;
    color:#909399;
    cursor: pointer;
  }
  .text-dele:hover{
    color: #409EFF;
  }
</style>
