<template>
  <div id="auction">
    <common-header></common-header>
    拍卖页面
    <common-footer></common-footer>
  </div>
</template>

<script>
  import commonHeader from '../components/header'
  import commonFooter from '../components/footer'
  export default {
    name: 'auction',
    components: {
      commonHeader,
      commonFooter
    }
  }
</script>

<style>
  #auction {
    margin-top: 40px;
    margin-bottom: 2rem;
    overflow: hidden;
  }
</style>
