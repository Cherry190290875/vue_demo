<template>
  <div id="app">
   <!-- <common-header></common-header>-->
    <router-link to="/"></router-link>
    <router-view></router-view>

    <!--<common-footer></common-footer>-->
  </div>
</template>
<script type="text/javascript">

  export default {
    name: 'app'
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
