<template>
  <div id="index">
    <div id="banner" class="banner">
      <carousel :slides="slides" :inv="invTime"></carousel>
      <div class="search">
        <el-input v-model="input" placeholder="请输入内容" class="search-input"></el-input>
        <el-button type="primary" icon="el-icon-search">搜索</el-button>
        <ul>
           <li v-for="(item,index) in searchBox" class="search-box">
             <router-link :to="item.path">{{item.title}}</router-link>
           </li>
        </ul>
      </div>
    </div>
    <el-breadcrumb separator="/" class="article-header">
      <el-breadcrumb-item :to="{ path: '/index' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>推荐文章</el-breadcrumb-item>
    </el-breadcrumb>
    <div class="id">
      <ul class="article">
        <li v-for="(item,index) in article" class="article-item" @mouseover="showDetail(index)" @mouseout="closeDetail" >
          <div>
            <img :src="article[index].src" alt="">
          </div>
          <p class="article-title">{{article[index].title}}</p>
          <p class="article-introduce">{{article[index].introduce}}</p>
          <transition name="fade">
            <div v-if="fadeShow[index]" class="fadeShow">
              <p>{{a}}</p>
            </div>
          </transition>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
  import carousel from '../banner/carousel.vue'
  import axios from 'axios'
  export default{
    data () {
      return {
        input: '',
        a:"点击查看文章",
        nowIndex: 0,
        isShow: true,
        invTime: 2000,
        fadeShow:[],
        searchBox:[
          {
              title:'关于我',
              path:('/about')
          },
          {title:'github',path:'/github'},
          {title:'我的生活',path:'/life'},
          {title:'留言板',path:'/say'}
        ],
        article:[],
        slides: [
          {
            src: require('./s-banner1.jpg'),
            title: '1111',
          },
          {
            src: require('./s-banner2.jpg'),
            title: '2222'
          },
          {
            src: require('./s-banner3.jpg'),
            title: '3333'
          },
          {
            src: require('./s-banner4.jpg'),
            title: '4444'
          },
          {
            src: require('./s-banner5.jpg'),
            title: '5555'
          }
        ]
      }
    },
    components: {
      carousel,
    },
    mounted(){
      this.getIndexList();
      for(let i=0;i<this.article.length;i++){
        this.$set(this.fadeShow, i, false)
      }
    },
    methods: {
      getIndexList(){
        axios.get('http://localhost:8080/static/data.json').then((res) => {
          var result = res.data
          this.article=result.article;
          console.log(this.article)
        }).catch(function (code) {
          alert('失败了');
          console.log(code);
        });
      },
      showDetail(index){
        this.$set(this.fadeShow, index, true)
      },
      closeDetail(){
        for(let i=0;i<this.article.length;i++){
          this.$set(this.fadeShow, i, false)
        }
      }
    }
  }
</script>
<style scoped>
  #index{
    width:100%;
    margin-top: 10px;
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
  .id{
    height: 800px;
  }
  .banner:after{
    display:block;
    content:"";
    visibility:hidden;
    clear: both;
    height:0
  }
  .search{
    width:300px;
    height: 300px;
    float: right;
  }
  .search-input{
    width:200px;
  }
  .search>ul{
    margin-top: 50px;
  }
  .search-box{
    float: left;
    width: 110px;
    height: 50px;
    line-height: 50px;
    margin: 0 10px 15px;
    text-align: center;
    border-radius: 5px;
  }
  .search-box:first-child{
    background-color: #666;
  }
  .search-box:nth-child(2){
    background-color: #0cc;
  }
  .search-box:nth-child(3){
    background-color:#c96 ;
  }
  .search-box:nth-child(4){
    background-color:#63c;
  }
  .search-box>a{
    display: block;
    width: 100%;
    height:100%;
    color: #fff;
    border-radius: 5px;
  }
  .search-box>a:hover{
    animation: searchBox 2s;
    background: rgba(245,245,245,0.2)
  }
  @keyframes searchBox {
    from{transform: rotate(0)}
    to{transform: rotate(360deg)}
  }
  .article{
    width: 100%;
    max-width: 1200px;
    height: 400px;
    display: flex;
    justify-content: space-between;
  }
  .article-item{
    background: #ececec;
    border:#FFF 10px solid;
    position: relative;
    box-shadow: 2px 2px 2px #bdbdbd;
  }
  .article-item>div{
    cursor: pointer;
    margin-bottom: 20px;
  }
  .article-title{
    font-size: 14px;
    text-shadow: #fff 1px 1px 0px;
    line-height: 26px;
    text-align: center;
    font-weight: bold;
    color: #226039;
  }
  .article-introduce{
    margin: 10px;
    line-height: 22px;
    color: #666;
    overflow:hidden;
    text-overflow:ellipsis;
    display:-webkit-box;
    -webkit-box-orient:vertical;
    -webkit-line-clamp:2;
    width:250px;
    text-indent: 25px;
  }
  .fadeShow{
    position: absolute;
    top: 0;
    left: 0;
    z-index: 100;
    width: 270px;
    height: 258px;
    overflow: auto;
    backfdrop-filter:blur(10px);
    opacity: 1;
    background: rgba(7,17,27,0.8) url(./article.png) no-repeat;
    background-position:110px 56px;
  }
  .fadeShow>p{
    color:#fff;
    text-decoration: underline;
    position: absolute;
    top: 165px;
    left:79px;
  }
  .fade-enter-active,.fade-leave-activce{
    transition: all 0.7s;
  }
  .fade-enter,.fade-leave-active{
    opacity: 0;
    background: rgba(7,17,27,0);
  }
</style>
