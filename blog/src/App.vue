<template>
  <div id="app">
    <div class="app">
      <v-header :header="header"></v-header>
      <div class="tab">
        <div class="tab-item"><router-link to="/index">{{index}}</router-link></div>
        <div class="tab-item"><router-link to="/about">{{about}}</router-link></div>
        <div class="tab-item"><router-link to="/github">{{github}}</router-link></div>
        <div class="tab-item"><router-link to="/life">{{life}}</router-link></div>
        <div class="tab-item"><router-link to="/say">{{say}}</router-link></div>
      </div>
      <router-view></router-view>
      <v-footer></v-footer>
    </div>
  </div>

</template>

<script type="text/ecmascript-6">
  import header from'./components/header/header.vue'
  import footer from'./components/footer/footer.vue'
  import axios from 'axios'
  const ERR_OK = 0;
export default {
  name: 'app',
  data(){
      return{
        index:'我的首页',
        about:'关于我',
        github:'我的github',
        life:'我的生活',
        say:'留言',
        header:{},
      }
  },
  components:{
      'v-header':header,
      'v-footer':footer
  },
  mounted () {
    this.getHeaderList()
  },
  methods: {
    getHeaderList () {
      axios.get('http://localhost:8080/static/data.json').then((res) => {
        var result = res.data
        this.header=result.header;
      }).catch(function (code) {
        alert('失败了');
        console.log(code);
      });
    }
  }
}
</script>

<style scoped>
  #app{
    width:100%;
    background-color: #efefef;
  }
  #app>.app{
    max-width:1000px;
    margin: auto;
  }
  #app>.app>.tab{
    width: 100%;
    height: 50px;
    line-height: 50px;
    display: flex;
    border-bottom: 1px solid rgba(7,17,27,0.1);
    background: #6cc;
    box-shadow: 2px 2px 2px #bdbdbd;
    border-radius: 5px;
  }
  #app>.app>.tab>.tab-item{
    flex: 1;
    text-align: center;
    margin-right: 4px;
    border-radius: 5px;
    transform: translate(0,0);
    transition:all .3s ease-in 0s;
  }
  #app>.app>.tab>.tab-item>a{
    display: block;
    font-size: 16px;
    color:#fff;
    text-decoration: none;
  }
  #app>.app>.tab>.tab-item>.router-link-active{
    background: #f15694;
    border-radius: 5px;
  }
  #app>.app>.tab>.tab-item:hover{
    background: #f15694;
  }
  #app>.app>.tab>.tab-item:last-child{
    margin: 0;
  }
</style>

