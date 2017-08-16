<template>
  <div id="app">
    <!--header部分-->
    <common-header ></common-header>

    <!--<div class="page-wrap">
      <div class="page-title">Tabbar</div>
      <div>
        <mt-cell class="page-part" title="当前选中" :value="selected" />
      </div>

      <mt-tab-container class="page-tabbar-container" v-model="selected">
        <mt-tab-container-item id="捡漏">
          <p>捡漏页面</p>
        </mt-tab-container-item>
        <mt-tab-container-item id="征集">
          <p>征集页面</p>
        </mt-tab-container-item>
        <mt-tab-container-item id="我">
          <div class="page-part">
            <mt-cell v-for="n in 12" :title="'我 ' + n" />
          </div>
        </mt-tab-container-item>
      </mt-tab-container>
    </div>-->

    <!-- <mt-tabbar v-model="selected" fixed>
      <mt-tab-item id="捡漏">
        <img slot="icon" src="./assets/1.png">
        捡漏
      </mt-tab-item>
      <mt-tab-item id="征集">
        <img slot="icon" src="./assets/1.png">
        征集
      </mt-tab-item>
      <mt-tab-item id="我" @click="myClick">
        <img slot="icon" src="./assets/1.png">
        我
      </mt-tab-item>
    </mt-tabbar>
    <router-view></router-view>-->

    <!--底部菜单栏部分-->
    <mt-tabbar v-model="selected" fixed class="mint-tabbar">
      <mt-tab-item id="捡漏" class="mint-tab-item-label">
        <router-link to="/"  class="a_textunder">捡漏</router-link>
      </mt-tab-item>
      <mt-tab-item id="征集">
        <router-link to="/collect" class="a_textunder">征集</router-link>
      </mt-tab-item>
      <mt-tab-item id="我">
        <router-link to="/my" class="a_textunder">我</router-link>
      </mt-tab-item>
    </mt-tabbar>
    <router-view></router-view>

  </div>
</template>
<script type="text/javascript">
  import commonHeader from './components/header'

  export default {
    name: 'app',
    data(){
        return {
          selected: "捡漏",
        }
    },
    components: {
      commonHeader,
    },
    methods:{
      /*myClick() {
          this.$router.push('/my')
      }*/
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
.mint-tabbar {
  border-top:1px solid #f9f7f7;
}
  .mint-tab-item-label {
    line-height: 30px;
  }
  .a_textunder {
    text-decoration: none;
    color:#2a3e50;
  }
</style>
