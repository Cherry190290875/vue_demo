<template>
  <div id="my_collect">
    <common-header></common-header>
    征集页面
    <common-footer></common-footer>
  </div>
</template>

<script>
  import commonHeader from '../components/header'
  import commonFooter from '../components/footer'
  export default {
    name: 'entrust',
    components: {
      commonHeader,
      commonFooter
    }
  }
</script>

<style>
  #my_collect {
    margin-top: 40px;
    margin-bottom: 2rem;
    overflow: hidden;
  }
</style>
