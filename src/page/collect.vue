<template>
    <div id="collect">
      <common-header></common-header>
        <p style="background-color: yellow;height: 500px;width: 100%;line-height: 500px">在线征集</p>
      <common-footer></common-footer>
    </div>
</template>

<script>
  import commonHeader from '../components/header'
  import commonFooter from '../components/footer'
  export default {
    name: 'collect',
    components: {
      commonHeader,
      commonFooter
    }
  }
</script>

<style>
#collect {
  margin-top: 40px;
  margin-bottom: 2rem;
}
</style>
