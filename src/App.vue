<template>
  <div id="app">
    <!--header部分-->
    <mt-header title="天力商城" fixed>
      <mt-button slot="left" icon="back" ></mt-button>
      <mt-button slot="right" icon="more"></mt-button>
    </mt-header>

    <router-view></router-view>
    <!--底部菜单栏部分-->
    <mt-tabbar v-model="selected" fixed class="mint-tabbar">
      <mt-tab-item id="捡漏" class="mint-tab-item-label">
        捡漏
      </mt-tab-item>
      <mt-tab-item id="征集">
        征集
      </mt-tab-item>
      <mt-tab-item id="我">
        我
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script type="text/javascript">
  export default {
    name: 'app',
    data(){
        return {
          selected: "捡漏"
        }
    },
    method: {

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
</style>
