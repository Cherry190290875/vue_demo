<template>
    <div id="login">
      <common-header></common-header>
        登录页面
      <common-footer></common-footer>
    </div>
</template>

<script>
  import commonHeader from '../components/header'
  import commonFooter from '../components/footer'
  export default {
    name: 'login',
    components: {
      commonHeader,
      commonFooter
    }
  }
</script>

<style>

</style>
